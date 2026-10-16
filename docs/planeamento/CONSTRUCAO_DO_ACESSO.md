# Construção do login e da autenticação

Registo iniciado em **16/10/2026**, após Rodrigo pedir começar a construção do acesso e conhecer o processo completo. A [arquitetura](../arquitetura/ARQUITETURA_E_STACK.md) continua a fonte técnica; o [plano do produto](CONSTRUCAO_DO_PRODUTO.md) mantém a sequência E2/E3; [pendências](../governanca/PRONTIDAO_E_PENDENCIAS.md) concentra decisões abertas. Este documento detalha apenas a fatia de acesso, sem aprovar o restante painel/editor.

## Estado de partida

- Existem interfaces de entrar/criar conta em pt-BR/pt-PT. `src/modules/auth/auth-form.tsx` valida campos localmente e mostra mensagens de demonstração; não autentica nem envia recuperação.
- `next.config.ts` usa `output: "export"`. Não há sessão, cliente de autenticação, banco ligado, rotas de callback ou área privada implementados.
- Rodrigo autorizou preparar o acesso e pediu criar um projeto Supabase próprio do MyWedding se necessário. Confirmou que os projetos já existentes pertencem a outros trabalhos e devem ficar intactos.
- Rodrigo informou que ainda não tem domínio próprio ou serviço de envio de e-mails.
- A organização existente RodrigoSubtil é Pro; a ferramenta cotou novo projeto em US$ 10/mês. Rodrigo escolheu **manter gasto zero e verificar organização Free**. Não há autorização para essa despesa, upgrade, transferência de projetos ou alteração do plano existente.
- Rodrigo escolheu explicitamente **criar e usar MyWedding Free**. A organização e o projeto dedicado foram criados; o painel mostrou `mywedding`, estado **Healthy**, Irlanda (`eu-west-1`) em 16/10/2026. Isso conclui a provisão inicial, sem demonstrar login ou isolamento da aplicação.

## Ambiente confirmado em 16/10/2026

| Item | Resultado observado |
| --- | --- |
| Organização | MyWedding, plano Free no formulário de criação; ID `cgmdlbwsetffxrxbyowy` |
| Projeto | `mywedding`, ID `unrqmxqmmsuezdomfkbh`; [painel do projeto](https://supabase.com/dashboard/project/unrqmxqmmsuezdomfkbh) |
| Estado e região | Healthy; West EU (Ireland), `eu-west-1`; instância nano |
| Opções selecionadas antes de criar | Data API ligada, exposição automática de novas tabelas desligada, RLS automático ligado; verificar grants/políticas reais nas migrations, sem presumir isolamento por essas opções |
| Credencial do banco | Entrada/guarda/submissão sob controlo de Rodrigo; valor não lido nem guardado pela IA; não serve como senha dos clientes |
| Integração com código | Na provisão D20 não houve integração; D23 instalou dependências e preparou Docker local, conforme registo abaixo. As telas continuam demonstrativas |
| Acesso das ferramentas | Navegador confirma o projeto; o conector Supabase recusou leitura do novo projeto por falta de permissão. Não ampliar acesso ou obter credenciais por atalhos |
| Limites do resultado | Sem teste de autenticação, envio, autorização, backup/restauro ou operação com dados reais; sem publicação |

A organização Pro e os projetos de outros trabalhos ficaram intactos. Nenhum plano pago foi aprovado. Criar no Free demonstra que esta provisão coube na conta nesse momento; não garante capacidade gratuita para todo o produto ou qualquer escala. [Captura do painel](../../output/reports/supabase-myWedding-2026-10-16.jpg).

## Alcance desta fatia

Cadastro, confirmação quando aplicável, entrar/sair, sessão, recuperação de acesso, retorno seguro ao destino e ligação da conta a um casamento autorizado. Uma conta sem casamento chega ao início do assistente; uma conta com associação chega à entrada privada correspondente. Nesta fatia basta uma entrada privada mínima que comprove identidade e autorização, sem apresentar o editor como concluído.

Método inicial recomendado para aproveitar as telas: **e-mail e senha**, condicionado à viabilidade do envio de confirmação/recuperação. Google pode ser avaliado como alternativa ou complemento, sem ser ativado por omissão. Um método escolhido muda telas e critérios; não deixar um botão que não funciona nem desativar confirmação só para contornar o envio.

## Processo do início ao fim

| Passo | Trabalho | Condição de conclusão |
| --- | --- | --- |
| A0 — ambiente e custo | Destino próprio, plano/custo, região, quotas, segredos e limites; manter outros projetos intactos | Projeto correto verificado, sem cobrança não autorizada; provisão não comprova autenticação |
| A1 — método e e-mail | Escolher acesso, confirmação, recuperação, URLs de retorno e envio viável | Percurso de desenvolvimento definido; condição para abrir a clientes explícita |
| A2 — execução do servidor | Definir como o modo dinâmico da aplicação coexistirá com a entrega estática da landing, no repositório/aplicação modular aprovados | Desenvolvimento, build e implantação pretendidos compatíveis; não retirar `output: "export"` silenciosamente nem criar outra stack |
| A3 — integração das telas | Cliente de autenticação adequado ao ambiente, validação, estados de pedido/erro, cadastro, login e logout | Ação chega ao serviço escolhido e o resultado verdadeiro aparece em pt-BR/pt-PT; nenhuma credencial privilegiada no cliente |
| A4 — sessão e recuperação | Confirmar callback, renovar sessão, controlar expiração, recuperar/redefinir senha e retornar ao destino permitido | Reabrir mantém sessão conforme política; link expirado/usado e falha de envio têm saída clara; sem redirecionamento para destino arbitrário |
| A5 — conta e casamento | Participação e autorização no servidor/base; conta sem casamento; duas pessoas do mesmo casal; outro casamento recusado | Identidade validada, direitos revogáveis e isolamento demonstrados; user metadata editável não concede permissões |
| A6 — aceitação | Executar matriz abaixo com dados de teste autorizados e guardar evidência | Sucessos e negativas confirmados no ambiente declarado, incluindo UI/API; mock e build não substituem integração |
| A7 — passagem ao painel | Rever pendências de execução, e-mail, segurança e recuperação; ligar a entrada ao próximo fluxo de construção | Acesso pronto no alcance verificado; publicação/piloto só com condições e autorização próprias |

A0/A1 podem avançar com o desenho dos estados; A3 depende das decisões relevantes de A1/A2. A5 precisa da persistência/permissões demonstráveis, não apenas de esconder a página. Não instalar todos os módulos futuros nesta etapa.

## Desenvolvimento e abertura a clientes

A documentação atual do [SMTP do Supabase](https://supabase.com/docs/guides/auth/auth-smtp) distingue envio de teste de envio para clientes: o remetente padrão atende endereços da equipa autorizada, tem limites reduzidos e não é destinado a produção. Sem serviço próprio de envio, é necessário definir uma estratégia de desenvolvimento/teste e resolver o envio antes de prometer cadastro/recuperação para qualquer casal. A disponibilidade concreta da conta não foi presumida.

Opções a avaliar sem gastar: autenticação local com caixa de e-mail de teste, se o runtime local necessário estiver disponível; teste hospedado limitado aos destinatários permitidos; ou método social com configuração e recuperação adequadas. Cada alternativa tem alcance diferente. Não comprar domínio, cadastrar remetente, criar conta de fornecedor, enviar mensagens ou ampliar acesso de pessoas sem o alcance correspondente.

Para integração por servidor, a [exportação estática do Next.js](https://nextjs.org/docs/app/guides/static-exports) não fornece cookies/Proxy/Server Actions ou rotas dinâmicas de autenticação. Isso não impede uma interface estática de chamar um serviço externo, mas autorização de dados deve continuar no servidor/base e o caminho aprovado para a aplicação precisa ser demonstrado. A [integração SSR do Supabase](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=nextjs) usa sessão por cookies e clientes apropriados ao browser/servidor. A decisão de execução continua em P03; criar um projeto não a resolve.

Fontes oficiais consultadas em 16/10/2026; compatibilidade das versões e condições devem ser conferidas na implementação. A provisão Supabase foi aprovada em D20; adequação operacional e integração continuam condicionadas às provas da fatia.

## Servidor e e-mail sem desembolso — avaliação de 16/10/2026, D22

Rodrigo pediu avançar à avaliação da melhor forma de servidor/e-mails sem gastar, seguindo a arquitetura e preparando a integração segura. **Recomendação para começar: servidor da própria aplicação Next.js em desenvolvimento local, Supabase Auth e caixa Mailpit local para confirmação/recuperação. Para o destino hospedado, provar Cloudflare Workers Free com vinext antes de o adotar.** Assim, a falta de domínio não impede construir/testar o acesso. Envio público continua com condição própria; não foi prometido SMTP de produção gratuito e ilimitado.

### Servidor: caminho recomendado e alternativas

| Opção | Avaliação e alcance |
| --- | --- |
| Next.js local, mesma aplicação modular | Base para implementar/testar a fatia sem pagar servidor nem abrir a internet. O modo dinâmico precisa ser explícito; preservar a entrega estática da landing enquanto se demonstra a evolução. Não retirar `output: "export"` silenciosamente nem presumir que apenas alternar uma variável resolve todas as rotas de ambos os builds |
| Cloudflare Workers Free + vinext | Primeira prova recomendada para hospedagem futura, coerente com o candidato da arquitetura e a recomendação atual da Cloudflare. vinext está em beta e reimplementa APIs do Next.js sobre Vite; não o tratar como troca transparente já validada. Exigir prova de next-intl, cookies, Proxy, callbacks, cache, erros e consumo no runtime |
| Cloudflare Workers + OpenNext | Alternativa que adapta o build do Next.js. A documentação ainda limita middleware Node.js; isso afeta a análise do Proxy do Next 16 usado no guia SSR do Supabase. Não escolher esta alternativa só por o peer dependency aceitar nossa versão; não contornar renovação de sessão ou autorização para conseguir compilar |
| Cloudflare Pages estático | Continua a primeira publicação escolhida para a landing. Ficheiros exportados não executam os endpoints/cookies de servidor do acesso proposto. Não confundir a existência de funções no ecossistema com a execução automática do Next.js exportado |

Fontes consultadas: [Next.js no Workers/vinext](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/), [OpenNext no Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/) e [limites do Workers](https://developers.cloudflare.com/workers/platform/limits/). O Free anuncia **100.000 pedidos/dia e 10 ms de CPU por pedido**; espera de rede não conta como CPU. Esse orçamento precisa ser medido, incluindo início, SSR, verificação e renovação de sessão. Excesso de quota deve falhar sem entregar conteúdo privado; não mudar para plano pago automaticamente. Conta/plano real, termos, quota partilhada, domínio do fornecedor e implantação permanecem por verificar antes da publicação.

Há divergência datada nas fontes sobre tamanho do Worker: a documentação atual da Cloudflare informa 64 MiB sem limite comprimido, enquanto a página geral do OpenNext ainda cita 3/10 MiB comprimidos. Usar a fonte da plataforma e a validação real da versão de Wrangler na prova, sem copiar limites antigos como quota confirmada da conta.

**Verificação feita no projeto:** `vinext@1.2.1 check` terminou com 96% de compatibilidade estática: 11 itens suportados, um parcial (imagens), zero incompatibilidades apontadas; next-intl/Tailwind e os três imports Next encontrados foram reconhecidos. As imagens atuais já são entregues sem otimizador em runtime; isso ainda precisa de verificação visual no novo modo. Não foi executado `vinext init`, alterado `package.json`/lockfile/configuração, iniciado servidor vinext ou publicado qualquer serviço. [Evidência técnica e limitações](../../output/reports/servidor-email-compatibilidade-2026-10-16.json). Percentagem de scanner não é percentagem de segurança nem prova do login.

### E-mails: desenvolver agora e escolher envio real depois da prova

| Caminho | Condições verificadas | Recomendação |
| --- | --- | --- |
| Supabase local + Mailpit | CLI captura os e-mails em caixa local; permite endereços fictícios, sem domínio ou destinatário externo. Confirmar disponibilidade/licença do runtime local; manter serviços restritos ao computador | Primeira opção para testar cadastro, confirmação, recuperação, expiração e reutilização de links. Ativar confirmação no ambiente local, pois o padrão local é desligado |
| SMTP padrão do Supabase hospedado | Só destinatários autorizados da equipa; atualmente dois envios/hora e serviço de teste sem SLA | Prova pontual hospedada depois, com destinatário autorizado e envio coberto pelo pedido; não servir cadastro público nem convidar pessoas só para contornar a restrição |
| Brevo Free | Plano anuncia 300 e-mails/dia e SMTP transacional. Documentação descreve reescrita temporária do remetente não autenticado para `brevosend.com`, inclusive freemail; ativação transacional e remetente precisam de validação | Candidato para avaliar um piloto controlado sem domínio, caso a conta seja aprovada e a entrega/autenticação real seja demonstrada. A reescrita temporária não é garantia de produção duradoura; não criar conta ou adotar o provedor nesta pesquisa |
| Resend | `resend.dev` envia testes apenas ao endereço da própria conta; outros destinatários exigem domínio verificado | Candidato quando houver domínio/DNS controlados. O subdomínio de hospedagem não concede controlo de DNS para autenticar remetente |
| SMTP2GO | Free anuncia 1.000/mês, 200/dia e 25/h sem domínio verificado, mas cadastro exige e-mail de domínio próprio/empresarial; freemail não é aceito no cadastro | Não resolve nossa situação atual só por permitir verificar um remetente individual |
| Mailjet | Free anuncia 6.000/mês e 200/dia; permite validar endereço individual, mas o próprio fornecedor alerta para falhas de entrega/autenticação com freemail | Alternativa a avaliar, sem a apresentar como remetente confiável de recuperação já resolvido |
| SMTP de Gmail pessoal | Google permite senha de app em determinadas contas com segundo fator, mas desaconselha esse mecanismo e pode limitar/bloquear envio | Não usar a conta pessoal dos fundadores como infraestrutura padrão da recuperação. Não pedir senha pessoal nem reduzir proteções da conta para ligar SMTP |

Fontes oficiais: [Mailpit no desenvolvimento Supabase](https://supabase.com/docs/guides/local-development/cli/testing-and-linting), [SMTP do Supabase](https://supabase.com/docs/guides/auth/auth-smtp), [planos Brevo](https://help.brevo.com/hc/en-us/articles/208589409-About-Brevo-s-pricing-plans), [ativação SMTP Brevo](https://help.brevo.com/hc/en-us/articles/115000188150-Troubleshooting-Issues-with-Brevo-SMTP), [reescrita de remetente Brevo](https://help.brevo.com/hc/en-us/articles/16045394674066-Troubleshooting-Domain-authentication), [Resend sem domínio próprio](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain), [Free SMTP2GO](https://support.smtp2go.com/hc/en-gb/articles/223087947-Free-Plan), [cadastro SMTP2GO](https://support.smtp2go.com/hc/en-gb/articles/12747932085145-Quick-Start-Guide), [quota Mailjet](https://documentation.mailjet.com/hc/en-us/articles/360043048393-What-is-this-200-emails-per-day-limit-on-free-accounts), [freemail no Mailjet](https://documentation.mailjet.com/hc/en-us/articles/19308800104091-Why-you-should-avoid-free-webmail-as-a-sender-address) e [senhas de app Google](https://support.google.com/accounts/answer/185833).

Nenhum provedor foi ativado e nenhum e-mail foi enviado nesta avaliação. Uma quota diária não garante chegada antes de o link expirar; testar fila, rejeição, spam, tentativas e recuperação. Confirmar remetente, TLS, limites, retenção e tratamento dos dados na conta antes de habilitar envio. Desativar rastreamento de links/aberturas em mensagens de acesso quando disponível, para não alterar links de confirmação ou recolher informação desnecessária. Não colocar dados do casamento ou financeiros nos e-mails de login.

Google OAuth pode ser considerado se for necessário começar acesso público sem envio de e-mail pela plataforma, mas muda o método/telas e depende de configuração e decisão próprias. Não resolve notificações futuras, não deve ligar contas apenas porque os e-mails coincidem, nem autoriza desativar confirmação em e-mail/senha. [Guia oficial](https://supabase.com/docs/guides/auth/social-login/auth-google).

### Próxima fatia concreta e condições para a executar

1. Preparar o ambiente local: na avaliação D22 o motor Docker estava indisponível. Esta preparação foi depois autorizada e verificada em D23, abaixo. Usar os comandos locais documentados; preservar contentores de outros trabalhos.
2. Demonstrar o modo servidor da mesma aplicação, com alterações explícitas e reversíveis, e manter o contrato da landing estática até decidir a transição. Provar primeiro execução local Next, depois runtime vinext/Workers; não abrir o login ao público com base no scanner.
3. Usar Supabase Auth local e Mailpit, confirmação ligada e dados fictícios. Construir apenas entrar/criar conta, confirmação, recuperação/redefinição, sair e entrada privada mínima. SMTP transacional deve ser configurado no Auth; o frontend não recebe segredo SMTP nem monta seu próprio token de recuperação.
4. Integrar `@supabase/supabase-js` e `@supabase/ssr` em versões exatas. Sessão por cookies, PKCE/callbacks permitidos e renovação em ponto único, conforme a implementação escolhida. Clientes adequados ao ambiente; nunca confiar em `getSession()` para autorizar. `getClaims()` valida assinatura/expiração; nas verificações que precisam de revogação atual, consultar `getUser()` e associação atual ao casamento.
5. Impedir cache partilhado/ISR de respostas autenticadas ou com `Set-Cookie`; propagar os cabeçalhos de cache passados pelo `setAll` da versão SSR atual. O padrão SSR com cliente no browser não promete cookies HttpOnly para todos os tokens; se for escolhido um fluxo só de servidor com HttpOnly, demonstrar também CSRF, renovação e revogação sem misturar os dois modelos.
6. Executar a matriz A6 com dados fictícios, incluindo dois casamentos, membro revogado, chamada direta, links inválidos, sessão expirada e cache entre utilizadores. Medir CPU/limites na prova do runtime; caso não caiba no Free, rever o recorte sem gasto automático.
7. Só depois validar envio hospedado: padrão restrito para prova dos fundadores ou provedor gratuito aprovado, remetente e entrega conferidos. Cadastro público depende de recuperação viável e das condições de segurança/operação; não precisa antecipar pagamentos ou todo o painel.

Fundamentação da integração: [clientes/Proxy SSR](https://supabase.com/docs/guides/auth/server-side/creating-a-client?framework=nextjs&queryGroups=framework) e [cookies, revogação e cache](https://supabase.com/docs/guides/auth/server-side/advanced-guide). As recomendações desta secção concretizam A1/A2 para revisão; não registam candidatura como adoção, prometem custo zero em escala ou autorizam publicar/criar contas externas.

## Ambiente local preparado — 16/10/2026, D23

Rodrigo autorizou preparar Docker, Supabase local e Mailpit, começar a integração segura sem gastar/publicar e explicar cada passo. Depois pediu concluir o Docker para a etapa do login; em D24 determinou guardar primeiro o projeto no GitHub. A execução desta etapa prepara os serviços; não conecta as interfaces nem demonstra autenticação da aplicação.

### Componentes e configuração

Docker Desktop executa os serviços isolados em contentores. PostgreSQL guarda os dados no volume `supabase_db_MyWedding`; parar contentores preserva esse volume, mas volume não substitui backup/restauração. Supabase Auth trata identidade e sessões; Kong encaminha a API; REST e pg-meta dão acesso às ferramentas; Studio é o painel visual; Mailpit é a caixa de teste. Mailpit captura mensagens localmente e não entrega ao Gmail ou aos convidados.

| Item | Configuração / evidência |
| --- | --- |
| CLI | Supabase `2.121.0`, executada com versão fixa; não ligada ao projeto hospedado |
| Dependências do projeto | `@supabase/supabase-js` 2.118.0, `@supabase/ssr` 0.12.7 e `zod` 4.6.7; versões exatas no package/lockfile; ainda sem clientes integrados |
| Fonte de configuração | [supabase/config.toml](../../supabase/config.toml), projeto local `MyWedding` |
| Senhas e confirmação | Mínimo de 12 caracteres; confirmação de e-mail ligada; alteração de senha exige reautenticação. Valores do Auth em execução conferidos |
| Novas tabelas | `api.auto_expose_new_tables = false`; grants/RLS da aplicação ainda precisam de migrations e testes próprios |
| Serviços opcionais | Realtime, Storage, Edge Runtime e Analytics desligados no config; Vector e contentores opcionais anteriores parados, sem eliminar volumes |
| Segredos | Nenhuma chave do projeto hospedado configurada; temporários `.temp`, `.branches`, `.env*` e `private/` fora do Git. Chaves/certificados locais ficam no runtime |
| Execução da aplicação | `output: "export"` preservado; entrar/criar conta continuam demonstrações. Callback, cookies, autorização e recuperação reais ainda não existem |

### Endereços e rotina nesta máquina

| Serviço | Endereço local |
| --- | --- |
| API Supabase | <http://127.0.0.1:54321> |
| PostgreSQL | `127.0.0.1:54322` — credenciais locais consultadas privadamente no runtime, nunca no documento |
| Studio | <http://127.0.0.1:54323> |
| Mailpit | <http://127.0.0.1:54324> |

Abrir Docker Desktop e aguardar o motor Linux. Na raiz do projeto:

```powershell
pnpm local:up
pnpm local:check
```

Para parar apenas os serviços do MyWedding, preservando contentores e dados:

```powershell
pnpm local:down
```

O [helper local](../../scripts/local-supabase.mjs) usa apenas o pipe local do Docker Desktop Linux no Windows; recusa outro endpoint Docker, confere nomes/labels do MyWedding e verifica se outros projetos mantêm os mesmos IDs/estados. Não executa comandos no Supabase hospedado. `local:check` guarda estado, portas, health checks e valores não secretos; não imprime credenciais.

**Por que existe `local:harden`:** o arranque padrão da CLI publicou portas em `0.0.0.0`/IPv6. A rede `mywedding-local`, mesmo com `host_binding_ipv4=127.0.0.1`, não resolveu neste Docker Desktop. Foi necessário recriar só os contentores publicados com `HostIp=127.0.0.1` explícito, reutilizando volumes. Os ficheiros que a CLI injeta no gateway foram transferidos em memória pelo pipe, incluindo certificados/configuração; não ficaram em ficheiros do projeto. Os quatro contentores anteriores foram guardados **parados** com sufixo `_before_loopback_`; não os iniciar, pois têm bindings antigos. Não houve remoção de volumes nem alteração de Rommus/Order Manager.

Para a rotina, usar `local:up/down`; um novo `supabase start/stop`, reset ou recriação pode substituir os contentores e perder os bindings explícitos. O helper inicia contentores já preparados, não instala Docker nem faz bootstrap numa máquina nova. Se faltarem contentores, reavaliar a criação local e a exposição de portas antes de usar dados: CLI fixa, rede própria, `pnpm local:harden` e `pnpm local:check` são a sequência de preparação, com verificação obrigatória do resultado. Não assumir que o parâmetro da rede protege o arranque inicial. Esta limitação é específica do ambiente observado; [documentação Docker](https://docs.docker.com/engine/network/drivers/bridge/) e [issue da CLI](https://github.com/supabase/cli/issues/1397).

### Aceitação e próximo passo

Foram verificados sete serviços essenciais; seis têm health check Docker aprovado e REST está em execução. API `/auth/v1/health`, Studio e API da caixa Mailpit responderam HTTP 200. O ciclo `local:down` → `local:up` preservou o volume e retomou as portas exclusivamente em `127.0.0.1`. A base foi consultada: zero contas Auth e zero tabelas da aplicação em `public`. Nenhum cadastro ou e-mail de confirmação foi testado nesta preparação; HTTP 200 na caixa não comprova o fluxo de envio.

Evidência: [restrição de portas](../../output/reports/docker-local-harden-2026-10-16.json), [paragem](../../output/reports/docker-local-down-2026-10-16.json), [retoma e HTTP](../../output/reports/docker-local-up-2026-10-16.json) e [conferência final](../../output/reports/docker-local-check-2026-10-16.json). A senha/confirmação do Auth foi conferida no runtime; os limites restantes de A3–A7 continuam pendentes. Segurança de produção, RLS, MFA, abuso e restauração não estão demonstrados por esses relatórios.

Depois de guardar o projeto no GitHub (D24), concretizar A2: modo de servidor explícito na mesma aplicação, preservando o build estático. Em seguida, clientes/validação e cadastro/confirmação/login/logout/recuperação com dados fictícios no Mailpit. Corrigir as URLs de callback conforme as rotas efetivamente construídas; o `site_url` local atual é provisório e o redirect adicional HTTPS do template não é um callback funcional. Não testar credenciais reais nas telas demonstrativas. Prova de hospedagem e envio a clientes mantêm P03/P04 em aberto.

## Segurança como condição de conclusão — D21

Rodrigo exigiu em 16/10/2026 segurança desde o acesso, considerando dados privados dos casais/convidados e a futura movimentação de presentes. Os pontos abaixo são requisitos a implementar e testar, não proteções já comprovadas. O registo central permanece em P04/P05/P06/P15.

| Camada | Requisito e prova necessária |
| --- | --- |
| Identidade e sessão | Usar o serviço de autenticação, sem guardar senhas na aplicação; validar identidade no servidor, expiração, renovação e revogação. Não confiar apenas no estado React ou em dados de sessão fornecidos pelo cliente |
| Recuperação e abuso | Retornos permitidos, links expirados/reutilizados recusados, respostas sem facilitar descoberta de contas, limites de tentativas e fluxo de recuperação testado. Definir proteção contra automação conforme risco e quotas, sem contratar serviços por omissão |
| Segundo fator | Exigir MFA nas contas administrativas e nas futuras operações financeiras críticas; definir adesão/recuperação para o casal e conferir a exigência no servidor/base. TOTP é opção a avaliar, sem assumir SMS pago ou configuração já feita |
| Permissões e dados | Negar por omissão; associação ao casamento controlada no servidor. Grants mínimos e RLS por operação; testar utilizador anónimo, membro, não membro e membro revogado, incluindo tentativa de trocar IDs, casamento ou papel pelo cliente |
| Ficheiros e conteúdo | Media privada protegida, URLs temporárias com escopo; validar formato/tamanho e conteúdo dos uploads. Tratar textos editáveis como dados, prevenir scripts/injeções e não incluir convidados/tokens em páginas públicas ou cache partilhado |
| Segredos e transporte | Credenciais privilegiadas apenas no servidor e fora do Git, bundles e logs; configuração por ambiente, HTTPS na operação, proteção de cookies/CSRF conforme a estratégia real e política CSP compatível com a aplicação |
| Operação | Acessos administrativos mínimos e auditáveis, logs sem credenciais/dados pessoais desnecessários, dependências revistas, cópias e restauração testadas, retenção/eliminação e resposta a incidentes definidas antes do piloto |

Fundamentação consultada em 16/10/2026: [grants e RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [chaves públicas e privilegiadas](https://supabase.com/docs/guides/getting-started/api-keys), [limites de autenticação](https://supabase.com/docs/guides/auth/rate-limits) e [MFA com aplicação da exigência](https://supabase.com/docs/guides/auth/auth-mfa). A documentação do fornecedor informa capacidades; a prova precisa ocorrer no MyWedding.

### Fronteira financeira futura

Presentes/pagamentos continuam fora da implementação atual e exigem fornecedor, país, responsabilidades, custos e autorização próprios. Requisitos de desenho: checkout do provedor sem guardar dados de cartão/CVV no MyWedding; valores, moeda e destinatário verificados no servidor; confirmação pela API/notificação autenticada do provedor, nunca pelo retorno do navegador; eventos duplicados ou fora de ordem tratados sem duplicar crédito/saque; conciliação e auditoria mínimas. Troca de beneficiário, reembolso e saque exigem permissão específica, autenticação reforçada e confirmação da operação concreta.

Testes dessa etapa incluem pagamento forjado, valor/destinatário alterado, webhook inválido/repetido, conta sem permissão e reembolso/saque duplicado. Fundamentos: [OWASP — integração de pagamentos](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Payment_Gateway_Integration_Cheat_Sheet.html) e [autorização de transações](https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html). Não foi escolhido um provedor nem construído um fluxo financeiro. Dinheiro dos presentes permanece separado da receita MyWedding.

## Matriz de aceitação

| Cenário | O que precisa ser observado |
| --- | --- |
| Cadastro válido | Resultado real; confirmação pendente distinguida de conta apta a entrar |
| Dados inválidos/conta existente | Validação e resposta úteis sem expor informação desnecessária de terceiros |
| Login correto/incorreto | Sessão verdadeira no sucesso; nenhuma entrada privada no erro |
| Reabrir/expirar/renovar | Continuidade conforme política; falha regressa ao acesso sem perda indevida |
| Logout | Sessão removida/revogada no alcance definido; voltar no navegador não entrega dados privados |
| Recuperação | Pedido, chegada do e-mail no ambiente permitido, link válido, nova senha e retorno; link expirado/reutilizado recusado |
| URL de retorno | Só destinos locais/autorizados; parâmetros inválidos não desviam a conta para terceiros |
| Conta sem casamento | Entrada orienta a criação/aceitação; não assume casamento de outra pessoa |
| Segundo membro | Associação válida abre o mesmo casamento; convite expirado/revogado não concede acesso |
| Isolamento | Duas contas/casamentos e tentativa direta por URL/API: leitura e escrita não autorizadas recusadas |
| Falha/rede/limite | Não apresentar sucesso falso; repetir não duplica ações; estado permite retomar |
| Idiomas e acessibilidade | pt-BR/pt-PT, rótulos/foco, teclado, mensagens associadas aos campos, mobile e zoom |
| Abuso e escalada de acesso | Limites de tentativas e políticas de segundo fator no alcance escolhido; alterar IDs/papéis pelo cliente ou chamar API diretamente não amplia direitos |
| Revogação e dados privados | Membro removido perde acesso; ficheiros, cache e conteúdo público não entregam dados de outro casamento |
| Segredos e recuperação operacional | Nenhuma credencial privilegiada no bundle/Git/logs; restauração do alcance persistido demonstrada antes de dados reais |

Dados pessoais reais e envio para pessoas externas não fazem parte de uma prova com dados fictícios. Relatório deve identificar se o teste foi local, hospedado de desenvolvimento ou público; recuperação testada numa caixa local não prova entrega a clientes.

## Histórico da execução

| Data | Ação | Evidência/limite |
| --- | --- | --- |
| 16/10/2026 | Código e configuração de acesso inspecionados | Interfaces demonstrativas e exportação estática confirmadas; nenhum código de autenticação alterado por essa inspeção |
| 16/10/2026 | Organização/projetos existentes consultados por ferramentas de leitura | Destinos existentes excluídos pelo utilizador; nenhuma alteração nesses projetos |
| 16/10/2026 | Cotação da organização Pro consultada | US$ 10/mês; criação não executada; utilizador escolheu gasto zero |
| 16/10/2026 | Organização MyWedding Free criada após escolha explícita de Rodrigo | Organização dedicada; plano Free observado no formulário; sem alteração da organização Pro |
| 16/10/2026 | Formulário do projeto preparado e criação concluída por Rodrigo | Nome/região/opções conferidos; Rodrigo concluiu o formulário que define a senha; painel confirma ID, Healthy e Irlanda |
| 16/10/2026 | Leitura do novo projeto pelo conector tentada | Permissão recusada; resultado confirmado pela UI, sem contornar a restrição |
| 16/10/2026 | Requisito de segurança reforçado por Rodrigo | D21 documenta condições de acesso/dados e da futura parte financeira; não é auditoria nem implementação concluída |
| 16/10/2026 | Avaliação de servidor e e-mails sem gasto — D22 | Fontes oficiais revalidadas, metadados npm consultados e scanner vinext executado; ambiente de e-mail local ainda não iniciado, integração/produção não demonstradas |
| 16/10/2026 | Preparação local autorizada e concluída — D23 | Docker/Supabase/Mailpit em loopback, confirmação ligada, senha mínima 12, stop/start e HTTP verificados; sem contas, tabelas da aplicação, integração das telas ou publicação |
| 16/10/2026 | GitHub antes da integração — D24 | Rodrigo criou `RodrigoSubtil/mywedding` e autorizou enviar o projeto/documentação antes do login; destino público e vazio conferido; segredos/temporários excluídos |

Verificação documental da provisão/segurança D20/D21: [relatório inicial](../../output/reports/acesso-preparacao-verification-2026-10-16.json). Reavaliação de servidor/e-mail D22: [relatório documental](../../output/reports/servidor-email-documentacao-verification-2026-10-16.json). Estes relatórios conferem referências e integridade documental; não auditam o projeto Supabase ou o login.

Atualizar este histórico com o resultado verificado das próximas ações, sem guardar senhas, tokens, chaves secretas ou dados de outros projetos. O processo só termina quando os critérios correspondentes forem demonstrados; provisionar o serviço é o primeiro passo.
