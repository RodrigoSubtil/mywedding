# MyWedding arquitetura e stack aprovadas

Decisão registada em **15 de outubro de 2026**. Rodrigo aprovou a arquitetura com o pedido: **“Vamos seguir essa arquitetura. Atualiza a documentação e a memória do MyWedding com essas decisões”.**

Este documento é a referência central das decisões técnicas. Deve ser lido com a [memória principal](../../MEMORIA_PROJETO.md), a [visão e escopo](../produto/VISAO_E_ESCOPO.md), a [operação sem investimento inicial](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md) e o [style guide](../../design/STYLE_GUIDE.md).

## Alcance da aprovação e estado real

Aprovação da base técnica e da evolução por etapas, começando pela landing. A aprovação original registou a direção técnica; a revisão atual organiza a base, sem iniciar implementação, criação de contas, contratação ou publicação.

Continuam confirmados: Brasil e Portugal primeiro, preparação mundial, construção por Rodrigo e esposa, sem contratação, meta de desembolso adicional zero, Instagram orgânico e parcerias futuras.

A construção local foi autorizada depois da revisão de 15/10/2026. Já existe landing estática em Next.js com build local. Em 16/10/2026, D20 autorizou preparar o acesso e provisionar Supabase Free: organização/projeto próprios criados, Healthy na Irlanda; ainda sem banco ligado ao código ou autenticação real. A aprovação técnica não transforma hipóteses comerciais em decisões definitivas. O [processo do acesso](../planeamento/CONSTRUCAO_DO_ACESSO.md) contém evidência, condições de execução e critérios de segurança reforçados em D21.

| Estado | Significado |
| --- | --- |
| Aprovado | Direção técnica que deve orientar a implementação |
| Aprovado para a etapa correspondente | Ferramenta ou capacidade a introduzir quando houver a necessidade descrita |
| Candidato condicionado | Primeira opção a avaliar, dependente de compatibilidade, termos, quotas e operação |
| Em aberto | Ainda exige decisão própria |
| Implementado e verificado | Exige evidência real; consultar o registo da implementação da landing para os checks locais |

## Stack inicial da landing

| Área | Decisão aprovada | Aplicação |
| --- | --- | --- |
| Linguagem | TypeScript com modo estrito | Código e contratos tipados |
| Interface e framework | React + Next.js com App Router | Landing e base da aplicação futura |
| Estilos | Tailwind CSS ligado aos tokens existentes | Cores, tipografia, espaços, bordas, raios e estados seguem o guia |
| Componentes | Componentes próprios MyWedding; shadcn/ui seletivamente | Adicionar apenas os componentes necessários e adaptar os seus tokens |
| Idiomas | next-intl; pt-BR e pt-PT | Traduções e configuração separadas do layout |
| Conteúdo | Ficheiros de conteúdo e mensagens separados dos componentes | Textos centralizados; formato adequado ao conteúdo, sem CMS obrigatório |
| Dependências | pnpm e lockfile versionado | Instalação reproduzível |
| Qualidade | ESLint, Prettier e verificação de tipos | Convenções partilhadas e verificações antes da publicação |
| Histórico e automação | GitHub + GitHub Actions | Revisão e pipeline dentro dos limites disponíveis |
| Publicação inicial | Exportação estática do Next.js no Cloudflare Pages | Subdomínio do fornecedor, sem compra inicial de domínio |

As versões exatas serão fixadas na implementação após verificar a compatibilidade entre framework, runtime e bibliotecas. Usar versões estáveis, lockfile e um ambiente Node.js LTS compatível.

O [tokens.css](../../design/tokens.css) continua como fonte de verdade dos valores visuais. Tailwind e shadcn devem referenciar esses valores; não gerar paletas, escalas de espaços ou raios concorrentes. Preservar Fraunces e DM Sans e as respetivas licenças. Alterações da base visual atualizam guia, tokens e amostras juntos.

## Organização do código

Começar com **um repositório e uma aplicação modular**, criando apenas pastas e dependências utilizadas na etapa. A organização abaixo representa a evolução aprovada, não diretórios já implementados:

    MyWedding/
    ├─ docs/
    │  └─ arquitetura/        Decisões técnicas e registos adicionais quando necessários
    ├─ design/                Guia, tokens e referências visuais
    ├─ public/                Ficheiros realmente públicos
    ├─ src/
    │  ├─ app/                Rotas, páginas e layouts
    │  ├─ components/
    │  │  ├─ ui/              Elementos visuais reutilizáveis
    │  │  └─ layout/          Estruturas partilhadas
    │  ├─ modules/
    │  │  ├─ marketing/       Landing e apresentação comercial
    │  │  ├─ weddings/        Casamentos e colaboradores
    │  │  ├─ builder/         Editor estruturado
    │  │  ├─ publishing/      Versões e publicação
    │  │  ├─ guests/          Convidados e convites
    │  │  ├─ rsvp/            Respostas por pessoa e evento
    │  │  ├─ billing/         Venda do serviço MyWedding
    │  │  └─ partners/        Parcerias futuras
    │  ├─ content/            Conteúdo editorial
    │  ├─ i18n/               Configuração e mensagens traduzidas
    │  ├─ config/             Configurações tipadas
    │  └─ server/
    │     ├─ auth/            Identificação e autorização
    │     ├─ database/        Acesso aos dados
    │     └─ integrations/    Adaptadores dos fornecedores
    ├─ supabase/
    │  └─ migrations/         Histórico das alterações do banco
    └─ tests/                 Verificações relevantes

As rotas montam as páginas. Os módulos mantêm regras do produto. Componentes visuais não concentram consultas, autorização e regras comerciais.

Percurso das operações com dados: **entrada → validação → autorização → regra do módulo → acesso aos dados**. A futura aplicação pode usar Route Handlers e Server Actions como entradas; a exportação estática da landing não fornece um backend dinâmico.

Extrair código partilhado para packages num workspace pnpm quando existir uma segunda aplicação com necessidade real de publicação independente. Microserviços, Kubernetes, API NestJS separada e outro ORM não integram a base inicial; reconsiderar apenas com necessidade demonstrada.

## Superfícies e isolamento

As quatro superfícies são landing, painel do casal, site do casamento e administração. Podem começar na mesma aplicação, com layouts e permissões próprios.

O produto será **multi-tenant**, com o casamento como unidade principal de isolamento. A mesma plataforma serve vários casamentos; cada um tem identidade, membros, permissões e endereço próprios.

- Autorizar cada operação no servidor, incluindo tarefas de fundo.
- Identificar o casamento em consultas, ficheiros, tarefas e cache.
- Utilizadores do casal e colaboradores têm contas individuais e acesso revogável.
- Administração exige permissões explícitas e registo de ações.
- Convidados respondem por convite com escopo limitado, sem exigir conta do MyWedding.
- Dados de convidados, convites, respostas e eventos privados não entram no conteúdo público.

## Dados e serviços geridos

**PostgreSQL está aprovado como base de dados da evolução do produto. Supabase é a primeira candidata condicionada**, para PostgreSQL, Auth e Storage; a escolha operacional depende de avaliação dos limites, acesso, região, recuperação, envio de email e termos.

D20 aprova especificamente a provisão dedicada no Free para preparar o acesso; isso não resolve a adequação operacional completa. Projeto `mywedding` criado em 16/10/2026, Healthy, `eu-west-1`, sem integração na aplicação. D21 exige demonstrar segurança desde o acesso, incluindo autorização/isolar dados, proteção de sessões e credenciais, recuperação, MFA conforme risco e futura autorização financeira; requisitos e testes no [documento do acesso](../planeamento/CONSTRUCAO_DO_ACESSO.md#segurança-como-condição-de-conclusão--d21). Presentes continuam na etapa própria, sem provedor adotado.

Usar migrations SQL versionadas, tipos gerados do banco e um único caminho definido para alterar o schema. Na implementação, seguir a documentação e a skill atual do Supabase. Não instalar um ORM adicional sem necessidade concreta.

Combinar autorização da aplicação com RLS adequada ao casamento e à participação do utilizador. RLS não substitui grants de acesso, validação ou testes de isolamento. Chaves privilegiadas permanecem no servidor; funções privilegiadas e acessos administrativos exigem controlo explícito.

O modelo conceptual de utilizadores, casamentos, membros, eventos, convites e respostas está em [Visão e escopo](../produto/VISAO_E_ESCOPO.md). O schema físico ainda não foi implementado nem aprovado tabela a tabela.

Antes de dados reais: demonstrar isolamento entre casamentos, exportação, backup de dados e ficheiros, restauração, eliminação e suporte.

## Editor, temas e publicação

O construtor começa com **secções estruturadas**, permitindo escolher, ordenar, ocultar e personalizar. Separar:

| Parte | Responsabilidade |
| --- | --- |
| Conteúdo | Nomes, textos, fotografias e referências aos eventos |
| Tema | Paleta, fontes e aparência |
| Estrutura | Secções escolhidas e ordem |
| Publicação | Versão que o convidado pode consultar |

Trocar de tema preserva o conteúdo. Editor e site publicado reutilizam o mesmo renderizador de secções. O documento do site tem versão de estrutura e evolução compatível com sites existentes; os dados relacionais de convidados e respostas permanecem separados.

Manter rascunho e versão publicada separados, publicação explícita, histórico recuperável e proteção contra alterações concorrentes. Cache inclui casamento, idioma e versão; informação privada exige autorização e não deve entrar em cache público.

A identidade comercial MyWedding segue os tokens atuais. Temas dos casais usam valores próprios limitados ao respetivo site, sem alterar a identidade da landing e do painel.

| Ferramenta | Estado e momento |
| --- | --- |
| React Hook Form + Zod | Aprovados para formulários e validação quando entrarem operações com dados; validar também no servidor |
| dnd-kit | Aprovado para a etapa em que existir reordenação por arrastar |
| Tiptap | Opção aprovada condicionada à necessidade de texto formatado; não é requisito da landing |
| Storybook | Aprovado para catálogo de componentes e estados quando a biblioteca justificar |
| Playwright | Aprovado para percursos relevantes de ponta a ponta |
| Vitest | Aprovado para regras relevantes e verificações locais adequadas |

## Preparação internacional

pt-BR e pt-PT são as variantes iniciais. Separar idioma da interface, traduções do conteúdo do casal, país de residência, país do evento e país de faturação.

Usar nomes e textos em Unicode, formatos locais, moeda explícita com representação exata e fuso IANA do evento. Preservar a hora local pretendida e testar mudanças de horário de verão. Preparar estrutura para textos longos e RTL; fontes e cobertura de novos alfabetos exigem revisão própria.

As variantes da landing serão geradas estaticamente, com prefixos explícitos de idioma. As URLs de referência são /pt-BR/ e /pt-PT/. Não depender de negociação de idioma no servidor nem de middleware na exportação estática. Por orientação posterior de Rodrigo, a raiz abre a landing pt-BR diretamente; o cabeçalho permite escolher pt-BR/pt-PT, sem página intermediária.

Começar com CDN para os ficheiros e uma região de banco escolhida com medições em Brasil e Portugal. CDN mundial não equivale a banco multirregional nem a autorização comercial ou cobertura financeira mundial. Expansão de regiões depende de latência, requisitos e capacidade medidos.

## Integrações, parcerias e dinheiro

Fornecedores externos entram por adaptadores com responsabilidade definida. Introduzir apenas integrações necessárias na etapa. Mensagens e webhooks terão execução em segundo plano, registo de estados, tentativas e prevenção de duplicados quando implementados.

Uma resposta RSVP guardada não depende do sucesso posterior do email. A confirmação visual não deve afirmar entrega de mensagem sem evidência do fornecedor.

Preparar colaboradores e organizadores com acesso limitado a casamentos autorizados, revogação e auditoria. Códigos de indicação e atribuição comercial não concedem acesso aos dados.

Quando houver procura por integração técnica com parceiros: API REST versionada, documentação OpenAPI, credenciais com escopo, quotas e webhooks assinados. Essa capacidade está aprovada como direção futura; não há API ou parceiro implementado.

Conservar três responsabilidades distintas: cobrança do serviço MyWedding, eventuais comissões de parceiros e presentes destinados aos casais. Preços, processadores, contratos, comissões e o fluxo financeiro dos presentes continuam em aberto. Links externos são a primeira abordagem para presentes, quando esse recurso existir.

## Publicação e custo

Cloudflare Pages é a escolha técnica aprovada para a landing estática. A aplicação futura precisa de backend e de outra configuração de publicação. A primeira publicação usa subdomínio do fornecedor, imagens previamente otimizadas, fontes locais e canais de contacto existentes.

Na pesquisa de 15/10/2026, a documentação do Pages distinguia pedidos estáticos gratuitos de funções com quotas. Vercel Hobby estava restrito a uso pessoal e não comercial. Conferir novamente termos, quotas, colaboração e conta antes da publicação.

**Cloudflare Workers é candidata para a aplicação futura. vinext é uma opção a testar, não uma adoção definitiva.** A documentação da Cloudflare consultada em 15/10/2026 recomendava vinext para novas aplicações Next.js completas. Validar compatibilidade e o comportamento de autenticação, autorização, renderização, cache e publicação no runtime e plano pretendidos. Preservar as fronteiras dos módulos para permitir rever a hospedagem.

Reavaliação D22 em 16/10/2026: a Cloudflare mantém vinext como caminho recomendado, ainda beta. O scanner `vinext@1.2.1 check` executado no MyWedding apontou 96% de compatibilidade estática, com imagens parciais e zero incompatibilidades apontadas. Next.js local com Supabase Auth/Mailpit é o caminho recomendado para a primeira integração sem envio externo; Workers Free/vinext precisa de prova de runtime, sessões/cache e CPU. OpenNext permanece alternativa a avaliar, com limite documentado em middleware Node.js relevante ao Proxy Next 16. Fonte detalhada: [avaliação do acesso](../planeamento/CONSTRUCAO_DO_ACESSO.md#servidor-e-e-mail-sem-desembolso--avaliação-de-16102026-d22). Não houve migração, instalação como dependência do projeto, mudança de build ou adoção operacional nesta avaliação.

O Supabase Free consultado na pesquisa de 15/10/2026 anunciava 500 MB de banco, 1 GB de ficheiros, limite de dois projetos ativos e pausa após uma semana de inatividade. Estes números são um registo datado, não uma quota garantida. Verificar condições e quota já usada pela conta na avaliação operacional. Exportação e recuperação próprias precisam de preparação; gratuito não equivale a continuidade garantida.

O SMTP padrão do Supabase tem limitações; Resend exige domínio verificado para envio próprio. Não prometer autenticação pública por email e mensagens de produção a custo zero sem resolver e verificar esse percurso. Fornecedor de email, domínio e eventual lista de interesse continuam por concretizar.

D22 distingue desenvolvimento local sem domínio (Mailpit), teste hospedado restrito e envio público. Brevo Free é candidato condicionado por ativação, remetente/reescrita temporária e entrega; SMTP2GO exige endereço empresarial no cadastro e Mailjet alerta para problemas com freemail. Sem fornecedor de e-mail adotado, conta criada ou envio real nesta avaliação. Manter segredos SMTP no Auth/servidor e versões/clientes por ambiente conforme o documento do acesso.

Horas dos fundadores, taxas por venda e possíveis custos de crescimento continuam separados do desembolso inicial. Nenhuma escolha deste documento autoriza despesa automática, upgrade ou contrato pago.

## Manutenção e verificação

Centralizar conteúdo, traduções, configurações tipadas e tokens; manter segredos fora do cliente. Se a edição editorial sem Git se tornar necessária, avaliar um painel ou CMS nessa etapa, sem o tornar dependência da landing.

Usar revisão e prévia de alterações, verificações de tipos, lint e build, mais testes relevantes ao comportamento alterado. Dependabot prepara atualizações para revisão; não integrar automaticamente sem avaliar compatibilidade. Documentar mudanças arquiteturais, versões publicadas e procedimento de rollback.

Na landing: conferir idiomas, navegação, contacto, teclado, apresentação móvel e fidelidade ao guia. No produto: testar isolamento, publicação, recuperação, RSVP e integrações reais. Separar ambientes e dados fictícios de produção; plano gratuito não garante ambientes geridos ilimitados.

## Ordem aprovada de evolução

| Etapa | Entrega | Condição para avançar |
| --- | --- | --- |
| 1 | Base da landing: stack, tokens, componentes, conteúdo e idiomas | Implementação e build verificados |
| 2 | Landing pública com apresentação fiel, demonstrações identificadas e contacto | Conteúdo, contacto e publicação reais verificados |
| 3 | Conta, casamento, colaboradores, editor estruturado e publicação | Permissões, versões e recuperação demonstradas |
| 4 | Convidados, RSVP, exportação e piloto acompanhado | Isolamento, respostas e operação demonstrados |
| 5 | Cobrança, domínios, mensagens e ferramentas de parceiros | Procura, capacidade, termos e percursos próprios validados |

Essa sequência não fixa datas nem aprova todos os detalhes comerciais ou de produto. A landing é a primeira construção autorizada; os resultados locais constam no registo de implementação, sem equivaler a publicação.

## Contrato de execução da landing estática

Na implementação, gerar as rotas pt-BR/pt-PT no build, abrir pt-BR diretamente na raiz e oferecer seletor no cabeçalho. Não depender de proxy/middleware, cookies de servidor, Server Actions, ISR ou Route Handlers dinâmicos. Imagens/fontes precisam de uma estratégia compatível com exportação estática, sem pressupor otimizador em runtime ou um novo serviço pago. Fixar versões compatíveis e comprovar o resultado servido como ficheiros estáticos.

Por pedido explícito de Rodrigo em 15/10/2026 (D13), incluir entrar/criar conta nas duas variantes, apenas frontend. O módulo `src/modules/auth/` valida campos no cliente e informa o modo demonstrativo; não contém serviço de autenticação, banco, sessão, persistência de credenciais ou envio. Essa entrega não adota Supabase nem altera a hospedagem aprovada.

`src/config/site.ts` centraliza a origem pública opcional `NEXT_PUBLIC_SITE_URL` para canonical, variantes e imagens de partilha geradas no build. Usar somente a origem real da publicação, sem credenciais/caminho; manter vazia no desenvolvimento. Não publicar metadados que apontem para localhost ou um domínio inventado.

Esta restrição vale para a landing inicial. A aplicação futura, com autorização e dados no servidor, exige outro modo de execução e a avaliação própria de hospedagem já registada acima. Não remover os contratos de segurança para tentar manter o produto inteiro numa exportação estática.

Referências oficiais reconsultadas na revisão: [Next.js estático](https://nextjs.org/docs/app/guides/static-exports), [next-intl sem middleware](https://next-intl.dev/docs/routing/middleware#usage-without-proxy--middleware-static-export) e [Pages estático](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/). A consulta sustenta a direção; compatibilidade da versão escolhida exige build e navegação reais.

## Ambiente local de acesso — D23

Em 16/10/2026, Rodrigo autorizou Docker/Supabase local/Mailpit e integração segura sem gasto/publicação. CLI 2.121.0, supabase-js 2.118.0, SSR 0.12.7 e Zod 4.6.7 preparados. Docker Desktop Linux no Windows executa sete serviços essenciais, com portas explicitamente em loopback e serviços opcionais desligados. O helper `local:*` preserva volumes e outros projetos; API/Studio/Mailpit e ciclo stop/start verificados. Configuração e evidência na [fonte do acesso](../planeamento/CONSTRUCAO_DO_ACESSO.md#ambiente-local-preparado--16102026-d23).

Esta preparação adota essas ferramentas no ambiente local da fatia de acesso; não valida o destino hospedado, RLS, sessões ou envio público. O build estático e as telas demonstrativas continuam. D24 autoriza guardar primeiro o projeto no GitHub de Rodrigo; runtime de servidor explícito e integração são a próxima etapa na mesma aplicação.

## Questões ainda em aberto

O registo central de [Prontidão e pendências](../governanca/PRONTIDAO_E_PENDENCIAS.md) mantém responsáveis/momento e separa decisões da landing, publicação, núcleo, piloto e receita. Versões exatas e configuração serão concretizadas na construção; fornecedores condicionados não são adotados por esta revisão.

## Evidência e histórico

As fontes técnicas consultadas para a recomendação aprovada estão em [Fontes e verificação](../pesquisa/FONTES_E_VERIFICACAO.md). Consulta de documentação comprova informação publicada, não funcionamento do MyWedding.

| Data | Registo | Evidência |
| --- | --- | --- |
| 15/10/2026 | Arquitetura e stack aprovadas para orientar landing e evolução modular | Pedido explícito de Rodrigo, transcrito na abertura deste documento |
| 15/10/2026 | Documentação e memória reconciliadas com a aprovação | Atualização de ficheiros; aplicação não implementada |
| 16/10/2026 | D20: preparação do acesso e provisão Supabase Free autorizadas | Projeto próprio Healthy na Irlanda confirmado na UI; nenhuma integração de código ou mudança do modo estático |
| 16/10/2026 | D21: segurança reforçada como condição de conclusão | Requisitos/testes registados; segurança da aplicação e operação financeira ainda não demonstradas |
