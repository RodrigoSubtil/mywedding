"""Renderiza cartões editoriais de partilha com os tokens e assets locais."""
from pathlib import Path
import hashlib
import json
import re
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
tokens = (ROOT / 'design/tokens.css').read_text('utf-8')
def color(name):
    return re.search(r'--mw-color-' + name + r':\s*(#[0-9A-Fa-f]+)', tokens)[1]
def font(family, size, weight=400):
    face = ImageFont.truetype(str(ROOT / f'design/fonts/{family}-variable.ttf'), size)
    axes = face.get_variation_axes()
    values = []
    for axis in axes:
        name = axis['name'].decode()
        value = weight if name == 'Weight' else 50 if name == 'Softness' else 1 if name == 'Wonky' else size if name == 'Optical Size' else axis['default']
        values.append(max(axis['minimum'], min(axis['maximum'], value)))
    face.set_variation_by_axes(values)
    return face
def wrapped(draw, text, face, max_width):
    lines, line = [], ''
    for word in text.split():
        trial = f'{line} {word}'.strip()
        if line and draw.textlength(trial, font=face) > max_width:
            lines.append(line)
            line = word
        else:
            line = trial
    return lines + [line]

destination = ROOT / 'public/social'
destination.mkdir(parents=True, exist_ok=True)
manifest = {'generated': '2026-10-15', 'purpose': 'Cartões de partilha da landing; exemplo fictício e fotografia de stock.', 'source_photo': 'design/assets/pexels/photos/12-casal-costas-parque-pexels-15939733.jpg', 'outputs': []}
for locale in ('pt-BR', 'pt-PT'):
    content = json.loads((ROOT / f'src/i18n/messages/{locale}.json').read_text('utf-8'))['Landing']
    canvas = Image.new('RGB', (1200, 630), color('background'))
    draw = ImageDraw.Draw(canvas)
    draw.text((64, 48), 'MyWedding.', font=font('fraunces', 32, 500), fill=color('primary'))
    draw.text((64, 130), 'BRASIL & PORTUGAL', font=font('dm-sans', 14, 500), fill=color('accent'))
    title_font = font('fraunces', 56)
    y = 180
    for line in wrapped(draw, content['hero']['title'], title_font, 600):
        draw.text((64, y), line, font=title_font, fill=color('primary'))
        y += 64
    body_font = font('dm-sans', 18)
    for line in wrapped(draw, content['footer']['tagline'], body_font, 560):
        draw.text((64, y + 32), line, font=body_font, fill=color('text-muted'))
        y += 32
    draw.text((64, 548), content['hero']['note'], font=font('dm-sans', 14), fill=color('text-muted'))
    draw.rounded_rectangle((720, 64, 1136, 566), radius=16, fill=color('primary-soft'))
    draw.rounded_rectangle((744, 88, 1112, 542), radius=12, fill=color('surface'))
    with Image.open(ROOT / manifest['source_photo']) as source:
        photo = ImageOps.fit(source.convert('RGB'), (368, 272), Image.Resampling.LANCZOS)
    canvas.paste(photo, (744, 128))
    draw.text((768, 100), 'C & M', font=font('dm-sans', 14), fill=color('primary'))
    draw.text((768, 420), 'Clara & Miguel', font=font('fraunces', 40), fill=color('primary'))
    draw.text((768, 482), '18 · 09 · 2027', font=font('dm-sans', 14), fill=color('text-muted'))
    draw.text((768, 514), content['demoLabel'], font=font('dm-sans', 14), fill=color('text-muted'))
    target = destination / f'mywedding-{locale}.jpg'
    canvas.save(target, 'JPEG', quality=88, optimize=True, progressive=True)
    manifest['outputs'].append({'path': str(target.relative_to(ROOT)).replace('\\', '/'), 'width':1200,'height':630,'bytes':target.stat().st_size,'sha256':hashlib.sha256(target.read_bytes()).hexdigest()})
(ROOT / 'output/reports/social-assets.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(manifest, ensure_ascii=True, indent=2))
