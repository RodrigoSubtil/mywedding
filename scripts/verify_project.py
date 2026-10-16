"""Verifica referências e integridade da base documental, sem rede ou dependências.

Não verifica a aplicação, serviços externos, obrigações legais ou procura comercial.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
IGNORED = {'.git', 'node_modules', '.next', 'out', 'dist', 'tmp', '.work', '.venv', '__pycache__', 'private'}


class HtmlReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links: list[str] = []
        self.ids: set[str] = set()

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in {'href', 'src'} and value:
                self.links.append(value)
            if key == 'id' and value:
                self.ids.add(value)


def markdown_anchors(content: str) -> set[str]:
    anchors: set[str] = set()
    counts: dict[str, int] = {}
    for title in re.findall(r'^#{1,6}\s+(.+?)\s*#*$', content, re.M):
        slug = re.sub(r'[^\w\s-]', '', title.lower()).replace(' ', '-')
        count = counts.get(slug, 0)
        counts[slug] = count + 1
        anchors.add(f'{slug}-{count}' if count else slug)
    return anchors


def luminance(hex_color: str) -> float:
    channels = [int(hex_color[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    linear = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in channels]
    return sum(c * weight for c, weight in zip(linear, (0.2126, 0.7152, 0.0722)))


def verify(planned_report: Path | None = None) -> dict:
    # Podar os diretórios antes de percorrer: node_modules não é documentação.
    files = []
    for parent, directories, names in os.walk(ROOT):
        directories[:] = [name for name in directories if name not in IGNORED]
        files.extend(Path(parent) / name for name in names)
    files.sort()
    errors: list[str] = []
    checked_links = 0
    checked_json = 0
    contents: dict[Path, str] = {}
    anchors: dict[Path, set[str]] = {}
    references: list[tuple[Path, str]] = []
    for path in files:
        if path.suffix in {'.md', '.html', '.css'}:
            content = path.read_text('utf-8')
            contents[path] = content
            if path.suffix == '.md':
                anchors[path] = markdown_anchors(content)
                references.extend((path, link) for link in re.findall(r'\[[^\]]+\]\(([^)]+)\)', content))
            elif path.suffix == '.html':
                parser = HtmlReferences()
                parser.feed(content)
                anchors[path] = parser.ids
                references.extend((path, link) for link in parser.links)
            else:
                references.extend((path, link) for link in re.findall(r'url\([\s\'"]*([^\s\)\'"]+)', content))
        if path.suffix == '.json':
            try:
                json.loads(path.read_text('utf-8'))
                checked_json += 1
            except (ValueError, UnicodeError) as error:
                errors.append(f'{path.relative_to(ROOT)}: invalid JSON: {error}')

    for source, raw_target in references:
        target = urlsplit(raw_target.strip('<>'))
        if target.scheme or target.netloc:
            continue
        checked_links += 1
        destination = (source.parent / unquote(target.path)).resolve() if target.path else source
        if not destination.is_relative_to(ROOT):
            errors.append(f'{source.relative_to(ROOT)}: link outside workspace: {raw_target}')
        elif not destination.exists() and destination != planned_report:
            errors.append(f'{source.relative_to(ROOT)}: missing target: {raw_target}')
        elif target.fragment and destination in anchors and unquote(target.fragment) not in anchors[destination]:
            errors.append(f'{source.relative_to(ROOT)}: missing anchor: {raw_target}')

    token_content = (ROOT / 'design/tokens.css').read_text('utf-8')
    defined_tokens = set(re.findall(r'(--mw-[a-z0-9-]+)\s*:', token_content))
    used_tokens = set()
    for path, content in contents.items():
        if path.suffix == '.css':
            used_tokens.update(re.findall(r'var\((--mw-[a-z0-9-]+)', content))
    for token in sorted(used_tokens - defined_tokens):
        errors.append(f'Undefined visual token: {token}')

    manifest = json.loads((ROOT / 'design/fonts/manifest.json').read_text('utf-8'))
    for entry in manifest['files']:
        font_path = ROOT / 'design/fonts' / entry['file']
        if not font_path.is_file():
            errors.append(f'Missing font/license: {entry["file"]}')
            continue
        data = font_path.read_bytes()
        if len(data) != entry['bytes'] or hashlib.sha256(data).hexdigest() != entry['sha256']:
            errors.append(f'Font/license differs from manifest: {entry["file"]}')

    color_tokens = dict(re.findall(r'(--mw-color-[a-z-]+):\s*(#[\da-f]{6})', token_content, re.I))
    contrast = json.loads((ROOT / 'output/reports/contrast-report.json').read_text('utf-8'))
    passing_contrasts = 0
    for check in contrast['checks']:
        foreground = color_tokens.get(check['foreground'])
        background = color_tokens.get(check['background'])
        if foreground != check['foregroundHex'] or background != check['backgroundHex']:
            errors.append(f'Stale contrast tokens: {check["foreground"]}/{check["background"]}')
            continue
        light, dark = sorted((luminance(foreground), luminance(background)), reverse=True)
        ratio = (light + 0.05) / (dark + 0.05)
        if abs(ratio - check['ratio']) > 1e-9 or check['pass'] != (ratio >= check['threshold']):
            errors.append(f'Stale contrast calculation: {check["foreground"]}/{check["background"]}')
        if ratio < check['threshold']:
            errors.append(f'Contrast below threshold: {check["foreground"]}/{check["background"]}')
        else:
            passing_contrasts += 1

    old_paths = re.compile(r'docs/(?:0[1-6]_[A-Z_]+\.md)|design/(?:contrast-report\.json|export_style_guide\.py|style-guide-preview\.png)')
    for path, content in contents.items():
        inline_paths = re.findall(r'`([^`\n]+)`', content)
        if 'historico' not in path.parts and any(old_paths.fullmatch(item) for item in inline_paths):
            errors.append(f'{path.relative_to(ROOT)}: stale path outside historical record')

    return {
        'checked_at_utc': datetime.now(timezone.utc).isoformat(),
        'scope': 'Local documentary references, visual tokens, font/license integrity and declared contrast pairs only; no application/runtime/publication audit.',
        'files_scanned': len(files),
        'local_links_checked': checked_links,
        'json_files_parsed': checked_json,
        'visual_tokens_defined': len(defined_tokens),
        'visual_tokens_referenced': len(used_tokens),
        'font_and_license_hashes_checked': len(manifest['files']),
        'contrasts_recalculated': len(contrast['checks']),
        'contrasts_passed': passing_contrasts,
        'git_initialized': (ROOT / '.git').exists(),
        'application_manifest_present': (ROOT / 'package.json').exists(),
        'errors': errors,
        'passed': not errors,
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--report', help='Optional JSON report path inside the project')
    args = parser.parse_args()
    destination = None
    if args.report:
        destination = (ROOT / args.report).resolve()
        if not destination.is_relative_to(ROOT) or destination.suffix != '.json':
            parser.error('--report must be a JSON path inside the project')
    report = verify(destination)
    if destination is not None:
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(report, ensure_ascii=True, indent=2))
    return 0 if report['passed'] else 1


if __name__ == '__main__':
    raise SystemExit(main())
