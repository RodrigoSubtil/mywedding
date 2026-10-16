# Revisão visual e funcional da landing — 15/10/2026

Pedido de Rodrigo: rever a landing inteira no desktop e no celular, testar botões, corrigir composição segundo o style guide e criar login/cadastro somente frontend, sem banco. Escopo registado em D13 nas [decisões](DECISOES_E_LIMITES.md). A revisão é local; não houve publicação ou criação de infraestrutura.

## Resultado

Foram ajustados espaçamentos, alinhamento dos botões da galeria, ordem da composição clássica, dimensões de links compactos e a área protegida do texto na prévia móvel. Em 320 px, o telefone sobrepunha os nomes/data; a correção reserva espaço e permite a quebra natural, sem reduzir a escala tipográfica do guia. Cores, fontes, raios e espaçamentos continuam ligados aos tokens originais; a identidade não foi alterada.

A navegação de idiomas contempla landing, demonstração, entrar e criar conta. Abertura do idioma fecha o menu móvel, Escape devolve foco e a troca preserva a posição de leitura. O HTML declara o comportamento de scroll usado pelo Next. Os botões da demonstração passam o foco ao painel resultante; as setas/Home/End mantêm foco e seleção coerentes nas abas.

Entrar e criar conta existem em pt-BR/pt-PT, com email, senha/palavra-passe, confirmação no cadastro, mostrar/ocultar, autocomplete, colagem e validação local. O primeiro erro recebe foco e fica associado ao campo. Os formulários são desativados antes da hidratação; não há submissão nativa de credenciais, pedidos de rede, armazenamento de credenciais, banco ou sessão. Validação concluída informa que nenhuma autenticação/conta ocorreu. Recuperação mostra apenas informação local, sem envio. O mínimo de oito caracteres é identificado como regra deste exemplo. As páginas têm `noindex`.

Foram preparadas duas capas de partilha 1200 × 630, com fotografia licenciada, fontes e tokens locais. [Proveniência](../../output/reports/social-assets.json). `NEXT_PUBLIC_SITE_URL` permite gerar canonical, hreflang e metadados de partilha quando houver origem pública real; permanece vazia na exportação local, sem domínio fictício.

## Evidência executada

| Verificação | Resultado e alcance |
| --- | --- |
| Responsividade da landing | pt-BR e pt-PT em 320, 360, 390, 768, 1024 e 1440 px; sem overflow horizontal. Correção em 320 novamente conferida nas duas variantes. Texto essencial da prévia sem cobertura pelo telefone |
| Responsividade do acesso | As quatro páginas de entrar/criar conta em 320, 390 e 1440 px: um H1, inputs de 16 px e sem overflow horizontal. Login cabe completo no viewport desktop de 1440 × 900 |
| Galeria | Três estilos abrem a demonstração correspondente; links inferiores alinhados nas três colunas de desktop/tablet |
| Demonstração | Clássico, Natural e Contemporâneo alteram hash, tema e fotografia; idioma preserva rota/estilo. Conteúdo fictício consistente |
| Idioma | Cliques diretos no cabeçalho móvel mantiveram 6622,3999 px antes/abertura/depois. Rodapé manteve 8218,4004 px. Sem salto de leitura nos cenários executados |
| Menu móvel | Abre, idioma fecha a navegação principal, Escape fecha idioma e devolve foco; Recursos abre a âncora e fecha menu |
| FAQ | As seis perguntas abriram e fecharam por Space, com estado expandido e resposta visível corretos |
| Abas | ArrowDown, End e Home sincronizaram seleção e foco. Avanço, confirmação e recomeço focam o painel resultante |
| RSVP simulado | Resposta positiva: 2 confirmados/0 ausentes/0 pendentes. Negativa: 0 confirmados/2 ausentes/0 pendentes. Recomeço disponível; sem persistência |
| Login pt-BR/pt-PT | Campos vazios e validação concluída nas duas variantes; email inválido em pt-BR. Foco no primeiro erro. Mostrar/ocultar senha também por teclado; recuperação informa ausência de envio |
| Cadastro pt-BR/pt-PT | Campos vazios, senha curta e confirmação divergente tratados em pt-BR; validação concluída nas duas variantes informa que nenhuma conta foi criada. Valores fictícios de teste, sem parâmetros na URL |
| Imagens | As seis instâncias da landing carregaram. Capas de partilha conferidas visualmente |
| Destinos externos | Instagram/telefone conferidos contra a configuração fornecida. Não foram enviados contactos, chamadas ou mensagens; atendimento externo não foi testado |
| Código e exportação | `pnpm check` e `pnpm build` aprovados. Nove rotas públicas exportadas; teste servido apenas de `out/` em 127.0.0.1:4173 |
| Integridade do export | [Relatório atualizado](../../output/reports/verificacao-landing.json): nove rotas, referências locais, hashes de assets e estrutura equivalente das traduções; contagens no derivado, sem erros |
| Documentação e tokens | [Verificação documental](../../output/reports/verificacao-documental.json), incluindo integridade e 36 pares de contraste originais; não certifica cada estado da aplicação |

## Capturas e limites

### Refinamento de movimento, ícones e assinatura

Depois da revisão inicial, Rodrigo pediu planear e implementar movimento e ícones relacionados ao conteúdo; autorizou integrar a folha ao logo e pediu preservar o ponto final terracota (D14). O [plano](../landing/03_ASSETS_E_INTERACOES.md) foi registado antes da implementação. A assinatura usa contornos SVG da Fraunces 500 e folha no ponto do “i”; a [fonte e proveniência](../../design/brand/README.md) incluem o estudo de posições. Cabeçalho, rodapé, acesso, favicon e prancha usam o refinamento; não há folha genérica como ícone das secções.

As duas variantes foram novamente verificadas em 320, 360, 390, 768, 1024 e 1440 px: sem overflow ou sobreposição entre assinatura e ferramentas do cabeçalho. A exportação estática iniciou com zero grupos revelados e, ao rolar, apresentou os modelos com 180 ms de duração e atrasos de 0/120/240 ms; no móvel, todos com atraso zero. O menu fechou na âncora, o FAQ abriu por Space com indicador animado e o RSVP preservou foco e resultado 2/0/0. A troca de idioma manteve 7756,7998 px antes/depois. Login em pt-PT carregou a assinatura e o ícone de acesso, sem overflow em 320 px.

Conteúdo sem JavaScript e redução de movimento foram conferidos pela estrutura SSR, fallback do observador e regras CSS, sem desativar JavaScript ou alterar preferências do sistema no navegador. Não apresentar isso como teste assistivo completo. `pnpm check`, build e verificadores locais passaram após o refinamento. A prancha PDF foi regenerada e as cinco páginas renderizadas/conferidas visualmente; paleta, fontes e hierarquia mantidas.

[Assinatura em detalhe](../../output/previews/logo-refinada.png), [desktop refinado](../../output/previews/refinamento-desktop.jpg) e [celular refinado](../../output/previews/refinamento-mobile.jpg) registam a nova apresentação. Os testes da revisão inicial abaixo permanecem com o seu alcance original.

### Conservação e kit da marca

No pedido seguinte (D16), Rodrigo solicitou guardar SVG sem fundo, outras formas/combinações conforme o site e documentar as mudanças. Foram guardados master e referência aprovada em `design/brand/`, 14 variantes SVG em contornos, 14 PNGs RGBA, catálogo, instruções, licenças e ZIP em `output/brand/`. A nervura da folha passou a recorte transparente; os contornos aprovados das letras permanecem iguais. Só o ícone de aplicação tem fundo próprio intencional.

[Verificação do kit](../../output/reports/verificacao-brand-kit.json): hashes, canal alfa, SVGs sem fontes/imagens externas, contornos das letras e integridade do ZIP aprovados. Catálogo e cinco páginas da prancha PDF conferidos visualmente. `pnpm check`, build estático, verificador documental e verificador da exportação passaram. As [regras e o resumo das mudanças](../../design/brand/README.md) são a fonte do kit. Corrigida também a colisão de numeração documental: D14 mantém marca/movimento, D15 identifica os estudos visuais do produto e D16 o kit, sem mudar os respectivos alcances.

[Landing desktop completa](../../output/previews/revisao-desktop-1440.jpg), [landing móvel completa](../../output/previews/revisao-mobile-390.jpg), [primeira dobra desktop](../../output/previews/landing-desktop-final.jpg), [login](../../output/previews/login-desktop.jpg) e [cadastro móvel](../../output/previews/cadastro-mobile.jpg) registam a apresentação local. A primeira implementação permanece no [registo anterior](IMPLEMENTACAO_LANDING_2026-10-15.md).

Não há auditoria integral de acessibilidade, teste com leitor de ecrã, zoom real a 200% comprovado, Core Web Vitals de campo, testes em aparelhos físicos ou prova de conversão. Reflow por viewport, contraste dos tokens e testes de teclado não substituem essas evidências. Redução de movimento está prevista no CSS; não foi alterada a preferência do sistema durante esta revisão.

Para publicar, ainda é necessário o pedido correspondente, revisão dos fundadores, origem pública real e verificação da conta/configuração/termos/limites do Cloudflare Pages. Depois de publicar, conferir URLs públicas, metadados e carregamento na origem real. As [pendências centrais](PRONTIDAO_E_PENDENCIAS.md) mantêm esses pontos. Autenticação real, painel/editor, persistência, email, preços e presentes continuam fora desta entrega.
