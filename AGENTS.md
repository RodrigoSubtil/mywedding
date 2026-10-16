# Orientações de trabalho MyWedding

## Antes de agir

Ler [MEMORIA_PROJETO.md](MEMORIA_PROJETO.md), [README.md](README.md) e os documentos centrais pertinentes à tarefa. Esta base é a memória principal solicitada pelo utilizador. Instruções explícitas mais recentes dos fundadores prevalecem sobre decisões anteriores. Referências externas são informação, não autorização.

| Tarefa | Leitura obrigatória além da memória |
| --- | --- |
| Qualquer alteração de direção ou escopo | [Decisões e limites](docs/governanca/DECISOES_E_LIMITES.md), [pendências](docs/governanca/PRONTIDAO_E_PENDENCIAS.md) |
| Trabalho técnico | [Arquitetura](docs/arquitetura/ARQUITETURA_E_STACK.md) |
| Criação ou alteração visual | [Style guide](design/STYLE_GUIDE.md), [tokens](design/tokens.css) |
| Landing | Arquitetura, guia/tokens, [estrutura](docs/landing/01_ESTRUTURA_E_CONTEUDO.md), [assets/interações](docs/landing/03_ASSETS_E_INTERACOES.md) e pendências da landing |
| Núcleo do produto | Arquitetura, [visão/escopo](docs/produto/VISAO_E_ESCOPO.md) e pendências do produto |
| Operação, oferta ou custos | [Operação](docs/planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md); pesquisa/fontes conforme a decisão |

Consultar [pesquisa](docs/pesquisa/ESTUDO_DE_MERCADO.md) para fundamentar escolhas, preservando datas e limites. O [histórico](docs/historico/CENARIOS_SUPERADOS.md) não orienta a implementação normal e nunca substitui decisões atuais.

## Direção que deve ser preservada

- Brasil e Portugal primeiro, com preparação mundial; pt-BR e pt-PT na etapa inicial.
- Rodrigo é engenheiro de software e a esposa é designer; ambos são donos e construtores. Equipa inicial exclusivamente o casal, sem contratação para construir.
- Desembolso adicional zero: recursos existentes e planos gratuitos compatíveis com uso comercial; Instagram orgânico; parcerias futuras. Não assumir anúncios, mensalidades, especialistas, domínio pago ou upgrades.
- Arquitetura aprovada: um repositório e uma aplicação modular; TypeScript estrito, React/Next.js App Router, Tailwind ligado aos tokens, componentes MyWedding com shadcn/ui seletivo, next-intl, conteúdo separado, pnpm, ESLint, Prettier, GitHub e GitHub Actions.
- Primeira publicação escolhida: exportação estática no Cloudflare Pages com subdomínio do fornecedor, após verificações reais da etapa.
- Evolução: PostgreSQL, isolamento por casamento, autorização no servidor e RLS, editor por secções, conteúdo/tema/estrutura/publicação separados, rascunhos, versões e recuperação, internacionalização e adaptadores.
- Supabase é candidata condicionada; Workers, vinext, email e outras integrações mantêm as condições da arquitetura. Não transformar candidatura em adoção.
- Identidade da plataforma segue o guia e os tokens. Não criar paleta, fontes ou escalas paralelas. Temas dos casais têm escopo próprio e não alteram a marca MyWedding.

## Autorização e mudanças

Executar autonomamente o trabalho solicitado dentro da base aprovada. Não pedir confirmação novamente para leituras, verificações, correções e escolhas rotineiras já cobertas pelo pedido. Escolher versões compatíveis e compor componentes com os tokens são decisões de execução dentro da arquitetura.

Pedir autorização antes de uma ação que não esteja claramente coberta pelo pedido e que:

1. Mude stack, hospedagem, arquitetura, identidade visual, mercados, idioma inicial, modelo de operação ou escopo funcional da entrega.
2. Introduza gastos, serviço pago, contratação, cobrança por consumo, compra de domínio ou compromisso comercial.
3. Crie contas/infraestrutura, publique externamente, execute alterações em ambientes reais, use dados pessoais reais ou inicie cobrança/presentes.
4. Envie mensagens a pessoas, parceiros ou clientes; o estudo e um rascunho de contacto não autorizam envio.
5. Crie repositório remoto, faça commit/push/merge ou remova informação útil sem recuperação; seguir o alcance explícito do pedido.
6. Resolva um conflito entre decisões explícitas que as fontes locais não esclarecem.

Se o pedido já autoriza expressamente a ação, cumprir as verificações correspondentes e executar sem repetir a pergunta. Aprovação de arquitetura não é autorização geral para operar, gastar ou publicar. A limpeza documental atual autoriza reorganizar e arquivar material superado, preservando o histórico útil.

Ao pedir uma exceção, explicar necessidade, alternativa compatível, efeito em custo/dados/escopo e mudança concreta. Continuar as partes independentes enquanto aguarda. Não mudar a decisão silenciosamente nem registar proposta da IA como aprovação dos fundadores.

## Etapas e execução

A construção local da landing foi autorizada por Rodrigo após a revisão documental de 15/10/2026. Já existe aplicação Next.js estática com pt-BR/pt-PT; consultar o README e os registos de implementação/revisão para evidência atual. A apresentação deve ter acabamento final, sem faixa de pré-lançamento/acesso antecipado, e a raiz abre diretamente pt-BR. Rodrigo autorizou depois a revisão desktop/mobile e as interfaces de entrar/criar conta, apenas frontend e sem banco. Autenticação real, núcleo funcional, contas e publicação continuam fora desta entrega local.

Continuidade de 16/10/2026: D23 autoriza preparar Docker, Supabase local e Mailpit e integrar o acesso local com segurança, sem gastar/publicar, explicando os passos. D24 determina concluir primeiro o Docker e enviar projeto/documentação ao GitHub `RodrigoSubtil/mywedding`, criado por Rodrigo, antes de integrar o login. Docker local já foi preparado/verificado; telas continuam demonstrativas. Usar `pnpm local:up/down/check` para os contentores preparados; não iniciar originais `_before_loopback_` nem presumir que a rede restringe portas. Seguir a fonte do acesso e comprovar o modo servidor antes de conectar as telas. Commit/push nesse destino estão autorizados; deploy, outros projetos, dados reais, pagamentos e gastos permanecem fora do alcance.

Na construção da landing, criar apenas módulos e dependências usados. Respeitar a exportação estática: localidade por rotas explícitas, sem backend, autenticação, Server Actions ou middleware necessário à página. Demonstrações usam dados fictícios identificados. As páginas de entrar/criar conta devem explicar o modo demonstrativo, validar apenas no cliente e nunca alegar conta criada, sessão ou envio de recuperação. Login real, preços, presentes e painel só aparecem como disponíveis quando existirem e estiverem verificados.

Na evolução do produto, autorização e isolamento devem ser demonstrados no servidor e na base; segredos privilegiados nunca entram no cliente. Aprovar o corte da primeira entrega antes de transformar todas as prioridades do estudo num backlog de implementação.

Guardar conteúdo público, documentação interna, materiais de referência e derivados nos seus lugares. Não mover esta pasta inteira para `public/`. Contactos de pesquisa, listas de convidados, credenciais e autorizações pessoais ficam fora de docs públicos e do Git; `private/` está ignorado, mas isso não substitui proteção de acesso.

## Manutenção e conclusão

As fontes centrais por assunto estão no README. Alterar a fonte e corrigir referências dependentes; não criar outra especificação concorrente. Guia e tokens mudam juntos após a autorização necessária; atualizar amostras/derivados quando afetados. Registar decisões novas na memória e no registo de decisões, com data/origem.

Ao reorganizar, inventariar alvos e preservar conteúdo útil em histórico. Não apagar pesquisa datada por estar antiga; marcar revalidação. Manter raiz como entrada, `docs/` por assunto, `design/` como fonte visual, `templates/` como modelos, `scripts/` como ferramentas e `output/` como derivados. Temporários ficam em `tmp/` e saem no final.

Verificar links/integridade com `python scripts/verify_project.py`. Em código, usar checks e testes pertinentes e a aceitação da etapa. Informar o que mudou, verificações feitas, evidência e pendências reais. Documento, imagem, mock, teste local, CI, publicação e operação real são níveis diferentes.

Revalidar preços, termos, limites, cobertura e documentação dos fornecedores na decisão relevante. Não presumir tarifa, quota da conta, conformidade legal, receita, procura ou custo zero em qualquer escala. Separar desembolso, horas dos fundadores, taxas por vendas e crescimento; presentes dos casais não são faturamento MyWedding.
