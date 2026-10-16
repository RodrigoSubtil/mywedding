# Construção futura da área do casal e do editor

**Plano documental de 15/10/2026. Nenhuma etapa de implementação foi iniciada por este pedido.** Detalha a evolução do [plano geral](PLANO_DE_EXECUCAO.md), com a [experiência proposta](../produto/AREA_DO_CASAL_E_EDITOR.md) e o [catálogo de recursos](../produto/CATALOGO_DE_RECURSOS.md). Não fixa datas, horas, preços ou fornecedores. A [arquitetura aprovada](../arquitetura/ARQUITETURA_E_STACK.md) permanece a fonte técnica; [Prontidão e pendências](../governanca/PRONTIDAO_E_PENDENCIAS.md) mantém decisões abertas.

**Consolidação v2 (D17/D18):** há uma prévia conectada, externa à aplicação, com interações fictícias, e a sua estrutura foi documentada. Isso representa exploração parcial de E1. Aprovação do corte, avaliação dos fundadores e demais estados continuam pendentes; E2–E11 não começaram por esta continuidade. O [mapa de telas e fluxos](../produto/AREA_DO_CASAL_E_EDITOR.md#21-mapa-completo-de-telas-e-vistas) é a entrada para a revisão.

**Priorização D19 — 15/10/2026:** Rodrigo pediu separar a primeira versão do painel/editor dos recursos posteriores, preservando um fluxo completo e fácil, ainda **só no planeamento, sem implementar nem publicar**. A secção 1 passa a ser a fonte do corte recomendado; o catálogo classifica cada capacidade. É uma proposta concreta para revisão, não aprovação automática da implementação ou dos fornecedores.

## 1. Objetivo e corte recomendado

**Continuidade D20/D21 — 16/10/2026:** Rodrigo pediu preparar o login/autenticação, autorizou o destino Supabase Free e reforçou a segurança desde o acesso. A provisão dedicada está confirmada; a integração continua pendente. A [Construção do acesso](CONSTRUCAO_DO_ACESSO.md) detalha a fatia inicial de E2/E3, sem transformar as restantes etapas do painel/editor em implementação autorizada.

Construir futuramente um percurso em que o casal cria um site com pouco esforço, modifica-o sem perder conteúdo, publica uma versão coerente, convida as pessoas certas e acompanha respostas. O percurso deve funcionar em pt-BR/pt-PT, no navegador móvel, com recuperação e isolamento entre casamentos demonstrados.

### 1.1. O que significa primeira versão

**V1 proposta = construir o site, rever, disponibilizar uma versão coerente, partilhar manualmente o convite e acompanhar/corrigir respostas.** Contém H1 e o recorte essencial de H2, incluindo os requisitos operacionais para uso real. H1 continua a ser a fatia técnica de conta/editor/publicação; H2 continua a ser a fatia de convidados/RSVP/segurança do piloto. Podem ser construídas e verificadas separadamente, mas H1 sozinho não será apresentado como esse percurso completo.

A regra do corte é preservar autonomia na construção e reduzir ferramentas de produtividade/organização que não são necessárias para concluir o ciclo. Entram páginas próprias e secção livre; ficam para depois bibliotecas pessoais sofisticadas, múltiplas traduções simultâneas, automações e módulos de organização. Rascunhos, recuperação, acessibilidade, autorização e isolamento não são extras opcionais.

**V1 é nome de planeamento, não uma versão implementada.** Nada deste documento agenda lançamento, escolhe fornecedor, cria conta, instala biblioteca ou autoriza publicação. Métodos de acesso, infraestrutura, capacidade, retenção, permissões finais e validação dos fundadores continuam nas pendências centrais.

### 1.2. O que entra na V1

| Área | Entrega da primeira versão | Limite que mantém o percurso simples |
| --- | --- | --- |
| Acesso e começo | Conta individual, recuperação, casamento, segundo membro opcional e assistente curto retomável; nomes/data/contexto conhecidos ou por definir | Apenas papéis básicos do casal; sem área profissional ou coedição em tempo real; método real depende de P04 |
| Painel | Início, Nosso site, Eventos, Convidados, Convites e Configurações; próximo passo, estado, respostas e atividade essencial | Até três próximas ações; sem métricas de visitas ou menus de módulos indisponíveis; avatar para Conta |
| Páginas | Estrutura multipágina sugerida com Início, O grande dia e Confirmação; criar vazia/modelo, renomear, ordenar, duplicar, definir início, editar endereço, retirar do menu/desativar e recuperar | Três é ponto de partida editável, não quota ou mínimo; conversão automática para página contínua depois; restrição granular por página/secção depois |
| Secções | Biblioteca inicial abaixo; inserir, mover, duplicar, ocultar/remover com recuperação, mudar página e ajustar conteúdo/layout | Duas ou três variantes úteis por tipo quando fizer sentido; nenhuma escolha exige redesenhar desktop/mobile manualmente |
| Elementos livres | Texto, imagem, botão, cartão e separador; título/corpo/destino, alinhamento, linha inteira/meia linha, ordem, duplicação e remoção | Grelha responsiva com semântica controlada; sem coordenadas, HTML/CSS/JavaScript livres ou edição de qualquer detalhe por pixel |
| Texto e listas | Títulos, parágrafos, negrito/itálico, listas e links validados; itens de FAQ, informações e galeria editáveis/reordenáveis | Sem editor editorial complexo; sugestões são próprias, revistas e opcionais; exemplos não são publicados como factos |
| Aparência | Três famílias próprias, troca sem perda, cores por papel com valor manual/contraste, combinações das fontes existentes, alinhamento, espaçamento e repor padrão | Não altera marca/painel MyWedding; ornamentos e catálogo extenso de fontes ficam para depois |
| Fotografias | Upload validado, biblioteca, substituição, descrição/legenda, ordem da galeria, recorte/ponto focal e referência de uso | Limites definidos pela capacidade real; sem upload de convidados, vídeo, recorte diferente por dispositivo ou editor fotográfico avançado |
| Experimentar | Escolher composição, ver o resultado temporário e aplicar/cancelar; desfazer/refazer, duplicar página/secção e guardar versões | Sem biblioteca de favoritas nem comparação simultânea Actual/Nova ideia; estas entram depois; F115 entra apenas no recorte de experimentação reversível |
| Guardar e rever | Rascunho confirmado pelo servidor, falha sem perda, aviso ao sair, controlo de revisão/conflito, histórico com autor/data/resumo e restauração para novo rascunho | Sem merge automático, presença em tempo real ou modo offline; restaurar nunca reverte RSVPs/permissões atuais |
| Prévia e publicação | Prévia desktop/mobile, visitante/grupo autorizado, lista de alterações/problemas, corrigir no campo, publicar/despublicar explicitamente e conferir resultado/endereço estável | Endereço pela infraestrutura avaliada; sem domínio próprio ou ligação privada de revisão; histórico editorial separado da operação |
| Eventos | Vários eventos com data/hora/fuso/local, ordem, público e revisão dos detalhes; alterar/adiar/cancelar com histórico/impacto; agenda e direções ligadas à origem | Sem calendário ICS/sincronização ou campanhas de reconfirmação; alteração nunca envia mensagens ou apaga respostas sozinha |
| Convidados | Pessoas, famílias/grupos, eventos autorizados, acompanhantes limitados, pesquisa e filtros por evento/resposta; edição individual e CSV de entrada/saída | CSV com modelo fixo, prévia/erros por linha e duplicados prováveis; sem XLSX, mapeador livre, fusão automática, etiquetas ou ações em lote gerais |
| RSVP | Abrir/fechar e prazo/fuso; convite revogável sem conta/app do convidado; resposta por pessoa/evento, revisão, correção e registo manual pelo casal com origem/autor | Primeira versão pergunta presença; construtor de perguntas, refeições/restrições e condições de formulário ficam para depois |
| Convites | Texto-base editável, destino/idioma, link geral ou por grupo e partilha manual; painel reflecte apenas respostas confirmadas | Copiar/abrir canal não prova envio; sem QR, designer de papelaria, lembretes, agendamento ou rastreamento de entrega |
| Idiomas | Interface pt-BR/pt-PT por utilizador; site com um idioma principal escolhido entre as duas variantes, incluindo componentes de RSVP | Conteúdo pessoal não é traduzido ao mudar a interface; publicação simultânea em vários idiomas e apoio de tradução ficam para depois |
| Configurações e operação | Dados, dois membros, acesso do site, permissões por evento/convite, limites, exportação/encerramento, backup/restauro e auditoria/suporte mínimos | Público/não listado/reservado com explicação; sem senha geral adicional, matriz de papéis editável ou console administrativa ampla |

**Biblioteca inicial de nove tipos:** Capa; Nossa história; Programação; Informações e como chegar; Galeria; Confirmação; Perguntas frequentes; Uma mensagem; Secção livre. Boas-vindas entram na capa/texto; viagem, traje e estacionamento em Informações; pessoas especiais e links externos em cartões/botões livres. Contagem regressiva é um elemento opcional de Capa/Programação, ligado a evento válido. Linha do tempo especializada e Presentes como módulo ficam depois. A biblioteca menor conserva liberdade de conteúdo sem criar um módulo para cada assunto.

Configuração de acesso na V1 limita-se ao site e a eventos/convites. Uma página/sequência editorial usa a política do site; retirar do menu não a torna privada. Quando a agenda mistura públicos, os eventos privados só são entregues pelo servidor ao convidado autorizado. Os controlos de público individual por página/secção da prévia completa não aparecem até essa capacidade existir.

O CSV inicial usa modelo oferecido pela plataforma com nome, grupo e contactos opcionais; o assistente aplica eventos escolhidos explicitamente e mostra o resultado antes de confirmar. Homónimos são válidos, nome não é chave e nenhuma importação sobrescreve resposta. Correspondência segura por ID, reimportação assistida, fusão e formatos adicionais são expansão. Exportação inicial permite evento/estado e campos mínimos; dados/ficheiros completos do casamento têm percurso próprio de exportação e encerramento, cuja política precisa de P06/P13 antes do piloto.

### 1.3. O que fica para depois e a alternativa inicial

| Capacidade posterior | Motivo do adiamento | Como a pessoa conclui a tarefa na V1 |
| --- | --- | --- |
| Favoritas reutilizáveis e biblioteca pessoal (F114) | Gestão persistente de modelos/referências não é necessária ao primeiro ciclo | Duplicar página/secção existente e personalizar a cópia |
| Comparação lado a lado e exploração visual ampliada (parte de F115) | Duas renderizações e estado de comparação aumentam a superfície de design/verificação | Experimentar uma composição na prévia, aplicar/cancelar e desfazer |
| Página contínua e conversão automática (parte de F012) | Migração de navegação/âncoras e ida/volta acrescentam complexidade | Três páginas sugeridas editáveis; pode deixar apenas uma página com as secções necessárias |
| Permissões por página/secção, papéis de colaboradores e revisão partilhável | Acrescentam herança/permissões e recuperação de acessos | Privacidade do site, convites por grupo e eventos autorizados; duas contas do casal |
| Vários idiomas publicados e tradução assistida | Revisão, fallback e atualização de traduções exigem fluxo próprio | Um idioma principal pt-BR ou pt-PT, independente do idioma da conta |
| Timeline dedicada, presets de pessoas especiais, presentes externos em módulo, avisos com validade automática | Podem ser apresentados com conteúdo genérico inicialmente | Secções livres, cartões, textos/botões e publicação editorial explícita; sem operação financeira |
| Perguntas de RSVP, refeições, restrições e reconfirmação em campanha | Formulários condicionais, dados adicionais e alterações após respostas exigem desenho próprio | Presença por pessoa/evento; correção individual e comunicação manual escolhida pelo casal |
| Importação flexível, XLSX, fusão/reimportação inteligente, etiquetas e ações em lote | Reduzir risco de alterações amplas e sobrescritas | CSV padrão com revisão e edição individual, filtros por evento/resposta |
| QR, calendário ICS, papelaria, lembretes e histórico de comunicação | A partilha por link já fecha o percurso; cada ferramenta traz estados próprios | Convite-base e link geral/individual, texto editável e canal manual |
| Checklist, orçamento, fornecedores, mesas, cronograma e check-in | São produtos de organização/operação além do construtor | Lista de convidados/respostas e exportação; organização externa enquanto módulos não existirem |
| Mural, fotos de convidados, vídeo/música, enquetes e recordação descarregável | Moderação, armazenamento e direitos/capacidade próprios | Galeria do casal e conteúdo editorial revisto |
| IA, mensagens oficiais, automações, domínio próprio, cobrança e presentes financeiros | Dependem de procura, fornecedores, custos, dados e operação próprios | Percurso principal sem essas integrações; nenhuma promessa de saldo, entrega ou pagamento |
| Analytics de visitas, coedição realtime/offline, profissionais, marketplace, API e apps | Não são necessários para construir e operar o primeiro percurso | Contagens reais de respostas, controlo de revisão, acesso pelo navegador e suporte mínimo |

“Depois” não define uma segunda versão fechada. Ordem candidata: primeiro melhorias de criação/produtividade mais pedidas; depois organização/recordações conforme uso; integrações/comercial/profissionais apenas sob decisões próprias. Todos os recursos permanecem no catálogo. Uma capacidade adiada não aparece como botão inativo ou promessa de data.

### 1.4. Fluxo completo que o corte deve preservar

1. **Entrar e começar:** conta → casamento → nomes/idioma/data conhecidos → estilo → primeira composição. Segundo membro e detalhes opcionais podem entrar depois.
2. **Construir:** Início → editor → páginas/secções/elementos → textos/fotos/cores/layouts. Prévia imediata; biblioteca e módulos devolvem ao mesmo ponto.
3. **Organizar:** Eventos como origem → Convidados por pessoa/grupo → evento/vagas → importação revista quando útil → abertura/prazo do RSVP. Não exigir lista completa para preparar o site.
4. **Rever e disponibilizar:** guardado → prévia de dispositivo/público → corrigir bloqueios → confirmar revisão/endereço/acesso → publicar → abrir versão real. É válido disponibilizar só uma apresentação, com data por definir e sem RSVP aberto.
5. **Convidar e receber:** convite/link do grupo → partilha manual → convidado vê apenas o autorizado → responde por pessoa/evento → resultado confirmado → painel e lista actualizados.
6. **Editar e recuperar:** voltar ao editor → alterar em rascunho → guardar/rever/publicar; desfazer ou restaurar versão quando necessário. Respostas recebidas e revogações nunca retrocedem com o visual.
7. **Exportar ou encerrar:** filtrar/exportar lista necessária; dados/encerramento explicam exportação completa, despublicação e eliminação segundo política aprovada. Recordação visual e módulos pós-evento são expansão.

Primeira versão mantém seis entradas principais no painel. No editor, Estrutura/Prévia/Editar no telemóvel e composição adaptativa no computador; o inspector conserva Conteúdo/Layout/Estilo. Convites tem texto/link e não uma central de campanhas. Configurações não absorve os ajustes de aparência. Cores, fontes, foco, controlos e espaçamentos continuam no style guide existente.

### 1.5. Critérios para considerar a V1 completa

| Resultado a demonstrar futuramente | Critério do corte |
| --- | --- |
| Criar sem ajuda contínua | Assistente retomável, primeira composição útil, campos compreensíveis e tarefas observadas pelos fundadores; facilidade ainda não medida |
| Construir algo próprio | Criar página vazia; combinar cinco elementos livres; trocar texto/foto/cor/layout; duplicar/mover/recuperar; conferir desktop/mobile sem perda |
| Guardar com confiança | Recarregar rascunho confirmado; falha/sessão/conflito não apagam texto; dois membros não sobrescrevem silenciosamente |
| Rever e disponibilizar | Visitante continua na versão anterior durante edição; confirmação troca revisão coerente; falha mantém anterior; despublicação tem efeitos explícitos |
| Fechar o RSVP | Grupo com pessoas e respostas diferentes em dois eventos, acompanhante limitado, prazo, correção e registo manual funcionam com origem/histórico |
| Evitar trabalho repetido | Evento alterado na origem aparece nos usos correctos; CSV com prévia resolve entrada de lista sem apagar respostas; filtros/exportação usam dados actuais |
| Proteger e recuperar | Isolamento entre casamentos/grupos em UI/API/URL/ficheiros/cache; backup/restauro real; exportação/eliminação e suporte definidos |
| Usar no celular e nos dois mercados | pt-BR/pt-PT conforme recorte; teclado/leitor/foco/contraste/zoom, nomes longos e tarefas essenciais testados; sem depender apenas de arrastar |
| Ser honesto sobre estado | Guardado/publicado/resposta recebida exigem confirmação real; copiar link não mostra entrega; nenhum recurso posterior aparece disponível |

Esses critérios não foram executados no núcleo. Metas exploratórias da secção 6 continuam hipóteses; o estudo visual não resolve segurança, persistência, infraestrutura ou piloto.

### 1.6. Ordem de construção futura e condições do corte

Sequência: conta/casamento/evento base → documento/renderizador → editor e media → rascunho/versões/publicação → convidados/CSV/RSVP → convite manual e exportação → aceitação/recuperação operacional. Corresponde a E2–E8, sem datas ou estimativa de horas aprovada. Cada fatia usa apenas dependências necessárias e conserva dados fictícios até autorização de dados reais.

P01 passa a ter uma proposta rastreável para confirmar, não fica resolvida por esta classificação. P11 conserva validação da composição e das tarefas; três páginas multipágina são a recomendação de entrada D19, não aprovação visual definitiva. P02–P06/P12/P13 precisam de solução para a fatia; P07 antes do piloto; P08 antes de vender. Capacidade, quotas e recuperação têm de caber na base sem desembolso adicional, ou a alternativa/decisão deve ser apresentada antes de prosseguir. Sem essa prova, a proposta não recebe o estado “pronta”.

## 2. Sequência de trabalho e resultados

| Etapa | Trabalho futuro | Recursos de referência | Resultado e condição de saída |
| --- | --- | --- | --- |
| E0 — proposta documental | Pesquisa, organização, catálogo e sequência | Conjunto completo | V2 + D19: 115 capacidades classificadas e alcance inicial de 28 vistas/21 fluxos; documento não equivale a produto ou validação de uso |
| E1 — revisão e protótipo de experiência | Fechar corte; desenhar telas/estados e prototipar os percursos essenciais | F001–F046, F048–F075, F098–F104, F113–F115 | Prévia conectada disponível e alguns cenários conferidos; fundadores/testes de uso, erros, acesso, salvamento e composição final ainda por rever |
| E2 — prova da base dinâmica | Avaliar candidatos da arquitetura; login/recuperação, autorização, ficheiros e modo de execução | F001–F006, F010, F045, F097–F102 | Decisões P02–P05 resolvidas para a fatia; prova com dois casamentos fictícios, termos/quotas conferidos |
| E3 — conta, casamento e estrutura do painel | Sessões, membros, assistente, navegação, estados e módulo de eventos inicial | F001–F010, F019, F048, F098, F104 | Dois membros autorizados retomam progresso; outro casamento é recusado em UI/API/ficheiros |
| E4 — documento do site e renderizador | Conteúdo, estrutura, tema, páginas, secções/media e elementos livres; experimentar uma composição no recorte D19 | Recorte V1 de F011–F038, F113, F115 | Mesmos dados na prévia/site; trocar tema não perde conteúdo; mobile/teclado e cópias independentes verificados; favoritas/conversão/traduções simultâneas depois |
| E5 — persistência e publicação | Rascunhos, conflitos, recuperação, revisões de eventos e publicação | F039–F046, F050, F098 | Publicar é explícito e coerente; falha conserva versão anterior; restauração não reverte segurança/RSVP |
| E6 — convidados e RSVP | Lista/grupos/convites, CSV padrão, exportação e confirmação de presença | Recorte V1 de F049, F052–F070 | Respostas individuais por evento, homónimos, acompanhantes e alterações comprovados sem fugas; calendário/perguntas avançadas/produtividade posterior não entram por intervalo de IDs |
| E7 — convites e fecho do percurso | Convite-base, links geral/individual e partilha manual | Recorte V1 de F071–F073 | Convidado abre o acesso correto e responde; partilha manual não mostra entrega fictícia; QR/campanhas/presentes depois |
| E8 — prontidão operacional e piloto | Recuperação, eliminação, limites, acessibilidade, suporte e percurso BR/PT | F097–F104 | P06/P07 satisfeitos; autorização própria para participantes/dados reais; evidência completa registada |
| E9 — melhorias de criação, organização e recordações | Capacidades adiadas de H1/H2 conforme procura; favoritas, calendário/QR, tarefas, orçamento, mesas, mural, fotos e arquivo visual | Partes Depois de H1/H2; F047, F061, F081–F092, F100, F114 | Cada melhoria validada/recortada; sem obrigação de construir tudo junto ou logo após V1 |
| E10 — integrações/comercial | Mensagens oficiais, presentes, domínio, cobrança e apoio opcional de IA | F076–F080, F093–F096, F105–F107 | Decisão e verificação próprias por frente, com custos/dados/operação claros |
| E11 — expansão profissional | Organizadores, parceiros, marketplace, API e aplicações nativas | F108–F112 | Procura e capacidade demonstradas; modelo operacional aprovado |

E3 depende da base relevante de E2; E4 pode começar após os contratos de E3; E5 depende do renderizador e das revisões; E6 depende das entidades/permissões de eventos; E7 depende de publicação e convites válidos; E8 depende do percurso completo. Revisão de design e texto pode avançar enquanto avaliações operacionais independentes decorrem.

E2–E8 executariam apenas o alcance V1/V1 recorte confirmado, não todas as descrições dos intervalos de recursos. A coluna D19 do catálogo prevalece para esse recorte; E9–E11 não são compromissos de segunda versão ou calendário.

Não atribuir semanas à tabela sem disponibilidade dos fundadores e corte aprovado. Depois disso, estimar blocos pequenos com incerteza, prioridade e responsável acordados; engenharia e design são competências confirmadas, mas não fixam uma divisão completa de tarefas.

## 3. Ordem do trabalho visual

1. **Mapa e estados:** entrada, assistente, Início, editor, publicação, eventos, convidados, RSVP, partilha, configurações e recuperação. Usar o inventário de telas do catálogo.
2. **Fundações existentes:** guia/tokens, componentes de formulário/tabela/navegação, hierarquia, foco e feedback. Novas necessidades visuais são justificadas, não uma segunda identidade.
3. **Tela mais crítica:** editor com secção selecionada, controlos e prévia; provar texto, fotografia, cor, ordem e ida/volta a Eventos.
4. **Operação do casal:** convidados, perfil, grupos, importação e configuração de respostas; nomes longos e homónimos.
5. **Convidado e publicação:** múltiplos públicos, revisão, RSVP por pessoa/evento e resultado; visitante sem acesso privado.
6. **Recuperação e exceções:** falha de upload/salvamento, sessão expirada, conflito, convite revogado, prazo e versão publicada diferente do rascunho.
7. **Adaptação móvel:** tarefas essenciais com toque/teclado e controlo de densidade. Não deixar mobile para uma compressão da tela desktop.
8. **Teste de compreensão:** primeiro observar sem explicar a navegação; corrigir os pontos que obrigam os fundadores a orientar cada clique.

Já existem mapa documental, fluxos e uma prévia interativa conectada. Faltam desenho/validação dos estados completos, biblioteca formal dos componentes usados e observação das tarefas com participantes autorizados. A [cobertura da prévia](../produto/AREA_DO_CASAL_E_EDITOR.md#24-prévia-conectada-cobertura-e-limites) discrimina o que foi inspecionado. Se for solicitado Figma, usar camadas nativas editáveis e as skills próprias; uma simulação na conversa não equivale a arquivo Figma nem implementação na aplicação.

## 4. Composição técnica dentro da arquitetura aprovada

Uma aplicação modular e um repositório. Rotas/layouts montam superfícies; módulos contêm regras. Não criar outra aplicação, microserviços, ORM ou serviço de IA por este plano. A restrição de exportação estática da landing não fornece backend ao produto; o modo de execução dinâmico deve ser avaliado sem mudar silenciosamente a hospedagem aprovada da landing.

| Responsabilidade conceptual | Dono técnico candidato | Interface de produto |
| --- | --- | --- |
| Utilizador, casamento e participação | Módulo weddings e fronteira de autenticação | Assistente, membros, seletor e configurações |
| Documento, páginas, secções e tema | builder | Editor e aparência |
| Revisões publicadas e prévias | publishing | Rever, publicar, histórico e site |
| Eventos e revisões de detalhes | Casamento/eventos como responsabilidade modular | Agenda e formulário de evento; separação física só quando usada |
| Grupos, pessoas, convites e acesso | guests | Lista, perfil, importação e exportação |
| Perguntas, respostas e correções | rsvp | Configuração e percurso do convidado |
| Media e permissões de ficheiro | Responsabilidade partilhada explicitamente definida | Upload, biblioteca e entrega autorizada |
| Comunicação manual/integrada | Capacidade do módulo correspondente e adaptadores | Peças, partilha, estados e tentativas |
| Cobrança MyWedding | billing, na etapa própria | Contratação/plano; separado de presentes |
| Parcerias | partners, futuro | Atribuição e acesso profissional com escopo |

Não criar diretórios vazios agora. Na etapa autorizada, módulos novos só entram quando houver regras e utilização reais. Adaptação do modelo conceptual não é aprovação automática de schema físico ou de todas as tabelas.

### Contrato conceptual do documento do site

Deve representar: versão do formato; identificação do casamento/site; revisão do rascunho; localidades e política de fallback; identidade/revisão do tema; lista de páginas com ID, título/nome de menu/endereço/ordem/acesso; secções com ID/tipo/variante/conteúdo por idioma/referências/estado/acesso; referência da publicação. Sem listas de convidados, tokens de acesso, chaves, transações ou respostas no documento editorial público.

Cada tipo de secção define campos válidos, valor inicial, variantes, dependências, permissões, traduções, renderização e migração. Identificadores ficam estáveis ao trocar modelo ou mover secção. Tipo desconhecido ou antigo tem recuperação controlada; não descartar conteúdo silenciosamente após atualização do catálogo.

No corte D19, F113 entra com IDs/tipos/ordem/largura/alinhamento e campos validados; F115 usa uma proposta temporária e só altera o rascunho ao aplicar. F114 fica depois: quando entrar, favorita guarda um ponto editorial de partida e insere cópias com novos IDs. Preservar permissões/referências e semântica em todos. O documento não admite HTML/CSS/JavaScript arbitrários nem carrega dados privados de convidados para viabilizar a prévia.

O mesmo renderizador compõe prévia e site. Capacidades de edição só entram na superfície autenticada. Dados relacionais são ligados por referência com autorização e revisão adequada. Resolver referências privadas no servidor; não serializar a base inteira para o cliente filtrar.

### Contrato de alteração e publicação

- Entrada → validação → autorização → regra do módulo → dados, como já definido na arquitetura.
- Operações de rascunho incluem revisão de origem para evitar sobrescrita silenciosa. Resposta confirma a nova revisão; erro conserva o trabalho para decisão/repetição.
- IDs de operação/controles de idempotência protegem ações relevantes como publicar, importar e guardar RSVP; regras concretas e armazenamento são definidos na implementação.
- Publicação valida uma revisão confirmada, cria versão coerente e troca a referência ativa após sucesso. Edição concorrente posterior continua em rascunho, sem entrar acidentalmente na versão aprovada.
- Evento mantém identidade estável, revisões dos detalhes para o convidado e regras operacionais atuais. Agenda e calendário usam a revisão ativa aprovada; respostas não são snapshots do editor.
- Autorização e revogações atuais limitam qualquer versão antiga. Reduzir acesso é imediato; ampliar exposição exige revisão explícita. Cache considera casamento/idioma/versão e nunca partilha dados privados.
- Ficheiros publicados continuam disponíveis enquanto as referências válidas os exigirem, salvo eliminação por política de dados. Restaurar não ressuscita dados legal/operacionalmente eliminados.
- Exportações, ficheiros e tarefas de fundo também verificam casamento, papel e escopo; permissões da interface não bastam.

Os itens são requisitos de contrato, não código nem migrations. A escolha física precisa de prova de consistência, segurança e recuperação na etapa E2/E5.

### Ferramentas por necessidade real

Usar TypeScript estrito, Next.js/React, Tailwind ligado aos tokens, next-intl, pnpm, ESLint/Prettier e componentes MyWedding/shadcn seletivo como aprovado. Formular dados com React Hook Form/Zod quando houver operações; validar também no servidor. dnd-kit só na reordenação, com alternativa de botões; Tiptap só onde texto formatado justificar. Vitest para regras relevantes e Playwright para percursos; Storybook quando o conjunto de componentes/estados justificar.

Não adicionar todas as dependências numa preparação vazia. Verificar versões, licenças das extensões e compatibilidade na implementação correspondente. Fornecedores candidatos da arquitetura conservam as suas condições e não são adotados por esta lista.

## 5. Matriz de verificação funcional

| Cenário | Evidência futura necessária |
| --- | --- |
| Primeira entrada e retorno | Interromper/retomar assistente; segundo membro abre o mesmo casamento sem duplicar |
| Alterar aparência | Mudar modelo, cores e foto; conteúdo, links e dados relacionais permanecem |
| Páginas e secções | Converter uma/várias páginas, mover/ocultar/restaurar e abrir ligações diretas |
| Construção livre e favoritas | Combinar cinco tipos de elementos; reordenar/duplicar sem IDs repetidos; reutilizar favorita sem alterar origem; rever referências e acesso |
| Comparação de composição | Cancelar mantém origem; aplicar altera apenas os ajustes apresentados; desfazer recupera; texto/media/links permanecem |
| Continuidade | Biblioteca, inspector, Eventos e Prévia retornam ao contexto válido; filtros/seleção preservados sem esconder alterações não guardadas |
| Guardar e publicar | Recarregar rascunho; visitante só vê versão publicada; falha mantém anterior |
| Concorrência | Dois membros/abas editam a mesma revisão; conflito detetado sem perda silenciosa |
| Recuperação | Restaurar versão para rascunho; publicação explícita; RSVPs/revogações não são revertidos |
| Privacidade | Dois casamentos, visitante e dois grupos: UI/API/URL/ficheiros/cache/metadados sem fuga |
| Eventos | Cerimónia e jantar em públicos diferentes; fuso/horário de verão/calendário e adiamento |
| Lista | Pessoas homónimas, grupo com acompanhante, importação parcial/erro, reimportação e exportação mínima |
| RSVP | Respostas diferentes por pessoa/evento, correção, prazo, link revogado, repetição e concorrência |
| Evolução do formulário | Pergunta nova/tipo alterado após respostas; histórico preservado e falta de resposta explícita |
| Comunicação | Link geral/individual correto; partilha manual sem falso envio; integrado só na etapa própria |
| Internacionalização | pt-BR/pt-PT, textos longos, acentos, fallback e tradução desatualizada; RTL em teste próprio futuro |
| Media | Upload excessivo/indevido, falha de rede, recorte, localização removida e ficheiro privado |
| Acessibilidade | Teclado, foco, leitor, zoom, contraste e alternativas a arrastar nos percursos essenciais |
| Operação | Backup/restauro de banco e ficheiros, exportação, eliminação, quota, recuperação de conta e incidente |

Usar testes automatizados que verificam regras e percursos reais relevantes; não escrever testes que só repetem o código ou mocks como prova de integração. Dados fictícios no desenvolvimento. Uma rejeição por falta de permissão deve ser demonstrada no servidor/base, incluindo acesso direto fora do painel.

## 6. Aceitação da experiência

Tarefas propostas de estudo: primeira prévia; trocar capa/texto/cor; adicionar e mover secção; separar uma página; recuperar erro; criar dois eventos; importar família; configurar pergunta; rever como convidado; publicar; partilhar; responder; exportar. Observar caminho, hesitações, tempo, falhas e ajuda necessária, em computador e telemóvel.

Metas exploratórias já presentes na visão/plano: primeira prévia útil em até 15 minutos; RSVP em até 60 segundos; quatro de cinco casais completarem percurso principal e oito de dez convidados responderem sem ajuda. São critérios candidatos de estudo qualitativo, não metas aprovadas de lançamento ou resultados atuais. Fixar tarefas/amostra/condições antes da medição e registar limites; não inferir validade estatística dessa amostra.

Desempenho: medir em condições declaradas, sobretudo media e página do convidado; objetivo exploratório de LCP até 2,5 s já na visão. Uma prévia desktop fluida ou build aprovado não comprova desempenho móvel de campo.

## 7. Gates de operação e expansão

Antes de piloto: permissões e isolamento, publicação/rollback, autenticação/recuperação, backup/restauro, ficheiros privados, exportação/eliminação, políticas/capacidade/suporte e quotas demonstrados. Aprovar participantes/uso de dados reais no pedido correspondente. Documentação legal precisa refletir a operação decidida; esta especificação não a certifica.

Integrações só entram após avaliação própria. Mapas/viagem começam por links quando suficientes; mensagens começam por partilha manual; presentes começam por destinos externos quando incluídos. O caminho principal não depende de IA, WhatsApp automatizado, pagamentos ou domínio pago.

Ao avaliar cada integração, documentar finalidade, dados enviados, alternativa compatível sem gasto, termos/limites atuais, falhas, recuperação e custo potencial. Não aceitar upgrades, consumo sem limite, contratos ou encargos sem autorização. Horas dos fundadores, taxas por vendas e crescimento são distintos de desembolso inicial zero.

Cobrança MyWedding exige oferta/validade/impostos/faturação/reembolso; presentes exigem parceiro/modelo/país/moeda/estorno/fraude/repasse. Nunca somar presentes à receita MyWedding. Administração e suporte têm papéis próprios; não conceder acesso universal a todos os casamentos por comodidade.

## 8. Manutenção e ordem de continuidade

Em cada etapa futura: alterar a fonte correspondente, atualizar catálogo/estado necessário, executar checks pertinentes e guardar evidência no [modelo de validação](../../templates/REGISTRO_DE_VALIDACAO.md). Dados pessoais e credenciais ficam fora de docs públicos/Git. O [verificador documental](../../scripts/verify_project.py) cobre links/integridade, não funcionamento do produto.

Uma conclusão deve declarar: ficheiros/recursos entregues, cenários executados, resultado real, limitações e pendências. Distinguir proposta, protótipo, teste local, CI, publicação e operação real. Não marcar E8 concluída porque E0 está documentada.

**Próxima continuidade recomendada:** rever o corte D19 e a aplicação em FL01–FL21 com os fundadores, confirmar os limites de P01/P11/P13 e, se solicitado, completar os estados/documentação ou avaliar tarefas fictícias. Não reiniciar a classificação do zero nem presumir que toda a prévia pertence à V1. Implementação exige pedido próprio; nenhuma instalação, alteração do código da landing, conta, infraestrutura, commit, publicação ou contacto externo foi necessária nesta priorização.
