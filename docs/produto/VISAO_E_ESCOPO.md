# MyWedding: visão e escopo do produto

Proposta de produto iniciada em 14 de outubro de 2026. **Arquitetura e base técnica aprovadas por Rodrigo em 15/10/2026**, conforme [Arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md). Os detalhes de produto e o escopo comercial abaixo continuam como proposta onde não houver decisão explícita. A landing local já existe; o núcleo funcional do produto não está implementado.

**Atualização de escopo em 15/10/2026:** mercados iniciais Brasil e Portugal, com preparação mundial. O [style guide](../../design/STYLE_GUIDE.md) já existe; a landing foi a primeira construção seguindo a arquitetura aprovada. A presente atualização do produto é documental e não inicia implementação. Os fluxos abaixo continuam como proposta para a evolução do produto. Todas as futuras interfaces devem reutilizar `design/tokens.css` e seguir as regras visuais do guia.

**Direção operacional confirmada em 15/10/2026:** Rodrigo é engenheiro de software e a esposa é designer. Os dois são donos e construtores, sem contratação para ajudar na plataforma e com meta de desembolso adicional zero. Desenvolvimento e design serão próprios; Instagram orgânico é o canal inicial, e parcerias ficam para o futuro. A stack aprovada deve respeitar esta restrição; aprovação técnica não autoriza despesas ou provisionamento. Ver [Operação sem investimento inicial](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md).

## A experiência que queremos construir

O pedido posterior de 15/10/2026 autoriza **planear/documentar a área interna completa, sem começar agora**. O detalhe visual e de interação está em [Área do casal e editor](AREA_DO_CASAL_E_EDITOR.md), a cobertura em [Catálogo de recursos](CATALOGO_DE_RECURSOS.md) e a sequência em [Construção do produto](../planeamento/CONSTRUCAO_DO_PRODUTO.md). Este documento conserva a visão e os percursos gerais, sem duplicar essas especificações. A [pesquisa dos editores](../pesquisa/EDITORES_E_PAINEIS_2026-10-15.md) fundamenta recomendações, sem teste autenticado ou superioridade medida.

Na continuidade D17/D18, a prévia foi refeita como painel e editor conectados, com páginas/secções/elementos e alterações fictícias, e consolidada na especificação v2. O planeamento agora explicita 28 vistas, 21 fluxos e 115 capacidades, incluindo secção livre, favoritas e comparação de composição. Esses números medem cobertura documental; não representam funcionalidades prontas ou corte aprovado. Composição desktop, entrada com uma/várias páginas e alcance inicial continuam sujeitos à revisão P01/P11.

D19 acrescenta o [corte recomendado da primeira versão](../planeamento/CONSTRUCAO_DO_PRODUTO.md#1-objetivo-e-corte-recomendado), com todos os IDs classificados no catálogo. V1 propõe H1 + essencial de H2 para construir, rever/disponibilizar, partilhar manualmente e acompanhar respostas; preserva criação de páginas/elementos e recuperação. Idioma principal único pt-BR/pt-PT, entrada multipágina, CSV padrão e RSVP de presença são limites recomendados para confirmação. A visão abaixo conserva a evolução completa; prioridade P0/P1 não substitui o alcance expresso de V1/Depois. Mantém-se apenas planeamento, sem executar implementação ou publicação.

O casal cria uma conta, escolhe uma identidade visual, acrescenta os eventos, organiza os convidados e publica. O convidado abre um link, encontra as informações no seu idioma e responde apenas aos eventos para os quais foi convidado. O casal acompanha respostas e alterações num painel comum.

O produto tem quatro superfícies: página comercial do MyWedding, painel do casal, site do casamento e administração interna. Organizadores terão uma quinta superfície quando houver procura suficiente. Essas áreas podem partilhar código, mas exigem permissões e experiências diferentes.

## Percurso do casal

1. **Começar:** idioma, nomes de apresentação, data aproximada ou ainda indefinida e contexto do casamento. Não exigir pagamento nem todos os detalhes no início.
2. **Escolher aparência:** três famílias visuais, com demonstrações completas e possibilidade de trocar sem perder conteúdo.
3. **Construir:** adicionar ou ocultar secções; editar texto, fotos, cores e ordem; prévia imediata no telemóvel.
4. **Organizar eventos:** cerimónia, receção, jantar ou outros nomes escolhidos pelo casal, cada um com data, local e público próprio.
5. **Gerir convidados:** importação com prévia e validação, famílias, acompanhantes, idioma e eventos autorizados.
6. **Preparar comunicação:** mensagens editáveis e links individuais; envio só depois de confirmação do casal.
7. **Publicar:** resumo do que ficará visível, validação de informações essenciais e decisão sobre privacidade.
8. **Acompanhar:** respostas, pendências, mudanças e exportações para o local ou organizador.
9. **Encerrar:** agradecer, exportar recordações e dados, renovar ou apagar conforme a política contratada.

## Percurso do convidado

Abrir convite → selecionar idioma se necessário → consultar agenda autorizada → confirmar pessoas e eventos → responder perguntas opcionais → receber confirmação → acrescentar ao calendário.

Não exigir conta ou aplicação para responder. Um link individual funciona como credencial e deve ter identificador imprevisível, possibilidade de revogação e escopo limitado. Uma senha partilhada para todo o site oferece uma proteção diferente e não deve substituir permissões individuais em eventos privados.

O sistema precisa permitir corrigir uma resposta e registar a alteração. A confirmação deve distinguir “resposta guardada” de “email enviado”; uma falha de email não pode apagar um RSVP válido.

## Escopo por prioridade

| Prioridade | Entrega | Critério de aceitação |
| --- | --- | --- |
| P0 | Conta, casal e colaboração básica | Dois utilizadores autorizados veem o mesmo casamento; outro casal não acede |
| P0 | Editor estruturado | Guardar, recarregar, trocar modelo e recuperar versão sem perder dados |
| P0 | Publicação | Visitante vê a versão publicada; alterações em rascunho não aparecem antes de publicar |
| P0 | Eventos e convidados | Família com respostas diferentes por evento e limite de acompanhantes funciona |
| P0 | Idiomas | Texto de interface e conteúdo podem ser alterados separadamente; ausência de tradução tem comportamento explícito |
| P0 | Privacidade e exportação | Dados de convidados não aparecem em HTML público, pesquisa ou ficheiros acessíveis sem autorização |
| P0 | Operação | Logs sem dados desnecessários, recuperação de conta, backup e restauração demonstrados |
| P1 | Cobrança do plano | Webhook confirmado, preço e imposto coerentes, reembolso e expiração testados |
| P1 | Domínio próprio | Propriedade validada, certificado ativo e retirada segura quando o contrato termina |
| P1 | Montagem assistida | Briefing, prazo, revisões e responsabilidade pela aprovação do conteúdo definidos |
| P1 | Mensagens avançadas | Consentimento ou permissões adequadas, custo visível, entrega e falhas acompanhadas |
| P2 | Mesas, orçamento e fotografias | Validados com utilizadores antes de aumentar a manutenção |
| P2 | Presentes integrados | Parceiro e fluxo aprovados; estorno, fraude, conciliação e repasse verificados |
| P3 | Marketplace e aplicações nativas | Justificados por utilização e receita, com responsáveis operacionais |

## Contratos técnicos

A [arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md) é a fonte técnica central. Este documento descreve percursos e modelo conceptual; não repete escolhas de runtime, bibliotecas ou hospedagem. Respeitar a construção modular, PostgreSQL, isolamento e autorização, versões de publicação e as condições de adoção de fornecedores ali registadas.

O escopo por prioridade é uma proposta para a evolução. Confirmar a primeira fatia funcional antes de implementar; a aprovação de arquitetura não aprova todas as funcionalidades, preços ou tabelas físicas. A landing segue a sua [estrutura própria](../landing/01_ESTRUTURA_E_CONTEUDO.md), sem antecipar operações do produto.

### Modelo de dados conceptual

| Entidade | Responsabilidade |
| --- | --- |
| Utilizador | Acesso e preferências pessoais |
| Casamento | Unidade principal de isolamento e configuração |
| Participação no casamento | Permissões de casal, colaborador ou organizador |
| Evento | Data, fuso, local, descrição e regras de visibilidade |
| Grupo de convidados | Família ou conjunto que recebe um convite |
| Convidado | Pessoa, idioma, contactos e vínculo ao grupo |
| Convite por evento | Quem pode responder e quantos acompanhantes estão autorizados |
| Resposta | Estado por pessoa e evento, com histórico e perguntas adicionais |
| Site e versão | Modelo, secções, traduções e versão publicada |
| Ficheiro | Proprietário, finalidade, permissões, tamanho e retenção |
| Mensagem | Destinatário, canal, estado, custo atribuído e identificador do fornecedor |
| Plano e contratação | Direitos adquiridos, período, preço e estado de pagamento |
| Domínio | Validação, certificado, renovação e associação ao casamento |
| Auditoria | Ações administrativas e alterações relevantes |

Se houver presentes futuramente, criar entidades próprias para intenção, cobrança, estorno, saldo contabilizado e repasse. O saldo financeiro deve resultar de movimentos conciliados, não de um campo editável ou da soma de cliques no site.

### Decisões técnicas que evitam retrabalho

- Separar conteúdo, tema e layout. O casal deve conseguir mudar de aparência sem reconstruir o casamento.
- Guardar rascunho e versão publicada separadamente; permitir recuperação após erro.
- Validar permissões no servidor em todas as operações e também nas tarefas de fundo.
- Identificar explicitamente o casamento em consultas, ficheiros, filas e cache. Testar fugas entre subdomínios.
- Guardar valores monetários com moeda e representação exata; respeitar moedas que não usam duas casas decimais.
- Guardar o fuso do evento e a hora local pretendida. Testar mudanças de horário de verão e calendário exportado.
- Preparar traduções de texto, plural, ordenação, números e mensagens de erro. Não usar bandeiras como identificadores únicos de idiomas.
- Usar imagens limitadas, comprimidas e sem metadados de localização por padrão; acesso privado quando necessário.
- Prever limites de armazenamento, pedidos e mensagens; um plano barato não deve gerar custo ilimitado.
- Isolar segredos e chaves de fornecedores no servidor.

## Integrações e ordem de entrada

| Integração | Primeira abordagem | Expansão e dependências |
| --- | --- | --- |
| Autenticação | Serviço gerido e acesso do casal | MFA para administradores e colaboração profissional |
| Email | Um fornecedor transacional, domínio verificado | Filas, tentativas, devoluções, reputação e idiomas |
| WhatsApp | Partilha manual de um link pelo casal | API oficial, modelos aprovados, permissões e quotas de custo |
| Calendário | Ficheiro ICS e links | Sincronização adicional apenas se existir necessidade |
| Mapas | Endereço acessível e link de direções | Mapas incorporados e pesquisa de locais com custo controlado |
| Fotos | Armazenamento gerido e otimização | Upload de convidados com moderação e consentimento |
| Domínios | Subdomínio da plataforma | Domínios personalizados com prova de controlo e certificados |
| Cobrança | Checkout do plano MyWedding | Impostos, faturas, reembolsos e moeda por mercado |
| Presentes | Links externos | Parceiro autorizado e aprovação específica do fluxo |
| Alojamento e viagens | Links adicionados pelo casal | Afiliação ou parceria contratual, sem prometer disponibilidade |
| IA | Apoio opcional à escrita e tradução | Revisão humana, orçamento, privacidade e fornecedor substituível |
| Monitorização | Erros, disponibilidade e alertas | Metas de serviço por volume e canal |

O [Google Maps URLs](https://developers.google.com/maps/documentation/urls/get-started) permite links de navegação sem chave de API. É uma forma simples de começar sem desenvolver um produto de mapas.

Um fornecedor como [Resend](https://resend.com/docs/dashboard/domains/introduction) requer domínio próprio verificado e permite separar subdomínios de envio. Autenticação do domínio, tratamento de devoluções e reputação fazem parte da entrega de emails; chamar uma API não prova que o convidado recebeu a mensagem.

A [WhatsApp Business Platform](https://business.whatsapp.com/products/platform-pricing) cobra mensagens entregues conforme categoria e destino, com situações gratuitas específicas. Modelos e permissões também precisam cumprir a [política do serviço](https://business.whatsapp.com/policy/preview?lang=pt_BR). Uma agenda de contactos importada não demonstra por si só autorização para mensagens automáticas. Não usar automação não oficial do WhatsApp Web.

A [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/start/getting-started/) é uma candidata para domínios dos casais; a documentação distingue validação do hostname e do certificado. Disponibilidade, preço e compatibilidade da hospedagem devem ser confirmados na escolha da infraestrutura.

## IA com utilidade concreta

IA paga não é dependência do plano atual sem investimento. As hipóteses abaixo pertencem à evolução do produto; desenvolver e operar o percurso principal sem elas. Eventual ferramenta já disponível aos fundadores não equivale a uma API gratuita autorizada para servir os clientes.

Boas candidatas: rascunhar FAQ a partir de informações aprovadas, sugerir texto de apresentação, traduzir com revisão e apontar informações ainda em falta. Começar por uma tarefa que seja medida em tempo poupado.

A IA não deve inventar horário, endereço, regra do evento, alergia ou informação de viagem. Datas, nomes e valores devem permanecer estruturados. A mensagem final é aprovada pelo casal. Não enviar listas de convidados ou dados sensíveis a um modelo por conveniência.

Um assistente que responde aos convidados só entra depois de existir uma base de informações confiável, autorização por evento e encaminhamento quando não sabe. O editor e o RSVP precisam funcionar mesmo sem IA.

## Verificação antes do piloto

Testar isolamento entre dois casamentos; famílias com convidados de mesmo nome; acompanhantes não autorizados; convidado que só pode ir ao jantar; resposta alterada; publicação e recuperação; árabe e japonês; teclado e leitor de ecrã; rede lenta; calendário em fusos diferentes; ficheiro excessivo; email rejeitado; eliminação de dados e restauração de backup.

Na cobrança, verificar webhook duplicado, fora de ordem, atrasado e com assinatura inválida; pagamento recusado; reembolso; renovação e expiração. Um retorno de sucesso no navegador não substitui confirmação do servidor.

Metas internas candidatas para o piloto: primeira prévia útil em até 15 minutos, RSVP de convidado em até 60 segundos e carregamento principal móvel com LCP até 2,5 segundos nas condições de teste definidas. São objetivos do produto, não resultados medidos nem garantias atuais.

Manter ambientes de desenvolvimento, teste e produção separados. Usar dados fictícios nos testes. Publicar exige resultado real de ponta a ponta; mockups e testes automatizados parciais não demonstram que pagamentos, emails ou domínios estão operacionais.
