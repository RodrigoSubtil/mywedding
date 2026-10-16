# Catálogo de recursos do produto

**Proposta documental v2, com priorização D19 de 15/10/2026; sem implementação autorizada.** Inventário de **115 capacidades** da [visão](VISAO_E_ESCOPO.md), das 19 referências do [estudo](../pesquisa/ESTUDO_DE_MERCADO.md), da [revisão dos editores](../pesquisa/EDITORES_E_PAINEIS_2026-10-15.md) e das capacidades necessárias para os percursos descritos em [Área do casal e editor](AREA_DO_CASAL_E_EDITOR.md). A consolidação da prévia conectada preserva F001–F112 e acrescenta F113–F115; D19 classifica o corte sem autorizar construir.

Esta é a fonte da cobertura e localização dos recursos; a especificação de interação permanece na Área do casal. Cobertura completa deste inventário não significa enumerar todas as funcionalidades de todo concorrente nem aprovar todas para lançamento. Nenhum recurso abaixo está implementado no núcleo MyWedding por existir nesta tabela.

## Etapas candidatas

| Código | Horizonte | Regra |
| --- | --- | --- |
| H1 | Conta, casamento, editor e publicação | Primeira fatia funcional candidata, dependente do corte e da infraestrutura dinâmica |
| H2 | Convidados, RSVP e piloto acompanhado | Percurso integrado e operação segura antes de dados reais |
| H3 | Organização e recordações | Expansão opcional validada por uso, capacidade e manutenção |
| H4 | Integrações e operação comercial | Cada frente exige decisão própria de custo, fornecedor, dados e alcance |
| H5 | Profissionais, marketplace e aplicações | Exploração posterior; não criar antecipadamente |

As etapas não equivalem aos P0–P3 históricos de prioridade. P0 continua a representar requisitos essenciais para o uso pretendido; a sequência H1/H2 permite construí-los por fatias. O produto não é considerado pronto para piloto sem os critérios de segurança/recuperação de H2. O [plano de construção](../planeamento/CONSTRUCAO_DO_PRODUTO.md) define dependências e verificações; [Prontidão e pendências](../governanca/PRONTIDAO_E_PENDENCIAS.md) mantém as decisões abertas.

## Como interpretar o corte D19

O [plano de construção, secção 1](../planeamento/CONSTRUCAO_DO_PRODUTO.md#1-objetivo-e-corte-recomendado) é a fonte do alcance da primeira versão. A coluna final classifica **todos os 115 IDs**, preservando a descrição de evolução e o horizonte candidato:

- **V1:** capacidade incluída na proposta inicial, com os limites comuns do plano.
- **V1 recorte:** apenas a parte expressamente indicada entra; o restante fica depois. A descrição completa do recurso não é autorização para entregar tudo na V1.
- **Depois:** capacidade fora do primeiro corte; continua no catálogo e só ganha tela/ação quando existir.

Resultado documental: **45 V1, 30 V1 recorte e 40 Depois**. São capacidades e requisitos transversais, não 75 módulos independentes, esforço estimado ou funcionalidades prontas. H1–H5 continuam fatias/horizontes de construção; V1 reúne H1 com o essencial de H2 e não é sinónimo de H1. O corte é recomendação para confirmar em P01; segurança/recuperação exigidas para a V1 não podem ser adiadas para caber num rótulo.

## Inventário rastreável

| ID | Recurso | Onde o casal encontra / como altera | Relação ou condição | Horizonte | Corte recomendado D19 |
| --- | --- | --- | --- | --- | --- |
| F001 | Criar conta e entrar | Entrada pública e retorno ao destino | Método/fornecedor por decidir; não exigir pagamento no percurso básico sem oferta aprovada | H1 | V1 |
| F002 | Recuperar acesso e gerir sessões | Entrada / Conta pessoal → Segurança | Email/recuperação viáveis e demonstrados | H1 | V1 |
| F003 | Perfil e idioma da interface | Avatar → Conta pessoal | Preferência do utilizador; não altera conteúdo do casamento | H1 | V1 |
| F004 | Criar/configurar casamento | Assistente / Configurações → Casamento | Nomes livres, país/contexto, data indefinida; unidade de isolamento | H1 | V1 |
| F005 | Segundo membro do casal | Configurações → Pessoas e acesso | Convite individual, aceitação, expiração e revogação | H1 | V1 |
| F006 | Selecionar casamento autorizado | Cabeçalho | Só mostra associações permitidas; oferta de múltiplos casamentos em aberto | H1 | V1 recorte — Contexto autorizado; gestão multi-casamento depois |
| F007 | Próximos passos e preparação do site | Início | Estado real; não confundir com checklist geral do casamento | H1 | V1 |
| F008 | Atividade e notificações no painel | Início / Cabeçalho | Autor, hora e motivo; acesso e dados mínimos | H1/H2 | V1 recorte — Atividade essencial; central/notificações avançadas depois |
| F009 | Ajuda contextual e recuperação de erro | Ajuda / campos e estados | Conteúdo no idioma; canal dentro da capacidade dos fundadores | H1 | V1 |
| F010 | Papéis e permissões granulares | Configurações → Pessoas e acesso | Casal no núcleo; colaboradores/organizador/receção em expansão | H1/H3 | V1 recorte — Dois papéis do casal; matriz granular depois |
| F011 | Escolher/trocar modelo | Nosso site → Aparência | Preserva conteúdo, estrutura suportada e relações; ação reversível | H1 | V1 |
| F012 | Página contínua e várias páginas | Nosso site → Páginas / Estilo do site | D19 recomenda entrada multipágina editável; P11 valida experiência; conversão contínua posterior com prévia de destino e sem perda | H1 | V1 recorte — Multipágina editável; conversão contínua depois |
| F013 | Criar/duplicar/restaurar página | Gerir páginas e menu | IDs estáveis, recuperação e dependências | H1 | V1 |
| F014 | Título, nome no menu e endereço | Definições da página | Campos distintos; endereço preservado ao renomear | H1 | V1 |
| F015 | Ordenação de páginas/menu | Árvore de páginas | Arrastar, botões e teclado; adaptação móvel | H1 | V1 |
| F016 | Retirar do menu/desativar/restringir | Página ou secção → Acesso | Estados diferentes; autorização no servidor | H1 | V1 recorte — Menu/desativação; restrição por página/secção depois |
| F017 | Adicionar/duplicar/mover secção | Árvore e seleção na prévia | Blocos aprovados, mover entre páginas e recuperar | H1 | V1 |
| F018 | Variantes de composição | Secção → Layout | Responsivas; comparação em F115; sem canvas livre ou código arbitrário | H1 | V1 recorte — Poucas variantes por tipo; exploração ampla depois |
| F019 | Capa, nomes e boas-vindas | Secção → Conteúdo | Referências aos dados do casamento; imagem opcional | H1 | V1 |
| F020 | História, citações e cronologia | Biblioteca de secções | Conteúdo opcional próprio, sem dados íntimos obrigatórios | H1 | V1 recorte — História/citação; timeline dedicada depois |
| F021 | Agenda pública | Secção Agenda | Fonte Eventos; só revisões/públicos autorizados | H1/H2 | V1 |
| F022 | Local, direções e estacionamento | Evento / secção ligada | Endereço como fonte; começar com link de direções | H1 | V1 |
| F023 | Traje, crianças e informações úteis | Secções correspondentes | Textos claros, editáveis e culturalmente flexíveis | H1 | V1 |
| F024 | Viagem, hotéis e transportes | Informações úteis → Viagem | Links do casal; sem reserva/afiliado implícito | H1 | V1 |
| F025 | FAQ reutilizável | Conteúdo → Perguntas frequentes | Catálogo único; sugestões revistas | H1 | V1 |
| F026 | Pessoas especiais e papéis livres | Biblioteca de secções | Não publica automaticamente o cadastro de convidados | H1 | V1 recorte — Cartões livres; preset específico depois |
| F027 | Fotos e galeria | Media / secção Galeria | Ordem, legendas, texto alternativo e permissões | H1 | V1 |
| F028 | Texto formatado, listas e links | Campo contextual de conteúdo | Colagem limpa, semântica e validação; Tiptap só se necessário | H1 | V1 |
| F029 | Avisos de atualização | Biblioteca / revisão de publicação | Público e validade; sem envio automático | H1/H2 | V1 recorte — Texto/aviso editorial; validade automática depois |
| F030 | Contagem regressiva | Capa/Agenda → Elementos | Evento válido; desativa em data indefinida/adiamento | H1 | V1 |
| F031 | Cores do tema do casal | Aparência → Cores | Papéis globais, valor manual e contraste; não altera marca/painel | H1 | V1 |
| F032 | Tipografia e escala | Aparência → Tipografia | Fontes licenciadas, cobertura e limites legíveis | H1 | V1 recorte — Fontes existentes/escala controlada; catálogo ampliado depois |
| F033 | Botões, ornamentos e densidade | Aparência → Composição | Variantes controladas; restaurar padrão sem apagar conteúdo | H1 | V1 recorte — Alinhamento/densidade/botões; ornamentos avançados depois |
| F034 | Upload e biblioteca de imagens | Media | Limites, progresso, validação, compressão e remoção de localização | H1 | V1 |
| F035 | Recorte/ponto focal e substituição | Imagem → Ajustar | Mantém original e utilizações; corte móvel avançado | H1 | V1 recorte — Recorte/ponto focal; ajuste distinto por dispositivo depois |
| F036 | Prévia por dispositivo | Editor → Prévia | Mesmo renderizador; confirmar também em dispositivos reais | H1 | V1 |
| F037 | Conteúdo pt-BR/pt-PT e revisão | Nosso site → Idiomas | Separado do idioma da conta; fallback explícito, sem tradução inventada | H1 | V1 recorte — Um idioma principal pt-BR ou pt-PT; traduções simultâneas depois |
| F038 | Prévia por visitante/grupo/evento | Editor → Público | Simulação autorizada; não permite RSVP real no canvas | H1/H2 | V1 recorte — Visitante/grupo/evento; sem simular colaborador granular |
| F039 | Guardar rascunho e feedback | Cabeçalho do editor | Só servidor confirmado é “guardado”; falhas preservam texto | H1 | V1 |
| F040 | Desfazer/refazer | Cabeçalho do editor | Operações da sessão; não reverte ações financeiras ou comunicações | H1 | V1 |
| F041 | Histórico e restauração | Nosso site → Publicação → Histórico | Restaurar gera rascunho; respeita eliminações e segurança atual | H1 | V1 |
| F042 | Colaboração sem sobrescrita | Editor / revisão de conflitos | Revisões, comparação e escolha; realtime não pressuposto | H1 | V1 |
| F043 | Revisão antes de publicar | Publicação → Rever | Diferenças, idiomas, públicos, bloqueios e avisos úteis | H1 | V1 recorte — Resumo/atalhos de correção; comparação editorial detalhada depois |
| F044 | Publicar/despublicar | Nosso site → Publicação | Versão coerente, falha mantém anterior; impacto em RSVP explícito | H1 | V1 |
| F045 | Endereço estável do site | Publicação → Endereço | Subdomínio/rota dependem de infraestrutura; sem compra de domínio | H1 | V1 |
| F046 | Prévia social e indexação | Publicação / atalho para Privacidade | Dados mínimos; noindex não é autorização | H1 | V1 recorte — Metadados mínimos/seguros; editor social avançado depois |
| F047 | Prévia privada partilhável | Publicação → Revisão privada | Opcional, expira/revoga e não concede edição | H3 | Depois |
| F048 | Eventos múltiplos e fusos | Eventos | Nome, data/hora local, fuso, local, ordem e fase do evento | H1/H2 | V1 |
| F049 | Público e convites por evento | Evento → Convidados | Regras explícitas, não um filtro visual | H2 | V1 |
| F050 | Alterar/adiar/cancelar evento | Evento → Alterar estado | Impactos e reconfirmação; preserva respostas anteriores | H2 | V1 recorte — Impacto/histórico; campanha de reconfirmação depois |
| F051 | Calendário ICS e ligações | Agenda / detalhe do evento | Fuso, revisão ativa e acesso; atualização de ficheiro não é sincronização | H2 | Depois |
| F052 | Cadastro individual de convidado | Convidados → Adicionar | Nome não único; contacto opcional; ID estável | H2 | V1 |
| F053 | Famílias/grupos | Convidados → Grupos | Unidade de convite; resposta continua por pessoa/evento | H2 | V1 |
| F054 | Acompanhantes e crianças | Perfil / regras do convite | Vagas limitadas; dados mínimos; sem acompanhante ilimitado implícito | H2 | V1 |
| F055 | Etiquetas, categorias e idioma | Perfil / ações em lote | Organização privada; regras de acesso separadas | H2 | Depois |
| F056 | Pesquisa, filtros e colunas | Lista de convidados | Estado, evento, grupos; cartões no telemóvel | H2 | V1 recorte — Pesquisa e filtros evento/resposta; colunas/etiquetas depois |
| F057 | Importar com prévia | Convidados → Importar | Mapear, validar por linha, confirmar e relatar; CSV candidato inicial | H2 | V1 recorte — CSV padrão com prévia; mapeador livre/XLSX depois |
| F058 | Atualizar lista e resolver duplicados | Importação / perfil | Não apagar/recriar; homónimos válidos; fusão com impacto | H2 | V1 recorte — Revisão de duplicados/edição individual; fusão/reimportação depois |
| F059 | Ações em lote | Lista → Selecionar | Total explícito, permissões e resumo antes de ação sensível | H2 | Depois |
| F060 | Exportação privada por finalidade | Convidados → Exportar | Campos/eventos mínimos, acentos e proteção contra fórmulas | H2 | V1 recorte — CSV por evento/estado/campos mínimos; relatórios especializados depois |
| F061 | Formulário de recolha de contactos | Convidados → Recolher dados | Opcional, link limitado e revisão; não aceita entradas como convidados sem regra | H3 | Depois |
| F062 | Configurar prazo/abertura de RSVP | Convidados → Configurar confirmação | Fuso, fecho, reabertura e efeito operacional explícito | H2 | V1 |
| F063 | Perguntas de RSVP | Configurar confirmação → Perguntas | Pessoa/grupo/evento, condições e campos necessários | H2 | Depois |
| F064 | Resposta sem conta/app | Convite individual no site | Token revogável; autorização por grupo/evento no servidor | H2 | V1 |
| F065 | Resposta por pessoa e evento | RSVP / Convidados → Respostas | Estado explícito e revisão antes de confirmar | H2 | V1 |
| F066 | Corrigir resposta e histórico | Mesmo convite / perfil | Regras de prazo; concorrência e prevenção de duplicados | H2 | V1 |
| F067 | Resposta registada pelo casal | Perfil → Registar resposta | Origem/autor explícitos; não impersona convidado | H2 | V1 |
| F068 | Refeições/restrições/acessibilidade | Perguntas opcionais / detalhe privado | Finalidade, acesso mínimo e exportação controlada | H2 | Depois |
| F069 | Contagens e relatórios de respostas | Início / Respostas | Por pessoa/evento; separa convite, RSVP e entrada | H2 | V1 |
| F070 | Perguntas/eventos após primeiras respostas | Configuração → Rever alteração | Versionar perguntas, preservar respostas; reconfirmação separada | H2 | V1 recorte — Preservar respostas ao mudar evento; evolução de perguntas depois |
| F071 | Peças de convite e save the date | Convites e mensagens → Peças | Conteúdo/tema ligado à revisão ativa do evento | H2 | V1 recorte — Convite-base editável; save the date/designer depois |
| F072 | Links e QR geral/individual | Publicação / convite do grupo | Individual é credencial; geral não concede acesso privado | H2 | V1 recorte — Links geral/individual; QR depois |
| F073 | Partilha manual WhatsApp/email | Convites → Partilhar | Copiar/abrir canal não prova envio nem entrega | H2 | V1 |
| F074 | Lembretes e agradecimentos editáveis | Convites → Peças | Seleção/revisão manual; sem automação inicial | H2/H3 | Depois |
| F075 | Histórico de comunicação | Convites e mensagens → Histórico | Manual identificado; estados do fornecedor só quando integrados | H2/H4 | Depois |
| F076 | Email, WhatsApp oficial e SMS | Convites → Enviar, quando disponível | Fornecedor, permissões, custos, tentativas e entrega | H4 | Depois |
| F077 | Agendamento e automações | Convites → Programar | Cancelamento, fuso, revisão e quotas; não ativar por omissão | H4 | Depois |
| F078 | Listas de presentes externas | Presentes → Listas externas | Nome, URL, imagem e ordem; clique não é dinheiro recebido | H2, opcional | Depois |
| F079 | Itens/cotas/fundos e catálogo próprio | Presentes → Catálogo, futuro | Validação de oferta, significado de produto vs valor e parceiro | H4 | Depois |
| F080 | Presentes financeiros e repasse | Presentes → Recebimentos, futuro | País/moeda, taxas, estorno, fraude, conciliação e conta do casal | H4 | Depois |
| F081 | Lista de agradecimentos por presente | Presentes → Agradecer, futuro | Origem confirmada; registo manual identificado quando aplicável | H3/H4 | Depois |
| F082 | Checklist de organização | Planeamento → Tarefas | Modelo editável, responsáveis, prazo e conclusão | H3 | Depois |
| F083 | Orçamento e pagamentos do casamento | Planeamento → Orçamento | Moeda, previsto/contratado/pago; controlo não é pagar via plataforma | H3 | Depois |
| F084 | Fornecedores, contactos e documentos | Planeamento → Fornecedores | Registos privados do casal; não é marketplace | H3 | Depois |
| F085 | Mesas e lugares por evento | Planeamento → Mesas | Lista/mapa, capacidade, pessoas sem lugar, alternativa ao arrastar | H3 | Depois |
| F086 | Cronograma operacional | Planeamento → Dia do evento | Responsáveis e tarefas internas; reutiliza eventos sem expor notas | H3 | Depois |
| F087 | Check-in/receção QR | Dia do evento → Receção | Papel limitado, entrada distinta de RSVP; rede/dispositivo testados | H3/H4 | Depois |
| F088 | Mural de mensagens | Recordações → Mural | Moderação, abuso, privacidade e aprovação antes de publicar | H3 | Depois |
| F089 | Fotos de convidados e álbum partilhado | Recordações → Recebidos | Upload privado, revisão, quotas e remoção | H3 | Depois |
| F090 | Música, playlist, vídeo e streaming | Secções Media / Informações | Licenças, acessibilidade, terceiros e custo; sem som automático | H3/H4 | Depois |
| F091 | Enquetes e pedidos de músicas | Interações / perguntas do evento | Público, finalidade e moderação; não afeta RSVP sem regra | H3 | Depois |
| F092 | Papelaria digital/ficheiro para impressão | Convites / Recordações | Design próprio e exportação; logística de impressão é outra operação | H3/H4 | Depois |
| F093 | Apoio de IA a texto/tradução/FAQ | Campo → Sugerir, só se aprovado | Optativo, revisão humana, custo/dados/fornecedor; não inventa factos | H4 | Depois |
| F094 | Assistente para convidados | Site → Ajuda, futuro | Base fiável e autorização por evento; encaminhamento quando não sabe | H4 | Depois |
| F095 | Domínio próprio | Publicação → Domínio, futuro | Prova de propriedade, certificado, renovação e retirada segura | H4 | Depois |
| F096 | Plano, validade, faturação e reembolso | Plano MyWedding, quando real | Oferta/enquadramento/PSP aprovados; separado dos presentes | H4 | Depois |
| F097 | Uso, quotas e limites | Configurações / Plano | Medição real, alertas e interrupção controlada; sem upgrade automático | H1/H2/H4 | V1 recorte — Limites reais/alertas; planos/upgrades depois |
| F098 | Privacidade e acesso ao site | Configurações → Privacidade | Público, não listado ou reservado; senha geral opcional não substitui convite individual; regra mais restritiva e efeito imediato | H1/H2 | V1 recorte — Site e eventos/convites; senha/regras granulares depois |
| F099 | Exportar dados e encerrar casamento | Configurações → Dados e encerramento | Arquivo/despublicação/eliminação distintos; política de retenção por aprovar | H2 | V1 recorte — Exportação/encerramento; arquivo visual depois |
| F100 | Recordação descarregável | Recordações → Guardar | Derivado visual separado da exportação de dados; formato a validar | H3 | Depois |
| F101 | Backup e restauração operacional | Operação interna, sem complexidade no editor | Banco e ficheiros; teste de recuperação antes do piloto | H2 | V1 |
| F102 | Administração, suporte e auditoria | Área interna própria | Acesso justificado, permissões e registo; dados mínimos | H1/H2 | V1 recorte — Suporte/auditoria mínimos; console ampla depois |
| F103 | Métricas úteis e desempenho | Início / operação interna | Respostas reais; analytics de visitas condicionado à privacidade e necessidade | H2/H4 | V1 recorte — Respostas/desempenho/erros; analytics de visitas depois |
| F104 | Acessibilidade e uso móvel | Todas as telas e site | Teclado, leitor, foco, contraste, tradução e rede lenta | H1/H2 | V1 |
| F105 | Internacionalização futura | Conta/conteúdo/cobertura | Novos idiomas, RTL, alfabetos e formatos testados; pt-BR/pt-PT primeiro | H4 | Depois |
| F106 | Coedição em tempo real/offline | Editor, se justificado | Expansão explícita; núcleo usa revisões/conflitos e conexão | H4 | Depois |
| F107 | Montagem assistida | Serviço futuro de ajuda ao casal | Briefing, revisões, prazo/capacidade; sem contratação assumida | H4 | Depois |
| F108 | Área profissional multi-casamento | Superfície própria de organizador | Permissões por casamento, limites, revogação e oferta própria | H5 | Depois |
| F109 | Parceiros, indicações e afiliação | Área profissional/comercial | Atribuição não concede dados; contratos e envio autorizados separadamente | H5 | Depois |
| F110 | Marketplace/fornecedores públicos | Superfície própria | Oferta local, moderação, suporte e modelo comercial validados | H5 | Depois |
| F111 | API/webhooks de parceiros | Integração profissional | Escopos, quotas, assinaturas e documentação na etapa necessária | H5 | Depois |
| F112 | Aplicações nativas | Produto próprio, se necessário | Procura/capacidade comprovadas; navegador resolve percurso inicial | H5 | Depois |
| F113 | Secção livre com elementos | Biblioteca → Secção livre → Elemento | Texto, imagem, botão, cartão e separador; largura/alinhamento/ordem, cópias independentes e grelha responsiva | H1, candidato a recorte | V1 |
| F114 | Favoritas reutilizáveis do casamento | Secção → Guardar favorita / Minhas favoritas | Inserção cria cópia independente; validar referências/acesso; sem sincronização ou partilha entre casamentos implícitas | H1, candidato a recorte | Depois |
| F115 | Comparar e experimentar composição | Secção → Layout / Experimentar composição | Actual/Nova ideia, alternar/aplicar/cancelar; origem intacta até aplicar e alteração reversível | H1, candidato a recorte | V1 recorte — Experimentar/aplicar/cancelar; comparação lado a lado depois |

## Relação com a prévia conectada

O [mapa de telas T01–T28](AREA_DO_CASAL_E_EDITOR.md#21-mapa-completo-de-telas-e-vistas) e os [fluxos FL01–FL21](AREA_DO_CASAL_E_EDITOR.md#22-fluxos-completos-e-continuidade) são a referência de interação. Esta tabela aponta a cobertura, sem repetir a especificação nem declarar recursos implementados.

| Grupo de recursos | IDs | Evidência no estudo / parte ainda planeada |
| --- | --- | --- |
| Painel, início e contexto | F004, F007–F009 | Navegação/atalhos/resumos fictícios; conta, atividade real e ajuda integral por construir |
| Páginas e estrutura | F012–F018 | Criação, duplicação, ordem, menu, acesso simulado e modo contínuo; validação de rotas/recuperação real por construir |
| Conteúdo e biblioteca | F019–F030, F078, F113 | Doze tipos e elementos livres; conteúdo formatado completo, módulos ligados e presentes externos reais por construir |
| Tema, imagens e prévia | F011, F031–F038, F104 | Atmosferas, escolhas controladas, fotos demonstrativas e públicos locais; cores manuais, uploads, traduções completas e acessibilidade por verificar |
| Exploração e recuperação | F039–F044, F114–F115 | Desfazer/refazer, favoritas, comparação e versões de sessão; persistência, conflitos e publicação por construir |
| Eventos, convidados e RSVP | F048–F070 | CRUD fictício simplificado e resposta de demonstração; fusos, grupos, importação/exportação, perguntas e autorização por construir |
| Convites e configurações | F071–F075, F098–F099 | Rascunho de convite e dados simples; partilha, membros, regras privadas e encerramento por construir |

Os IDs em cada grupo incluem requisitos mais amplos do que o estudo; a coluna de evidência e os limites da especificação impedem interpretar o grupo como totalmente simulado. As 115 capacidades continuam propostas. D19 recomenda F113 na V1, F114 depois e F115 no recorte de experimentar/aplicar/cancelar, deixando a comparação lado a lado para depois. A classificação não instala ferramentas, altera a prévia ou inicia desenvolvimento.

## Inventário de telas e estados

Não há obrigação de converter cada linha em uma rota independente. Separadores, painéis contextuais e assistentes evitam páginas desnecessárias. O conjunto principal permanece curto; a quantidade cresce conforme módulos efetivamente entregues.

| Família | Telas ou vistas necessárias | Estados que precisam de desenho |
| --- | --- | --- |
| Acesso | Entrar, criar conta, recuperar, confirmar método, aceitar convite | Em curso, sucesso, erro, expiração, revogação e retorno ao destino |
| Começar | Assistente, primeira prévia, retomar progresso | Dados por definir, modelo depois, exemplo por substituir, conta sem casamento |
| Início | Preparação, publicado, acompanhamento, pós-evento | Sem dados, pendências, alterações recentes, sem permissão para determinada ação |
| Editor | Árvore, campo contextual, aparência, media, idiomas | Seleção, vazio, guardar, falha, offline, conflito, recuperar e versão antiga |
| Páginas | Lista, criar, ordenar, conversão de modo e acesso | Fora do menu, desativada, restrita, removida e rota em conflito |
| Publicação | Revisão, diferenças, endereço, histórico e resultado | Bloqueios, avisos, a publicar, falha, publicado e despublicado |
| Eventos | Lista, detalhe, público, regras e alteração de estado | Indefinido, ativo, privado, adiado, cancelado e respostas anteriores |
| Convidados | Lista, cartões, perfil, grupos, importação e exportação | Homónimos, duplicado provável, erro por linha, seleção em lote e sem resultados |
| RSVP do casal | Respostas, configuração, perguntas e revisão de alterações | Por responder, confirmado, recusado, reconfirmação e registo manual |
| RSVP do convidado | Acesso, pessoas, eventos, perguntas, revisão e resultado | Convite inválido/revogado, prazo, erro de ligação, correção e grupo parcialmente respondido |
| Comunicação | Peças, destinatários, prévia, partilha e histórico | Rascunho, manual, agendado/entregue/falha apenas quando suportados |
| Presentes | Listas externas; catálogo/recebimentos só na etapa própria | Sem lista, destino externo e indisponibilidade; financeiro sem falsos sucessos |
| Planeamento | Tarefas, orçamento, fornecedores, mesas e cronograma | Sem dados, excesso de capacidade, conflitos e documentos privados |
| Recordações | Fotos recebidas, mural, revisão, agradecimento e exportação | Aguarda revisão, aprovado, rejeitado/removido, armazenamento e encerrado |
| Configurações | Casamento, membros, privacidade, notificações, dados e encerramento | Efeito imediato, transferência, revogação e recuperação |
| Conta/plano | Perfil e segurança; contratação quando disponível | Sessão expirada, alteração de acesso, validade, cancelamento e reembolso reais |
| Interno | Saúde, suporte, auditoria, limites e recuperação | Acesso negado, motivo, falha/incidente e restauração comprovada |

Rotas lógicas candidatas: `/{locale}/entrar`, `/{locale}/app/casamentos/{casamentoId}/inicio`, `.../site`, `.../eventos`, `.../convidados`, `.../convites` e `.../configuracoes`. São nomes de planeamento, não rotas criadas. O endereço do convidado tem superfície própria; slug público nunca é prova de autorização. O formato final de rotas/subdomínios depende da infraestrutura avaliada, sem presumir domínio pago.

## Uma origem por informação

| Informação | Origem | Vistas consumidoras | Efeito da alteração |
| --- | --- | --- | --- |
| Nomes públicos/contexto | Casamento | Capa, assistente, convites e site | Revisão editorial; não muda perfil pessoal ou slug automaticamente |
| Datas, locais e instruções | Evento e revisão destinada ao público | Agenda, direções, convites e calendário | Aplicação explícita coerente; respostas não são apagadas |
| Pessoas/grupos/convites | Convidados e autorização por evento | RSVP, mensagens, mesas e exportação | Operação privada; revogar tem efeito de segurança imediato |
| Respostas | RSVP por pessoa/evento/pergunta | Perfil, contagens, catering e mesas | Operação confirmada pelo servidor; sem publicação visual necessária |
| Textos/FAQ/traduções | Conteúdo do site | Uma ou várias secções/páginas | Rascunho até publicar; tradução afetada fica por rever |
| Modelo/cores/fontes | Tema do casamento | Site, prévia e peças compatíveis | Não altera conteúdo, marca MyWedding ou respostas |
| Ficheiros e direitos de acesso | Media | Secções e versões que os referem | Remoção considera referências, privacidade e retenção |
| Links de presentes | Listas externas | Secções Presentes | Rascunho editorial; sem confirmação financeira |
| Contratação MyWedding | Cobrança do serviço, futura | Direitos e Plano | Confirmada pelo servidor/PSP; separada dos presentes |

O catálogo define responsabilidades conceptuais, não schema físico. A arquitetura continua a exigir validação/autorização no servidor, isolamento e RLS; nenhuma relação desta tabela justifica enviar dados privados para o HTML público.

## Controlo de cobertura

Os 115 IDs têm classificação D19, com os motivos/alternativas e critérios no plano de construção. Antes de construir, confirmar o corte e as dependências aplicáveis em P01; não reinterpretar “V1 recorte” como recurso completo. Uma feature adiada continua no catálogo e não deve aparecer como botão inativo na experiência do cliente. Uma alteração de recurso atualiza esta fonte e a interação correspondente, evitando outra lista de funcionalidades concorrente.

Esta versão preserva os temas de personalização, páginas, eventos, famílias, RSVP, comunicação, presentes, organização, recordações, segurança, operação e expansão presentes na base. As decisões de incluir cada capacidade e os resultados funcionais do núcleo/validação de uso ainda não existem; a conferência de alguns cenários do estudo visual está identificada separadamente na especificação.
