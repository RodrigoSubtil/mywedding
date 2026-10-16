# Área do casal e editor MyWedding

**Proposta v2 — 15/10/2026. Apenas planeamento e documentação.** Consolida o estudo inicial e a prévia conectada do painel/editor pedida por Rodrigo, com páginas, secções, textos, fotografias e layouts editáveis de forma simulada (D18). Na continuidade D19, Rodrigo pediu separar primeira versão e evolução, mantendo o fluxo completo, **sem implementar nem publicar**. A [secção 25](#25-aplicação-do-corte-da-primeira-versão) liga esta experiência ao corte recomendado; documentar/priorizar não aprova automaticamente composição final, implementação, fornecedores, provisionamento ou publicação.

## Como usar esta especificação

Esta é a fonte central da experiência visual e dos percursos propostos para o painel e editor. A [visão e escopo](VISAO_E_ESCOPO.md) mantém a visão do produto; a [arquitetura](../arquitetura/ARQUITETURA_E_STACK.md) mantém as escolhas técnicas aprovadas; o [catálogo](CATALOGO_DE_RECURSOS.md) mantém o inventário de recursos e etapas; o [plano de construção](../planeamento/CONSTRUCAO_DO_PRODUTO.md) mantém a sequência futura. Decisões em aberto continuam em [Prontidão e pendências](../governanca/PRONTIDAO_E_PENDENCIAS.md).

A [pesquisa dos editores](../pesquisa/EDITORES_E_PAINEIS_2026-10-15.md) documenta fontes e limites. A composição abaixo é própria. Não pressupõe acesso autenticado aos concorrentes nem superioridade comprovada.

Leitura por necessidade: [organização do painel](#3-navegação-depois-do-login), [editor](#6-editor-composição-e-controlos), [páginas](#7-quantas-páginas-terá-o-site), [secções e elementos](#8-biblioteca-de-secções), [mapa de telas](#21-mapa-completo-de-telas-e-vistas), [fluxos detalhados](#22-fluxos-completos-e-continuidade), [evidência da prévia](#24-prévia-conectada-cobertura-e-limites) e [primeira versão](#25-aplicação-do-corte-da-primeira-versão). As secções 1–24 descrevem a visão completa e o estudo; para a V1 aplicar os recortes D19, não implementar toda a visão de uma vez.

## 1. Ideia orientadora

O casal entra, encontra a próxima ação útil e vê o resultado enquanto edita. O sistema começa com uma composição cuidada e permite aprofundar os ajustes aos poucos. A pessoa não precisa aprender a desenhar uma página para conseguir contar a história, organizar eventos e receber respostas.

Três compromissos de experiência: **começar com algo útil; saber onde mudar; conseguir voltar atrás**. Uma informação tem uma origem reconhecível. O editor mostra a aparência e liga aos módulos que gerem os dados; não cria uma segunda lista de convidados ou uma segunda agenda.

O painel MyWedding conserva a identidade da plataforma. O site do casal tem tema próprio, limitado ao seu contexto. A interface deve continuar reconhecível mesmo que o casal escolha cores muito diferentes para o casamento.

## 2. Percurso completo

| Momento | O que a pessoa faz | O que a interface deve entregar |
| --- | --- | --- |
| Acesso | Entra, cria conta ou aceita convite de colaboração | Recuperação clara, retorno ao destino e identificação do casamento autorizado |
| Primeira entrada | Informa nomes de apresentação, idioma e o que já sabe | Assistente curto; data/local podem ficar por definir |
| Primeira composição | Escolhe um dos modelos próprios e uma estrutura sugerida | Prévia útil com os seus nomes; exemplos não se tornam factos publicados |
| Construção | Ajusta conteúdo, secções, páginas, cores e fotos | Prévia contextual, salvamento do rascunho e ações reversíveis |
| Organização | Cadastra eventos, convidados e regras de resposta | Dados únicos, grupos e autorização por evento |
| Revisão | Confere telemóvel, idiomas e diferentes públicos | Lista curta de problemas com acesso direto ao campo |
| Publicação | Decide o que disponibilizar e confirma | Versão identificável, URL estável e leitura real do resultado |
| Convites | Seleciona grupos e prepara partilha | Links/QR corretos; envio manual claramente distinguido de envio integrado |
| Acompanhamento | Vê respostas e alterações, corrige dados e exporta | Contagens por pessoa/evento, filtros e histórico |
| Dia do evento | Consulta informação e listas finais | Acesso móvel simples; check-in só numa etapa própria |
| Depois | Agradece, preserva recordações e encerra | Exportação, arquivo, despublicação e eliminação com efeitos explicados |

## 3. Navegação depois do login

### Estrutura principal

No computador: barra lateral com nomes e ícones, cabeçalho curto e conteúdo central. O nome do casamento e o estado do site estão sempre identificáveis. Na experiência integrada candidata H1+H2, entram **Início, Nosso site, Eventos, Convidados, Convites e mensagens, Configurações**. Durante a fatia H1, mostrar apenas os módulos já disponíveis. Ajuda fica no rodapé da navegação e a conta pessoal no avatar.

Presentes externos aparece quando o módulo existir e o casal o ativar. Planeamento, recordações e outros recursos aparecem apenas na etapa em que estiverem disponíveis. Não preencher a primeira interface com botões de capacidades futuras.

```text
MyWedding       Ana & Alex ▾                 Ajuda   Atividade   Conta
─────────────────────────────────────────────────────────────────────
Início          Bom dia, Ana
Nosso site      Continuar o site             [Editar nosso site]
Eventos         Estado: rascunho             [Pré-visualizar]
Convidados
Convites e      Próximos passos              Últimas alterações
mensagens       1. Rever a capa              Ana mudou uma fotografia
                2. Completar local          Alex editou a cerimónia
Configurações   3. Rever publicação          Sem envios automáticos
Ajuda
```

Esquema documental de posições; não é uma tela implementada. Contagens e atividade aparecem apenas com dados existentes. Se não houver nada, a interface explica o primeiro passo.

### Onde fica cada assunto

| Área | Conteúdo principal | Não misturar aqui |
| --- | --- | --- |
| Início | Próxima ação, estado, respostas recentes e atividade | Galeria de todos os recursos, publicidade ou métricas sem dados |
| Nosso site | Conteúdo, páginas, aparência, media, idiomas, publicação/histórico | Gestão integral de convidados dentro do canvas |
| Eventos | Agenda, datas/fusos, locais, públicos e RSVP por evento | Cópias soltas do horário escritas em cada página |
| Convidados | Pessoas, famílias, acompanhantes, etiquetas, respostas e exportações | Pessoas publicadas como lista visível aos visitantes |
| Convites e mensagens | Peças, destinatários, links, partilha e estados de comunicação | Confundir “convite preparado” com “mensagem entregue” |
| Presentes, quando disponível | Listas externas; operação financeira apenas numa etapa própria | Cobrança do plano MyWedding misturada com dinheiro dos casais |
| Planeamento, expansão | Tarefas, orçamento, fornecedores, mesas e cronograma interno | Agenda pública gerida em paralelo sem ligação a Eventos |
| Configurações | Dados do casamento, acesso, privacidade, notificações, dados e encerramento | Cores e fonte escondidas numa página de definições gerais |
| Conta pessoal | Perfil, idioma da interface, segurança e sessões | Alterar todos os casamentos ao mudar um nome pessoal |

Se o utilizador participar em vários casamentos, o seletor mostra apenas os autorizados. Para quem tem um só, mostrar o nome sem obrigar a escolher sempre. Criar vários casamentos ou um plano profissional depende da oferta futura.

### No telemóvel

Navegação inferior candidata: **Início, Site, Convidados, Mais**; Mais contém os restantes módulos disponíveis e Configurações. Rótulos visíveis, alvo mínimo de 44 px e indicação do item atual. O editor tem navegação própria e não acumula duas barras inferiores.

Voltar mantém casamento, pesquisa, filtro e posição quando possível. Ligações diretas abrem o objeto certo depois da autenticação, sempre com autorização no servidor. Pesquisa transversal é expansão; pesquisa de convidados e procura de secções pertencem ao contexto correspondente.

## 4. Entrada, conta e colaboração

Telas necessárias: entrar, criar conta, recuperar acesso, confirmar o método escolhido, aceitar convite e sessão expirada. Método concreto de login e email continuam pendentes; não selecionar social login ou fornecedor por esta proposta. Nome do campo, erro, recuperação e destino após entrar devem ser claros.

Uma conta sem casamento começa o assistente; uma conta com casamento abre Início; uma ligação de colaboração abre a aceitação do convite e informa o papel concedido. Aceitar não cria um segundo casamento. Convite expirado/revogado tem recuperação por quem o emitiu; não revela dados antes da aceitação autorizada.

Contas individuais para os dois membros do casal. O convite ao outro membro é opcional no início, tem papel explícito e pode ser revogado. Não partilhar a mesma senha. A criação de conta pede apenas o necessário; contactos, documentos fiscais e pagamento não bloqueiam a primeira prévia sem motivo de oferta aprovado.

### Assistente inicial proposto

1. **Sobre vocês:** nomes de apresentação, título do casamento e idioma inicial do conteúdo. Rótulos inclusivos, sem impor noiva/noivo, apelidos ou modelo familiar.
2. **A celebração:** data conhecida ou “ainda não definimos”; país/cidade quando conhecidos; fuso confirmado quando houver hora. Um evento inicial editável; eventos adicionais vêm depois.
3. **O vosso estilo:** três famílias visuais próprias, miniaturas e prévia com os nomes. “Escolher depois” aplica uma composição recomendada reversível.
4. **O que querem mostrar:** estrutura simples sugerida; foto e história opcionais. Explicar que secções podem entrar depois.
5. **Primeira prévia:** acesso direto ao editor e lista curta de próximos passos. Convidar o outro membro e completar convidados não são barreiras.

“Continuar depois” guarda o progresso autenticado. Nunca publicar ao concluir o assistente. Exemplos no rascunho têm marcação de demonstração; na revisão final, substituir, remover ou ocultar, sem publicá-los como informação real.

## 5. Início: orientar sem sobrecarregar

Primeiro bloco: miniatura atual do site, estado e ação **Continuar a editar**. Abaixo: até três próximos passos ordenados pelo estado real; uma ação leva ao ponto exato. A lista de preparação do site é diferente do futuro organizador de tarefas do casamento.

Depois da publicação, o bloco passa a mostrar **Ver site**, **Editar** e **Partilhar**, conservando a indicação de alterações não publicadas. Respostas aparecem quando existir RSVP: pessoas convidadas, confirmadas, recusadas e por responder, com evento e denominador definidos. Um grupo de quatro não conta como uma pessoa.

Atividade informa quem fez uma alteração relevante e quando. Notificações não são um feed de marketing. Perto da data, priorizar alterações de horário, respostas e listas finais; depois, sugerir agradecimento e exportação. Datas indefinidas não produzem contagem regressiva inventada.

Na prévia conectada, a entrada mostra **Abrir editor**, **Ver como convidado**, **Continuar a criar** e **Começar do zero**. Atalhos levam à capa, criação de página, estilo, biblioteca de secções, convidados, versões e comparação de composição. Contagens de páginas, secções e confirmações derivam dos mesmos dados fictícios usados nos módulos. No produto, manter essa continuidade e trocar os atalhos conforme a fase; não transformar todas as ações demonstradas em cartões permanentes. “Começar do zero” precisa explicar o alcance, guardar um ponto de recuperação e preservar eventos, convidados e respostas.

## 6. Editor: composição e controlos

### Estrutura no computador

**Composição candidata da prévia mais recente: estrutura à esquerda, prévia ao centro e inspector contextual à direita.** A árvore permite navegar sem fechar os campos da selecção. O cabeçalho contém Voltar ao painel, identificação do site, estado do rascunho, Desfazer, Refazer, Versões, Prévia e Revisar. Na etapa funcional, a revisão conduz à publicação explícita; na simulação termina em **Guardar versão de teste**.

```text
← Painel   Nosso site   Rascunho   Desfazer  Refazer   Versões  Prévia  Revisar
───────────────────┬────────────────────────────────┬──────────────────────
Páginas | Secções  │ Computador / Telemóvel           │ Editar: Capa
Página actual ▾    │ Secção / Página completa         │ Conteúdo | Layout
                   │                                │ Estilo
Capa               │   PRÉVIA DO SITE DO CASAL        │
Nossa história     │                                │ Título / Texto
Galeria            │   Seleccionar texto ou imagem    │ Fotografia / Botão
                   │   abre o campo correspondente.   │
+ Adicionar secção │                                │ Mover / Duplicar
Minhas favoritas   │                                │ Remover / Favorita
───────────────────┤                                │ Visibilidade / Público
Estilo do site     │                                │ Mover para página ▾
Biblioteca de fotos│                                │
Experimentar       │                                │
───────────────────┴────────────────────────────────┴──────────────────────
```

As três áreas são funções da interface, não uma obrigação de manter três colunas em qualquer largura. Quando deixarem de caber com os campos legíveis, o inspector pode ocupar uma linha completa ou partilhar a área lateral com a estrutura. No telemóvel, usar uma vista de cada vez. A navegação global recolhe-se durante a edição; o retorno ao painel preserva o contexto.

A v1 recomendava duas áreas permanentes. Essa alternativa fica registada como referência de comparação; a v2 documenta a composição experimentada, sem declarar que três colunas são melhores ou aprovadas. Avaliar encontrabilidade, largura útil da prévia, número de retornos e uso com zoom. Grelha, contentor, espaços e controlos continuam sujeitos ao guia existente; não criar outra escala para acomodar a proposta.

### Edição contextual

Selecionar texto, foto ou secção na prévia realça o elemento e abre o campo correspondente. Também é possível chegar ao mesmo campo pela árvore; seleção por rato não é o único percurso. O estado selecionado usa contorno, rótulo e foco, sem deslocar a página.

O inspector apresenta **Conteúdo**, **Layout** e **Estilo**. Conteúdo: campos editoriais e dados ligados. Layout: variante, alinhamento, espaçamento, tamanho controlado e comparação. Estilo: fundo e tratamento visual da secção dentro do tema do casal. Visibilidade, público, destino ao mover e ações estruturais permanecem identificáveis fora dos separadores. Não esconder a privacidade num seletor de cor. Definições adicionais podem ficar em “Mais opções”.

Ao selecionar a agenda, mostrar “Dados ligados a Eventos” e **Editar evento**, com retorno ao editor e à secção. Ao selecionar o RSVP, oferecer **Configurar confirmação** e **Ver respostas** no módulo Convidados. Esses atalhos usam os formulários únicos dos módulos; não criam dados duplicados. Seleccionar um elemento da secção livre abre o seu inspector e um **Voltar à secção** visível.

Uma secção oferece adicionar acima/abaixo, duplicar quando aplicável, mover, ocultar, guardar como favorita e remover para recuperação. A árvore permite arrastar e também **Mover para cima/baixo** por teclado e toque. Mover para outra página preserva ID, conteúdo e referências; cria a mudança no rascunho e leva à posição de destino. Reordenar secções não pode mudar convites ou respostas.

### Editor no telemóvel

Uma área de cada vez: **Estrutura**, **Prévia** e **Editar**, como na prévia conectada. Estrutura reúne páginas, secções e atalhos globais; Editar conserva Conteúdo/Layout/Estilo do item seleccionado. Tema e fotos abrem uma vista própria com retorno. Seleccionar a prévia pode abrir Editar, preservando página, secção, elemento e posição. Fotografia tem corte e ponto focal ajustáveis por toque. Ações essenciais não dependem de hover ou arrastar.

Cabeçalho conserva estado de salvamento e acesso à revisão/publicação; controlos fixos não cobrem o campo focado ou o teclado. A prévia usa os mesmos dados e renderizador do site, mas a qualidade final exige abrir a página real em ecrãs concretos.

## 7. Quantas páginas terá o site

**Não há quantidade obrigatória nem padrão de entrada aprovado.** A v1 documental recomendava uma página contínua; a prévia conectada começa com três páginas para permitir testar construção e navegação completas. D19 recomenda multipágina editável como entrada da primeira versão, com três páginas sugeridas e liberdade para acrescentar/retirar, sem mínimo ou quota assumidos. Conversão automática para navegação contínua fica depois; a pessoa pode manter apenas uma página se quiser. A alternativa contínua permanece na visão futura, e P11 valida a facilidade da entrada antes da implementação.

| Modo | Composição sugerida | Quando usar |
| --- | --- | --- |
| Essencial, candidato | 1 página: capa, apresentação, agenda, informações úteis, FAQ e acesso ao RSVP | Pouco conteúdo e consulta rápida no telemóvel |
| Prévia conectada | 3 páginas: Início (capa, história, galeria); O grande dia (programação, como chegar); Confirme sua presença (RSVP, FAQ) | Estrutura demonstrativa de 7 secções; testes usam dados fictícios |
| Organizado | 5 páginas: Início; O casamento; Informações úteis; Confirmar presença; Nossa história e fotos | Mais detalhes, deslocações e conteúdo pessoal |
| Personalizado | Páginas criadas pelo casal a partir das secções disponíveis; Presentes ou Recordações podem entrar | Necessidade concreta que não cabe bem no conjunto sugerido |

As quantidades acima são sugestões e estados demonstrativos, não limites nem exigências. “Confirmar presença” só é publicada quando funcional; antes pode ser omitida. Não definir “páginas ilimitadas” ou quotas comerciais sem capacidade/oferta aprovadas. Limites técnicos, quando definidos, devem ser comunicados antes de atingir o máximo.

### Operações em páginas e menu

Criar a partir de modelo ou página vazia com **Adicionar secção**; renomear; definir início; ordenar; duplicar; mover secções entre páginas; retirar do menu; desativar; restaurar. Separar **nome no menu**, **título visível** e **endereço**. Mostrar prévia da navegação móvel e avisar quando muitos itens prejudicarem a leitura; agrupar em “Mais” quando necessário.

Trocar de uma para várias páginas mostra o mapa de destino antes de aplicar. IDs de secção, conteúdo e relações permanecem; referências internas são atualizadas. Voltar a uma página contínua junta secções na ordem confirmada, preservando conteúdo que não cabe ativo no arquivo recuperável.

O endereço não muda quando se altera o título. Mudança de endereço já partilhado exige aviso de impacto e estratégia aprovada de redirecionamento; não reciclar imediatamente endereços antigos para outro casamento. Links profundos e QR devem continuar úteis. Não autorizar URLs reservadas ou colisões.

### Estados que não podem ser confundidos

| Estado | Significado |
| --- | --- |
| Fora do menu | Página ainda pode ser acessível pela ligação, conforme as suas permissões |
| Desativada | Conteúdo preservado no rascunho, ausente da próxima versão publicada |
| Restrita | Servidor só entrega o conteúdo a quem tem autorização; ocultar CSS não basta |
| Removida | Sai da estrutura ativa para recuperação pelo período definido |

Desativar no rascunho não retira imediatamente a versão já publicada; a interface explica que é necessário publicar. Reduzir acesso é uma ação de segurança com efeito imediato definido na revisão, e não deve aguardar a publicação visual. A regra mais restritiva entre site, página, secção, evento e ficheiro prevalece.

## 8. Biblioteca de secções

| Secção | Campos e ajustes principais | Fonte dos dados / comportamento |
| --- | --- | --- |
| Capa | Nomes, frase, imagem, ponto focal, alinhamento e botão | Nomes/evento por referência; sobreposição ou área sólida com leitura verificada |
| Boas-vindas | Título, texto curto e imagem opcional | Conteúdo editorial traduzível; exemplos identificados |
| Nossa história | Texto, marcos, datas opcionais e fotos | Cronologia opcional; não obrigar história íntima |
| Agenda | Eventos escolhidos, ordem, apresentação e direções | Eventos; respeita público, fuso e versão dos detalhes |
| Local e como chegar | Endereço, instruções, estacionamento e link | Local do evento como fonte; mapa incorporado é opção condicionada |
| Informações úteis | Traje, crianças, acessibilidade, transportes e contactos escolhidos | Campos estruturados/reutilizáveis; contacto privado só se explicitamente destinado ao site |
| Viagem e estadia | Hotéis, ligações, códigos, prazos e recomendações | Conteúdo do casal; não promete reserva, preço ou disponibilidade |
| FAQ | Perguntas/respostas, ordem e agrupamento | Catálogo único de FAQ; sugestões só entram depois de revista a resposta |
| Galeria | Fotos, legenda, texto alternativo, ordem e disposição | Biblioteca de media com permissões e versões |
| Pessoas especiais | Nomes de apresentação, papéis livres e fotos opcionais | Conteúdo destinado à publicação; não expõe automaticamente a base de convidados |
| RSVP | Introdução, botão, apresentação e destino | Módulo de respostas; no canvas a interação é uma simulação identificada |
| Presentes externos | Texto, listas, imagem e ordem | Catálogo único de links; mostrar destino externo |
| Texto, imagem, citação e lista | Campos simples, links, alinhamentos e composições aprovadas | Blocos editoriais, sem HTML/script livre |
| Aviso | Mensagem relevante, período e público | Conteúdo revisto; alertas urgentes têm fluxo de publicação claro |
| Rodapé | Contacto escolhido, acesso e informações necessárias | Conteúdo público revisto; dados privados não entram por padrão |
| Vídeo, música ou transmissão, expansão | Link permitido, capa, legenda/transcrição e reprodução | Integração/armazenamento a avaliar; ação do visitante, sem som automático |
| Mural, enquetes e fotos de convidados, expansão | Recolha, revisão, publicação e remoção | Moderação e autorização; nada recebido fica público automaticamente |

Contagem regressiva é elemento opcional ligado a evento com data/hora válidas. Casamento adiado ou data indefinida deve desativá-la ou usar apresentação adequada. Save the date é uma fase de comunicação, não obrigação de ter o RSVP aberto.

Variantes de composição próprias: texto; texto com imagem; imagem de largura da área; cartões; lista; grelha de fotos. Oferecer escolhas que respondem bem no telemóvel. O editor estruturado não oferece posicionamento livre por coordenadas, JavaScript, HTML ou CSS arbitrários nesta proposta inicial.

### Os 12 tipos presentes na prévia conectada

**Capa, Nossa história, Programação, Galeria, Confirmação, Perguntas frequentes, Nossa linha do tempo, Como chegar, Uma mensagem, Contagem regressiva, Secção livre e Presentes e links.** São agrupamentos para testar a biblioteca, não doze módulos obrigatórios no lançamento. “Como chegar” reúne cartões informativos no estudo; “Presentes e links” não tem compras, saldo nem repasse. Os tipos adicionais da tabela anterior permanecem no catálogo com a etapa correspondente.

Cada cartão da biblioteca precisa de nome, exemplo visual, descrição curta e **Adicionar**. Depois de inserir, seleccionar a nova secção, mostrar os seus campos e conservar a página de origem. Exemplos são editáveis; fontes como Eventos e RSVP têm identificação e atalhos próprios. Inserção acima/abaixo e recuperação são requisitos do produto, ainda que o estudo não reproduza todas as posições e exceções.

### Secção livre com elementos estruturados — F113

Permite inventar uma página sem desenhar por coordenadas. Na prévia, os cinco elementos são **texto, imagem, botão, cartão e separador**. Texto/cartão têm título e corpo; imagem tem seleção e descrição; botão tem rótulo e destino; separador organiza o ritmo. Cada elemento tem ID, ordem, alinhamento e largura **linha inteira/meia linha**, com empilhamento responsivo. O campo de descrição da imagem precisa ser distinguido de uma legenda visual no desenho final.

Fluxo: adicionar elemento → seleccionar → editar campos → escolher largura/alinhamento → reordenar, duplicar ou remover → voltar à secção. Os controlos de elemento não substituem os da secção; o retorno mantém a selecção. No telemóvel, duas meias linhas podem empilhar sem exigir outra composição manual. O produto valida destinos internos/externos e protocolos; o campo demonstrativo da prévia não é prova dessa validação.

Duplicar cria novos IDs e uma cópia independente de conteúdo/layout, mantendo referências autorizadas a media e eventos. Remover um elemento não elimina o ficheiro original nem o evento referenciado. Título, texto alternativo, semântica e ordem de leitura são responsabilidade do renderizador; não oferecer estilos livres que os contornem. Listas formatadas pertencem ao campo de texto quando incluídas, não exigem criar uma secção para cada item.

### Minhas favoritas — F114

Guardar uma secção como favorita regista um ponto de partida reutilizável do próprio casamento. A biblioteca mostra miniatura/nome, **Usar nesta página**, renomeação e remoção da favorita. A prévia exercita guardar e reutilizar; gestão completa e persistência ainda são requisitos por desenhar. Inserir cria uma cópia independente: editar a nova secção não modifica a favorita nem outras cópias. Não introduzir sincronização silenciosa de instâncias.

Referências a ficheiros, eventos e acesso precisam ser revistas na inserção. Uma favorita restrita não passa a pública por ser reutilizada; a interface explica a restrição herdada e exige revisão antes de ampliar exposição. Partilha de favoritas entre casamentos, galeria pública e marketplace ficam fora deste mecanismo inicial.

### Experimentar composição — F115

Abrir pela secção, pelo separador Layout ou por atalho do painel. Mostrar **Actual** e **Nova ideia** com o mesmo conteúdo, alternar variantes suportadas e oferecer **Aplicar** ou **Voltar sem aplicar**. No telemóvel, empilhar comparações com identificação clara. A experiência deve incentivar exploração sem duplicar páginas ou pedir que a pessoa reescreva a história.

Enquanto compara, o rascunho de origem não muda. Aplicar altera apenas os ajustes indicados, cria uma operação reversível e mantém página/secção seleccionadas. A comparação de secção não muda o tema global sem indicação. O estudo alterna composições predefinidas; não gera designs por IA, não avalia automaticamente qual é melhor e não prova fidelidade responsiva de todas as combinações.

## 9. Aparência, textos e imagens

### Aparência global do casamento

No separador **Aparência**: modelo, cores, tipografia, composição geral, botões e detalhes. Começar por presets próprios; “Personalizar” abre os ajustes. Troca mostra comparação, preserva conteúdo e permite desfazer. Modelos devem suportar os mesmos recursos essenciais; diferenças decorativas não tornam o conteúdo incompatível.

Cores do casal têm papéis: fundo, superfície, texto, texto secundário, ação e detalhe. O seletor apresenta o elemento afetado, cor sugerida e valor manual validado. Uma cor altera todos os usos desse papel dentro do site; a prévia mostra onde. Combinações ilegíveis têm explicação e sugestão; requisitos essenciais de leitura devem impedir a publicação do par afetado até correção, incluindo erros de campos/RSVP.

Tipografia: combinações licenciadas e testadas, com funções de títulos e corpo. Começar pelas fontes locais existentes; qualquer catálogo adicional dos temas exige revisão de licença e cobertura, sem alterar a marca MyWedding. Tamanhos do tema usam escala responsiva controlada, com prévia de nomes longos. Não exigir configurar tamanho por dispositivo para o básico.

Composição: densidade confortável, variantes de secção, alinhamento e tratamento de imagem. Ajustes locais são exceções explícitas ao tema e podem ser repostos. Não oferecer centenas de sliders por elemento. Recuperar padrão da secção não apaga texto ou fotos; recuperar tema não repõe os dados do casamento.

### Edição de texto

Campos de título e texto com rótulos; quebra de parágrafo; negrito, itálico, links e listas quando necessários. Hierarquia semântica preservada pelo renderizador, sem permitir um H1 em cada bloco. Colagem remove estilos estranhos. Links validam protocolos, têm nome compreensível e destino apresentado. Textos longos devem adaptar o layout, não reduzir tudo até ficar ilegível.

Biblioteca de sugestões próprias de boas-vindas, traje e FAQ economiza escrita, mas cada inserção é editável. “A definir” não gera datas/endereços inventados. IA não é necessária: futuro apoio à escrita/tradução só entra com condições de custo/dados/revisão aprovadas.

### Biblioteca de media

Upload, progresso, prévia, uso nas secções, descrição alternativa, legenda, ordem e substituição. Recorte por contexto e ponto focal preservam o original; não gravar destrutivamente em todas as utilizações. Se a capa precisa de outra seleção no telemóvel, permitir ajuste avançado sem duplicar a foto por obrigação.

Aceitação de formatos, tamanho, compressão e armazenamento vem da capacidade avaliada, com limites visíveis. Remover metadados de localização; validar conteúdo do ficheiro e permissões; falha não apaga a imagem anterior. Media privado exige entrega autorizada, não URL pública apenas porque está numa página restrita.

Antes de eliminar, mostrar onde a imagem é usada, incluindo versões publicadas. Remover do rascunho não quebra a versão atual; limpeza física depende da retenção, referências e eliminação de dados. Ficheiros recebidos de convidados entram numa área privada de revisão quando esse recurso existir.

Na prévia, três fotografias de demonstração permitem trocar a imagem, ajustar posição horizontal/vertical, aproximação e tratamento retangular/arco/polaroid; a galeria permite adicionar, ordenar e retirar referências. Esses tratamentos pertencem ao site do casal, não redefinem cantos ou marca do painel. Não há upload de ficheiros próprios, processamento no servidor, aprovação de direitos ou armazenamento. A versão funcional deve preservar imagem anterior em falha, fornecer alternativa acessível aos sliders e validar recorte/descrição em cada utilização.

As atmosferas **Natural, Terracota e Editorial** são pontos de partida exploratórios da prévia; os nomes não são catálogo comercial aprovado. A troca conserva o conteúdo e deixa a marca MyWedding inalterada. O estudo oferece escolhas controladas de fonte e fundo; cores manuais por papel, texto formatado completo, tradução revista e restauração de padrão continuam requisitos de planeamento, não recursos comprovados nessa simulação.

## 10. Guardar, desfazer e recuperar

| Feedback | O que realmente significa | Ação disponível |
| --- | --- | --- |
| Alterações locais | Há edição ainda não confirmada pelo servidor | Aguardar/guardar; avisar ao sair se houver risco de perda |
| A guardar | Pedido em curso | Preservar o conteúdo digitado, sem duplicar pedidos |
| Guardado | Servidor confirmou o rascunho e a sua revisão | Continuar ou rever publicação |
| Falha ao guardar | Servidor não confirmou | Repetir sem perder o texto; copiar conteúdo quando seguro |
| Sem ligação | Não é possível confirmar persistência | Não mostrar sucesso; explicar limites da recuperação local |
| Conflito | Outra edição mudou a revisão de origem | Comparar, conservar ambas e escolher o resultado |
| Publicado | Versão explicitamente disponibilizada | Ver versão e histórico de publicação |

Autosave pertence ao rascunho e deve esperar uma pausa na edição; não publicar a cada tecla. Publicar fica indisponível enquanto existirem alterações sem confirmação. Se a sessão expirar, preservar o trabalho em memória quando possível e regressar depois de entrar; dados pessoais não devem ficar por omissão em armazenamento persistente de um dispositivo partilhado.

Desfazer/refazer cobre operações do editor nesta sessão. Histórico persistente cobre versões e pontos de recuperação, com data, autor e resumo. Restaurar cria um novo rascunho, permite comparação e não publica sozinho. Recuperação da aparência não reverte RSVPs, convites enviados ou transações. Exclusões importantes oferecem recuperação; prazos e política precisam de definição operacional.

Colaboração inicial pode usar controlo de revisão e deteção de conflito. Não prometer presença em tempo real, coedição simultânea sem conflitos ou funcionamento offline. Duas abas e os dois membros do casal não podem sobrescrever silenciosamente o trabalho um do outro.

## 11. Eventos e publicação coerente dos dados

Lista de eventos com dia, nome, local, público, estado de RSVP e ação **Editar**. Formulário em grupos: informações; data/fuso; local/direções; convidados autorizados; resposta; visibilidade. Nomes livres para cerimónia, almoço, receção, jantar ou outros costumes.

Fuso do local explícito. A interface mostra a hora que o convidado verá e a informação do calendário. Data por definir não equivale a um instante à meia-noite. Local pode ficar incompleto no rascunho; validação explica o que impede disponibilizar RSVP/calendário.

**Distinguir três tipos de alteração:**

| Tipo | Exemplo | Aplicação proposta |
| --- | --- | --- |
| Apresentação editorial | Foto, história, ordem de secção, texto do botão | Guarda rascunho; só aparece após publicar |
| Informação do evento para convidados | Data, hora, endereço, instruções | Prepara revisão dos detalhes; aplicação/publicação explícita coerente com agenda e calendário |
| Operação e segurança | Resposta recebida, revogar convite, fechar RSVP, restringir acesso | Guardar/aplicar com efeito explicado; não espera publicação visual |

O evento tem identidade estável. Detalhes destinados aos convidados precisam de uma revisão ativa coerente com site e calendário; a publicação refere a revisão escolhida. Respostas e autorização atuais continuam relacionais. Uma versão visual antiga nunca restaura convites revogados ou reabre automaticamente RSVP.

Ao mudar data/local de evento já ativo, mostrar quem pode ser afetado, o que será atualizado e que mensagens não serão enviadas sem escolha. Respostas anteriores permanecem com histórico; solicitar reconfirmação é ação separada. Avisar que calendários já descarregados podem exigir atualização manual; não prometer sincronização inexistente.

Cancelar ou remover evento com respostas exige resumo de impacto, preservação do histórico e atualização das páginas que o referem. Não apagar respostas por eliminar um cartão da agenda.

## 12. Convidados e respostas

### Composição da tela

Cabeçalho com **Adicionar convidados**; ações secundárias **Importar** e **Exportar**. Separadores **Lista**, **Respostas**, **Grupos** e **Configurar confirmação**. Filtros por evento, estado, etiqueta e idioma; pesquisa por nome e contacto autorizado. A tabela lembra colunas/preferências sem alterar dados.

Colunas iniciais: nome, grupo, eventos, resposta e acompanhante. Contactos e perguntas ficam em colunas opcionais ou no detalhe. No telemóvel, cartões com nome, evento e estado; abrir mostra o perfil completo. Seleção em lote explica se abrange a página ou todos os resultados.

```text
Convidados                         [Importar] [Exportar] [+ Adicionar]
Lista | Respostas | Grupos | Configurar confirmação
Pesquisar…       Evento ▾   Resposta ▾   Etiqueta ▾
─────────────────────────────────────────────────────────────────────
Pessoa          Grupo           Eventos          Resposta      Ações
Ana Exemplo     Família A       Cerimónia/Jantar  Por responder Abrir
Alex Exemplo    Família A       Jantar           Confirmado    Abrir
```

Dados fictícios deste esquema não representam convidados reais.

### Perfil e grupos

Nome de apresentação, contacto opcional, idioma, grupo, etiquetas, eventos, acompanhante autorizado, respostas por evento, perguntas e histórico. Notas internas separadas do que o convidado vê. Registar faixa criança/adulto apenas quando útil, sem exigir nascimento completo.

Grupo/família é a unidade de convite; pessoa continua unidade de resposta. Um membro pode responder pelo grupo autorizado, com confirmação individual. Acompanhante ainda desconhecido ocupa uma vaga identificável; ao receber nome não duplica pessoa nem aumenta o limite. Etiqueta ajuda a filtrar; permissão de evento é regra explícita validada, não simples filtro visual.

Nome não é identificador único. Pessoas homónimas são válidas; duplicados potenciais são sugestões. Fusão exige escolha do registo, prévia de conflitos e preservação de convites/respostas. Não corrigir a base apagando tudo e importando novamente.

### Importação e exportação

Importação guiada: escolher ficheiro → mapear colunas → confirmar evento/grupos → ver erros por linha e possíveis duplicados → escolher o que entra/atualiza → confirmar → relatório. CSV pode ser o primeiro formato candidato; XLSX só quando a necessidade justificar a dependência. Reimportação só atualiza existentes por correspondência segura/ID confirmado, sem sobrescrever respostas automaticamente.

Uma lista em texto com uma pessoa por linha pode ser uma alternativa futura simples; qualquer extração precisa de prévia. Não importar agenda do telemóvel ou ligar Google Sheets automaticamente por esta proposta.

Exportação: escolher finalidade, evento, pessoas e campos; prévia do total; ficheiro privado com data e fuso. Versões para catering, receção e planeamento incluem só o necessário. CSV deve lidar com acentos, separadores e valores que folhas de cálculo tratem como fórmulas. Download não equivale a envio ao fornecedor.

### RSVP

Configuração em Convidados define abertura/fecho, prazo e fuso, texto, perguntas por pessoa/grupo/evento, obrigatoriedade e regras de correção. O editor apenas ajusta apresentação e liga a este formulário único.

No site: abrir convite → identificar grupo autorizado → responder por pessoa/evento → perguntas pertinentes → rever → confirmar → resultado e possibilidade de corrigir conforme as regras. Sem conta/app obrigatórios para convidados. Link imprevisível e revogável; busca pública apenas por nome não é base de autorização.

Respostas: confirmado, recusado, por responder e, quando explicitamente necessário, reconfirmação pendente. “Convite enviado” e “entrou no evento” são outros estados. O casal pode registar uma resposta recebida por telefone, com origem e autor, sem se fazer passar pelo convidado.

Nova pergunta após respostas existentes aparece como informação por recolher; não inventa respostas. Alterar tipo de pergunta ou apagar opção usada exige preservar versão/histórico. Não reiniciar todas as respostas por trocar tema, publicar, importar ou criar outro evento.

Preferências alimentares/acessibilidade são opcionais, com finalidade explicada e acesso restrito. Exportação desse detalhe depende de papel e escolha; não deve entrar em páginas públicas, analytics ou modelos de IA por conveniência.

## 13. Convites, mensagens e presentes

Convites e mensagens tem **Peças**, **Destinatários** e **Histórico**, quando cada capacidade existir. Peças candidatas: save the date, convite, lembrete, alteração e agradecimento, com o mesmo tema do site quando suportado. Dados vêm do evento/revisão ativa, não de cópia silenciosamente desatualizada.

Fluxo: escolher peça → rever texto/idioma → escolher pessoas/grupos → conferir links e dados → escolher canal → prévia final → ação explícita. Links individuais não devem ser enviados para um grupo público de WhatsApp; a partilha geral usa o endereço público sem credencial de convidado.

Primeira abordagem: copiar link/texto e abrir o canal de partilha manual. Mostrar **Link copiado** ou **Pronto para partilhar**. Não afirmar “enviado”, “entregue” ou “lido” pelo simples clique em WhatsApp. QR geral e QR individual têm rótulos de finalidade; o individual contém acesso e exige cuidado na distribuição.

Email/WhatsApp/SMS integrados e agendamento são expansão condicionada a custos, permissões e fornecedor. Antes de enviar: destinatários, versão, custo quando aplicável e confirmação. Histórico distingue preparado, agendado, aceite pelo fornecedor, entregue quando comprovado e falha; nova tentativa não duplica envio. Alterar agenda não manda mensagem sozinho.

Presentes começa, se incluído no corte aprovado, por **listas externas**: nome, destino, imagem própria/licenciada, texto e ordem. Alterar no módulo atualiza o rascunho das secções ligadas. Clique externo não confirma compra, presente recebido ou saldo. Catálogo de itens/cotas, carteira, taxas, estornos e repasse pertencem à etapa financeira condicionada; não mostrar saldos fictícios.

## 14. Configurações sem esconder recursos

| Local | Definições |
| --- | --- |
| Configurações → Casamento | Nomes de apresentação, país/contexto, preferências e estado do casamento |
| Configurações → Pessoas e acesso | Segundo membro, colaboradores, papéis, convites e revogação |
| Configurações → Privacidade | Política de acesso ao site, permissões, descoberta/indexação e revisão de exposição |
| Configurações → Notificações | Preferências por pessoa, canais realmente disponíveis e resumo de atividade |
| Configurações → Dados e encerramento | Exportação, retenção, arquivo, eliminação e efeitos nas versões/ficheiros |
| Nosso site → Aparência | Modelo, cores, fontes e composições |
| Nosso site → Idiomas | Conteúdo publicado, traduções e faltas por rever |
| Nosso site → Publicação | Endereço, estado, prévia de partilha, histórico e despublicação |
| Eventos → Evento | Datas, fuso, local, público e participação |
| Convidados → Configurar confirmação | Formulário, prazos, perguntas e regras de RSVP |
| Conta pessoal → Segurança | Acesso, sessões e recuperação; método pendente de decisão |
| Plano MyWedding, etapa comercial | Contratação, validade, direitos, uso, faturas e cancelamento; só quando existir oferta real |

Um atalho pode aparecer noutro contexto, mas leva à mesma definição. Privacidade resume efeitos na publicação; não guarda uma segunda regra. Ocultar dos motores de pesquisa não é controlo de acesso nem promessa de remoção imediata de resultados já indexados.

Níveis propostos de acesso: **Público**, **Link não listado** e **Reservado a convidados identificados**. Link não listado ainda pode ser aberto por quem o recebe; não protege informação privada. Senha partilhada para a apresentação geral é uma opção a recortar, com proteção própria no servidor; não substitui convites individuais, revogação ou permissões por evento. A interface explica estas diferenças antes da publicação, sem prometer impedir que um destinatário copie informação já recebida.

## 15. Idiomas, prévia e públicos

Idioma da interface é preferência pessoal. Idiomas do site são escolhas do casamento. pt-BR/pt-PT são a cobertura inicial; mudar a interface não traduz a história nem publica conteúdo automaticamente.

Mostrar texto de origem e tradução, com estados em falta/revisto/desatualizado. Alterar o original marca traduções afetadas para revisão. Campos estruturados partilham identidade e valor; textos de apresentação podem variar. Publicação exige política explícita por campo: tradução revista, uso visível do idioma de origem ou secção omitida; não gerar inglês nem tradução inventada.

Prévia combina dispositivo, idioma, versão e público: visitante; grupo/pessoa autorizada; colaborador na sua própria área. “Ver como convidado” usa simulação autorizada e não partilha a credencial real nem regista respostas operacionais. A prévia conectada permite alterar uma resposta fictícia para demonstrar continuidade com o painel; isso não participa na base real de convidados. Prévia partilhável para revisão, se existir, é um acesso próprio com validade/revogação e sem edição.

Página pública e convite privado podem mostrar conteúdos diferentes. Conteúdo restrito não vai em HTML inicial, JSON, metadados sociais, ficheiros estáticos ou cache público. Prévia social de casamento privado usa conteúdo genérico ou material explicitamente aprovado, evitando expor nomes/local/fotografias por acidente.

## 16. Rever e publicar

1. **Revisão:** mostrar páginas, secções ativas, alterações desde a última publicação, idiomas e públicos afetados.
2. **Problemas:** bloqueios e avisos separados, com **Corrigir** no campo exato. Bloqueio: ligação inválida essencial, contraste essencial ilegível, informação privada exposta ou rascunho não guardado. Aviso: história curta ou foto opcional ausente.
3. **Disponibilização:** confirmar endereço, política de acesso, dados de evento ativos e estado de RSVP. Não exigir todas as secções; é válido publicar uma apresentação pequena com data por definir, sem RSVP/calendário enganadores.
4. **Publicar:** criar uma versão coerente e trocar a referência publicada apenas depois do sucesso. Falha mantém a versão anterior acessível.
5. **Conferir:** abrir resultado real e mostrar hora/versão. Copiar link e QR só após saber o estado que será partilhado.

Estados do site: rascunho, publicado, publicado com alterações pendentes, publicação em curso, falha, despublicado e arquivado. Política de expiração contratual só entra quando existir oferta definida. Despublicar não elimina dados nem revoga automaticamente todas as credenciais; apresentar e confirmar os efeitos exatos, incluindo se RSVP deixa de aceitar respostas.

Publicação completa do site é o primeiro mecanismo candidato. Publicar partes isoladas só entra depois de resolver dependências entre páginas, traduções, evento e media. Histórico apresenta autor, versão, resumo e recuperação para rascunho. Uma recuperação nunca restaura dados já eliminados por política de dados.

## 17. Recursos opcionais e pós-casamento

Planeamento futuro entra num grupo próprio: tarefas com prazo/responsável; orçamento com categorias/moeda/previsão/realizado; fornecedores e documentos privados; mesas por evento com capacidade; cronograma operacional. Cada módulo reutiliza convidados e eventos. A agenda pública continua em Eventos.

Mesas devem permitir lista e mapa, mover por botão/teclado, avisar excesso e acompanhar pessoas sem lugar. Informação de mesa ao convidado só aparece se o casal decidir; nunca expor o mapa de todos por padrão. Check-in QR exige papel de receção limitado, registo de entrada distinto de RSVP e análise própria de rede/dispositivo.

Depois do evento: mensagem de agradecimento, galeria revista, exportação de dados/recordações, decisão sobre continuar o site, arquivar ou apagar. Upload de convidados, mural, música, vídeos, sugestões de playlist, enquetes e transmissão têm cobertura no [catálogo](CATALOGO_DE_RECURSOS.md), com moderação/custos/capacidade quando aplicável.

Arquivo pode conservar recordações sem continuar recolha de RSVP. Download visual de recordação e exportação dos dados são entregas diferentes. Não prometer conservação vitalícia, renovação automática ou publicação pública de fotos sem decisão própria.

## 18. Identidade e biblioteca de componentes

Usar o [style guide](../../design/STYLE_GUIDE.md) e [tokens](../../design/tokens.css), sem nova paleta/escala do painel. Fundo `--mw-color-background`, superfícies `--mw-color-surface`, texto e bordas nos papéis existentes; ação principal `--mw-color-primary`, foco e estados funcionais conforme o guia. Fraunces em títulos de página curtos; DM Sans em navegação, tabelas, formulários e ações. O painel privilegia leitura e densidade confortável.

Componentes a desenhar documentalmente antes de construir: navegação, seletor de casamento, cabeçalho, cartões de próximo passo, separadores, árvore de páginas/secções, editor de campos, seleção de tema, prévia, seletor de imagem, tabela/cartões de convidados, perfil, filtros, importação, estado de salvamento, comparação, diálogo de impacto e revisão de publicação. Cada um inclui vazio, carregamento, erro, sucesso, foco, desativado e falta de permissão quando pertinentes.

Reutilizar controlos de 48 px e versão compacta de 44 px do guia, espaçamentos e raios existentes. Conteúdo do painel não precisa ter o espaço vertical editorial de cada secção da landing. Páginas de leitura/formulário respeitam o contentor; eventual canvas mais largo exige justificação/revisão de layout, não mudança silenciosa da identidade.

Mobile, tablet e desktop seguem os pontos de quebra do guia, reagrupando antes de reduzir fonte. Testar 360 px, nomes longos, zoom, teclado, leitor de ecrã, foco que não fica coberto e movimento reduzido. Estado não depende só da cor; reordenação e mapa de mesas têm alternativas acessíveis. Estas são condições de aceitação, não certificação atual.

## 19. Papéis e operações sensíveis

| Papel proposto | Conteúdo e publicação | Convidados e respostas | Dados/conta/dinheiro |
| --- | --- | --- | --- |
| Responsável pelo casamento | Edita e publica; gere membros dentro das regras | Gere e exporta conforme autorização | Controla encerramento e futura contratação; conta pessoal separada |
| Segundo membro do casal | Edita/publica e acompanha o casamento | Gere convidados/respostas | Direitos de gestão definidos no corte; não pode remover o último responsável sem transferência |
| Colaborador de conteúdo, futuro | Apenas conteúdo; publicação concedida explicitamente | Sem acesso por omissão | Sem cobrança, convidados ou eliminação global |
| Organizador, futuro | Capacidades concedidas por casamento | Só campos e eventos necessários | Sem acesso automático a presentes/cobrança; acesso revogável |
| Receção, futuro | Sem editor | Lista mínima do evento/check-in | Sem exportação ampla, notas alimentares ou contas |
| Convidado | Consulta versão autorizada | Responde ao seu escopo | Sem painel nem dados de outros grupos |
| Administração MyWedding | Acesso operacional explicitamente autorizado e auditado | Só quando necessário, com motivo | Segurança própria; sem impersonação silenciosa ou acesso universal por conveniência |

Matriz proposta para o design; papéis físicos, permissões e recuperação de titularidade precisam de definição no corte. Esconder botão não é autorização. Exportar, revogar, eliminar, transferir titularidade e enviar mensagens exigem ações com efeitos claros, validação e registo, sem sobrecarregar edições rotineiras com confirmações repetidas.

## 20. O que validará a facilidade prometida

Tarefas futuras, com dados fictícios e depois participantes autorizados: chegar à primeira prévia; mudar foto/texto/cor; acrescentar secção/página; trocar tema sem perda; configurar dois eventos com públicos diferentes; importar e corrigir uma família; partilhar o convite certo; responder em nome de um grupo; publicar; recuperar um erro; exportar a lista necessária; repetir ações essenciais no telemóvel.

Medir conclusão sem ajuda, tempo, erros, passos de retorno e necessidade de suporte. Primeira prévia em até 15 minutos e RSVP em até 60 segundos permanecem metas exploratórias da visão, não resultados. O protótipo visual deve esclarecer a navegação; o piloto funcional deve provar salvamento, autorização, publicação e recuperação. Um não substitui o outro.

## 21. Mapa completo de telas e vistas

Uma vista pode ser painel contextual, separador ou etapa; cada linha não exige uma rota. **S** significa que há uma representação interativa na prévia, **S parcial** que só parte do percurso foi simulada e **P** que existe apenas planeamento. Nenhum desses estados significa núcleo implementado. O inventário de famílias do [catálogo](CATALOGO_DE_RECURSOS.md) conserva a cobertura geral; este mapa detalha a navegação desta proposta.

| ID | Tela/vista e entrada | Conteúdo e ações principais | Estados/saídas necessários | Prévia |
| --- | --- | --- | --- | --- |
| T01 | Acesso, por Entrar ou ligação autorizada | Entrar, criar conta, recuperar, confirmar método, aceitar colaboração | Erro, expiração, revogação, retorno ao destino; abre T02 ou T03 | P; interfaces demonstrativas da landing são outra entrega |
| T02 | Assistente inicial | Nomes/idioma, celebração, estilo, estrutura e primeira prévia | Continuar depois, dados por definir, retomar; termina em rascunho T04 | P |
| T03 | Início do painel | Continuar edição, estado, próximos passos, resumo e atividade | Sem conteúdo, preparado, publicado, alterações pendentes e pós-evento | S |
| T04 | Editor, por Nosso site ou atalho | Estrutura, canvas, inspector e cabeçalho; texto/foto/elemento seleccionáveis | Página/secção vazia, selecção, guardando, erro, conflito e permissão | S; persistência/erros reais são P |
| T05 | Páginas e configuração da página | Criar vazia/modelo, nome, título, endereço, início, ordem, menu e acesso | Colisão, página inicial, ligações afetadas, remoção/recuperação; volta à página | S parcial; validação completa de rotas é P |
| T06 | Biblioteca de secções | Tipos, miniaturas, exemplo e inserção | Sem resultados quando houver pesquisa, incompatibilidade e limites | S com 12 tipos |
| T07 | Inspector da secção | Conteúdo/Layout/Estilo, posição, duplicar/remover, favorita, público e destino | Campos inválidos, dado ligado, oculto e herança de tema | S |
| T08 | Inspector do elemento livre | Texto, imagem, botão, cartão, separador, largura, alinhamento e ordem | Sem selecção, destino inválido, conteúdo removido; Voltar à secção | S |
| T09 | Biblioteca e ajuste de fotos | Seleccionar/substituir, enquadrar, descrever, galeria e referências | Upload/progresso/erro, uso em versões, remoção e acesso privado | S parcial; apenas fotos demonstrativas |
| T10 | Estilo global do site | Atmosferas, fontes, modo de navegação e personalização por papel | Comparação, contraste e repor sem perda; voltar ao editor | S parcial |
| T11 | Experimentar composição | Actual/Nova ideia, próxima variante, aplicar ou cancelar | Sem secção, variante suportada, retorno e desfazer | S |
| T12 | Minhas favoritas | Guardar/reutilizar secções; gestão própria do casamento | Vazia, renomear/remover, referência indisponível e acesso herdado | S parcial |
| T13 | Versões e atividade editorial | Guardar ponto, comparar/restaurar, autor/data/resumo | Vazia, restauração, incompatibilidade e retenção | S parcial; versões de sessão |
| T14 | Prévia do convidado | Navegação, dispositivo, idioma, público e saída ao editor | Conteúdo reservado, sem tradução, página desativada e destino inválido | S parcial; sem segurança real |
| T15 | Revisão | Estrutura, alterações, idiomas, públicos, problemas e atalhos Corrigir | Bloqueio/aviso, sem alterações; volta ao campo ou T16 | S parcial; termina em versão de teste |
| T16 | Publicação e endereço | Confirmar revisão, publicar, resultado, link/QR, despublicar e histórico | Em curso, falha, versão anterior preservada e estado real | P |
| T17 | Eventos: lista e detalhe | Adicionar, nome/data/hora/fuso/local/público, regras e alterações | Indefinido, privado, adiado, cancelado e respostas existentes | S parcial; sem fuso/regras completos |
| T18 | Convidados: lista e perfil | Pessoas, grupos, eventos, etiquetas, respostas, pesquisa e ações | Vazia, sem resultados, homónimos, seleção e registo manual | S parcial; cadastro simples fictício |
| T19 | Grupos, convites e acompanhantes | Pessoas do grupo, vagas, eventos autorizados e idioma | Grupo parcial, acompanhante sem nome, conflito/fusão | P |
| T20 | Importar/exportar convidados | Ficheiro, mapeamento, revisão por linha, resultado e campos mínimos | Formato inválido, duplicados prováveis, parcial/falha e repetição | P |
| T21 | Configurar confirmação | Abertura/prazo/fuso, perguntas, regras de correção e alterações | Sem evento, encerrado, pergunta usada e reconfirmação | P |
| T22 | RSVP do convidado | Convite, pessoas/eventos, perguntas, revisão, confirmar e corrigir | Inválido/revogado, prazo, rede, repetição e grupo parcial | S parcial; uma resposta fictícia simplificada |
| T23 | Convites e mensagens | Peças, texto/tom/idioma, destino, destinatários, prévia e partilha | Rascunho, manual, integrado apenas se real e falhas correspondentes | S parcial; rascunho sem envio |
| T24 | Configurações do casamento | Dados, membros, privacidade, notificações, dados/encerramento | Alteração sensível, permissão, efeitos e recuperação | S parcial; nomes/data/cidade/modo |
| T25 | Conta pessoal | Perfil, idioma da interface, segurança e sessões | Recuperação, acesso expirado e retorno ao casamento | P |
| T26 | Planeamento e recordações | Tarefas, orçamento, fornecedores, mesas, mural, fotos e arquivo | Privado, moderação, capacidade e encerramento | P, expansão |
| T27 | Ajuda contextual | Explicação do campo, localizar origem, erro e contacto disponível | Sem resposta, indisponibilidade e regresso à tarefa | P; orientações curtas existem no estudo |
| T28 | Administração interna | Suporte justificado, auditoria, saúde, quotas e recuperação | Acesso negado, incidente e evidência de restauro | P; fora do painel do casal |

O futuro módulo de Presentes externos reutiliza a responsabilidade descrita na secção 13 e F078; a secção visual do estudo não constitui esse módulo. Plano, cobrança, integrações financeiras e área profissional só acrescentam telas quando o corte correspondente existir. As rotas lógicas do catálogo continuam apenas nomes de planeamento.

## 22. Fluxos completos e continuidade

### Regra de ida e volta

Um fluxo guarda o seu contexto de origem: casamento, página, secção, elemento, separador, dispositivo e posição; listas conservam pesquisa/filtros. Abrir fotos, temas, versões ou Eventos não deve fazer a pessoa procurar novamente o que editava. Se o objeto tiver sido removido, voltar ao contentor válido com explicação. O produto tem de resolver alterações não guardadas, sessão expirada e conflitos antes de abandonar trabalho; a prévia exercita apenas parte desses retornos.

| ID | Entrada e passos | Resultado/retorno esperado | Exceção ou limite relevante |
| --- | --- | --- | --- |
| FL01 | Entrar/aceitar convite → autenticar pelo método escolhido → validar participação → retomar destino ou Início | Mesmo casamento autorizado; conta sem casamento segue T02 | Sessão/convite expirado não revela conteúdo; não duplicar casamento ao aceitar |
| FL02 | T02: nomes/idioma → data/contexto conhecidos → estilo ou escolher depois → estrutura → primeira prévia | Rascunho útil em T04; completar dados e convidar segundo membro são passos opcionais | Exemplos identificados, data/local indefinidos válidos; sem publicação automática |
| FL03 | Início → Começar do zero → rever alcance → guardar recuperação → confirmar estrutura vazia → adicionar primeira secção | Novo rascunho editorial vazio; casamento e operação preservados | Cancelar mantém tudo; no estudo, ponto de versão precede a limpeza das páginas |
| FL04 | Editor → Páginas → Nova página → nome e modelo/vazia → criar → editar secções → configurar nome/título/endereço/início/menu/ordem/acesso | Nova página seleccionada e menu coerente; converter modo mostra mapa antes de aplicar | Validar endereço/colisão; renomear não muda URL; remover apresenta dependências e recuperação |
| FL05 | Página → Adicionar secção → escolher tipo → editar campos → mover/duplicar/ocultar ou mover para página → conferir prévia | Estrutura reflecte a escolha; IDs/referências permanecem ao mover; desfazer recupera operação | Remover secção não remove evento, resposta ou foto original; duplicação tem IDs novos |
| FL06 | Secção livre → Adicionar elemento → escolher tipo → editar → largura/alinhamento → ordenar/duplicar/remover → Voltar à secção | Composição própria dentro da grelha; ordem visual e de leitura coerentes | Em mobile empilha quando necessário; URL inválida explica correção; sem código livre |
| FL07 | Seleccionar texto na prévia ou pela árvore → Conteúdo → editar título/corpo/botão/destino → observar → guardar rascunho | Prévia muda sem perder foco/posição; regressar ao painel conserva contexto | Não tratar placeholder como valor; links/semântica validados; falha mantém texto |
| FL08 | Seleccionar fotografia → biblioteca/upload → escolher → enquadrar → descrição/legenda → aplicar → conferir desktop/mobile | Uso actualizado, original preservado; galeria permite ordem e retirada de referência | Na prévia só há biblioteca demonstrativa; falha real de upload conserva imagem anterior |
| FL09 | Estilo do site → escolher atmosfera → ajustar papéis/fontes → comparar → aplicar ou cancelar → rever secções com exceções locais | Conteúdo e relações preservados; painel MyWedding conserva identidade | Contraste/legibilidade não podem ser contornados; mudar fonte não traduz texto |
| FL10 | Seleccionar secção → guardar favorita → abrir Minhas favoritas → escolher → inserir nesta página → personalizar cópia | Secção independente reutiliza uma boa ideia sem repetir montagem | Favorita não concede acesso entre casamentos; confirmar referências/permissões herdadas |
| FL11 | Seleccionar secção → Experimentar → comparar Actual/Nova ideia → alternar variantes → aplicar ou sair | Aplicar cria mudança reversível; cancelar deixa origem intacta | Sem secção abre escolha/inserção; não trocar dados de convidados nem tema global silenciosamente |
| FL12 | Guardar versão → fazer alterações → desfazer/refazer operações → Versões → comparar/restaurar → conferir novo rascunho | Recuperação editorial sem publicar; voltar ao item válido | Produto não restaura RSVP/revogação/dinheiro; snapshot amplo da simulação tem limite na secção 24 |
| FL13 | Eventos → adicionar/editar → data/hora/fuso/local/público → rever impacto → guardar revisão → voltar à Programação | Agenda/convites/calendário usam a revisão destinada aos convidados | Alteração após respostas preserva histórico; reconfirmação/envio são escolhas separadas |
| FL14 | Convidados → adicionar/abrir pessoa → dados mínimos/grupo/eventos/vagas → guardar → filtrar/responder manualmente quando autorizado | Lista, perfil e contagens por pessoa/evento coerentes; retorno mantém filtros | Nome não é chave; contacto opcional; origem de resposta manual explícita; notas são privadas |
| FL15 | Importar → ficheiro → mapear → eventos/grupos → revisar linhas/duplicados → confirmar → resultado; Exportar → finalidade/filtros/campos → prévia → gerar | Entradas válidas identificadas; relatório e exportação privada mínima | Sem apagar/recriar base, sem sobrescrever RSVP na reimportação; download não envia ao fornecedor |
| FL16 | Configurar confirmação → evento/prazo/fuso → perguntas/regras → rever impacto → aplicar; convidado: abrir convite → pessoas/eventos → perguntas → rever → confirmar → corrigir | Servidor confirma respostas por pessoa/evento; painel reflecte resultado real | Convite revogado/prazo/rede/repetição tratados; prévia oferece apenas resposta fictícia reduzida |
| FL17 | Editor/Início → Prévia → desktop/mobile → idioma → visitante/grupo → navegar páginas/botões → voltar ao editor | Entender o que cada público verá sem perder selecção de trabalho | Trocar idioma não traduz conteúdo; estudo filtra no cliente e não demonstra autorização |
| FL18 | Revisar → conferir páginas/idiomas/públicos/diferenças → corrigir bloqueios → rever endereço/acesso → confirmar publicação → abrir resultado real | Versão coerente identificada, anterior mantida em falha; link disponível após confirmação | Agora termina em Guardar versão de teste; não cria URL nem comprova publicação |
| FL19 | Convites → peça → texto/tom/idioma → destino e grupos → conferir dados/links → canal → prévia final → partilhar manualmente | Texto/link pronto ou copiado, sem alegar entrega; histórico manual identificado | No estudo não há envio, contactos ou partilha externa; QR individual não vai para grupo público |
| FL20 | Configurações → assunto → editar → resumir efeito → aplicar conforme permissão → retornar ao contexto | Origem única para dados/acesso; alterações de segurança têm efeito próprio | Mudar dado do casamento não muda perfil da conta; restringir acesso não aguarda publicação editorial |
| FL21 | Depois do evento → agradecer → rever recordações → exportar → escolher manter/arquivar/despublicar/encerrar → confirmar efeitos | Dados e visual preservados/exportados conforme política; recolhas encerradas conscientemente | Retenção, eliminação e oferta por decidir; sem prazo vitalício ou renovação presumida |

### Atualizar listas sem refazer trabalho

- **Páginas/menu:** gerir em Páginas; lista e navegação da prévia consomem a mesma estrutura. Links internos precisam ser revistos ao remover/mudar endereços.
- **Secções/elementos/galeria:** ordem e conteúdo na página, com IDs estáveis, alternativas a arrastar e recuperação. Retirar uma referência não apaga o original.
- **FAQ, linha do tempo, viagem e links:** editar itens no inspector; acrescentar, ordenar e remover com retorno ao item. No produto, conteúdo reutilizado deve ter origem identificável; o estudo usa listas locais simplificadas por secção.
- **Eventos:** módulo Eventos como origem. A secção Programação escolhe o que apresentar; não mantém outra agenda.
- **Convidados/respostas/grupos:** módulo Convidados como origem. O editor muda apresentação do acesso ao RSVP; o futuro formulário e permissões ficam no módulo próprio.
- **Favoritas:** biblioteca do casamento; inserir copia um ponto de partida. Não é uma lista de instâncias sincronizadas.
- **Presentes externos:** futuro módulo correspondente como origem. A secção visual refere destinos; clique não é recebimento.

## 23. Diferenciais propostos e como avaliar

São hipóteses próprias para reduzir esforço e permitir exploração. A pesquisa documenta recursos de referências, mas não prova exclusividade, superioridade ou procura pelo MyWedding. O principal percurso deve funcionar sem IA ou integrações pagas.

| Ideia | Benefício esperado na tarefa | O que observar na avaliação |
| --- | --- | --- |
| Começar pronto e poder começar vazio | Acolher quem quer rapidez e quem quer inventar | Primeira edição útil sem ajuda; compreender o alcance de começar do zero |
| Seleccionar no site e encontrar o mesmo campo na árvore | Evitar procurar texto/foto entre menus | Encontrar e alterar pelo rato, teclado e telemóvel; contar retornos |
| Secção livre estruturada | Criar páginas pessoais com composição coerente | Montar texto, imagem e botão sem cortar conteúdo no mobile |
| Actual/Nova ideia sem perda | Tornar experiências visuais seguras e divertidas | Comparar, aplicar/cancelar e recuperar sem receio ou trabalho repetido |
| Favoritas do próprio casal | Reaproveitar uma composição feita por eles | Reutilizar e personalizar cópia sem afectar a origem |
| Eventos, convidados e apresentação ligados | Reduzir cópias desatualizadas | Alterar na origem e localizar todos os usos autorizados |
| Prévia por público/idioma/dispositivo | Antecipar dúvidas do convidado | Identificar informação privada, tradução ausente e problema móvel antes de disponibilizar |
| Recuperação e revisão visíveis | Encorajar exploração com entendimento do que será mostrado | Distinguir rascunho, versão de teste, publicação e resposta; corrigir um erro sem suporte |

Não usar recompensas, contadores de pontos, animação contínua ou notificações artificiais para fabricar diversão. A liberdade vem das composições e da confiança em voltar atrás. Se a quantidade de controlos impedir a tarefa básica, recolher ajustes avançados e rever a composição; o protótipo não fixa densidade final.

## 24. Prévia conectada: cobertura e limites

### Registo da evolução visual

Em 15/10/2026, D15 autorizou os primeiros estudos separados de painel/editor. Rodrigo apontou que a prévia permitia poucas alterações e pediu refazê-la para testar o percurso completo. D17 autorizou a nova simulação **sem implementar no projeto nem publicar**. A referência atual é a prévia conectada apresentada na conversa, identificada como `casal-estudio-completo.html`; os primeiros estudos permanecem evidência histórica da exploração, não uma segunda especificação ativa.

O cenário começa com Ana & Alex, Coimbra, data fictícia de 20/06/2027, três páginas, sete secções, dois eventos e seis convidados. Esses números servem ao teste, não são quotas/oferta ou requisitos de cadastro. Fontes, tokens e fotografias existentes foram reutilizados. O estudo vive fora da aplicação; este pedido D18 guarda a sua estrutura em documentação e não copia o simulador para `src/` ou `public/`.

### Conferência local realizada na prévia anterior a esta documentação

| Percurso inspecionado | Evidência observada | Limite |
| --- | --- | --- |
| Painel → editor → retorno | Navegação conectada e estado de edição mantido nas ações exercitadas | Não comprova sessão autenticada ou persistência durável |
| Texto e página própria | Título alterado na prévia; página vazia criada/renomeada/duplicada; remoção desfeita | Não comprova todas as validações de slug ou ligações |
| Secção livre e imagem | Elemento de imagem adicionado e fotografia demonstrativa trocada; alinhamento alterado | Upload pessoal, processamento e todas as combinações não testados |
| Estrutura e recuperação | Favorita guardada; secção duplicada/removida; desfazer/refazer exercitados | Não equivale a biblioteca persistente ou restauro operacional |
| Tema e experiência alternativa | Terracota aplicada sem apagar conteúdo; comparação e aplicação de composição | Não comprova todas as variantes, contraste ou responsividade |
| Dados de evento | Nome alterado em Eventos e observado em Programação | Não prova revisões publicadas, fusos ou calendário |
| Público | Evento de família ausente para visitante e presente no modo família | Filtro local fictício; não é controlo de acesso real |
| Confirmação | Resposta fictícia alterada e refletida em Convidados | Fluxo reduzido; sem convite autorizado, perguntas ou respostas por evento reais |
| Revisão e versão | Guardar versão de teste, listar e restaurar exercitados | Nada foi publicado ou enviado |
| Apresentação responsiva | Estados desktop a 1024 px e mobile a 390 px inspecionados; no estado móvel conferido, área de 343 px sem overflow horizontal | Não cobre todos os estados/zoom/dispositivos ou acessibilidade integral |

Esta documentação não repete testes funcionais do estudo nem transforma a conferência anterior em teste do produto. Uso por Rodrigo durante a avaliação não foi medido como estudo de usabilidade; não há métricas de conclusão, satisfação ou superioridade.

### Simplificações que não devem passar para o produto

1. **Tudo é fictício e local à simulação.** Público/família não autentica nem impede leitura dos dados pelo cliente. O produto deve autorizar no servidor/base/ficheiros.
2. **O estudo junta dados para demonstrar continuidade.** Versões/desfazer usam cópias amplas desse cenário e podem repor eventos/convidados fictícios. Isso não é o contrato futuro: versões editoriais jamais revertem respostas, revogações, comunicação ou dinheiro, conforme secções 10–11 e a arquitetura.
3. **Versões são da sessão.** Retenção, armazenamento, restauro entre dispositivos, concorrência, autosave confirmado e recuperação real não foram implementados nem demonstrados. Eventual restauração pelo ambiente da conversa não é garantia de backup.
4. **Biblioteca de fotos é demonstrativa.** Não há upload próprio, validação de ficheiros, direitos ou tratamento de localização. Sliders e drag/drop não tiveram todas as combinações testadas.
5. **Listas e convites são reduzidos.** Não há importação/exportação real, gestão integral de grupos/acompanhantes, perguntas/prazos de RSVP, canais, mensagens entregues ou pagamentos. O campo de convite prepara apenas um rascunho de teste.
6. **Idiomas são parciais no estudo.** Alternar pt-BR/pt-PT não traduz os textos pessoais. A cobertura funcional/traduções completas e revisão continuam planeadas.
7. **Revisão é exploratória.** Detecta alguns vazios/títulos/descrições; não audita toda a semântica, contraste, segurança ou privacidade. Finalizar só guarda uma versão de teste.
8. **A fidelidade visual ainda precisa de revisão.** Guia/tokens/assinatura aprovada são a fonte; ajustes experimentais de grelha, larguras e controlos do estudo não se tornam novos tokens nem aprovação de marca.

### Estado documental desta consolidação

A especificação central foi reconciliada com a prévia conectada, o catálogo ganhou F113–F115 e as dependências de leitura/estado foram atualizadas. O corte e a composição final continuam em P01/P11/P13; os demais pontos ficam no registo central de pendências. O [plano de construção](../planeamento/CONSTRUCAO_DO_PRODUTO.md) continua futuro, com prototipagem apenas parcial em E1.

O [relatório original](../../output/reports/produto-planeamento-verification-2026-10-15.json) preserva a conferência da v1. A [verificação da consolidação v2](../../output/reports/painel-editor-planeamento-v2-verification-2026-10-15.json) regista referências/integridade desta revisão. São verificações documentais, sem build, testes do núcleo, CI, conta, infraestrutura, commit, envio ou publicação. A aplicação, landing, assets e identidade não foram alterados por esta consolidação.

## 25. Aplicação do corte da primeira versão

**D19 é priorização documental, não execução.** O [plano de construção, secção 1](../planeamento/CONSTRUCAO_DO_PRODUTO.md#1-objetivo-e-corte-recomendado) define o que entra, o que fica depois, limites, alternativas e aceitação. O [catálogo](CATALOGO_DE_RECURSOS.md#como-interpretar-o-corte-d19) classifica os 115 IDs. Esta secção aplica o corte às telas/fluxos existentes, sem criar outra lista concorrente de requisitos.

### Telas e controlos no primeiro percurso

| Vistas da especificação | Tratamento na V1 proposta |
| --- | --- |
| T01–T04: acesso, começo, painel e editor | Entram com recuperação, assistente curto, seis áreas de navegação e contexto preservado; conta/produto reais ainda dependem das condições técnicas |
| T05–T08: páginas, biblioteca, secção e elemento | Entram páginas próprias/multipágina e nove tipos iniciais, com cinco elementos livres; sem conversão contínua ou público granular por página/secção |
| T09–T10: media e tema | Entram upload validado, ponto focal/galeria, três famílias próprias e cores/fontes controladas; sem edição fotográfica por dispositivo ou múltiplos idiomas publicados |
| T11: experimentar | Entra como prévia temporária aplicar/cancelar e desfazer; a tela comparativa simultânea da prévia completa fica depois |
| T12: favoritas | Fica depois; duplicar página/secção permite reaproveitar na V1; retirar o atalho de favoritas da interface inicial |
| T13–T16: versões, prévia, revisão e publicação | Entram com histórico editorial, resumo de alterações/problemas e disponibilização explícita; sem link privado de revisão ou comparação detalhada de campos |
| T17–T20: eventos, pessoas/grupos e importação/exportação | Entram cadastro/eventos autorizados, famílias e vagas; CSV padrão com revisão e edição individual; sem fusão/mapeador amplo ou ações em lote gerais |
| T21–T22: confirmação | Entram presença por pessoa/evento, prazo, revisão, correção e histórico; perguntas condicionais e campos de alimentação/acessibilidade ficam depois |
| T23: convites | Entra texto-base, links e partilha manual; sem QR, designer de peças, calendário, campanhas ou métricas de entrega |
| T24–T25: configurações e conta | Entram dados, segundo membro, política do site/eventos, idioma da interface, limites e dados/encerramento; sem matriz granular de colaboradores ou planos/cobrança |
| T26: organização e recordações | Fica depois; exportação/eliminação obrigatórias usam Configurações, não dependem desse módulo |
| T27–T28: ajuda e operação | Entram ajuda contextual, recuperação, auditoria/suporte mínimos; central administrativa ampla e automações não entram |

**Campos indisponíveis não aparecem no inspector inicial.** Em particular: favoritas, comparação lado a lado, conversão contínua, visibilidade por página/secção e traduções simultâneas pertencem à prévia de visão completa ou à evolução, não à interface V1. O campo “Quem vê?” só aparece no lugar que tem autorização efetivamente implementada: política do site e eventos/convites. A prévia mostra visitante/grupo autorizado a partir dessas regras.

### Fluxos preservados e recortados

| Fluxos | Alcance inicial |
| --- | --- |
| FL01–FL03 | Entrada, assistente/retorno e começo vazio com recuperação; preservam operação do casamento |
| FL04–FL09 | Páginas, secções/elementos, textos, fotografias e aparência; sem conversão contínua, permissões editoriais granulares ou media avançado |
| FL10 (posterior) | Favoritas depois; alternativa inicial é duplicar pelo FL05 |
| FL11–FL12 | Experimentar uma composição e recuperar versões; comparação lado a lado depois; versões só editoriais |
| FL13–FL16 | Eventos/grupos/CSV/RSVP de presença; sem calendário, fusão, formulários condicionais ou reconfirmação em campanha |
| FL17–FL20 | Prévia, revisão/publicação, convite/link manual e configurações; um idioma principal do site; sem QR/envio integrado |
| FL21 (parcial/posterior) | Módulos pós-evento e recordação depois; exportar dados, despublicar e encerrar continuam disponíveis por FL20/Configurações |

O percurso V1 fecha **entrada → construção → dados de evento/convidados → revisão/publicação → partilha manual → resposta → acompanhamento/recuperação → exportação/encerramento**. A ordem é flexível: preparar o site não exige uma lista completa; disponibilizar uma apresentação pequena não exige abrir RSVP. O corte conserva liberdade de criação e adia ferramentas que aumentam gestão/integração, não os estados de falha ou a proteção de dados.

Para revisão dos fundadores, avaliar especialmente entrada multipágina, descoberta dos elementos livres, limites dos controlos, importação padrão e RSVP simplificado. P01/P11/P13 continuam abertas até confirmação/validação; a [verificação documental D19](../../output/reports/painel-editor-corte-v1-verification-2026-10-15.json) não prova facilidade, implementação ou prontidão de piloto. Os relatórios anteriores conservam a evidência da exploração completa, que não foi alterada neste corte.
