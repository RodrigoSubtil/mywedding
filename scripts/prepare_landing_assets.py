"""Gera cópias web dos assets locais, preservando os originais e a proveniência."""
from pathlib import Path
import hashlib
import json
import shutil
import sys

ROOT = Path(__file__).resolve().parents[1]
# Dependências de preparação apenas; não pertencem ao frontend.
sys.path.insert(0, str(ROOT / 'tmp/asset-tools'))
from PIL import Image, ImageOps
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

photos = ROOT / 'design/assets/pexels/photos'
destination = ROOT / 'public/images'
destination.mkdir(parents=True, exist_ok=True)
selection = {
    'natural': ('12-casal-costas-parque-pexels-15939733.jpg', (1200, 900)),
    'classico': ('06-aliancas-copos-de-leite-pexels-4753767.jpg', (1200, 900)),
    'contemporaneo': ('08-recepcao-branco-verde-pexels-12954015.jpg', (1200, 900)),
    'editorial': ('05-casal-maos-buque-pexels-29858926.jpg', (800, 1000)),
}
manifest = {'generated': '2026-10-15', 'purpose': 'Fotografias de stock ilustrativas; não representam clientes.', 'images': [], 'fonts': []}
for name, (source, dimensions) in selection.items():
    target = destination / f'{name}.webp'
    with Image.open(photos / source) as original:
        image = ImageOps.fit(ImageOps.exif_transpose(original).convert('RGB'), dimensions, method=Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=82, method=6)
    manifest['images'].append({'source': f'design/assets/pexels/photos/{source}', 'output': f'public/images/{target.name}', 'width': dimensions[0], 'height': dimensions[1], 'bytes': target.stat().st_size, 'sha256': hashlib.sha256(target.read_bytes()).hexdigest()})

font_destination = ROOT / 'public/fonts'
font_destination.mkdir(parents=True, exist_ok=True)
for family in ('fraunces', 'dm-sans'):
    source = ROOT / f'design/fonts/{family}-variable.ttf'
    target = font_destination / f'{family}-variable.woff2'
    font = TTFont(source, recalcTimestamp=False)
    # SOFT/WONK já têm valores fixos no guia; manter peso e tamanho ótico variáveis.
    if family == 'fraunces':
        font = instantiateVariableFont(font, {'SOFT': 50, 'WONK': 1}, inplace=True)
    font.flavor = 'woff2'
    font.save(target)
    manifest['fonts'].append({'source': str(source.relative_to(ROOT)).replace('\\', '/'), 'output': str(target.relative_to(ROOT)).replace('\\', '/'), 'bytes': target.stat().st_size, 'sha256': hashlib.sha256(target.read_bytes()).hexdigest()})
for name in ('OFL-Fraunces.txt', 'OFL-DM-Sans.txt'):
    shutil.copyfile(ROOT / 'design/fonts' / name, font_destination / name)

path = ROOT / 'output/reports/landing-assets.json'
path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(manifest, ensure_ascii=True, indent=2))
