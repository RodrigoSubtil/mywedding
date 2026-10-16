"""Cria a assinatura vetorial e o estudo de composição com a Fraunces local."""
from pathlib import Path
from html import escape
import hashlib
import json
import re
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.roundingPen import RoundingPen
from PIL import ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'design/fonts/fraunces-variable.ttf'
tokens = (ROOT / 'design/tokens.css').read_text('utf-8')
def color(name):
    return re.search(r'--mw-color-' + name + r':\s*(#[0-9A-Fa-f]+)', tokens)[1]

axes = {'wght': 500, 'opsz': 24, 'SOFT': 50, 'WONK': 1}
font = instantiateVariableFont(TTFont(SOURCE), axes, inplace=True)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()
upm = font['head'].unitsPerEm
face = ImageFont.truetype(str(SOURCE), upm)
face.set_variation_by_axes([
    axes.get({'Weight': 'wght', 'Optical Size': 'opsz', 'Softness': 'SOFT', 'Wonky': 'WONK'}.get(axis['name'].decode()), axis['default'])
    for axis in face.get_variation_axes()
])
name = 'MyWedding.'

def word(integrated=False):
    shapes, bounds = [], []
    leaf = ''
    for index, char in enumerate(name):
        origin = face.getlength(name[:index+1]) - face.getlength(char)
        glyph_name = cmap[0x131] if integrated and char == 'i' else cmap[ord(char)]
        pen = SVGPathPen(glyphs)
        glyphs[glyph_name].draw(RoundingPen(TransformPen(pen, (1, 0, 0, -1, origin, 0)), roundFunc=lambda x: round(x, 1)))
        ink = f' fill="{color("accent")}"' if char == '.' else ''
        shapes.append(f'<path{ink} d="{pen.getCommands()}"/>')
        b = BoundsPen(glyphs)
        glyphs[glyph_name].draw(TransformPen(b, (1, 0, 0, -1, origin, 0)))
        bounds.append(b.bounds)
        if integrated and char == 'i':
            advance = font['hmtx'][cmap[ord('i')]][0]
            size = upm * .27
            x = origin + advance / 2 - size / 2
            y = -upm * .80
            leaf = f'<g transform="translate({x:.1f} {y:.1f}) scale({size/24:.4f})" fill="{color("accent")}"><path d="M2 21C-1 7 6 0 22 1C23 16 15 23 2 21Z"/><path d="M2 22 16 8" fill="none" stroke="{color("background")}" stroke-width="1.4" stroke-linecap="round"/></g>'
            bounds.append((x, y, x+size, y+size))
    xmin, ymin = min(b[0] for b in bounds), min(b[1] for b in bounds)
    xmax, ymax = max(b[2] for b in bounds), max(b[3] for b in bounds)
    return ''.join(shapes)+leaf, (xmin, ymin, xmax, ymax)

def svg_variant(variant):
    paths, (xmin, ymin, xmax, ymax) = word(variant == 'integrated')
    width, height = (160, 36) if variant != 'above' else (160, 64)
    extra = 26 if variant == 'beside' else 0
    scale = min((152-extra)/(xmax-xmin), 30/(ymax-ymin))
    x = (width - (xmax-xmin)*scale + extra)/2 - xmin*scale
    y = (height - (ymax-ymin)*scale)/2 - ymin*scale + (12 if variant == 'above' else 0)
    mark = ''
    if variant != 'integrated':
        mx, my = (3, 6) if variant == 'beside' else (68, 3)
        mark = f'<g transform="translate({mx} {my})" fill="none" stroke="{color("primary")}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4C9 2 3 8 6 15c7 3 13-3 14-11ZM4 20 16 8"/></g>'
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="{color("primary")}" fill-rule="evenodd"><title>MyWedding</title>{mark}<g transform="translate({x:.4f} {y:.4f}) scale({scale:.6f})">{paths}</g></svg>\n'

source_dir = ROOT / 'design/brand'
public_dir = ROOT / 'public/brand'
source_dir.mkdir(parents=True, exist_ok=True)
public_dir.mkdir(parents=True, exist_ok=True)
variants = {variant: svg_variant(variant) for variant in ('beside', 'above', 'integrated')}
selected = variants['integrated']
approved_master = source_dir / 'mywedding.svg'
if (source_dir / 'reference/mywedding-aprovada-2026-10-15.svg').exists():
    # Depois da aprovação, preservar os contornos em vez de redesenhar a marca.
    selected = approved_master.read_text('utf-8')
    variants['integrated'] = selected
(source_dir / 'mywedding.svg').write_text(selected, encoding='utf-8', newline='\n')
(public_dir / 'mywedding.svg').write_text(selected, encoding='utf-8', newline='\n')
mark = f'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="{color("primary")}"/><g transform="translate(4 4)" fill="{color("background")}"><path d="M2 21C-1 7 6 0 22 1C23 16 15 23 2 21Z"/><path d="M2 22 16 8" fill="none" stroke="{color("primary")}" stroke-width="1.6" stroke-linecap="round"/></g></svg>\n'
(source_dir / 'mark.svg').write_text(mark, encoding='utf-8')
(ROOT / 'src/app/icon.svg').write_text(mark, encoding='utf-8')
cards = ''.join(f'<article><p>{escape(label)}</p>{variants[key]}<div class="small-logo">{variants[key]}</div></article>' for key, label in [('beside', '01 · Folha ao lado'), ('above', '02 · Folha acima'), ('integrated', '03 · Folha no ponto do i — escolhida')])
study = f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MyWedding · Estudo da assinatura</title><link rel="stylesheet" href="../../design/tokens.css"><style>body{{margin:0;padding:48px;background:var(--mw-color-background);color:var(--mw-color-text);font:16px/1.6 var(--mw-font-body)}}h1{{font:400 40px var(--mw-font-display)}}.grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}}article{{background:var(--mw-color-surface);border:1px solid var(--mw-color-border);border-radius:16px;padding:24px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:32px}}article>svg{{width:100%;max-width:320px;height:auto}}p{{font-size:14px}}.small-logo svg{{width:132px;height:auto}}@media(max-width:767px){{body{{padding:20px}}.grid{{grid-template-columns:1fr}}}}</style></head><body><h1>Uma assinatura. Um detalhe próprio.</h1><p>Fraunces 500 · verde profundo · folha no ponto do i e ponto final terracota preservado.</p><div class="grid">{cards}</div><p>A integração preserva a largura do nome e dá à folha uma função no desenho. Símbolo decorativo; nome acessível continua MyWedding.</p></body></html>'''
(ROOT / 'output/previews/estudo-logo.html').write_text(study, encoding='utf-8')
manifest = {'generated':'2026-10-15', 'selected':'Folha integrada ao ponto do i; Fraunces 500, ponto final terracota e recortes nas letras preservados por pedido de Rodrigo.', 'fill_rule':'evenodd', 'source_font':'design/fonts/fraunces-variable.ttf', 'font_sha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(), 'axes':axes, 'output':'public/brand/mywedding.svg', 'width':160,'height':36,'bytes':(public_dir / 'mywedding.svg').stat().st_size,'sha256':hashlib.sha256((public_dir / 'mywedding.svg').read_bytes()).hexdigest()}
(ROOT / 'output/reports/brand-assets.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(json.dumps(manifest, ensure_ascii=True, indent=2))
