# MyWedding: prontidão e pendências

Atualização de 16/10/2026. Este é o registo central do que falta por etapa. Atualizar com evidência quando o estado mudar; não marcar uma etapa como concluída apenas por existir documentação.

## Avaliação atual

| Etapa | Estado | Evidência e limite |
| --- | --- | --- |
| Pesquisa e orientação | Base documental disponível | Estudo de 19 referências e revisão de nove landings; entrevistas, procura e vendas ainda não validadas |
| Identidade visual | Referência pronta para reutilizar | Guia, tokens, fontes/licenças e prancha de cinco páginas existentes; ver relatório desta revisão |
| Arquitetura e direção da landing | Confirmadas | Decisões dos fundadores registadas; não reabrir stack ou linguagem visual sem motivo e autorização |
| Construção local da landing | Implementada; revisão local concluída | Next.js, pt-BR/pt-PT, modelos, demonstração, contactos e acesso demonstrativo; [revisão visual e funcional](REVISAO_LANDING_2026-10-15.md), com limites declarados |
| Publicar a landing | Pendente | Conteúdo, assets, contacto, permissões e configuração real ainda por verificar |
| Planear a área do casal e editor | Especificação v2, prévia conectada e corte D19 disponíveis para revisão | 115 capacidades classificadas: 45 V1, 30 V1 recorte, 40 Depois; 28 vistas/21 fluxos com alcance inicial descrito; sem integrar à aplicação ou validar usabilidade |
| Preparar login/autenticação | Provisão e ambiente local concluídos; integração pendente | D20: organização MyWedding Free e projeto `mywedding`, Healthy, Irlanda, confirmados na UI; [processo/evidência](../planeamento/CONSTRUCAO_DO_ACESSO.md). D23: Docker/Auth/Mailpit locais, loopback e HTTP/stop-start verificados. Código continua demonstrativo |
| Começar o núcleo do produto | Arquitetura e proposta de V1 disponíveis; confirmação/condições pendentes | Corte rastreável em D19, reunindo H1 e essencial de H2; confirmar alcance e avaliar infraestrutura dinâmica antes da implementação |
| Piloto com dados reais e vendas | Pendente | Segurança, recuperação, operação e condições comerciais exigem evidência própria |

Não é preciso definir preços, pagamentos, autenticação real ou presentes para construir a landing. A entrega frontend D13 permanece demonstrativa. Posteriormente, D20 autorizou preparar o acesso e provisionar Supabase Free; D21 reforçou a segurança. Isso não autoriza publicar ou construir todo o painel/editor.

## Pendências da landing

| ID | Ponto | Quando resolver | Encaminhamento |
| --- | --- | --- | --- |
| L01 | Pedido de construção | Resolvido em 15/10/2026 | Pedido explícito de Rodrigo; pnpm confirmado; comunicação de pré-lançamento substituída por apresentação final |
| L02 | Versões, Node.js, pnpm e exportação | Base criada e build local aprovado | Versões fixadas e pnpm-lock.yaml; Next 16.4.1, React 19.3.1, next-intl 4.14.9; CI preparada, ainda não executada |
| L03 | Texto final pt-BR e pt-PT | Implementado; revisão dos fundadores antes de publicar | Textos separados em `src/i18n/messages/`, sem preços ou avaliações inventados |
| L04 | Canal real e ação principal | Contactos fornecidos e ligados localmente | Rodrigo e Maria Eduarda, Instagram e telefone; não foram enviadas mensagens ou efetuadas chamadas |
| L05 | Conteúdo fictício, prévias e assets | Materiais web preparados e integridade conferida | Casamento único fictício, quatro WebP, duas WOFF2, duas capas 1200 × 630, kit da marca com 14 SVGs/PNGs e licenças locais; manifestos de derivados. Revisar contexto/direitos no uso público |
| L06 | Conta Cloudflare/GitHub, repositório, termos, limites e publicação | Antes de executar a ação externa | D24 autoriza commit/push para `RodrigoSubtil/mywedding`, criado por Rodrigo e público; Git/origin preparados. Conferir SHA remoto e CI após envio. Cloudflare/deploy/termos da publicação permanecem pendentes. Definir `NEXT_PUBLIC_SITE_URL` com a origem real e conferir canonical/hreflang/partilha na publicação |
| L07 | Navegação, idiomas, acessibilidade, apresentação e exportação | Revisão local concluída | Seis larguras de 320 a 1440 px, duas variantes, botões, teclado, idioma e formulários locais; [evidência e limites](REVISAO_LANDING_2026-10-15.md). Auditoria integral, zoom real, leitor de ecrã e desempenho de campo não certificados |
| L08 | Informações de contacto, privacidade e termos aplicáveis à página real | Antes da operação correspondente | Depende do que a página efetivamente recolhe/usa; não publicar políticas genéricas ou rastreadores por omissão |
| L09 | Nome público e identidade de apresentação | Antes da publicação comercial | MyWedding continua nome de trabalho; fundadores precisam resolver a apresentação pública e a diligência do nome |

As rotas de entrar/criar conta são interfaces demonstrativas autorizadas em D13, sem banco ou autenticação; não apresentam acesso/conta/envio como concluídos. Preços, presentes e painel continuam na etapa do produto. Não criar páginas vazias, botões sem destino ou integrações só porque aparecem nas referências.

## Critérios de conclusão da landing

- Instalação reproduzível com pnpm/lockfile; tipos, lint, formatação e build aprovados.
- Exportação estática servida localmente; raiz e variantes `/pt-BR/` e `/pt-PT/` abertas por URL direta, sem depender de servidor Next.js, proxy/middleware ou autenticação.
- Menu, âncoras, mudança de localidade, FAQ e destinos funcionais; nenhuma promessa ou confirmação fictícia.
- Guia e tokens respeitados; desktop, telemóvel, zoom, teclado, foco, contraste e redução de movimento verificados na implementação.
- Modelos identificados como demonstração; dados fictícios consistentes; assets com origem/licença registada; traduções revistas.
- Desempenho medido nas condições declaradas; metas do plano não são apresentadas como resultados de campo.
- Antes de publicar: revisão visual dos fundadores, conteúdo e contacto finais, configuração/limites verificados e autorização coberta pelo pedido.
- Depois de publicar: URLs públicas, navegação direta, contacto e carregamento de assets verificados; registar endereço e versão. Build local não equivale a publicação.

## Pendências do produto

| ID | Ponto | Quando resolver |
| --- | --- | --- |
| P01 | Confirmar o corte proposto da primeira versão e seus limites/permissões/critérios | D19 separa V1/Depois e classifica todos os IDs; [fonte do corte](../planeamento/CONSTRUCAO_DO_PRODUTO.md#1-objetivo-e-corte-recomendado) preserva H1 + essencial de H2. Antes de construir, rever especialmente idioma principal, RSVP de presença, CSV padrão e alcance de acesso; proposta não é autorização de implementação |
| P02 | Supabase, região, projetos disponíveis, quotas e alternativa se não couber no gratuito | Provisão inicial resolvida em D20: MyWedding Free, `mywedding`, Irlanda, Healthy. Sem código ligado ou dados reais. Antes da integração/piloto, verificar limites/operação e resolver acesso do conector, hoje sem permissão no novo destino |
| P03 | Hospedagem dinâmica, runtime, eventual Workers/vinext e cache | D22: scanner vinext 1.2.1 apontou 96% estático, um parcial em imagens e zero incompatibilidades apontadas. Prova local/runtime, cookies/Proxy/cache, CPU no Free e condições da conta ainda pendentes; [avaliação e próxima fatia](../planeamento/CONSTRUCAO_DO_ACESSO.md#servidor-e-e-mail-sem-desembolso--avaliação-de-16102026-d22). Não equivale a adoção ou publicação |
| P04 | Método de login, recuperação e envio de email viável sem gasto assumido | D23 concluiu Docker/Supabase CLI 2.121.0/Mailpit locais, confirmação ligada, senha mínima 12, loopback e HTTP/stop-start verificados. Integração e testes de cadastro/confirmação/recuperação ainda pendentes; D24 pede GitHub antes do login. SMTP Supabase hospedado é restrito à equipa; Brevo sem domínio depende de ativação/reescrita/entrega reais. Resolver remetente e envio público separadamente, sem desligar confirmação; [fatia A1–A7](../planeamento/CONSTRUCAO_DO_ACESSO.md) |
| P05 | Schema físico, migrations, autorização, grants/RLS e acesso a ficheiros | Antes de dados reais; testar dois casamentos isolados, incluindo acessos por URL/API |
| P06 | Exportação, backup de banco e ficheiros, restauração, eliminação e suporte | Antes do piloto com dados reais |
| P07 | Participantes, capacidade, política do piloto, privacidade e enquadramento aplicável | Antes de convidar casamentos reais; contactos exigem pedido próprio |
| P08 | Oferta, preço BR/PT, validade, impostos, faturação, cobrança e reembolso | Antes de anunciar planos ou vender |
| P09 | Horas, divisão detalhada de tarefas, sede e decisões de operação | Conforme capacidade e preparação comercial; sem assumir datas ou retiradas |
| P10 | Presentes integrados, automações, domínio pago e parcerias | Etapas posteriores com decisão própria; não bloqueiam a landing |
| P11 | Validar organização visual, recortes e percursos iniciais desktop/mobile/erros | D19 recomenda entrada multipágina editável, secção livre na V1, favoritas depois e comparação apenas aplicar/cancelar. Rever composição adaptativa estrutura/prévia/inspector, descoberta dos controlos, CSV e RSVP simplificado; a prévia completa ainda contém capacidades posteriores. Estados completos, assinatura/controlo visual e testes de uso continuam pendentes |
| P12 | Contratos detalhados de rascunho/publicação, revisões de eventos, concorrência e recuperação | Antes da persistência/publicação do núcleo; desenho conceptual em [Construção do produto](../planeamento/CONSTRUCAO_DO_PRODUTO.md), ainda sem schema/teste |
| P13 | Papéis, transferência de titularidade, efeitos de despublicação, retenção e limites de páginas/media/convidados | Antes do corte/piloto relevante; não assumir quotas, prazo vitalício, renovação ou direitos comerciais |
| P14 | Selecionar recursos opcionais de organização, recordações, interações e expansão | Conforme necessidade validada e capacidade; cobertura no [catálogo](../produto/CATALOGO_DE_RECURSOS.md) não autoriza construir todos |
| P15 | Modelo de ameaças, proteção de contas/dados e segurança financeira futura — D21 | Antes de dados reais: critérios de acesso, MFA conforme risco, abuso, segredos, media, auditoria e resposta a incidentes demonstrados em conjunto com P04/P05/P06. Antes de pagamentos/presentes: fornecedor/escopo próprios e testes de autorização, fraude, duplicidade e conciliação; [fonte dos requisitos](../planeamento/CONSTRUCAO_DO_ACESSO.md#segurança-como-condição-de-conclusão--d21) |

## Nível de evidência

Uma decisão define direção; um documento especifica; uma imagem demonstra aparência; um teste local comprova apenas o cenário executado; CI comprova os checks da versão; publicação precisa de acesso público; integração real exige o percurso completo. Registar o nível observado e não saltar entre eles.

Resultados desta revisão: [relatório](REVISAO_2026-10-15.md). Resultados futuros: usar o [modelo de validação](../../templates/REGISTRO_DE_VALIDACAO.md), guardando dados pessoais em local privado.
