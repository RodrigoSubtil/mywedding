"""Exporta variantes da logo aprovada, sem redesenhar os seus contornos."""
from copy import deepcopy
from pathlib import Path
import hashlib
import json
import math
import re
import xml.etree.ElementTree as ET
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.roundingPen import RoundingPen
from PIL import ImageFont

ROOT = Path(__file__).resolve().parents[1]
NS = 'http://www.w3.org/2000/svg'
ET.register_namespace('', NS)
def tag(name): return f'{{{NS}}}{name}'
def digest(path): return hashlib.sha256(path.read_bytes()).hexdigest()
tokens = (ROOT / 'design/tokens.css').read_text('utf-8')
def color(name): return re.search(r'--mw-color-' + name + r':\s*(#[0-9A-Fa-f]+)', tokens)[1]
def write_svg(path, svg):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(ET.tostring(svg, encoding='unicode')+'\n', encoding='utf-8', newline='\n')

master_path = ROOT / 'design/brand/mywedding.svg'
reference = ROOT / 'design/brand/reference/mywedding-aprovada-2026-10-15.svg'
reference.parent.mkdir(parents=True, exist_ok=True)
if not reference.exists(): reference.write_bytes(master_path.read_bytes())
master = ET.fromstring(master_path.read_text('utf-8'))

# A nervura é um recorte transparente, não uma linha marfim sobreposta.
for group in master.iter(tag('g')):
    paths = list(group.findall(tag('path')))
    if len(paths) == 2 and paths[-1].get('stroke') == color('background'):
        shape, vein = paths
        defs = ET.Element(tag('defs'))
        clip = ET.SubElement(defs, tag('clipPath'), {'id':'mw-leaf-shape', 'clipPathUnits':'userSpaceOnUse'})
        ET.SubElement(clip, tag('path'), {'d':shape.get('d')})
        group.insert(0, defs)
        shape.set('d', shape.get('d')+' M1.505 21.505L15.505 7.505A0.7 0.7 0 0 1 16.495 8.495L2.495 22.495A0.7 0.7 0 0 1 1.505 21.505Z')
        shape.set('clip-path', 'url(#mw-leaf-shape)')
        shape.set('fill-rule', 'evenodd')
        group.remove(vein)
write_svg(master_path, master)
write_svg(ROOT / 'public/brand/mywedding.svg', master)

def recolor(svg, ink, accent=None):
    svg = deepcopy(svg)
    for element in svg.iter():
        for attribute in ('fill', 'stroke'):
            value = element.get(attribute)
            if value and value != 'none':
                element.set(attribute, accent if accent and value == color('accent') else ink)
    return svg

def symbol(ink):
    svg = ET.Element(tag('svg'), {'width':'64','height':'64','viewBox':'0 0 32 32','fill':ink,'fill-rule':'evenodd'})
    ET.SubElement(svg, tag('title')).text = 'MyWedding · símbolo'
    # Mesma folha/recorte da assinatura, em área própria para ícone.
    leaf = next(g for g in master.iter(tag('g')) if g.get('fill') == color('accent'))
    leaf = deepcopy(leaf)
    leaf.set('transform','translate(4 4)')
    leaf.set('fill',ink)
    svg.append(leaf)
    return svg

font_path = ROOT / 'design/fonts/dm-sans-variable.ttf'
font = instantiateVariableFont(TTFont(font_path), {'wght':400,'opsz':16}, inplace=True)
glyphs, cmap = font.getGlyphSet(), font.getBestCmap()
upm = font['head'].unitsPerEm
face = ImageFont.truetype(str(font_path), upm)
face.set_variation_by_axes([400 if a['name'].decode() == 'Weight' else 16 if a['name'].decode() == 'Optical Size' else a['default'] for a in face.get_variation_axes()])
def text_path(text, size, x, baseline, ink, center=False):
    scale = size/upm
    if center: x -= face.getlength(text)*scale/2
    group = ET.Element(tag('g'), {'fill':ink})
    for index, char in enumerate(text):
        origin = face.getlength(text[:index+1]) - face.getlength(char)
        pen = SVGPathPen(glyphs)
        glyphs[cmap[ord(char)]].draw(RoundingPen(TransformPen(pen, (scale,0,0,-scale,x+origin*scale,baseline)), roundFunc=lambda v:round(v,3)))
        if pen.getCommands(): ET.SubElement(group,tag('path'),{'d':pen.getCommands()})
    return group

def signature(locale, inverse=False):
    svg = ET.Element(tag('svg'), {'width':'480','height':'120','viewBox':'0 0 480 120'})
    ET.SubElement(svg,tag('title')).text = f'MyWedding · assinatura {locale}'
    name = recolor(master,color('background')) if inverse else deepcopy(master)
    name.set('x','80'); name.set('y','4'); name.set('width','320'); name.set('height','72')
    svg.append(name)
    content = json.loads((ROOT/f'src/i18n/messages/{locale}.json').read_text('utf-8'))['Landing']['footer']['tagline']
    svg.append(text_path(content,16,240,104,color('background') if inverse else color('primary'),True))
    return svg

exports = [
 ('mywedding',master,'Principal · verde + terracota','background',True,1600),
 ('mywedding-inversa',recolor(master,color('background')),'Inversa · marfim','primary',True,1600),
 ('mywedding-verde',recolor(master,color('primary')),'Uma cor · verde','surface',True,1600),
 ('mywedding-terracota',recolor(master,color('accent')),'Uma cor · terracota','background',True,1600),
 ('mywedding-branca',recolor(master,color('on-primary')),'Uma cor · branca','primary',True,1600),
 ('mywedding-carvao',recolor(master,color('text')),'Uma cor · carvão','surface-alt',True,1600),
 ('simbolo',symbol(color('accent')),'Símbolo · terracota','background',True,1024),
 ('simbolo-verde',symbol(color('primary')),'Símbolo · verde','primary-soft',True,1024),
 ('simbolo-branco',symbol(color('on-primary')),'Símbolo · branco','primary',True,1024),
]
app = symbol(color('background'))
app.insert(1,ET.Element(tag('rect'),{'width':'32','height':'32','rx':'8','fill':color('primary')}))
exports.append(('icone-app',app,'Ícone · fundo verde','surface',False,1024))
for locale in ('pt-BR','pt-PT'):
    exports.append((f'assinatura-{locale}',signature(locale),f'Assinatura · {locale}','background',True,1920))
    exports.append((f'assinatura-{locale}-inversa',signature(locale,True),f'Assinatura inversa · {locale}','primary',True,1920))

catalog_width = 1200
catalog_height = 156 + math.ceil(len(exports)/3)*200
catalog = ET.Element(tag('svg'),{'width':str(catalog_width),'height':str(catalog_height),'viewBox':f'0 0 {catalog_width} {catalog_height}'})
ET.SubElement(catalog,tag('title')).text = 'MyWedding · Kit da marca'
ET.SubElement(catalog,tag('rect'),{'width':str(catalog_width),'height':str(catalog_height),'fill':color('background')})
catalog.append(text_path('MyWedding · Kit da marca',32,32,58,color('primary')))
catalog.append(text_path('Logo aprovada · recortes preservados · SVG + PNG transparente',16,32,94,color('text-muted')))
manifest = {'generated':'2026-10-15','approved_reference':str(reference.relative_to(ROOT)).replace('\\','/'),'reference_sha256':digest(reference),'master':'design/brand/mywedding.svg','master_sha256':digest(master_path),'font_sources':[{'path':str(p.relative_to(ROOT)).replace('\\','/'),'sha256':digest(p)} for p in (ROOT/'design/fonts/fraunces-variable.ttf',font_path)],'outputs':[]}
for index,(name,svg,label,surface,transparent,png_width) in enumerate(exports):
    svg = deepcopy(svg)
    for element in svg.iter():
        for attribute,value in list(element.attrib.items()):
            if attribute == 'id': element.set(attribute,f'{name}-{value}')
            elif 'url(#' in value: element.set(attribute,value.replace('url(#',f'url(#{name}-'))
    path = ROOT/f'design/brand/variants/{name}.svg'
    write_svg(path,svg)
    manifest['outputs'].append({'name':name,'label':label,'svg':str(path.relative_to(ROOT)).replace('\\','/'),'svg_sha256':digest(path),'png':f'output/brand/png/{name}.png','png_width':png_width,'transparent':transparent,'recommended_surface':surface})
    x,y = 32+(index%3)*388,132+(index//3)*200
    ET.SubElement(catalog,tag('rect'),{'x':str(x),'y':str(y),'width':'360','height':'164','rx':'16','fill':color(surface),'stroke':color('border')})
    copy = deepcopy(svg)
    is_symbol = name.startswith('simbolo') or name == 'icone-app'
    copy.set('x',str(x+(360-72 if is_symbol else 48)/2))
    copy.set('y',str(y+24))
    copy.set('width','72' if is_symbol else '312')
    copy.set('height','72' if is_symbol else '78')
    copy.set('preserveAspectRatio','xMidYMid meet')
    catalog.append(copy)
    catalog.append(text_path(label,13,x+16,y+144,color('background') if surface == 'primary' else color('primary')))
write_svg(ROOT/'output/brand/catalogo.svg',catalog)
(ROOT/'output/reports/brand-kit.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
active = json.loads((ROOT/'output/reports/brand-assets.json').read_text('utf-8'))
active.update({'sha256':digest(master_path),'bytes':master_path.stat().st_size,'transparency':'Fundo e nervura transparentes; contornos das letras aprovadas preservados.'})
(ROOT/'output/reports/brand-assets.json').write_text(json.dumps(active,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'svg_exports':len(exports),'master_sha256':digest(master_path),'catalog':'output/brand/catalogo.svg'},ensure_ascii=False))
