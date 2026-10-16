"""Confere a exportação da landing, referências locais e paridade das traduções."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from datetime import datetime, timezone
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'out'
ROUTES = ['/', '/pt-BR/', '/pt-PT/'] + [f'/{locale}/{page}/' for locale in ('pt-BR', 'pt-PT') for page in ('demonstracao', 'entrar', 'criar-conta')]

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references, self.ids = [], set()
        self.language, self.headings, self.disabled_form = None, 0, False
        self.robots = ''
    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get('id'): self.ids.add(attrs['id'])
        for name in ('href', 'src'):
            if attrs.get(name): self.references.append(attrs[name])
        if tag == 'html': self.language = attrs.get('lang')
        if tag == 'h1': self.headings += 1
        if tag == 'fieldset' and 'disabled' in attrs: self.disabled_form = True
        if tag == 'meta' and attrs.get('name') == 'robots': self.robots = attrs.get('content', '')

def shape(value):
    if isinstance(value, dict): return {key:shape(item) for key,item in sorted(value.items())}
    if isinstance(value, list): return [shape(item) for item in value]
    return type(value).__name__

errors, pages, checked = [], {}, 0
for route in ROUTES:
    file = OUT / route.strip('/') / 'index.html'
    if not file.exists():
        errors.append(f'Rota ausente: {route}')
        continue
    page = Page()
    page.feed(file.read_text('utf-8'))
    pages[route] = page
    expected = 'pt-PT' if route.startswith('/pt-PT/') else 'pt-BR'
    if page.language != expected: errors.append(f'Idioma incorreto: {route}')
    if page.headings != 1: errors.append(f'H1: {route}: {page.headings}')
    if route.endswith(('/entrar/', '/criar-conta/')):
        if not page.disabled_form: errors.append(f'Formulário sem proteção antes da hidratação: {route}')
        if 'noindex' not in page.robots: errors.append(f'Interface demonstrativa indexável: {route}')

for route, page in pages.items():
    for reference in page.references:
        target = urlsplit(reference)
        if target.scheme or target.netloc: continue
        checked += 1
        path = unquote(target.path)
        file = (OUT / path.lstrip('/')) if path.startswith('/') else (OUT / route.strip('/') / path)
        if not path: file = OUT / route.strip('/') / 'index.html'
        if file.is_dir(): file = file / 'index.html'
        if not file.resolve().is_relative_to(OUT.resolve()) or not file.is_file():
            errors.append(f'Referência local ausente: {route}: {reference}')
            continue
        if target.fragment:
            destination = ('/' + path.strip('/') + '/') if path else route
            if destination.endswith('/demonstracao/') and target.fragment in {'classico', 'natural', 'contemporaneo'}: continue
            if destination in pages and target.fragment not in pages[destination].ids:
                errors.append(f'Âncora ausente: {route}: {reference}')

br = json.loads((ROOT / 'src/i18n/messages/pt-BR.json').read_text('utf-8'))
pt = json.loads((ROOT / 'src/i18n/messages/pt-PT.json').read_text('utf-8'))
if shape(br) != shape(pt): errors.append('Estruturas de mensagens pt-BR/pt-PT diferentes')

asset_count = 0
for manifest_name, groups in [('landing-assets.json', ('images', 'fonts')), ('social-assets.json', ('outputs',))]:
    manifest = json.loads((ROOT / 'output/reports' / manifest_name).read_text('utf-8'))
    for group in groups:
        for item in manifest[group]:
            path = item.get('output', item.get('path'))
            file = OUT / path.removeprefix('public/')
            asset_count += 1
            if not file.exists() or hashlib.sha256(file.read_bytes()).hexdigest() != item['sha256']:
                errors.append(f'Asset exportado divergente: {path}')
for name in ('private', 'docs', 'design', '.env', 'MEMORIA_PROJETO.md'):
    if (OUT / name).exists(): errors.append(f'Material interno exportado: {name}')

brand = json.loads((ROOT / 'output/reports/brand-assets.json').read_text('utf-8'))
brand_file = OUT / brand['output'].removeprefix('public/')
asset_count += 1
if not brand_file.exists() or hashlib.sha256(brand_file.read_bytes()).hexdigest() != brand['sha256']:
    errors.append('Assinatura vetorial exportada divergente')

report = {'checked_at_utc':datetime.now(timezone.utc).isoformat(), 'scope':'Exportação local e referências; não comprova interações, publicação ou autenticação real.', 'routes':ROUTES, 'local_references_checked':checked, 'asset_hashes_checked':asset_count, 'translations_same_structure':shape(br)==shape(pt), 'errors':errors, 'passed':not errors}
(ROOT / 'output/reports/verificacao-landing.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(report, ensure_ascii=True, indent=2))
raise SystemExit(0 if report['passed'] else 1)
