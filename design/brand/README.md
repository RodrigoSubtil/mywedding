# Assinatura MyWedding

Refinamento autorizado por Rodrigo em 15/10/2026: integrar a folha ao nome, estudando posição e tipografia; manter o ponto final terracota. [Fonte central](../STYLE_GUIDE.md).

A [assinatura vetorial](mywedding.svg) usa os contornos da Fraunces 500 licenciada localmente. A folha substitui o ponto do “i”; o ponto final permanece. Foram preparados estudos ao lado, acima e integrado; a composição integrada mantém o nome compacto. Depois de ver a captura, Rodrigo confirmou que gostou da logo com “essas falhas no meio”. Os pequenos recortes são preservados pelo preenchimento `evenodd`, igualando SVG e exportação PDF. Não estender esse tratamento às letras da interface.

[Ferramenta de preparação](../../scripts/prepare_brand_assets.py), [estudo de composições](../../output/previews/estudo-logo.html) e [manifesto](../../output/reports/brand-assets.json). A cópia pública fica em `public/brand/mywedding.svg`; o componente `Brand` é partilhado pelo cabeçalho, rodapé e páginas de acesso. O favicon usa a mesma folha. A folha não serve de ícone para recursos ou tarefas.

Fonte original e licença em [fonts](../fonts/OFL-Fraunces.txt). A preparação precisa de FontTools e Pillow apenas no ambiente Python; não adiciona bibliotecas à aplicação.

## Kit reutilizável

Pedido de Rodrigo em 15/10/2026: guardar a logo em SVG sem fundo, preparar outras formas/combinações coerentes com o site e documentar as mudanças. O desenho aprovado continua a fonte; as versões abaixo alteram aplicação e cor, preservando letras, folha, ponto e recortes.

[Baixar o kit ZIP](../../output/brand/MyWedding-Brand-Kit.zip) · [Catálogo visual](../../output/brand/catalogo.png) · [Manifesto de origem e hashes](../../output/reports/brand-kit.json) · [Verificação](../../output/reports/verificacao-brand-kit.json).

| SVG | Aplicação | Fundo recomendado |
| --- | --- | --- |
| [Principal](variants/mywedding.svg) | Assinatura usada no site, verde + terracota | Marfim, branco ou areia |
| [Inversa](variants/mywedding-inversa.svg) | Assinatura marfim | Verde profundo ou fundo escuro com contraste verificado |
| [Verde](variants/mywedding-verde.svg) | Impressão/aplicação em uma cor | Claro |
| [Terracota](variants/mywedding-terracota.svg) | Aplicação de uma cor de acento | Marfim ou branco |
| [Branca](variants/mywedding-branca.svg) | Aplicação em uma cor clara | Verde profundo ou escuro |
| [Carvão](variants/mywedding-carvao.svg) | Aplicação neutra em uma cor | Claro |
| [Símbolo terracota](variants/simbolo.svg) | Espaço pequeno com identidade já apresentada | Claro |
| [Símbolo verde](variants/simbolo-verde.svg) | Espaço pequeno, em uma cor | Claro/sálvia |
| [Símbolo branco](variants/simbolo-branco.svg) | Espaço pequeno, em uma cor clara | Verde/escuro |
| [Ícone de aplicação](variants/icone-app.svg) | Avatar ou ícone com fundo verde intencional | Conforme o suporte |
| [Assinatura pt-BR](variants/assinatura-pt-BR.svg) e [inversa](variants/assinatura-pt-BR-inversa.svg) | Nome + frase de apoio da landing brasileira | Claro / verde |
| [Assinatura pt-PT](variants/assinatura-pt-PT.svg) e [inversa](variants/assinatura-pt-PT-inversa.svg) | Nome + frase de apoio da landing portuguesa | Claro / verde |

Há 14 SVGs e 14 PNGs RGBA correspondentes. Os [PNGs](../../output/brand/png/mywedding.png) ficam em `output/brand/png/`: nome com 1600 px de largura, assinaturas com 1920 px e símbolos/ícone com 1024 px. O catálogo apresenta fundos de exemplo; as logos têm fundo transparente, incluindo nervura da folha e recortes. A única versão com fundo próprio é `icone-app`.

Os SVGs contêm contornos vetoriais, sem fontes, imagens ligadas ou serviços externos necessários à abertura. As assinaturas reutilizam as frases de `src/i18n/messages/`; não constituem nova promessa comercial. O ZIP contém SVG, PNG, catálogo, instruções, manifesto, verificação e licenças Fraunces/DM Sans.

## Regras de uso

- Preservar proporções, recortes das letras, folha no “i” e ponto final. Não usar uma fonte digitada para imitar a assinatura exportada.
- Largura mínima recomendada de 120 px para o nome e 20 px para o símbolo; a área de toque de links continua com mínimo de 44 px. Em espaços menores, usar símbolo/ícone.
- Manter ao menos 8 px de respiro externo na aplicação do cabeçalho, reutilizando os espaçamentos do guia. Não encostar a marca a texto ou controlos.
- A versão principal é para fundos claros. Sobre verde/escuro, usar inversa ou branca; o terracota original não tem contraste suficiente sobre verde profundo.
- Não acrescentar sombras, gradientes, contornos, esticamentos, rotação ou outras cores. Fotografias exigem área sólida/contraste conferido.
- A folha isolada identifica a marca em espaços pequenos. Recursos e tarefas continuam com os ícones semânticos correspondentes.

## Origem, conservação e regeneração

O master é [mywedding.svg](mywedding.svg); a cópia pública servida pela aplicação fica em `public/brand/mywedding.svg`. A [referência aprovada](reference/mywedding-aprovada-2026-10-15.svg) guarda o ficheiro anterior à normalização da nervura para transparência real. Os contornos das letras são comparados automaticamente e permanecem iguais.

Usar [export_brand_kit.py](../../scripts/export_brand_kit.py), [render_brand_kit.mjs](../../scripts/render_brand_kit.mjs) e [package_brand_kit.py](../../scripts/package_brand_kit.py), nessa ordem. FontTools/Pillow e Sharp pertencem ao ambiente de ferramentas, sem novas dependências da aplicação. O preparador inicial preserva o master depois da aprovação; não redesenha silenciosamente a assinatura. Alterar o master conscientemente e regenerar os derivados, nunca editar PNG como fonte.

## Mudanças documentadas

- Logo: Fraunces 500 em contornos, folha no ponto do “i”, ponto final terracota e pequenos recortes aprovados por Rodrigo; assinatura partilhada entre cabeçalho, rodapé e acesso.
- Ícones: folha retirada dos recursos genéricos; paleta, lápis, envelope, localização, confirmação, lista, taças, código, design, contacto e acesso conforme o assunto.
- Movimento: entradas únicas de até 8 px/180 ms, sequência 0/120/240 ms dos modelos no desktop e sem espera no móvel; feedback de foco/hover, menus, FAQ e estados. Redução de movimento desativa os efeitos.
- Landing: revisão pt-BR/pt-PT, alinhamentos, prévia em 320 px, preservação do scroll ao trocar idioma e foco na demonstração.
- Acesso: entrar/criar conta somente frontend, com validação local e mensagens que não alegam autenticação, conta criada ou envio.
- Assets: kit transparente, versões inversas/monocromáticas, símbolos, assinaturas locais, catálogo, licenças, hashes e ZIP.

O detalhe dos cenários executados e limites está na [revisão da landing](../../docs/governanca/REVISAO_LANDING_2026-10-15.md). Build, ficheiros locais e estudos visuais não equivalem a publicação, autenticação real ou núcleo do produto implementado.
