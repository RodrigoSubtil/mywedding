# MyWedding estudo de mercado e estratégia inicial

Pesquisa de referência em 14 de outubro de 2026. Projeto de Rodrigo e da sua esposa. Visão confirmada: plataforma mundial para os casais criarem e personalizarem o próprio site, com evolução para uma solução completa de casamento.

**Decisão posterior, 15/10/2026:** lançamento inicial focado em Brasil e Portugal, com preparação para expansão mundial. O [style guide](../../design/STYLE_GUIDE.md) já existe; a landing é a próxima construção. Esta decisão substitui recomendações de estreia mundial nesta pesquisa; os fatos de mercado preservam a data da consulta.

**Direção operacional posterior, 15/10/2026:** Rodrigo é engenheiro de software e a esposa é designer; são os donos e construtores. O início será apenas pelos dois, sem contratação, com meta de desembolso adicional zero e divulgação gradual e orgânica no Instagram. Parcerias são uma intenção futura. Os cenários pagos anteriores ficam como histórico; a base atual é [Operação sem investimento inicial](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md). Preço ao cliente e modelo de receita continuam por validar.

**Decisão técnica posterior, 15/10/2026:** Rodrigo aprovou a arquitetura modular e a stack detalhadas em [Arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md), começando pela landing estática com React/Next.js, TypeScript e os tokens existentes. A aprovação não altera automaticamente preços, funcionalidades comerciais, cronograma ou evidência de mercado deste estudo. A aplicação permanece por implementar.

A oportunidade mais promissora para testar é reunir personalização visual, organização de convidados e comunicação internacional numa experiência simples. O site serve de entrada; a utilidade contínua vem de ajudar o casal e os convidados a saber o que fazer, onde estar e como responder. A proposta precisa funcionar economicamente mesmo antes de existir uma lista de presentes com pagamentos integrados.

O mercado já tem alternativas gratuitas fortes. Para conquistar clientes, o MyWedding precisa demonstrar uma vantagem concreta, como gerir um casamento com vários eventos, idiomas e famílias sem obrigar os convidados a instalar uma aplicação. Apenas oferecer mais modelos de site dificilmente será uma diferenciação suficiente.

## Como interpretar esta base

- **Confirmado pelo fundador:** ambição mundial, Brasil e Portugal como mercados iniciais, criação de sites pelos próprios casais e início exclusivamente com Rodrigo, engenheiro de software, e esposa, designer; ambos donos e construtores, sem contratações nem desembolso adicional, com Instagram orgânico e parcerias futuras.
- **Fato público:** informação publicada nas páginas oficiais ligadas ao texto. Preços são uma fotografia da consulta, em moedas originais, e podem variar por país, período, impostos, promoção e checkout.
- **Análise:** interpretação das ofertas e das necessidades que elas procuram resolver.
- **Hipótese para testar:** proposta de preço, segmento, prazo, orçamento ou meta do MyWedding. Nenhuma dessas propostas é uma decisão já tomada por vocês.

Foram consultadas páginas de produto, preços, suporte, estatísticas oficiais e documentação técnica. Os preços dinâmicos do iCasei e Say I do também foram observados no navegador. Não foram comprados planos nem realizados testes completos dentro das contas dos concorrentes. Uma funcionalidade anunciada não equivale a uma integração testada. As páginas comerciais também não permitem concluir qual é o backend de cada empresa.

## O mercado que estamos a entrar

Há pelo menos cinco mercados relacionados:

| Camada | O que o cliente procura | Quem costuma pagar |
| --- | --- | --- |
| Site e convite digital | Apresentar o casamento, publicar informações e receber respostas | Casal, por pacote ou extras |
| Organização | Convidados, mesas, orçamento, tarefas e colaboração | Casal ou profissional organizador |
| Presentes | Lista de produtos, dinheiro ou experiências | Casal, convidado, lojista ou parceiro, conforme o modelo |
| Descoberta de fornecedores | Encontrar local, fotografia, catering e outros serviços | Fornecedor, por publicidade, contacto comercial ou assinatura |
| Serviços e comércio | Montagem assistida, papelaria, álbuns, viagens | Casal ou convidado |

O MyWedding pode chegar às cinco camadas, mas cada uma acrescenta operações diferentes. Um marketplace exige oferta local e vendas a fornecedores; presentes exigem conciliação e parceiros financeiros; papelaria exige produção e logística. O editor de sites é apenas uma parte desse negócio.

### Dimensão e limites dos números

| Indicador | Dado publicado | Como usar |
| --- | --- | --- |
| União Europeia | Aproximadamente 1,7 milhões de casamentos em 2024 | Dimensão demográfica aproximada; estimativa do Eurostat |
| Brasil | 948.925 casamentos civis em 2024 | Base anual oficial, não quantidade de clientes de sites |
| Estados Unidos | 2.041.926 casamentos em 2023, dados provisórios | Base oficial comparável dentro da série americana |
| Estudo americano de casamentos de 2025 | Média de US$ 34.000 e 117 convidados | Perfil dos respondentes; não preço disponível para gastar num site |

Fontes: [Eurostat](https://ec.europa.eu/eurostat/web/interactive-publications/demography-2026?hl=en-US), [IBGE](https://agenciadenoticias.ibge.gov.br/media/com_mediaibge/arquivos/031ad256f70356ed66b25e4ff01767cc.pdf), [CDC](https://www.cdc.gov/nchs/fastats/marriage-divorce.htm) e [The Knot Worldwide](https://www.theknotww.com/news/the-knot-worldwide-unveils-2026-real-weddings-study-5).

Esses dados têm anos, populações e métodos diferentes. Não devem ser somados e apresentados como o tamanho mundial do mercado em 2026. Casamento civil não significa necessariamente festa, uso de site ou disposição para pagar.

O Global Wedding Report 2025 recolheu respostas de 33.174 casais que se casaram em 2024, em oito países, recrutados através de plataformas e redes sociais do grupo. É útil para identificar diferenças de calendário, convidados e organização; não é um censo mundial. A própria amostra mostrou diferenças importantes entre países e planeamentos que podem durar muitos meses. [Metodologia e resultados](https://www.theknotww.com/news/2025-global-wedding-report).

**Como calcular o mercado do MyWedding:** partir dos casais que conseguimos alcançar, multiplicar pela proporção que precisa da solução e pela proporção disposta a pagar. Separar receita de planos, serviços, profissionais e comissões. O valor total das festas e dos presentes não é receita da nossa plataforma.

Exemplo exclusivamente hipotético: 100.000 casais alcançáveis por ano × 20% com interesse relevante × 10% de conversão paga × €99 de receita líquida por plano = €198.000 anuais antes de custos. Os três primeiros valores ainda precisam de evidência. Este exercício mostra quais variáveis validar; não é uma previsão.

## Referências internacionais para estudar

Esta seleção indica bons exemplos por dimensão do produto. Não é um ranking auditado de qualidade, dimensão ou satisfação. As referências regionais menores ajudam a perceber necessidades locais, sem pressupor que lideram os respetivos mercados.

### Sites e plataformas diretamente comparáveis

| Referência | Oferta e cobrança observadas | Principal aprendizagem para o MyWedding |
| --- | --- | --- |
| [iCasei](https://www.icasei.com.br/planos), Brasil | Na sessão consultada: Basic R$0 por 6 meses, em condição especial; Classic R$79,90 por 3 meses; Black R$149,90 por 3 meses. Presentes: faixas anunciadas de 3,89%–3,79%, 3,85%–3,75% e 3,79%–3,69%, respetivamente. | Combinação de site, presentes, confirmação de presença e serviços de montagem; duração e taxa fazem parte da comparação de preço. |
| [Casar.com](https://www.casar.com/precos-e-servicos/), Brasil | Site gratuito; lista com taxa fixa de 3,89%; endereço personalizado a partir de R$39,90; recordação do site por R$39,90. | Entrada gratuita e monetização por transação e extras. |
| [Wedy](https://wedy.com/planos), Brasil | Grátis ou Premium de R$149,90, anunciado como vitalício. Taxas de presentes de 5,99% e 4,95%. A página inclui RSVP por WhatsApp e opção multi-idiomas. | Comunicação, pacote pago e personalização; uma promessa vitalícia exige financiamento de custos futuros. |
| [Joy](https://withjoy.com/cash-fund-registry/?l=en-AU) | Site, planeamento e lista gratuitos; convites com opções pagas. A integração financeira depende do método escolhido. | Integrar site, lista e experiência do convidado sem criar percursos separados. |
| [Zola](https://www.zola.com/expert-advice/how-much-does-it-cost-to-create-a-wedding-website), EUA | Site gratuito, domínio opcional pago; ecossistema de listas, papelaria e fornecedores. | Uma conta pode organizar várias necessidades e gerar receita em produtos complementares. |
| [The Knot](https://helpcenter.theknot.com/hc/en-us/articles/49532117369364-Are-wedding-websites-on-The-Knot-free-to-use), EUA | Funcionalidades centrais do site gratuitas; domínio como extra. | O site pode ser a porta de entrada para um ecossistema de planeamento e fornecedores. |
| [Minted](https://www.minted.com/ido), EUA | Site gratuito; domínio US$15/ano; montagem assistida US$49 com domínio incluído nessa oferta. | Consistência visual entre site, convite e papelaria, com receita em serviços e produtos. |
| [Riley & Grey](https://www.rileygrey.com/pricing) | US$39/mês ou US$299 por um ano; domínio e convites incluídos. A lista monetária anuncia 2,95%. | Posicionamento premium baseado em design, serviço e experiência cuidada. |
| [Appy Couple](https://www.appycouple.com/pricing/) | Página aberta em USD: US$99/ano ou US$12/mês; domínio normalmente US$19,99/ano à parte. Também apareceu preço regional em GBP nos resultados. | Site, aplicação e convites como conjunto; declarar moeda e renovação com clareza. |
| [WedSites](https://wedsites.com/pricing/) | Em USD: Basic US$39, Standard US$99, Pro US$199, pagamento único, com 6, 12 e 24 meses. RSVP a partir do Standard; ferramentas de planeamento e site multilíngue no Pro. | Escalonar os planos pela complexidade da organização. |
| [Say I do](https://sayi.do/pricing) | Calculadora em EUR: €0 até 20 convidados; €55 até 100 convidados, pagamento único. Domínio e SMS aparecem como extras regionais. | Cobrar de acordo com o tamanho do evento; comunicar separadamente os consumos de mensagens. |
| [Wedew](https://wedew.id/harga), Indonésia | Starter gratuito; Lite Rp50.000; Premium Rp125.000; pacotes com quotas de convidados e WhatsApp de Rp250.000 a Rp1.000.000. | Convite, gestão de convidados e operação na entrada do evento podem formar um produto local completo. |

As prestações mensais do iCasei não foram tratadas como assinatura mensal: os valores acima correspondem ao pacote com duração selecionada. A cobrança do Say I do foi consultada para 100 convidados, não extrapolada para outros tamanhos. Nas tabelas, “pagamento único” não significa necessariamente hospedagem para sempre.

### Plataformas adjacentes e referências regionais

| Referência | Modelo observado | O que estudar |
| --- | --- | --- |
| [Bridebook](https://support.bridebook.com/en/support/bridebook-features-costs) | Planeamento gratuito para casais; [oferta comercial para espaços](https://partners.bridebook.com/uk/pricing/venues?hsLang=en). Não foi confirmado um preço público numérico atual para esses planos. | Ferramentas para fornecedores, gestão de contactos e retorno do investimento. |
| [Hitched e marcas locais da The Knot Worldwide](https://www.theknotww.com/brands/hitched) | Grupo com marcas como Casamentos.pt, Bodas.net e WeddingWire, combinando planeamento e publicidade local. | Uma estratégia mundial pode ter experiências e operação locais; essas marcas não são concorrentes societariamente independentes. |
| [WedMeGood](https://www.wedmegood.com/about_us), Índia | Descoberta de fornecedores, conteúdos e serviços; oferece [convites digitais](https://www.wedmegood.com/wedding-invitations). Sem preço único comparável confirmado. | Categorias específicas de cerimónias e serviços, participação familiar e conteúdo localizado. |
| [Honeyfund](https://info.honeyfund.com/fee-free-cash-registry) | Especialista em fundos e presentes. Anuncia resgates sem taxa através de opções como cartões; as condições variam conforme a saída escolhida. | “Sem taxas” precisa indicar método, país, moeda e forma de resgate; não assumir transferência bancária mundial gratuita. |
| [Weddingday](https://weddingday.jp/), Japão | Convite web gratuito; [recebimento de presentes](https://weddingday.jp/single-faq?faq_id=200) com 0,9% por transferência bancária, 1,9% via serviço ATM especificado e 3,9% por cartão, além das condições de transferência. | Adaptar a experiência ao costume local e ao meio de pagamento. O serviço ATM tem encerramento anunciado para 31/03/2027. |
| [Dot To Dot](https://dottodot.co.za/products/custom-wedding-website-online-rsvp), África do Sul | Montagem assistida, prévia privada gratuita e R999 em ZAR para revisão e lançamento. | Vender o resultado pronto pode ser uma via de receita antes da automação completa. |
| [rsvpful](https://rsvpful.com/), Médio Oriente | Produto em árabe e inglês, com RSVP e comunicação por WhatsApp; gratuito durante a beta. | Escrita da direita para a esquerda, convites familiares e participação de convidados sem dificuldades técnicas. |

### A combinação que merece um protótipo

**Detalhamento posterior, 15/10/2026:** a [pesquisa dos editores e painéis](EDITORES_E_PAINEIS_2026-10-15.md) revê as referências para o pedido de planear o interior da plataforma. A proposta própria está em [Área do casal e editor](../produto/AREA_DO_CASAL_E_EDITOR.md), com [catálogo](../produto/CATALOGO_DE_RECURSOS.md) e [etapas de construção](../planeamento/CONSTRUCAO_DO_PRODUTO.md). O pedido autoriza somente documentação; preserva os fatos/preços datados deste estudo e não aprova todas as funcionalidades ou um protótipo nesta etapa.

Proposta de síntese: edição guiada e identidade coerente; informações e respostas num único lugar; eventos com públicos diferentes; conteúdo em vários idiomas; comunicação escolhida pelo casal; preço previsível; ajuda humana opcional.

As referências servem para aprender padrões. A marca, os modelos, as imagens, os textos e o código do MyWedding devem ser próprios ou devidamente licenciados. “Um pouco de cada” deve traduzir-se em resolver melhor os problemas, sem copiar material protegido.

## Como os concorrentes ganham dinheiro

| Modelo | Vantagem | Limitação para uma equipa de duas pessoas |
| --- | --- | --- |
| Pacote por casamento | Receita inicial e preço compreensível | É preciso reservar dinheiro para servir o cliente durante todo o período contratado |
| Assinatura mensal ou anual | Permite extensão de uso e produtos profissionais | Casais tendem a precisar do produto durante um ciclo finito |
| Comissão sobre presentes | Receita acompanha o volume financeiro | Custos de pagamentos, fraude, reembolso e operação financeira |
| Comércio de produtos e papelaria | Aumenta receita por casamento | Logística, qualidade, devoluções e fornecedores |
| Publicidade ou contactos para fornecedores | Pode financiar a oferta gratuita | Precisa de audiência, oferta local e demonstração de qualidade dos contactos |
| Montagem assistida | Pode gerar caixa cedo e revelar necessidades | Consome horas; exige limite de revisões e escopo claro |
| Plano para wedding planners | Clientes podem gerir vários casamentos ao longo dos anos | Requer permissões, colaboração, suporte e uma proposta profissional própria |

A Zola descreve explicitamente um modelo para fornecedores com perfil gratuito, créditos para estabelecer contacto e planos ilimitados. Isso confirma uma fonte de receita diferente da venda do site. [Zola para fornecedores](https://www.zola.com/faq/360002891772-what-does-it-cost-to-be-listed-on-zola-).

**Recomendação inicial:** testar receita de pacote por casamento e montagem assistida; desenvolver o canal profissional quando o uso pelos casais estiver consistente. Não construir o plano financeiro sobre comissões de presentes ainda não aprovadas por um parceiro financeiro.

### O significado real de grátis

Há quatro situações diferentes: editor gratuito mas publicação paga; site realmente gratuito com extras; site financiado por outras vendas; e lista gratuita para criar, com custos ao pagar ou levantar valores.

A [Zola](https://www.zola.com/faq/115002838152) publica 2,5% no pagamento direto por cartão e uma alternativa Venmo sujeita ao método de financiamento. O [The Knot](https://helpcenter.theknot.com/hc/en-us/articles/9639308058644-Is-the-Cash-Fund-really-free-to-create-and-use) também publica 2,5% no fluxo direto de cartões e alternativa Venmo. Ambos dizem não reter essa taxa de processamento.

Na [ajuda da Joy](https://withjoy.com/help/en/articles/9147313-credit-card-contributions-for-cash-funds), pagamentos por cartão têm taxa variável e transferência com tarifa fixa indicada de US$1,70. O valor de 3,5% aparece como exemplo, não como tarifa universal garantida. Pagamentos externos podem ter taxas do próprio serviço e não são confirmados pela Joy. A página limita o fluxo por cartão a determinadas regiões.

Para o MyWedding, apresentar sempre: preço do plano, validade, renovação, domínio, mensagens, taxa de plataforma, processamento, câmbio e valor líquido a receber. Separar também presente virtual convertido em dinheiro de produto físico realmente entregue.

## O que universal exige no produto

O país do casal, o país do casamento, o idioma de cada convidado, a moeda de cobrança do plano e a moeda dos presentes são dimensões independentes. Um casal residente na Alemanha pode casar em Portugal e receber convidados do Brasil e do Japão.

| Dimensão | Requisito para a base do produto |
| --- | --- |
| Idiomas | Separar interface, conteúdo do casal e mensagens; permitir tradução revista e edição manual |
| Escrita | Unicode, nomes longos, diferentes alfabetos, fontes apropriadas e estrutura preparada para RTL |
| Eventos | Várias cerimónias, dias, locais e listas de pessoas autorizadas por evento |
| Famílias | Convites por pessoa ou grupo, acompanhantes autorizados, crianças e respostas individuais |
| Datas | Fuso do local do evento explícito; formatos locais; exportação correta para calendário |
| Dinheiro | Moeda identificada; regras de arredondamento; cobrança, conversão e repasse separados |
| Comunicação | Email e link partilhável como base; canais locais adicionados conforme demanda e viabilidade |
| Acesso | Uso no telemóvel, ligações lentas, teclado e leitor de ecrã; RSVP sem aplicação obrigatória |
| Privacidade | Visibilidade por evento, convidados não expostos publicamente, retenção e exportação |
| Cultura | Rótulos e sequências configuráveis; não impor um único modelo de família ou celebração |
| Operação | Horários e idiomas de suporte declarados; regras de adiamento, cancelamento e encerramento |

**Plano de alcance global:** aceitar a diversidade na modelação desde a primeira versão e publicar uma matriz honesta de cobertura. Separar “conteúdo suportado”, “interface traduzida”, “suporte humano disponível”, “venda do plano” e “recebimento de presentes”. Não prometer todas as línguas, todos os pagamentos e atendimento 24 horas na estreia.

Para os mercados iniciais, preparar português de Portugal e português do Brasil. Inglês, espanhol e francês são candidatas à expansão, conforme entrevistas. Na evolução técnica, verificar outros alfabetos e RTL; isso não significa anunciar suporte comercial completo antes da respetiva revisão. A estrutura internacional deve acompanhar o foco comercial inicial em Brasil e Portugal.

Como primeiros utilizadores de validação, procurar casais no Brasil e em Portugal, incluindo diferentes dimensões de evento e alternativas gratuitas. Convidados em mais de um idioma, mais de um local e vários eventos continuam como hipóteses de necessidade, sem excluir outros casais desses mercados.

## Problemas que merecem prioridade

As ofertas analisadas apontam para necessidades recorrentes, mas ainda precisamos verificar quais delas geram disposição para pagar no nosso público:

1. Repetir as mesmas informações em mensagens privadas.
2. Não saber quantas pessoas de cada família realmente confirmaram.
3. Convidar pessoas diferentes para cerimónia, jantar e outros eventos.
4. Recolher refeições e necessidades de acessibilidade com discrição.
5. Atualizar horários e locais sem perder a versão correta.
6. Conseguir um site pessoal sem dominar design.
7. Explicar presentes e taxas de forma confortável e transparente.
8. Partilhar o trabalho com o parceiro e com o organizador.
9. Receber apoio quando há um problema perto da data.
10. Guardar ou apagar os conteúdos depois do casamento.

O concorrente também pode ser uma combinação de WhatsApp, folhas de cálculo, Canva e formulário. A vantagem deve aparecer no tempo poupado, na clareza e na redução de erros. Isso precisa de medição em entrevistas e testes, não de uma promessa comercial sem prova.

## Proposta de produto e oferta

Mensagem de posicionamento para testar: **“O vosso casamento, com a vossa identidade. Um lugar para informar, convidar e organizar, onde quer que estejam.”**

A demonstração deve provar três coisas: o casal consegue montar algo com a sua personalidade; cada convidado encontra apenas o que lhe diz respeito; as respostas chegam organizadas ao casal.

### Primeira versão comercial proposta

- Editor por secções, com três famílias visuais próprias, paletas e tipografia selecionadas.
- Site responsivo com história, agenda, locais, deslocações, alojamento, FAQ e links para presentes.
- Dois acessos do casal e possibilidade controlada de convidar um colaborador.
- Convidados individuais e famílias, RSVP por evento e autorização de acompanhantes.
- Idiomas separados e conteúdo traduzível sem duplicar toda a estrutura do site.
- Prévia, publicação, edição e histórico recuperável.
- Importação e exportação de convidados com validação.
- Email transacional, partilha de link e calendário.
- Privacidade, eliminação, exportação, limites de uso e suporte.
- Cobrança do próprio plano, após preparação comercial e fiscal.

Depois: domínio próprio automatizado, mais modelos, montagem assistida bem definida, ferramentas para organizadores, fotos dos convidados, mesas, orçamento e WhatsApp oficial. Presentes processados internamente entram após aprovação do modelo e teste integral dos fluxos financeiros.

Marketplace global, aplicações nativas, produção física própria, editor visual totalmente livre e transmissão de vídeo própria ficam fora do primeiro ciclo. Cada um pode tornar-se uma linha de trabalho independente mais tarde.

### Hipóteses de preços a testar

Os valores abaixo são propostas de pesquisa para o MyWedding, não preços decididos nem cotações de fornecedores. O preço público final deve apresentar os impostos aplicáveis ao cliente.

| Oferta | Hipótese de preço ao consumidor | Escopo a validar |
| --- | --- | --- |
| Experimentar | €0 | Criar e pré-visualizar; testar publicação gratuita limitada numa experiência separada |
| Essencial | €49–€79 por casamento | Site e RSVP, validade definida, subdomínio e limites claros |
| Completo | €99–€149 por casamento | Personalização adicional, colaboração e organização mais avançada |
| Assistido | €249–€499 por casamento | Montagem humana com entregáveis, prazo e número de revisões definidos |
| Profissionais | €29–€79/mês como hipótese inicial | Quantidade definida de casamentos ativos e ferramentas próprias |

Propor 12 meses de uso no Essencial e 24 no Completo, com extensão paga e política explícita para adiamentos. Validar se 12 meses serve o perfil escolhido antes de fechar a oferta. Domínio pode ser separado ou ter um crédito limitado, evitando incluir extensões caras sem controlo.

Não cobrar por acessibilidade ou por exportar os dados pessoais. Se o produto for vendido como internacional, a experiência básica de idioma precisa fazer parte da promessa central. Tradução profissional, colaboração avançada ou automações podem ter valor adicional.

## Economia: base atual e limites da análise

A base atual é zero publicidade paga, zero contratação e meta de zero despesas adicionais de ferramentas e infraestrutura no início, condicionada aos limites gratuitos e ao uso comercial permitido. O tempo de engenharia, design, conteúdo e suporte é investimento dos fundadores. Não é salário contratado nem despesa de caixa automaticamente atribuída a cada venda.

Faturamento não equivale a retirada pessoal. Quando houver vendas, apurar taxas de cobrança, impostos, reservas e custo de servir o contrato completo. A diretriz de não gastar para começar não estabelece gratuidade aos casais. O exemplo de caixa ajustado à operação própria, com todas as hipóteses identificadas, está em [Operação sem investimento inicial](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md#como-calcular-ganhos-neste-modelo).

Os cenários substituídos foram retirados do plano ativo e preservados no [histórico](../historico/CENARIOS_SUPERADOS.md).

## Como vender e apresentar

### Primeiras aquisições

1. **Instagram orgânico:** publicar gradualmente dicas, bastidores e demonstrações produzidos pelos fundadores, sem anúncios ou impulsionamento. Ajustar frequência ao tempo disponível.
2. **Casais do Brasil e de Portugal:** recolher situações concretas, conversar com interessados e formar um pequeno grupo para testes futuros. Convidados internacionais continuam como hipótese de necessidade, sem impor três mercados linguísticos ao lançamento.
3. **Conteúdo útil e visual:** mostrar organização de informações, RSVP e personalização. Identificar o que é demonstração, planeamento ou funcionamento real; não usar testemunhos fictícios.
4. **Landing futura:** colocar o endereço no perfil quando a página estiver publicada, começando com subdomínio gratuito e contacto verificado. Não prometer funcionalidades por implementar.
5. **Indicações espontâneas:** depois de haver satisfação comprovada, convidar clientes a partilhar a experiência, sem assumir recompensa financeira.

**Parcerias futuras:** organizadores, espaços e outros profissionais podem tornar-se canais depois da validação, com responsabilidades e eventual comissão discutidas nessa etapa. Não depender de acordos para começar. Publicidade paga não faz parte da direção atual; só volta ao plano se houver nova decisão dos fundadores.

O estudo americano citado identifica Pinterest como plataforma muito usada para inspiração entre os respondentes e crescimento do TikTok. Isso justifica experiências nesses canais, sem assumir igual comportamento em todos os países. [The Knot Worldwide](https://www.theknotww.com/news/the-knot-worldwide-unveils-2026-real-weddings-study-5).

### Apresentação da página comercial

A direção atual da apresentação está em [Estrutura e conteúdo da landing](../landing/01_ESTRUTURA_E_CONTEUDO.md) e [Assets e interações](../landing/03_ASSETS_E_INTERACOES.md). Essas fontes substituem a sequência comercial genérica do estudo para a primeira construção. A landing começa em pré-lançamento, com demonstrações fictícias identificadas e contacto real; preços, login e criação só são anunciados como disponíveis na etapa funcional correspondente.

### Métricas que interessam

Medir visita → início → primeira prévia útil → publicação → primeiro RSVP → pagamento → uso até ao evento. Acompanhar também minutos de suporte, reclamações, reembolsos, falhas de entrega e receita por casamento.

CAC significa custo de aquisição por cliente pagante. Na operação inicial, medir gasto monetário efetivo e horas comerciais separadamente: divulgação orgânica pode ter desembolso zero e ainda consumir trabalho. Não lançar €25 por cliente por omissão. Comissões só entram se houver acordo futuro; ainda não existem parceiros confirmados. Em casais, usar a contribuição ao longo do casamento como valor económico principal. Retenção de muitos anos faz mais sentido para organizadores profissionais do que para um casal que já realizou o evento.

O melhor sinal inicial é um casal conseguir publicar e recolher respostas sem intervenção constante. Cadastro, elogio e intenção de compra têm menos força do que uso real e pagamento.

## Pagamentos e integrações financeiras

Existem dois fluxos distintos: **casal paga o serviço MyWedding** e **convidado oferece dinheiro ao casal**. O segundo não deve entrar na conta operacional da empresa como se fosse uma venda nossa de software.

A Stripe lista transferência de dinheiro entre pessoas entre atividades proibidas e trata certas plataformas de financiamento como restritas. Isso não determina automaticamente a classificação de qualquer lista de casamento, mas impede assumir que basta integrar Stripe Connect para o nosso modelo ser permitido. É necessário apresentar o fluxo exato e obter confirmação de enquadramento do parceiro. [Política da Stripe](https://stripe.com/legal/restricted-businesses).

Mesmo em modelos admitidos, os repasses internacionais dependem da localização da plataforma, do recebedor e do produto. A documentação de Connect descreve cobertura específica para repasses transfronteiriços em regime self-service. Não é cobertura universal de presentes. [Stripe Connect](https://docs.stripe.com/connect/cross-border-payouts).

**Caminho proposto:** começar com links para listas externas; cobrar o plano pela prestação de serviço; estudar um parceiro de listas ou um PSP que aceite formalmente o nosso modelo; só depois criar processamento integrado. Pedir condições de identificação dos recebedores, países, moedas, reservas, estornos, prazos, responsabilidade e saída contratual.

Na UE, existem restrições a sobretaxas pelo uso de cartões, com exceções específicas. Copiar a opção de “repassar taxa” de outra região não demonstra conformidade na Europa. Rever o desenho de preços, a natureza da comissão e os métodos abrangidos antes de implementar. [Your Europe](https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/payments-transfers-cheques/index_en.htm).

## Empresa e operação

### Decisões dos fundadores

Já está confirmado que Rodrigo é engenheiro de software, a esposa é designer, ambos são donos e construtores e o início será só pelos dois, sem contratação nem desembolso adicional. Detalhar dedicação semanal, distribuição das tarefas de conteúdo, vendas e suporte, eventual remuneração futura, participação, propriedade intelectual e decisões conjuntas. Não assumir percentagens societárias ou retirada mensal. Parcerias futuras não implicam equipa contratada.

“MyWedding” deve ser tratado como nome de trabalho. Existe uma oferta pública chamada [MyWedding Planner e MyWedding Pro](https://www.weddingplanner-app.com/en/pro). Isso é um sinal para pesquisar marca e diferenciação, não uma conclusão de infração. A disponibilidade jurídica e dos domínios ainda não foi verificada. A [EUIPO recomenda pesquisa de marcas, incluindo TMview](https://www.euipo.europa.eu/en/trade-marks/before-applying/availability).

### Constituição e impostos

O plano sem desembolso não inclui constituição imediata de sociedade nem contratação de contabilista ou consultoria como pressuposto de construção. A forma de exercer a atividade, a sede e as obrigações aplicáveis continuam por apurar antes de cobrar; esta diretriz financeira não estabelece isenção fiscal ou legal.

Como referência histórica, o estudo de 14/10/2026 registou emolumentos de €220 e €360 no serviço português Empresa Online, conforme o tipo de pacto. Não constituem orçamento atual ou decisão de abrir sociedade. Revalidar se essa forma for escolhida. [Justiça portuguesa](https://justica.gov.pt/Como-criar-uma-empresa-online/Quanto-custa).

Antes de vendas reais, conferir o enquadramento da atividade, faturação, impostos e tratamento de serviços internacionais em fontes oficiais. O OSS pode simplificar obrigações de IVA em vendas B2C abrangidas na UE, dependendo do enquadramento. Não é uma solução para todos os impostos mundiais. Se houver necessidade de apoio profissional ou despesas obrigatórias, tratar como questão futura concreta, sem contratação presumida. [Your Europe sobre OSS](https://europa.eu/youreurope/business/finance-and-tax/vat/one-stop-shop/indexamp_en.htm).

Avaliar um Merchant of Record para a venda do software pode ser útil: nesse modelo, um parceiro assume contratualmente o papel de vendedor em certas transações. Cobertura, taxas e responsabilidades precisam de proposta específica. Esse parceiro não resolve automaticamente presentes entre convidados e casais.

### Dados pessoais e confiança

O produto tratará nomes, contactos, fotografias e relações entre pessoas. Alergias e certas respostas podem revelar saúde ou religião. O GDPR dá proteção especial a essas categorias; minimizar a recolha e definir base adequada, acesso restrito e eliminação. [Comissão Europeia](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en).

Preparar políticas de privacidade e cookies, termos do serviço, regras de cancelamento e renovação, acordos com fornecedores, resposta a pedidos de titulares e incidentes. Definir os papéis da plataforma e do casal conforme cada tratamento. Pequenas empresas não estão automaticamente isentas do GDPR ou da LGPD. [GDPR para empresas](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en), [ANPD](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022).

O European Accessibility Act inclui serviços de comércio eletrónico e prevê exceções, incluindo certas microempresas de serviços. Verificar o enquadramento concreto. Independentemente disso, acessibilidade é necessária para que familiares de diferentes idades e capacidades consigam responder. [EUR-Lex](https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html?fromSummary=17).

O lançamento deve ter suporte com horário realista, monitorização, cópias de segurança restauráveis, política para indisponibilidade perto do evento, canal de abuso e processo para adiar ou cancelar. Não anunciar atendimento humano 24/7 com uma equipa que não consegue prestá-lo.

## Riscos e oportunidades mais importantes

| Questão | Consequência | Resposta proposta |
| --- | --- | --- |
| Limites dos planos gratuitos | Um serviço pode deixar de comportar o volume ou a função pretendida | Medir quotas, limitar o piloto e manter opção de exportação; não ativar cobrança automática |
| Capacidade dos dois fundadores | Engenharia, design, Instagram e suporte competem pelo mesmo tempo | Escopo pequeno, horários realistas e registo de horas; sem contratação assumida |
| Crescimento orgânico incerto | Publicações e seguidores podem não gerar clientes | Medir conversas qualificadas, uso e vendas sem prometer conversão |
| Concorrência gratuita | Pressão sobre o preço | Provar valor internacional e serviço, medindo disposição para pagar |
| Cliente com ciclo finito | Aquisição constante de novos casais | Indicação, parceiros e futura oferta profissional |
| Muitas funcionalidades cedo | Demora e suporte elevado | Priorizar publicação, convidados e comunicação |
| Dinheiro de terceiros | Responsabilidade e dependência de PSP | Aprovar modelo antes da implementação financeira |
| Custos de tradução e mensagens | Margem imprevisível | Revisão humana, quotas e custos por destino |
| Sazonalidade | Picos de procura e de suporte | Previsão por data do evento e idioma, com reserva de caixa |
| Dados expostos | Perda de confiança e risco jurídico | Isolamento, privacidade por padrão e resposta a incidentes |
| Promessa vitalícia | Custos indefinidos | Prazo, extensão e arquivo claramente contratados |
| Nome pouco distintivo | Dificuldade comercial e de marca | Pesquisar antes de investir em identidade e publicidade |

A vantagem defensável pode crescer com bons modelos próprios, facilidade real de uso, relações com organizadores, confiança, desempenho operacional e aprendizagem sobre diferentes celebrações. IA para gerar texto é um complemento imitável; não deve ser o único motivo para escolher o produto.

## Decisões a validar na próxima etapa

1. Qual problema leva os primeiros casais a trocar a solução atual?
2. Como distribuir conteúdo, vendas e suporte entre os dois, e quantas horas terão por semana, além de engenharia e design?
3. Qual demonstração prova esse valor em poucos minutos?
4. Qual pacote pode ser vendido com margem e suporte sustentável?
5. Que idiomas precisam de revisão para os primeiros utilizadores?
6. Qual será a sede e o enquadramento da venda do software?
7. Que nome pode tornar-se uma marca própria?
8. Qual parceiro aceita o modelo de presentes, se essa for a próxima expansão?

O [plano de execução](../planeamento/PLANO_DE_EXECUCAO.md) organiza as próximas entregas sem transformar estas hipóteses num calendário aprovado. A base técnica aprovada está em [Arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md); os percursos e detalhes de produto propostos estão em [Produto e tecnologia](../produto/VISAO_E_ESCOPO.md). Os fatos de mercado devem ser revalidados antes de uma decisão de preço ou contratação.
