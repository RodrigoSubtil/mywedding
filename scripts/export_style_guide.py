"""Exporta a prancha do style guide usando os tokens e as fontes locais.

Dependências: reportlab e fonttools. Não cria ou publica páginas do produto.
"""
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET
from tempfile import TemporaryDirectory

BASE = Path(__file__).resolve().parent.parent

if '--help' in sys.argv or '-h' in sys.argv:
    print('Uso: python scripts/export_style_guide.py')
    print('Dependências: ReportLab e FontTools no ambiente Python escolhido.')
    print('Saída: output/pdf/MyWedding-Style-Guide-v1.pdf. Não publica páginas.')
    raise SystemExit(0)

try:
    from fontTools.ttLib import TTFont as VariableFont
    from fontTools.varLib.instancer import instantiateVariableFont
    from fontTools.pens.basePen import BasePen
    from fontTools.svgLib.path import parse_path
    from reportlab.pdfgen import canvas
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.lib.colors import HexColor
    from reportlab.lib.pagesizes import A4, landscape
except ImportError as error:
    print(f'Dependência ausente: {error.name}. O PDF existente foi preservado.', file=sys.stderr)
    print('Preparar ReportLab e FontTools no ambiente Python. Ver scripts/README.md.', file=sys.stderr)
    raise SystemExit(1)

TOKENS = dict(re.findall(r'--mw-color-([a-z-]+):\s*(#[\da-f]{6})', (BASE / 'design/tokens.css').read_text('utf-8'), re.I))
TEMP_ROOT = BASE / 'tmp/pdfs'
TEMP_ROOT.mkdir(parents=True, exist_ok=True)
FONT_TEMP = TemporaryDirectory(prefix='mywedding-style-guide-', dir=TEMP_ROOT)
TEMP = Path(FONT_TEMP.name)
OUT = BASE / 'output/pdf/MyWedding-Style-Guide-v1.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)

for name, file, axes in [
    ('Fraunces', 'fraunces-variable.ttf', {'wght': 400, 'opsz': 48, 'SOFT': 50, 'WONK': 1}),
    ('FrauncesMedium', 'fraunces-variable.ttf', {'wght': 500, 'opsz': 24, 'SOFT': 50, 'WONK': 1}),
    ('DM', 'dm-sans-variable.ttf', {'wght': 400, 'opsz': 16}),
    ('DMMedium', 'dm-sans-variable.ttf', {'wght': 500, 'opsz': 16}),
    ('DMSemibold', 'dm-sans-variable.ttf', {'wght': 600, 'opsz': 16}),
]:
    font = VariableFont(BASE / 'design/fonts' / file)
    static = instantiateVariableFont(font, axes, inplace=True)
    target = TEMP / f'{name}.ttf'
    static.save(target)
    pdfmetrics.registerFont(TTFont(name, str(target)))

W, H = landscape(A4)
M = 42
CW = W - M * 2
c = canvas.Canvas(str(OUT), pagesize=(W, H), pageCompression=1)
c.setTitle('MyWedding Style Guide v1')
c.setAuthor('MyWedding')
c.setSubject('Cores, fontes, espaços e bordas. Brasil e Portugal com preparação mundial.')

def color(key):
    return HexColor(TOKENS[key])

def box(x, top, w, h, bg='surface', radius=12, border=None):
    c.setFillColor(color(bg))
    c.setStrokeColor(color(border or bg))
    c.setLineWidth(.75)
    c.roundRect(x, H-top-h, w, h, radius, fill=1, stroke=bool(border))

def text(x, top, value, size=12, font='DM', ink='text'):
    c.setFillColor(color(ink))
    c.setFont(font, size)
    c.drawString(x, H-top-size*.83, value)

def lines(x, top, content, size=11, leading=17, font='DM', ink='text', width=None):
    y = top
    for paragraph in content:
        rows = [paragraph]
        if width:
            rows, row = [], ''
            for word in paragraph.split():
                proposed = (row+' '+word).strip()
                if pdfmetrics.stringWidth(proposed,font,size) > width and row:
                    rows.append(row)
                    row = word
                else:
                    row = proposed
            rows.append(row)
        for row in rows:
            text(x,y,row,size,font,ink)
            y += leading
    return y

def rule(top, x=M, width=CW, ink='border'):
    c.setStrokeColor(color(ink))
    c.setLineWidth(.75)
    c.line(x,H-top,x+width,H-top)

def brand(x, top, width=118):
    """Mesmos contornos vetoriais da assinatura pública, sem rasterizar."""
    root = ET.fromstring((BASE / 'design/brand/mywedding.svg').read_text('utf-8'))
    class CanvasPen(BasePen):
        def __init__(self):
            super().__init__(None)
            self.path = c.beginPath()
        def _moveTo(self, p): self.path.moveTo(*p)
        def _lineTo(self, p): self.path.lineTo(*p)
        def _curveToOne(self, p1, p2, p3): self.path.curveTo(*p1, *p2, *p3)
        def _closePath(self): self.path.close()
    def draw(node, ink):
        if node.tag.endswith(('defs', 'clipPath')): return
        c.saveState()
        ink = node.attrib.get('fill', ink)
        for operation, values in re.findall(r'(translate|scale)\(([^)]+)\)', node.attrib.get('transform', '')):
            values = [float(v) for v in re.split(r'[ ,]+', values.strip())]
            if operation == 'translate': c.translate(values[0], values[1] if len(values)>1 else 0)
            else: c.scale(values[0], values[1] if len(values)>1 else values[0])
        if node.tag.endswith('path'):
            clip_reference = node.attrib.get('clip-path', '')
            if clip_reference.startswith('url(#'):
                clip_id = clip_reference[5:-1]
                clip_node = next(element for element in root.iter() if element.attrib.get('id') == clip_id)
                clip_pen = CanvasPen()
                for clip_shape in clip_node:
                    parse_path(clip_shape.attrib['d'], clip_pen)
                c.clipPath(clip_pen.path, fill=0, stroke=0, fillMode=1)
            pen = CanvasPen()
            parse_path(node.attrib['d'], pen)
            if ink != 'none': c.setFillColor(HexColor(ink))
            stroke = node.attrib.get('stroke')
            if stroke:
                c.setStrokeColor(HexColor(stroke))
                c.setLineWidth(float(node.attrib.get('stroke-width', 1)))
                c.setLineCap(1)
            c.drawPath(pen.path, fill=ink != 'none', stroke=bool(stroke), fillMode=0 if root.attrib.get('fill-rule') == 'evenodd' else 1)
        for child in node: draw(child, ink)
        c.restoreState()
    c.saveState()
    c.translate(x, H-top)
    c.scale(width/160, -width/160)
    draw(root, TOKENS['primary'])
    c.restoreState()

def page(number, section, title, subtitle):
    c.setFillColor(color('background'))
    c.rect(0,0,W,H,fill=1,stroke=0)
    brand(M,19)
    text(W-M-193,30,'BRASIL & PORTUGAL  /  V1.0',9,'DMMedium','primary')
    rule(59)
    text(M,80,f'{number:02d}  /  {section}',10,'DMMedium','accent')
    text(M,103,title,32,'Fraunces')
    text(M,149,subtitle,11,'DM','text-muted')
    rule(H-38)
    text(M,H-26,'STYLE GUIDE  /  15.10.2026  /  PREPARAÇÃO INTERNACIONAL',8,'DMMedium','text-muted')
    text(W-M-29,H-26,f'{number} / 5',8,'DM','text-muted')

def finish():
    c.showPage()

page(1,'CORES','Elegância que aproxima.','Uma identidade acolhedora, serena e contemporânea. Referência visual da plataforma.')
swatches=[('Marfim','background','text','Base da página'),('Verde profundo','primary','on-primary','Marca e ação'),('Sálvia clara','primary-soft','primary','Fundo de apoio'),('Terracota','accent','on-accent','Acento editorial'),('Pêssego claro','accent-soft','accent','Apoio editorial')]
gap=12
sw=(CW-gap*4)/5
for i,(label,key,ink,role) in enumerate(swatches):
    x=M+i*(sw+gap)
    box(x,190,sw,100,key,9,'border' if key=='background' else None)
    text(x+12,263,role,9,'DMMedium',ink)
    text(x,302,label,12,'DMMedium')
    text(x,321,TOKENS[key],10,'DM','text-muted')
neutrals=[('Branco','surface'),('Areia','surface-alt'),('Carvão','text'),('Cinza oliva','text-muted'),('Pedra','border'),('Oliva médio','border-control')]
nw=CW/6
for i,(label,key) in enumerate(neutrals):
    x=M+i*nw
    box(x,361,18,18,key,5,'border')
    text(x+26,361,label,10,'DMMedium')
    text(x+26,378,TOKENS[key],9,'DM','text-muted')
    text(x,405,['Superfície','Fundo alternativo','Texto principal','Texto secundário','Divisória','Campo'][i],9,'DM','text-muted')
x=M
for factor,key in [(.75,'surface-alt'),(.2,'primary'),(.05,'accent')]:
    c.setFillColor(color(key));c.rect(x,H-447,CW*factor,8,fill=1,stroke=0);x+=CW*factor
text(M,458,'Orientação de composição: 75% bases claras / 20% verde / 5% terracota. Fotografias à parte.',10,'DM','text-muted')
lines(M,491,['Verde mantém a ação principal consistente. Terracota destaca sem competir.','Cores suaves servem de fundo; texto e controlos mantêm contraste.'],11,18,width=CW)
finish()

page(2,'TIPOGRAFIA','Personalidade e clareza.','Duas famílias, funções estáveis. Os ficheiros originais e as licenças acompanham o guia.')
half=(CW-24)/2
box(M,183,half,162,'primary-soft')
box(M+half+24,183,half,162,'surface',12,'border')
text(M+18,199,'Fraunces',13,'DMSemibold','primary')
text(M+18,226,'Cada história',29,'Fraunces','primary')
text(M+18,262,'tem o seu jeito.',29,'Fraunces','primary')
text(M+18,315,'Títulos principais e de secção / 400 e 500',10,'DM','primary')
x=M+half+42
text(x,199,'DM Sans',13,'DMSemibold')
text(x,230,'Tudo o que importa,',21,'DMMedium')
text(x,258,'com simplicidade.',21,'DMMedium')
text(x,315,'Texto, controlos e subtítulos / 400, 500 e 600',10,'DM','text-muted')
rows=[('H1 / Fraunces 400','36-56 px','1,12','Um dia para celebrar.',24,'Fraunces'),('H2 / Fraunces 400','28-40 px','1,20','Os detalhes fazem parte.',20,'Fraunces'),('H3 / DM Sans 600','22-24 px','1,20','Tudo num só lugar.',16,'DMSemibold'),('Texto / DM Sans 400','16 px','1,60','Informação clara, com espaço para cada história.',11,'DM'),('Legenda / DM Sans 400','14 px','1,60','Acentos, nomes longos e diferentes celebrações.',10,'DM')]
y=363
for label,size,leading,sample,ps,font in rows:
    text(M,y,label,9,'DMMedium','text-muted');text(M+147,y,size,9,'DM','text-muted');text(M+216,y,'/'+leading,9,'DM','text-muted');text(M+274,y-2,sample,ps,font)
    y+=32
text(M,531,'Introdução: 18 px. Botões: 16 px / 600. Notas legais: 13 px. Texto corrido até 64ch.',9,'DM','text-muted')
finish()

page(3,'ESPAÇOS E FORMAS','Espaço na medida certa.','Ritmo consistente, margens proporcionais e cantos suavemente arredondados.')
values=[4,8,12,16,24,32,48,64,80]
for i,value in enumerate(values):
    x=M+i*CW/9
    box(x,252-value*.75,44,value*.75,'primary',1.5)
    text(x,267,str(value)+' px',11,'DMMedium')
rule(303)
cols=[M,M+CW*.4,M+CW*.61,M+CW*.82]
for x,label in zip(cols,['Layout','Telemóvel','Tablet','Desktop']):text(x,323,label,11,'DMSemibold')
for j,(label,a,b,d) in enumerate([('Margem lateral','20 px','24 px','32 px'),('Secção vertical','48 px','64 px','80 px'),('Gap e padding de cartão','16 px','24 px','24 px')]):
    y=351+j*26
    for x,value in zip(cols,[label,a,b,d]):text(x,y,value,11,'DM','text-muted' if x==M else 'text')
text(M,435,'Conteúdo máximo: 1120 px, centrado. Reagrupar colunas sem reduzir a fonte.',10,'DM','text-muted')
for i,(radius,title,sub) in enumerate([(6,'8 px','Botões e campos'),(9,'12 px','Pequena superfície'),(12,'16 px','Cartões e imagens'),(18,'Cápsula','Etiqueta pequena')]):
    x=M+i*CW/4
    box(x,467,86,38,'primary-soft',radius)
    text(x+14,479,title,12,'DMMedium','primary')
    text(x,516,sub,10,'DM','text-muted')
finish()

page(4,'CONTROL0S E ESTADOS'.replace('0','O'),'Clareza em cada interação.','Amostras de estilo. Altura mínima de 48 px, botões com raio de 8 px e foco sempre visível.')
button_w=154
for i,(label,bg,fg,border) in enumerate([('Ação principal','primary','on-primary',None),('Secundária','surface','primary','primary'),('Hover','primary-hover','on-primary',None),('Pressionado','primary-active','on-primary',None)]):
    x=M+i*(CW+16)/4
    box(x,190,button_w,36,bg,6,border)
    text(x+17,202,label,12,'DMSemibold',fg)
text(M,251,'Borda decorativa',10,'DMMedium');rule(274,M,half,'border')
text(M+half+24,251,'Borda essencial de campo',10,'DMMedium');rule(274,M+half+24,half,'border-control')
text(M,299,'Nome do casal',10,'DMMedium')
box(M,320,half,36,'surface',6,'border-control');text(M+12,332,'Ex.: Inês e Rafael',12,'DM','text-muted')
c.setStrokeColor(color('focus'));c.setLineWidth(2.25);c.roundRect(M-4.5,H-360.5,half+9,45,8,fill=0,stroke=1)
text(M+half+24,299,'Campo com erro',10,'DMMedium')
box(M+half+24,320,half,36,'surface',6,'danger');text(M+half+36,332,'Amostra de validação',12,'DM','text-muted')
text(M+half+24,369,'Preencha este campo para continuar.',10,'DM','danger')
feedback=[('Sucesso','success','Operação concluída.'),('Atenção','warning','Informação a rever.'),('Erro','danger','Explique como corrigir.'),('Informação','info','Orientação contextual.')]
for i,(label,key,detail) in enumerate(feedback):
    x=M+i*(CW+12)/4
    box(x,411,(CW-36)/4,65,key+'-soft',6)
    text(x+12,424,label,12,'DMSemibold',key);text(x+12,447,detail,10,'DM',key)
lines(M,501,['Divisórias: 1 px pedra. Campos: 1 px oliva médio. Foco: 3 px terracota + 3 px de afastamento.','Sem sombra por padrão. Movimento discreto em 120-180 ms, respeitando redução de movimento.'],10,17,ink='text-muted',width=CW)
finish()

page(5,'CONSISTÊNCIA','Uma referência para crescer.','Brasil e Portugal agora. A mesma base visual preparada para novos mercados.')
box(M,185,CW*.43,324,'primary',12)
text(M+24,210,'IDENTIDADE DA PLATAFORMA',9,'DMMedium','on-primary')
lines(M+24,251,['O vosso dia.','À vossa maneira.'],32,39,'Fraunces','on-primary')
lines(M+24,375,['Verde profundo + marfim.','Fraunces + DM Sans.','Acolhimento com clareza.'],11,20,'DM','on-primary')
x=M+CW*.43+30
width=CW*.57-30
rules=[('Uma base central','STYLE_GUIDE.md define as regras; tokens.css define os valores. Atualizar ambos quando a identidade mudar.'),('Contraste e leitura','36 pares verificados. Texto normal: mínimo 4,5:1. Limites e foco essenciais: mínimo 3:1. Isso não é uma auditoria completa da futura página.'),('Expansão internacional','pt-BR e pt-PT com a mesma identidade. Novos alfabetos terão fontes adequadas, mantendo funções e hierarquia.'),('Personalização dos casais','Esta é a marca MyWedding. Temas dos futuros sites dos casais poderão ter identidades próprias.')]
y=187
for title,detail in rules:
    text(x,y,title,12,'DMSemibold','primary')
    y=lines(x,y+22,[detail],10,16,ink='text-muted',width=width)+15
text(M,530,'Referências: Minted, Riley & Grey, Joy, Google Fonts e W3C. Fontes e regras completas no guia editável.',9,'DM','text-muted')
finish()
c.save()
FONT_TEMP.cleanup()
print(OUT)
