# MyWedding style guide

Versão 1, definida em 15 de outubro de 2026. Referência visual central para a landing page e para a evolução da plataforma. O lançamento foca Brasil e Portugal; a estrutura deve permitir expansão internacional.

A identidade combina uma base de papel claro, verde profundo, terracota e tipografia editorial. O objetivo é apresentar um serviço pessoal, elegante e fácil de compreender. A personalidade aparece nos títulos e detalhes; textos, ações e informações precisam de clareza constante.

Este guia define a identidade da plataforma MyWedding. Os futuros sites dos casais poderão ter temas próprios dentro de um sistema de personalização; a identidade comercial da plataforma não deve impor a mesma estética a todos os casamentos.

## Referência e manutenção

- `STYLE_GUIDE.md` define funções, combinações e regras de aplicação.
- `tokens.css` é a fonte de verdade dos valores visuais reutilizáveis.
- `style-guide.html` apresenta amostras reais; é uma prancha de referência, sem landing page ou produto implementados.
- [Prancha PDF](../output/pdf/MyWedding-Style-Guide-v1.pdf) é a referência em cinco páginas para revisão visual e partilha.
- [Relatório de contraste](../output/reports/contrast-report.json) regista os pares autorizados; é um derivado dos tokens.

Toda criação deve partir dos tokens. Uma nova necessidade deve reutilizar um valor existente ou justificar uma extensão do sistema. Mudanças na base precisam atualizar guia, tokens e amostras na mesma etapa. Evitar folhas de estilo com paletas e escalas concorrentes.

## Direção visual

O estudo identifica a importância de personalização, identidade coerente e experiência simples. A Minted enfatiza a continuidade entre site e papelaria; a Riley & Grey combina design e facilidade; a Joy apresenta organização e experiência do casal. A escolha abaixo é uma interpretação própria para o MyWedding, sem copiar os seus materiais. [Minted](https://www.minted.com/lp/wedding-websites), [Riley & Grey](https://www.rileygrey.com/), [Joy](https://withjoy.com/).

A expressão desejada é acolhedora, elegante, serena e contemporânea. Usar espaços proporcionais, composição organizada e poucos destaques por secção. O verde será a assinatura das ações e o terracota acrescentará calor. Fotografias, quando a landing for construída, devem mostrar momentos e pessoas de forma natural, com diversidade de casais e celebrações.

Esta é a referência visual v1 definida para o projeto; usar esta identidade nas criações. A sua eficácia com casais ainda precisa de validação: as fontes consultadas não demonstram que uma cor ou fonte específica aumenta conversão. Avaliar compreensão, confiança percebida e facilidade para encontrar a ação principal.

## Cores

### Paleta principal e neutros

| Papel | Cor | Valor | Aplicação |
| --- | --- | --- | --- |
| Fundo principal | Marfim | `#FBF8F3` | Base da página e áreas de leitura |
| Superfície | Branco | `#FFFFFF` | Campos, cartões que precisam de separação e pequenas superfícies |
| Fundo alternativo | Areia | `#F0EBE2` | Alternância discreta de secções e áreas secundárias |
| Texto principal | Carvão verde | `#252A25` | Texto, títulos e informação essencial |
| Texto secundário | Cinza oliva | `#646B62` | Explicações e legendas sobre marfim, branco ou areia |
| Marca e ação | Verde profundo | `#354C42` | Botão principal, links, títulos pontuais e área final escura |
| Apoio de marca | Sálvia clara | `#E7EDE6` | Fundo de destaque suave, com texto verde profundo |
| Acento | Terracota | `#9C543E` | Pequenos destaques editoriais, foco e detalhes |
| Apoio do acento | Pêssego claro | `#F5E5DE` | Pequena área editorial, com texto carvão ou terracota |
| Divisória | Pedra clara | `#DEDCD3` | Linhas e bordas decorativas |
| Borda de controlo | Oliva médio | `#888D83` | Limite visível de campos e controlos |

Usar as superfícies claras como maioria visual, verde nos elementos que orientam a ação e terracota com parcimónia. Como ponto de partida de composição, cerca de 75% de bases claras, 20% de verde e 5% de terracota, sem contar fotografias. Essa proporção é orientação visual, não uma regra de medição por pixel.

Cada secção deve ter um destaque dominante. A ação principal mantém o verde em toda a landing; não alternar a cor do botão principal conforme o fundo. O terracota não deve disputar atenção com essa ação.

### Estados e pares

| Elemento | Normal | Hover | Pressionado | Conteúdo |
| --- | --- | --- | --- | --- |
| Ação principal | `#354C42` | `#293E34` | `#203229` | Branco |
| Acento, quando interativo | `#9C543E` | `#864633` | `#713B2C` | Branco se preenchido |
| Ação secundária | Transparente ou branco | Sálvia clara | Sálvia clara | Verde profundo e borda verde |
| Desativado | Areia | Sem mudança | Sem ação | Cinza oliva e indicação semântica de desativado |

Combinações preferidas: carvão sobre marfim; carvão sobre branco; verde sobre sálvia; terracota sobre pêssego; branco sobre verde. No pêssego, usar carvão ou terracota no texto, evitando cinza oliva. Em áreas verdes escuras, usar branco nos textos e marfim no foco; terracota não tem contraste suficiente contra verde profundo.

Links no corpo têm sublinhado permanente, com afastamento discreto. Estados e feedback precisam de texto ou ícone identificável, além da cor. Não usar transparência para tornar o texto principal mais claro.

### Cores funcionais

| Estado | Texto e ícone | Fundo | Exemplo de significado |
| --- | --- | --- | --- |
| Sucesso | `#276345` | `#E7F1EA` | Operação concluída |
| Atenção | `#795415` | `#FAF0D9` | Informação que precisa de revisão |
| Erro | `#A2373A` | `#F9E9E8` | Campo inválido ou falha |
| Informação | `#315D7A` | `#E8F0F7` | Orientação contextual |

Essas cores existem para estados reais. Não distribuir azul, amarelo e vermelho pelas secções da landing como decoração. Terracota é cor de marca e não substitui vermelho de erro.

### Contraste

Os pares de texto definidos usam como mínimo 4,5:1; bordas essenciais de campos e indicadores usam 3:1. São critérios de contraste da WCAG, não uma certificação completa de acessibilidade da futura página. [Texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [controlos e gráficos](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

| Par verificado | Contraste aproximado |
| --- | ---: |
| Carvão sobre marfim | 13,80:1 |
| Cinza oliva sobre marfim | 5,19:1 |
| Branco sobre verde profundo | 9,28:1 |
| Verde profundo sobre sálvia | 7,80:1 |
| Terracota sobre marfim | 5,28:1 |
| Terracota sobre pêssego | 4,57:1 |
| Borda de controlo sobre marfim | 3,21:1 |

Os cálculos usam os valores completos antes de arredondar. A divisória clara é decorativa e não serve como único limite de campos ou indicador de estado. Texto sobre fotografia exige avaliar a imagem concreta e o contraste local; preferir uma área sólida para a informação essencial.

## Tipografia

Usar **duas famílias**, com funções estáveis. Fraunces traz expressão aos títulos; DM Sans mantém consistência na leitura e nas ações. Não acrescentar uma terceira fonte manuscrita para representar romance.

| Família | Função | Pesos utilizados |
| --- | --- | --- |
| Fraunces | Título principal, títulos de secção e detalhes editoriais curtos | 400 normal; 500 quando houver necessidade de ênfase |
| DM Sans | Parágrafos, navegação, botões, campos, listas, preços, subtítulos de cartões e legendas | 400 leitura; 500 navegação e rótulos; 600 ações e ênfase |

As duas famílias têm conjuntos latinos estendidos nos metadados oficiais e estão sob SIL Open Font License. Os ficheiros locais originais e as licenças estão em `fonts/`. Testar acentos e nomes reais na implementação. Outros alfabetos exigirão famílias adequadas ao idioma, mantendo a hierarquia de funções; não presumir cobertura mundial dessas duas fontes. [Fraunces](https://github.com/google/fonts/blob/main/ofl/fraunces/METADATA.pb), [DM Sans](https://github.com/google/fonts/blob/main/ofl/dmsans/METADATA.pb).

A prancha local funciona sem serviços externos de fontes. O PDF incorpora instâncias dos pesos utilizados. O manifesto em `fonts/manifest.json` guarda os hashes dos originais; o exportador está em [scripts/export_style_guide.py](../scripts/export_style_guide.py) e usa ReportLab e FontTools. O uso e as dependências estão em [Ferramentas](../scripts/README.md). Ao regenerar a prancha, manter as licenças junto dos ficheiros redistribuídos.

### Hierarquia

Valores em px são referências para tamanho de raiz padrão de 16 px; os tokens usam rem e tamanhos fluidos, respeitando as preferências de leitura.

| Uso | Família e peso | Telemóvel | Desktop | Entrelinha |
| --- | --- | ---: | ---: | ---: |
| Título principal H1 | Fraunces 400 | 36 px | Até 56 px | 1,12 |
| Título de secção H2 | Fraunces 400 | 28 px | Até 40 px | 1,20 |
| Subtítulo H3 e cartão | DM Sans 600 | 22 px | Até 24 px | 1,20 |
| Introdução curta | DM Sans 400 | 18 px | 18 px | 1,60 |
| Texto e campo | DM Sans 400 | 16 px | 16 px | 1,60 |
| Botão | DM Sans 600 | 16 px | 16 px | 1,25 |
| Navegação e rótulo | DM Sans 500 | 14–16 px | 14–16 px | 1,25–1,60 |
| Legenda útil | DM Sans 400 | 14 px | 14 px | 1,60 |
| Nota legal curta | DM Sans 400 | 13 px | 13 px | 1,60 |

Usar um H1 por página e uma hierarquia sem saltos arbitrários. A assinatura MyWedding usa Fraunces 500, com folha integrada ao ponto do “i” e ponto final terracota preservado. Rodrigo autorizou estudar posição/tipografia e integrar a folha ao nome em 15/10/2026, pedindo manter o ponto final. A fonte vetorial está em [design/brand](brand/README.md); não acrescentar uma folha solta a cada secção.

A assinatura é um SVG próprio derivado da fonte licenciada, com eixos fixados em peso 500, tamanho óptico 24, SOFT 50 e WONK 1. Usar a mesma composição no cabeçalho, rodapé e acesso, com área de toque mínima de 44 px. A largura usa `--mw-brand-width`, proporcional ao H3 existente; não comprimir o SVG ou recortar a folha. O nome acessível continua “MyWedding”. O favicon usa o mesmo desenho da folha isolado, em contraste marfim/verde.

Rodrigo aprovou visualmente a apresentação com pequenos recortes nas letras (“essas falhas no meio”). Preservar essa aparência no SVG com a regra de preenchimento `evenodd`, inclusive nas exportações. Não corrigir esses recortes como defeitos nem aplicar o efeito à tipografia do restante site.

O [kit da marca](brand/README.md#kit-reutilizável) reúne SVGs transparentes, PNGs, versões inversas/monocromáticas, símbolo, ícone e assinatura com frase de apoio em pt-BR/pt-PT. Os fundos no catálogo ilustram aplicações; só o ícone de aplicação tem fundo próprio. Reutilizar as cores existentes dos tokens. Os contornos das letras, folha e ponto da assinatura aprovada não mudam entre variantes.

Manter texto corrido até 64 caracteres aproximados por linha (`64ch`). Títulos principais podem ocupar duas ou três linhas. Não forçar quebras de linha que prejudiquem o telemóvel ou traduções. Reservar tracking negativo discreto aos títulos; texto corrido usa espaçamento normal. Maiúsculas ficam limitadas a etiquetas curtas, com 14 px e tracking de 0,06em.

## Espaçamentos e composição

A escala parte de 4 px e usa poucos valores. Os valores maiores existem para separar grupos e secções; não devem transformar cada componente num bloco excessivamente vazio.

| Espaço | Uso predominante |
| ---: | --- |
| 4 px | Ícone e detalhe muito próximo |
| 8 px | Rótulo e campo; ícone e texto |
| 12 px | Pequenos grupos; título e descrição curta |
| 16 px | Elementos relacionados; padding de cartão no telemóvel |
| 24 px | Grupos de conteúdo; padding de cartão no desktop; colunas |
| 32 px | Blocos dentro de uma secção; margem desktop |
| 48 px | Separação de secções no telemóvel |
| 64 px | Separação em tablet e composição de abertura |
| 80 px | Separação de secções no desktop |

### Layout responsivo

| Regra | Até 767 px | 768–1023 px | A partir de 1024 px |
| --- | --- | --- | --- |
| Margem lateral | 20 px | 24 px | 32 px |
| Espaço vertical de secção | 48 px | 64 px | 80 px |
| Gap de grelha | 16 px | 24 px | 24 px |
| Padding de cartão | 16 px | 24 px | 24 px |
| Conteúdo máximo | Largura disponível | Largura disponível | 1120 px, centrado |

Os 20 px laterais são uma exceção explícita para preservar área útil em ecrãs pequenos. Colunas devem empilhar quando o conteúdo não couber com conforto, sem encolher a fonte. Não definir alturas fixas para secções ou cartões de texto. Permitir que rótulos e botões acomodem texto mais longo em traduções.

Agrupar título → descrição com 12–16 px; descrição → ação com 24 px; cartão → cartão com 16–24 px. Uma secção com título, parágrafo e demonstração usa hierarquia de espaços, sem aplicar 48 px entre todos os elementos. A futura landing deve permanecer equilibrada em 360 px e 1440 px, com verificação de zoom e navegação por teclado.

## Bordas, cantos e profundidade

| Elemento | Raio | Borda | Profundidade |
| --- | ---: | --- | --- |
| Botão e campo | 8 px | 1 px quando necessária | Sem sombra |
| Pequena superfície flutuante | 12 px | 1 px pedra | Sombra flutuante só quando houver sobreposição |
| Cartão, imagem e painel | 16 px | 1 px pedra quando a separação for necessária | Sem sombra por padrão |
| Etiqueta pequena | 999 px | Opcional | Sem sombra |
| Secção e estrutura da página | 0 px | Divisória opcional | Sem sombra |

A forma padrão é retangular com cantos suavizados. Usar cápsulas apenas em etiquetas pequenas; botões principais mantêm raio de 8 px. Não arredondar todas as secções nem acrescentar molduras a cada parágrafo.

As linhas decorativas usam `#DEDCD3`, com 1 px. Campos usam `#888D83`, também com 1 px, para que o limite seja visível. Um estado selecionado pode usar borda de 2 px, texto e marcador, reservando espaço para evitar saltos no layout.

Não combinar borda forte, sombra, fundo colorido e ornamento no mesmo cartão. A sombra suave é `0 4px 16px` com carvão a 6%; a flutuante é `0 8px 24px` a 10%. Manter a maioria das superfícies plana. Dourado metálico, brilho e gradientes não integram a identidade v1.

## Amostras de componentes

As amostras da prancha documentam estados; não são funcionalidades de produto.

**Botão principal:** fundo verde, texto branco DM Sans 600, 16 px, altura mínima de 48 px, padding horizontal de 24 px e raio de 8 px. Uma ação principal por grupo. Hover e pressionado escurecem o fundo, sem aumentar o tamanho do botão.

**Botão secundário:** texto e borda verdes, fundo transparente ou branco, mesmas dimensões do principal. Hover usa sálvia. Ações compactas podem ter 44 px de altura; não reduzir a área de toque abaixo disso como padrão do projeto.

**Campo:** fundo branco, texto 16 px, altura mínima de 48 px e padding horizontal de 16 px. Rótulo visível acima com 8 px de intervalo. Placeholder não substitui o rótulo. Em erro, mostrar borda vermelha e mensagem explicativa ligada ao campo.

**Foco:** contorno terracota de 3 px com offset de 3 px sobre fundos claros. Em área verde escura, usar marfim. Não remover o foco nem o esconder sob elementos fixos.

**Cartão:** fundo branco ou claro, raio de 16 px, padding de 24 px no desktop e 16 px no telemóvel. Título em DM Sans 600, descrição em DM Sans 400 e uma função clara por cartão.

**Movimento:** mudanças de cor e contorno em 120–180 ms. Respeitar redução de movimento. Evitar parallax, animação contínua ou movimentos que dificultem leitura e decisão.

Na landing, usar entradas únicas abaixo da primeira dobra com até 8 px em 180 ms, sequência de 120 ms entre modelos no desktop e sem espera no móvel. As interações usam os mesmos tempos para setas, menus, FAQ e estados. Conteúdo permanece legível sem JavaScript; redução de movimento desativa animações e transições. O mapa por assunto e a execução ficam em [Assets e interações](../docs/landing/03_ASSETS_E_INTERACOES.md).

## Aplicação internacional e consistência

Usar a mesma identidade em pt-BR e pt-PT, com adaptação da linguagem. País não deve ser representado apenas por uma bandeira de idioma. Nomes, rótulos e conteúdo precisam de espaço para variação e expansão. Datas e valores devem ser formatados por localidade, sem serem incorporados como imagens.

Na expansão, a estrutura visual mantém cores, ritmo e funções tipográficas; fontes por sistema de escrita devem ser escolhidas e testadas. Layouts precisam aceitar direção RTL quando essa cobertura entrar no produto. Não anunciar suporte implementado antes dos testes correspondentes.

Antes de concluir uma criação, verificar:

1. Valores e funções correspondem aos tokens; exceções foram documentadas.
2. Há uma ação visual dominante por grupo e leitura clara da hierarquia.
3. Texto corrido usa 16 px ou mais; notas pequenas são realmente secundárias.
4. Pares de texto, controlos e foco mantêm o contraste adequado.
5. Bordas e cantos seguem a escala; sombras têm função concreta.
6. Layout reagrupa sem cortes, sobreposição ou espaços excessivos.
7. pt-BR, pt-PT, acentos, nomes longos e estados essenciais estão legíveis.

## Histórico

| Data | Versão | Mudança |
| --- | --- | --- |
| 15/10/2026 | 1 | Identidade base, tokens, fontes locais, contraste, espaçamentos e bordas definidos para Brasil e Portugal, com preparação internacional |
| 15/10/2026 | 1, refinamento | Pedido de Rodrigo: folha integrada à assinatura com ponto final terracota, ícones por assunto e movimento discreto; paleta e famílias preservadas |
