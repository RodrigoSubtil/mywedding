"""Valida e empacota as variantes e derivados já preparados, sem redesenhar."""
from pathlib import Path
import hashlib
import json
import zipfile
import xml.etree.ElementTree as ET
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
NS = {'s':'http://www.w3.org/2000/svg'}
manifest_path = ROOT/'output/reports/brand-kit.json'
manifest = json.loads(manifest_path.read_text('utf-8'))
errors = []
def digest(path): return hashlib.sha256(path.read_bytes()).hexdigest()
master = ET.parse(ROOT/manifest['master']).getroot()
reference = ET.parse(ROOT/manifest['approved_reference']).getroot()
def letters(svg):
    word = svg.find('s:g', NS)
    return [p.get('d') for p in word.findall('s:path', NS)]
if letters(master) != letters(reference): errors.append('Os contornos aprovados das letras mudaram')
for item in manifest['outputs']:
    svg, png = ROOT/item['svg'], ROOT/item['png']
    if digest(svg) != item['svg_sha256']: errors.append(f'SVG divergente: {item["name"]}')
    if digest(png) != item['png_sha256']: errors.append(f'PNG divergente: {item["name"]}')
    root = ET.parse(svg).getroot()
    if any(e.tag.split('}')[-1] in {'script','foreignObject','image','text'} for e in root.iter()):
        errors.append(f'SVG depende de conteúdo externo/texto: {item["name"]}')
    for element in root.iter():
        for name,value in element.attrib.items():
            if name.endswith('href') and not value.startswith('#'): errors.append(f'Referência externa: {item["name"]}')
    with Image.open(png) as image:
        if image.mode != 'RGBA': errors.append(f'PNG sem canal alfa: {item["name"]}')
        if item['transparent'] and image.getextrema()[-1] != (0,255): errors.append(f'Transparência ausente: {item["name"]}')
report = {'generated':'2026-10-15','svg_files':len(manifest['outputs']),'png_files':len(manifest['outputs']),'transparent_variants':sum(i['transparent'] for i in manifest['outputs']),'approved_letter_paths_unchanged':letters(master)==letters(reference),'errors':errors,'passed':not errors}
(ROOT/'output/reports/verificacao-brand-kit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
if errors: raise SystemExit('\n'.join(errors))
readme = '''MYWEDDING - KIT DA MARCA - 15/10/2026

SVG: vetores em contornos, ampliáveis, sem fontes externas.
PNG: derivados RGBA com transparência em alta resolução.
O fundo apresentado no catálogo ilustra a aplicação; não acompanha as logos.
Exceção: icone-app tem fundo verde intencional.

mywedding: versão principal verde + terracota para fundo claro.
mywedding-inversa: marfim para fundo verde/escuro.
mywedding-verde, terracota, branca e carvao: uma cor.
simbolo, simbolo-verde e simbolo-branco: folha isolada para espaços pequenos.
assinatura-pt-BR e assinatura-pt-PT: nome e frase de apoio correspondente.
As assinaturas também têm versões inversas.

Preservar recortes nas letras, folha no i, ponto final e proporções.
Não usar a versão principal sobre verde escuro: escolher inversa/branca.
Largura mínima recomendada: 120 px para o nome; 20 px para o símbolo.
Em tamanhos menores, usar o símbolo ou ícone de aplicação.
Não usar a folha como ícone genérico para tarefas ou recursos.

As fontes de origem Fraunces e DM Sans são licenciadas sob SIL OFL.
As licenças completas acompanham este pacote. Nenhuma fonte externa é
necessária para abrir os SVGs/PNGs. As licenças das fontes não concedem
direitos sobre o nome/marca MyWedding.
'''
(ROOT/'output/brand/LEIA-ME.txt').write_text(readme,encoding='utf-8')
archive = ROOT/'output/brand/MyWedding-Brand-Kit.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as package:
    for item in manifest['outputs']:
        for field,directory in [('svg','svg'),('png','png')]:
            source = ROOT/item[field]
            package.write(source,f'{directory}/{source.name}')
    for name in ('OFL-Fraunces.txt','OFL-DM-Sans.txt'):
        package.write(ROOT/'design/fonts'/name,f'licenses/{name}')
    for relative, name in [('output/brand/LEIA-ME.txt','LEIA-ME.txt'),('output/brand/catalogo.png','catalogo.png'),('output/brand/catalogo.svg','catalogo.svg'),('output/reports/brand-kit.json','proveniencia.json'),('output/reports/verificacao-brand-kit.json','verificacao.json')]:
        package.write(ROOT/relative,name)
with zipfile.ZipFile(archive) as package:
    if package.testzip(): raise SystemExit('Falha de integridade no ZIP')
print(json.dumps({**report,'archive':str(archive.relative_to(ROOT))},ensure_ascii=False))
