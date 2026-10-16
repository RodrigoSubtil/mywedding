# Implementação local da landing — 15/10/2026

Pedido de Rodrigo: começar a construção na arquitetura aprovada e acompanhar em modo dev. Confirmou pnpm, pediu acabamento de página final sem chamada de pré-lançamento, rejeitou a página intermediária de idioma e forneceu os contactos dos dois fundadores. Também pediu corrigir o scroll ao trocar idioma e usar um seletor coerente com o site. Direção central: [decisões](DECISOES_E_LIMITES.md) e [estrutura](../landing/01_ESTRUTURA_E_CONTEUDO.md).

Este registo preserva os resultados da primeira implementação. O pedido posterior de revisão desktop/mobile e login/cadastro somente frontend tem resultados e estado atualizado na [revisão da landing](REVISAO_LANDING_2026-10-15.md).

## Entrega local

- Next.js App Router 16.4.1, React 19.3.1, TypeScript estrito 5.9.3, Tailwind 4.3.3 ligado aos tokens e next-intl 4.14.9.
- pnpm 10.34.7 e lockfile; `pnpm dev`, `pnpm check`, `pnpm build` e `pnpm preview`. Instruções no [README](../../README.md).
- Raiz pt-BR direta, rotas pt-BR/pt-PT e demonstração nas duas variantes; sem middleware ou backend.
- Cabeçalho, abertura com prévias desktop/móvel, benefícios, Clássico/Natural/Contemporâneo, passos, percurso demonstrativo, fundadores, contactos, FAQ, encerramento e rodapé.
- Clara & Miguel, 18/09/2027, Jardim das Oliveiras, Ana e Rafael são fictícios. Respostas apenas em memória local; não há persistência ou envio.
- Quatro fotografias WebP, com originais/proveniência preservados; fontes locais WOFF2 com licenças. [Manifesto](../../output/reports/landing-assets.json). Principal: 138.062 bytes; fontes: cerca de 198 KB no total.
- Seletor de idioma próprio, teclado, foco, Escape, clique fora, indicação da escolha e preservação de scroll. Metadados por variante e ícone SVG de folha derivado dos tokens; a assinatura MyWedding continua tipográfica provisória.
- GitHub Actions preparada em ficheiro; sem repositório remoto, commits, push ou execução de CI.

## Evidência e limites

Build estático local aprovado, gerando `/`, `/pt-BR/`, `/pt-PT/` e demonstração nas duas variantes. As cinco rotas, WebP principal e WOFF2 responderam HTTP 200 num servidor que lê apenas `out/`, separado do Next dev.

Na revisão em navegador: as seis imagens carregaram; um H1 na landing; modelos e mudança de estilo abriram; FAQ expandiu; resposta negativa simulada produziu 0 confirmados/2 ausentes/0 pendentes; menu móvel abriu e fechou por Escape. Verificação de reflow em 360 px e composição desktop em 1440 px, sem overflow horizontal nesses estados. Não constitui auditoria completa de acessibilidade.

Verificação final: `pnpm check` (lint, tipos e formatação) e `pnpm build` aprovados. Verificador documental aprovado: 183 referências locais, 36 contrastes recalculados, sem erros. `pnpm audit --prod` não reportou vulnerabilidades nas 145 dependências analisadas nesta consulta; não constitui garantia futura ou auditoria integral.

Scroll do idioma verificado por cliques diretos no navegador, longe do topo: 3257,6001 px antes de abrir o menu, depois de abrir e depois de escolher a outra variante. Também preservou 3892,8000 px na troca da raiz `/` para `/pt-PT/` na exportação estática. A troca pt-BR/pt-PT funcionou servida em 4173, sem servidor Next, com `lang` correto e sem erros na consola dessa aba. [Captura da composição e do menu](../../output/previews/landing-idioma-2026-10-15.jpg).

Não há métricas de Core Web Vitals de campo, testes de mercado, verificação de atendimento dos perfis/telefones, login, editor ou RSVP real. Não foram enviados contactos, mensagens ou chamadas. Zoom real a 200%, leitores de ecrã e uma auditoria completa de acessibilidade continuam sem execução; reflow móvel não substitui essas verificações.

ESLint 9.39.5 foi mantido para satisfazer os peers dos plugins de React/import/acessibilidade do eslint-config-next; a tentativa com ESLint 10 encontrou peers incompatíveis. Reavaliar esse conjunto numa atualização de ferramentas. O aviso é da ferramenta de lint; ela não integra a execução pública da landing.

## Publicação

As pendências operacionais continuam centralizadas em [Prontidão e pendências](PRONTIDAO_E_PENDENCIAS.md). Antes de publicar: revisão dos fundadores, contexto/direitos dos materiais, apresentação do nome, informação aplicável à operação real, endereço público/metadados de partilha e conta/limites/configuração Cloudflare. Não foi criada conta, infraestrutura ou publicação; build e HTTP locais não são operação pública.

Fontes técnicas consultadas para compatibilidade: [Next.js exportação estática](https://nextjs.org/docs/app/guides/static-exports), [next-intl](https://next-intl.dev/docs/routing/setup) e [pnpm](https://pnpm.io/installation). Versões exatas consultadas no registry npm antes da instalação.
