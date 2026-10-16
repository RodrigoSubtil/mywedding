# MyWedding

Plataforma de Rodrigo e da sua esposa para os próprios casais criarem o site do casamento. Brasil e Portugal primeiro, preparada para expansão mundial. Construção pelos dois fundadores, sem contratação ou desembolso adicional inicial; divulgação orgânica no Instagram.

Base revista e construção local iniciada em **15/10/2026**, a pedido de Rodrigo. A landing em Next.js está implementada localmente em pt-BR e pt-PT, com três modelos, demonstração interativa, contactos reais dos fundadores e interfaces demonstrativas de entrar/criar conta. O build gera ficheiros estáticos em `out/`. Em **16/10**, Docker/Supabase/Mailpit locais foram preparados e Rodrigo autorizou guardar o projeto em [RodrigoSubtil/mywedding](https://github.com/RodrigoSubtil/mywedding) antes de integrar o login. A aplicação ainda não foi publicada e o núcleo não está implementado.

## Desenvolvimento local

Node.js 22.15 ou superior compatível (22 LTS ou 24+) e pnpm 10.34.7, fixado em `package.json`. O Corepack fornecido com o Node instalado já permite usar `pnpm` nesta máquina.

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Com as dependências já instaladas, basta **`pnpm dev`**. Deixar o terminal aberto; o Next atualiza a página durante as alterações. Abrir [landing](http://127.0.0.1:3000/), [pt-BR](http://127.0.0.1:3000/pt-BR/) ou [pt-PT](http://127.0.0.1:3000/pt-PT/). Se a porta estiver ocupada, usar o endereço impresso pelo terminal. Não iniciar dois servidores para esta pasta.

A raiz abre diretamente a versão pt-BR. O idioma é escolhido no cabeçalho, sem página intermediária. Conteúdo em `src/i18n/messages/`, composição em `src/modules/marketing/`, contactos em `src/config/contacts.ts` e dados fictícios em `src/content/wedding.ts`. O CSS importa os tokens originais de `design/tokens.css`; `public/` contém apenas assets destinados à página.

A assinatura vetorial partilhada pelo componente `Brand` integra a folha ao ponto do “i” e preserva o ponto final terracota, conforme o refinamento pedido por Rodrigo. Fonte e proveniência em [design/brand](design/brand/README.md). Ícones representam cada assunto; entradas únicas e feedback de interação usam os tempos do guia, com redução de movimento e conteúdo SSR legível.

O [kit da marca](design/brand/README.md#kit-reutilizável) contém 14 SVGs e 14 PNGs: versões transparentes, inversas, em uma cor, símbolos e assinaturas pt-BR/pt-PT. [ZIP pronto para usar](output/brand/MyWedding-Brand-Kit.zip) e [catálogo visual](output/brand/catalogo.png). Os masters ficam em `design/brand/`, derivados em `output/brand/`; a aplicação recebe apenas a cópia pública usada.

[Entrar](http://127.0.0.1:3000/pt-BR/entrar/) e [criar conta](http://127.0.0.1:3000/pt-BR/criar-conta/) também existem em pt-PT. O módulo `src/modules/auth/` contém apenas a interface: validação local, mostrar/ocultar senha e mensagens de demonstração. Não envia nem guarda credenciais, não cria contas, não autentica e não envia recuperação. Não introduzir credenciais reais para testar.

A configuração pública de build está em [.env.example](.env.example). Quando existir o endereço real da publicação, definir `NEXT_PUBLIC_SITE_URL` com a origem, sem caminho, para gerar canonical, hreflang e metadados de partilha. Vazia no desenvolvimento, omite URLs de publicação em vez de inventar um domínio. As capas pt-BR/pt-PT estão em `public/social/`.

```powershell
pnpm check
pnpm build
pnpm preview
```

`check` executa lint, tipos e formatação. `build` exporta para `out/`; `python scripts/verify_landing.py` confere as nove rotas públicas, referências locais, traduções e integridade dos assets. `preview` serve **somente os ficheiros estáticos** em [127.0.0.1:4173](http://127.0.0.1:4173/). Não usar `next start` para esta exportação. A configuração de GitHub Actions está preparada; não foi executada em CI nem cria um repositório remoto.

## Ler primeiro

1. [Memória do projeto](MEMORIA_PROJETO.md): continuidade, estado e mudanças de direção.
2. [Orientações para a IA](AGENTS.md): leituras por tarefa, limites e quando solicitar autorização.
3. [Decisões e limites](docs/governanca/DECISOES_E_LIMITES.md): o que está em vigor e como mudar.
4. [Prontidão e pendências](docs/governanca/PRONTIDAO_E_PENDENCIAS.md): o que falta para construir, publicar e avançar ao produto.

## Organização e fontes centrais

| Pasta / documento | Responsabilidade |
| --- | --- |
| [docs/governanca](docs/governanca/DECISOES_E_LIMITES.md) | Decisões, pendências e [relatório da revisão](docs/governanca/REVISAO_2026-10-15.md) |
| [Arquitetura e stack](docs/arquitetura/ARQUITETURA_E_STACK.md) | Fonte central técnica: stack, módulos, isolamento, evolução e fornecedores condicionados |
| [Visão e escopo](docs/produto/VISAO_E_ESCOPO.md) | Percursos e propostas de escopo do produto; não é um backlog inteiro aprovado |
| [Área do casal e editor](docs/produto/AREA_DO_CASAL_E_EDITOR.md) | Especificação v2: 28 vistas, 21 fluxos, cobertura da prévia e aplicação do corte inicial D19 |
| [Catálogo de recursos](docs/produto/CATALOGO_DE_RECURSOS.md) | 115 capacidades com localização/horizonte e classificação V1, V1 recorte ou Depois; não são funcionalidades implementadas |
| [Plano de execução](docs/planeamento/PLANO_DE_EXECUCAO.md) | Sequência de entregas e evidência para avançar, sem calendário assumido |
| [Construção do produto](docs/planeamento/CONSTRUCAO_DO_PRODUTO.md) | Fonte do corte recomendado D19: primeira versão/Depois, alternativas, percurso completo, critérios e etapas futuras |
| [Construção do acesso](docs/planeamento/CONSTRUCAO_DO_ACESSO.md) | Processo A0–A7 de login/autenticação, provisão Supabase Free D20, segurança D21 e evidência/pendências da integração |
| [Operação sem investimento inicial](docs/planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md) | Base financeira/operacional; exemplos de caixa identificados como hipóteses |
| [Estrutura da landing](docs/landing/01_ESTRUTURA_E_CONTEUDO.md) | Fonte central de narrativa, secções, navegação e apresentação da landing |
| [Referências da landing](docs/landing/02_REFERENCIAS_E_APRENDIZAGENS.md) | Comparação datada de nove páginas; referências, não materiais para copiar |
| [Assets e interações](docs/landing/03_ASSETS_E_INTERACOES.md) | Composição, media, movimento, adaptação móvel e critérios visuais |
| [Estudo de mercado](docs/pesquisa/ESTUDO_DE_MERCADO.md) | Pesquisa de 19 referências e análise; preços/propostas não são decisões comerciais |
| [Editores e painéis](docs/pesquisa/EDITORES_E_PAINEIS_2026-10-15.md) | Revisão de fontes oficiais das 19 referências, em profundidades diferentes; observação pública não equivale a teste autenticado |
| [Fontes e verificação](docs/pesquisa/FONTES_E_VERIFICACAO.md) | Origem, datas e limites das informações; revalidar na decisão relevante |
| [Histórico](docs/historico/CENARIOS_SUPERADOS.md) | Cenários abandonados, separados da leitura normal de implementação |
| [Style guide](design/STYLE_GUIDE.md) e [tokens](design/tokens.css) | Regras e valores da identidade; fontes/licenças em design/fonts |
| [Fotografias Pexels](design/assets/pexels/README.md) | 15 originais locais com origem/licença; quatro derivados WebP usados na landing |
| [Prancha HTML](design/style-guide.html) | Amostras locais; não é a landing |
| [Modelos de validação](templates/README.md) | Roteiros e registos para resultados futuros, sem dados pessoais no repositório |
| [Ferramentas](scripts/README.md) | Exportador do guia e verificação documental |
| [Materiais derivados](output/README.md) | PDF, preview e relatórios; não são fontes de decisões |

## Preparação do acesso — 16/10/2026

Rodrigo pediu iniciar a preparação do login/autenticação e autorizou criar um destino próprio no Supabase, mantendo gasto zero. A organização **MyWedding Free** e o projeto **mywedding** foram criados; o painel confirmou **Healthy**, Irlanda (`eu-west-1`). Os projetos de outros trabalhos ficaram intactos. O [registo do acesso](docs/planeamento/CONSTRUCAO_DO_ACESSO.md) contém o ambiente, processo, captura e critérios de segurança.

As interfaces continuam demonstrativas: o projeto criado ainda não foi ligado ao código. Faltam definição do modo de execução, método/envio de confirmação e recuperação, integração das telas, sessões e autorização por casamento. Rodrigo ainda não tem domínio ou serviço de e-mail. O conector Supabase não tem permissão no novo projeto; a verificação foi pela UI. A provisão não implementa o painel/editor, publica a aplicação nem autoriza planos pagos.

A [avaliação D22 de servidor/e-mails](docs/planeamento/CONSTRUCAO_DO_ACESSO.md#servidor-e-e-mail-sem-desembolso--avaliação-de-16102026-d22) fundamentou a preparação local D23 abaixo. Scanner vinext: 96% de compatibilidade estática, imagens parciais, zero incompatibilidades apontadas; [relatório e limites](output/reports/servidor-email-compatibilidade-2026-10-16.json). Provedor de envio público, prova Workers/vinext e transição do build continuam por concretizar; não há login funcional demonstrado.

## Docker e serviços locais — preparados em 16/10/2026

Com Docker Desktop aberto e o motor Linux pronto, executar na raiz:

```powershell
pnpm local:up
pnpm local:check
```

Studio: [127.0.0.1:54323](http://127.0.0.1:54323/). Caixa de testes Mailpit: [127.0.0.1:54324](http://127.0.0.1:54324/). API: `http://127.0.0.1:54321`; PostgreSQL: `127.0.0.1:54322`. `pnpm local:down` para apenas os serviços MyWedding, preservando o volume do banco. `pnpm dev` continua separado e abre a aplicação demonstrativa.

As portas estão explicitamente restritas a este computador. O helper funciona com os contentores já preparados nesta máquina Windows/Docker Desktop; não faz instalação/bootstrap numa máquina nova. Usar os comandos `local:*` na rotina: a CLI pode recriar contentores com portas abertas. Originais de recuperação ficam parados; não os iniciar. Processo, configuração, versões, limites e evidência em [Ambiente local D23](docs/planeamento/CONSTRUCAO_DO_ACESSO.md#ambiente-local-preparado--16102026-d23).

Confirmação de e-mail ligada, senha mínima de 12 caracteres e reautenticação para alterar senha conferidas no serviço. Mailpit captura testes localmente; não envia para pessoas. API, Studio e caixa responderam HTTP 200 após stop/start; isso não comprova cadastro/recuperação, RLS ou segurança de produção. Não usar dados reais. Credenciais, `.env`, `private/` e temporários Supabase ficam fora do Git; Docker/volumes não são enviados ao GitHub.

## Repositório GitHub — D24

Destino autorizado por Rodrigo: [RodrigoSubtil/mywedding](https://github.com/RodrigoSubtil/mywedding), público e inicialmente vazio. Git local usa `main` e `origin` neste endereço. O pedido cobre código, documentação, guia/tokens, assets/licenças e ferramentas; não cobre deploy, alterações no Supabase hospedado ou publicar o simulador. O pipeline de qualidade só verifica a landing e documentação, sem implantação.

Antes de cada envio, conferir `git status`, alterações e ficheiros ignorados; nunca adicionar segredos ou dados privados com `git add -f`. Depois de preparar o stage, `node scripts/verify-git-upload.mjs` verifica caminhos e padrões comuns, sem imprimir segredos; não certifica binários ou segurança absoluta. O sucesso do envio exige igualdade entre SHA local e remoto. `pnpm check`, `pnpm build` e os verificadores Python dão evidência local; o resultado de GitHub Actions é verificado separadamente após o push.

## Próxima entrega

Revisão visual e funcional local concluída, com evidência na [revisão da landing](docs/governanca/REVISAO_LANDING_2026-10-15.md); a revisão dos fundadores precede a publicação. A orientação pede apresentação comercial acabada, sem faixa de pré-lançamento ou acesso antecipado. Modelos, respostas e acesso continuam identificados como exemplos; a landing não implementa editor, contas reais, cobranças ou presentes. O [registo inicial](docs/governanca/IMPLEMENTACAO_LANDING_2026-10-15.md) preserva a evidência da primeira construção.

A construção local pode avançar sem resolver os pagamentos e a infraestrutura dinâmica do produto. A publicação precisa de conteúdos e direitos dos materiais, contacto real, revisão visual e conta/configuração verificadas. O [registo de prontidão](docs/governanca/PRONTIDAO_E_PENDENCIAS.md) discrimina cada condição e o momento certo.

## Planeamento da área do casal

Em 15/10/2026, Rodrigo informou que a landing está pronta e o chat anterior conclui o trabalho; pediu agora pensar e documentar toda a experiência depois do login, **sem começar a implementação**. A evidência da landing continua no registo correspondente. Começar a leitura do novo planeamento pela [Área do casal e editor](docs/produto/AREA_DO_CASAL_E_EDITOR.md), depois consultar o catálogo, a pesquisa dos painéis e as etapas de construção.

A proposta contempla entrada guiada, editor por secções/elementos com prévia, navegação contínua ou várias páginas, fontes únicas para eventos/convidados e publicação separada do rascunho. A v2 documenta a prévia conectada autorizada em D17 e consolidada em D18: estrutura, canvas e inspector; 12 tipos de secção; elementos livres; fotografias/layouts; favoritas; comparação; versões; convidados, eventos, convites e configurações simulados. Organização, presentes, comunicação e pós-casamento conservam seus lugares e condições futuras.

Para avaliar, começar pelo [mapa de telas](docs/produto/AREA_DO_CASAL_E_EDITOR.md#21-mapa-completo-de-telas-e-vistas), seguir os [fluxos completos](docs/produto/AREA_DO_CASAL_E_EDITOR.md#22-fluxos-completos-e-continuidade) e consultar a [cobertura da simulação](docs/produto/AREA_DO_CASAL_E_EDITOR.md#24-prévia-conectada-cobertura-e-limites). Três páginas iniciais e três áreas no editor são escolhas demonstradas, ainda por rever; a alternativa contínua/de duas áreas não foi excluída como opção. Esta entrega altera apenas documentação: não integra a prévia na aplicação, implementa autenticação/núcleo, cria infraestrutura ou publica.

**Primeira versão e evolução (D19):** ler o [corte recomendado](docs/planeamento/CONSTRUCAO_DO_PRODUTO.md#1-objetivo-e-corte-recomendado) e a [aplicação nas telas/fluxos](docs/produto/AREA_DO_CASAL_E_EDITOR.md#25-aplicação-do-corte-da-primeira-versão). A proposta conserva páginas/secções/elementos livres, textos/fotos/cores/layouts, versões e o mínimo de eventos/convidados/RSVP/partilha manual para fechar o ciclo. Favoritas, comparação lado a lado, conversão contínua, formulários avançados, organização e integrações ficam depois. Todos os 115 IDs estão classificados: 45 V1, 30 V1 recorte, 40 Depois. É priorização para confirmar, sem implementação/publicação ou aprovação automática dos limites recomendados.

Para verificar esta base documental: `python scripts/verify_project.py`. Esse comando não instala a aplicação, não usa serviços externos e não comprova build ou operação do MyWedding.
