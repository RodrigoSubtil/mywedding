# MyWedding: decisões e limites

Atualizado em 16/10/2026. Registo das decisões dos fundadores e das condições que a IA deve respeitar. A [memória](../../MEMORIA_PROJETO.md) resume a continuidade; cada documento especializado abaixo mantém o detalhe do seu assunto.

## Ordem de autoridade

1. Pedido atual e decisões explícitas mais recentes de Rodrigo e da esposa.
2. [AGENTS.md](../../AGENTS.md): procedimento de trabalho e autorização.
3. Decisões deste registo e documentos centrais do assunto.
4. Propostas de produto e planeamento, identificadas como tal.
5. Pesquisa datada e histórico, que informam mas não autorizam mudanças.

Uma decisão nova substitui a anterior no assunto correspondente. Se duas decisões explícitas continuarem incompatíveis, explicar o conflito e pedir decisão aos fundadores; avançar no trabalho independente. Não resolver o conflito escolhendo uma fonte de mercado ou uma preferência da IA.

## Decisões em vigor

| ID | Data | Decisão | Detalhe central |
| --- | --- | --- | --- |
| D01 | 14/10/2026 | Plataforma em que os próprios casais criam o site do casamento; evolução para uma experiência completa | [Visão e escopo](../produto/VISAO_E_ESCOPO.md) |
| D02 | 15/10/2026 | Brasil e Portugal primeiro, preparados para expansão mundial; substitui lançamento mundial simultâneo | [Memória](../../MEMORIA_PROJETO.md) |
| D03 | 15/10/2026 | Rodrigo, engenheiro de software, e esposa, designer, são donos e construtores; equipa inicial só pelos dois | [Operação](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md) |
| D04 | 15/10/2026 | Desembolso adicional zero, recursos existentes/gratuitos compatíveis com uso comercial e Instagram orgânico; parcerias futuras | [Operação](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md) |
| D05 | 15/10/2026 | Identidade v1 como referência das criações; guia e tokens mantidos juntos | [Style guide](../../design/STYLE_GUIDE.md), [tokens](../../design/tokens.css) |
| D06 | 15/10/2026 | Stack e arquitetura modular aprovadas, landing estática primeiro e PostgreSQL na evolução; fornecedores condicionados conservam esse estado | [Arquitetura](../arquitetura/ARQUITETURA_E_STACK.md) |
| D07 | 15/10/2026 | Direção de arquitetura, estrutura e visual da landing confirmada no pedido desta revisão | [Estrutura](../landing/01_ESTRUTURA_E_CONTEUDO.md), [assets e interações](../landing/03_ASSETS_E_INTERACOES.md) |
| D08 | 15/10/2026 | Rever, limpar e organizar toda a base; orientar a IA e verificar prontidão | [Revisão](REVISAO_2026-10-15.md) |
| D09 | 15/10/2026 | Construir a landing local na stack aprovada; pnpm confirmado por Rodrigo para instalação e `pnpm dev` | [README](../../README.md) |
| D10 | 15/10/2026 | Acabamento de página final, sem faixa de pré-lançamento/acesso antecipado; login e produto depois. Raiz abre diretamente pt-BR; idioma no cabeçalho | [Estrutura](../landing/01_ESTRUTURA_E_CONTEUDO.md) |
| D11 | 15/10/2026 | Usar os contactos de Rodrigo e Maria Eduarda fornecidos nesta conversa para a landing | Configuração em `src/config/contacts.ts`; não autoriza enviar mensagens |
| D12 | 15/10/2026 | Estudar e documentar a área do casal depois do login, recursos, composição visual e construção completa; não iniciar implementação agora | [Área do casal e editor](../produto/AREA_DO_CASAL_E_EDITOR.md), [catálogo](../produto/CATALOGO_DE_RECURSOS.md), [construção](../planeamento/CONSTRUCAO_DO_PRODUTO.md) e [pesquisa](../pesquisa/EDITORES_E_PAINEIS_2026-10-15.md) |
| D13 | 15/10/2026 | Rever a landing inteira em desktop/mobile e criar páginas de login/cadastro apenas frontend, sem conexão com banco | [Revisão local](REVISAO_LANDING_2026-10-15.md) e [estrutura](../landing/01_ESTRUTURA_E_CONTEUDO.md) |
| D14 | 15/10/2026 | Planear e implementar animações e ícones relacionados ao assunto; integrar a folha à assinatura, estudando posição/tipografia, e manter o ponto final terracota | [Style guide](../../design/STYLE_GUIDE.md), [assinatura](../../design/brand/README.md) e [plano de interações](../landing/03_ASSETS_E_INTERACOES.md) |
| D15 | 15/10/2026 | Mostrar visualmente o painel do casal e editor, seguindo o style guide, para avaliar organização e facilidade; sem começar a implementação | [Área do casal e editor](../produto/AREA_DO_CASAL_E_EDITOR.md) |
| D16 | 15/10/2026 | Guardar a logo aprovada em SVG sem fundo, preparar outras formas/combinações conforme o site e documentar as mudanças | [Kit e regras de uso](../../design/brand/README.md), [catálogo](../../output/brand/catalogo.png) e [manifesto](../../output/reports/brand-kit.json) |
| D17 | 15/10/2026 | Refazer a prévia do painel/editor com páginas, secções, textos, fotos e layouts editáveis de forma simulada, para testar o percurso; sem implementar no projeto ou publicar | [Cobertura e limites da prévia conectada](../produto/AREA_DO_CASAL_E_EDITOR.md#24-prévia-conectada-cobertura-e-limites) |
| D18 | 15/10/2026 | Documentar no projeto toda a estrutura demonstrada, recursos, telas e fluxos completos; manter apenas planeamento, sem implementar nem publicar | [Especificação v2](../produto/AREA_DO_CASAL_E_EDITOR.md), [catálogo](../produto/CATALOGO_DE_RECURSOS.md) e [construção futura](../planeamento/CONSTRUCAO_DO_PRODUTO.md) |
| D19 | 15/10/2026 | Separar primeira versão do painel/editor e recursos posteriores, preservando fluxo completo/fácil; continua apenas planeamento, sem implementar nem publicar | [Corte recomendado](../planeamento/CONSTRUCAO_DO_PRODUTO.md#1-objetivo-e-corte-recomendado), [classificação dos 115 IDs](../produto/CATALOGO_DE_RECURSOS.md#como-interpretar-o-corte-d19) e [telas/fluxos recortados](../produto/AREA_DO_CASAL_E_EDITOR.md#25-aplicação-do-corte-da-primeira-versão) |
| D20 | 16/10/2026 | Preparar a construção do acesso e criar destino Supabase próprio; preservar outros trabalhos e gasto zero. Rodrigo escolheu criar e usar MyWedding Free após recusar a cotação Pro | [Processo e resultado confirmado](../planeamento/CONSTRUCAO_DO_ACESSO.md) |
| D21 | 16/10/2026 | Segurança como condição desde o login, considerando dados privados dos casais/convidados e futura movimentação de presentes | [Requisitos e fronteira financeira futura](../planeamento/CONSTRUCAO_DO_ACESSO.md#segurança-como-condição-de-conclusão--d21) e P04/P05/P06/P15 |
| D22 | 16/10/2026 | Avaliar a melhor forma de servidor/e-mails sem gasto, seguindo a arquitetura, para começar a integração segura do login | [Avaliação, prova de compatibilidade e próxima fatia](../planeamento/CONSTRUCAO_DO_ACESSO.md#servidor-e-e-mail-sem-desembolso--avaliação-de-16102026-d22) |
| D23 | 16/10/2026 | Preparar Docker, Supabase local e Mailpit; iniciar o acesso com segurança, sem gasto/publicação e explicando os passos. Concluir primeiro a preparação Docker | [Ambiente local e limites](../planeamento/CONSTRUCAO_DO_ACESSO.md#ambiente-local-preparado--16102026-d23) |
| D24 | 16/10/2026 | Depois do Docker e antes do login, enviar o projeto/documentação para o GitHub criado por Rodrigo, `RodrigoSubtil/mywedding` | [Repositório e verificações](../../README.md#repositório-github--d24); sem deploy ou credenciais/dados privados |

D09–D11 têm origem nos pedidos explícitos de Rodrigo durante a construção, posteriores à revisão documental. D10 substitui a comunicação de pré-lançamento e a página intermediária de escolha de idioma; não transforma login, editor, RSVP real, cobrança ou presentes em funcionalidades disponíveis. A publicação não foi solicitada nesta etapa.

D12 tem origem no pedido posterior de Rodrigo: considerar a landing concluída pelo chat anterior e pensar toda a experiência interna, apenas documentando, sem começar agora. A autorização é para pesquisa e planeamento. Composição do editor, quantidade sugerida de páginas, catálogo e etapas são recomendações da análise até revisão dos fundadores; não foram aprovados como backlog, implementação, oferta ou adoção de fornecedores.

D13 regista o pedido explícito nesta revisão: “revisa a landing inteira no desktop e no celular” e “criar uma pagina login e cadastrar [...] sem conexao com banco so front”. Amplia D10 apenas para as interfaces demonstrativas de acesso; não altera o limite documental do painel/editor em D12. Não há autenticação, contas criadas, recuperação enviada ou autorização de publicação.

D14 vem dos pedidos explícitos de Rodrigo sobre movimento, excesso da folha como ícone genérico e integração da folha ao logo, incluindo “pense como sera [...] ajustar a tipografia” e “o ponto final marronzinho n precisa tirar”. A aplicação integra a folha ao ponto do “i”. Depois de ver a captura, Rodrigo disse “gostei dessa logo com essas falhas no meio”; preservar os recortes dessa aparência no SVG e nas exportações. A paleta, as famílias, a arquitetura e o escopo funcional permanecem os aprovados.

D15 tem origem na continuidade de Rodrigo: “agora me mostra visualmente como ficaria o painel do casal e o editor [...] sem começar a implementação ainda”. Autoriza estudos visuais interativos apresentados na conversa, com dados fictícios e ações simuladas. Amplia D12 para a avaliação visual; não autoriza integrar o painel/editor na aplicação, operar dados, publicar ou adotar fornecedores. Composição e facilidade continuam por avaliar pelos fundadores e em testes de uso.

D16 regista o pedido explícito de Rodrigo para guardar a logo e suas aplicações. O kit conserva os contornos/recortes aprovados e prepara variantes de cor, símbolo e assinatura em pt-BR/pt-PT; não redefine a identidade, não publica materiais nem inicia a implementação do painel/editor. As referências do estudo visual do produto foram renumeradas para D15 para resolver a colisão documental do identificador D14, sem alterar o alcance de nenhuma decisão.

D17 vem do pedido de Rodrigo para ampliar a prévia limitada: “refaça a previa do painel e editor, com páginas, seções, textos, fotos e layouts editáveis de forma simulada [...] sem implementar no projeto nem publicar nada”. A simulação passou a conectar painel, construção, módulos fictícios, prévia do convidado e revisão. O pedido de publicação feito antes foi cancelado por Rodrigo; não é autorização residual para hospedar esta visualização. A composição com três áreas, três páginas demonstrativas e os diferenciais exploratórios são propostas para avaliação, não decisões de produto aprovadas.

D18 regista o pedido de consolidação: “agora documente toda essa estrutura do painel e editor no projeto, com os recursos, telas e fluxos completos. por enquanto continua só no planejamento, sem implementar nem publicar nada”. Autoriza atualizar a fonte central e referências dependentes, mantendo a aplicação, guia/tokens, fornecedores e ações externas fora desta entrega. Documentar os recursos não aprova automaticamente sua implementação ou inclusão em H1/H2. A recomendação de duas áreas/página contínua da v1 permanece alternativa histórica; a v2 descreve a prévia recente e conserva a escolha final em P11.

D19 regista o pedido atual: “agora separa o que entra na primeira versão do painel e editor e o que fica pra depois, mantendo o fluxo completo e fácil de usar. continua só no planejamento, sem implementar nem publicar nada”. Autoriza a classificação/recomendação documental. A análise propõe V1 com H1 e o mínimo de H2 para construir, disponibilizar, partilhar manualmente e acompanhar RSVP. Preserva páginas próprias, elementos livres, edição de fotos/cores/layouts, versões e recuperação; adia favoritas, comparação lado a lado, conversão contínua, perguntas avançadas e integrações. Três páginas sugeridas, um idioma principal por site e os recortes do catálogo são recomendações da análise, não aprovações explícitas dos fundadores. P01/P11/P13 continuam para confirmação/validação antes da construção relevante; nenhuma ação externa, alteração de stack/identidade ou execução está autorizada por esta classificação.

D20 tem origem em “vamos entao pra construcao do login e autenticacao [...] qual o processo”, “crie um pro mywedding se ja for preciso” e nas respostas sobre o destino e custo. O projeto existente “meu-casamento” pertence a outro trabalho. Rodrigo informou não ter domínio ou serviço de e-mail; rejeitou a cotação de US$ 10/mês da organização Pro e escolheu “Criar e usar MyWedding Free”. A organização dedicada foi criada; Rodrigo concluiu o formulário que define a senha do banco. A UI confirmou projeto `mywedding`, Healthy, Irlanda. A autorização supera o limite documental apenas para esta preparação/provisão; não aprova implementação geral do painel/editor, publicação, dados reais, despesas ou fornecedores de pagamentos/e-mail. Integração e modo de execução continuam por concretizar.

D21 vem do pedido de Rodrigo: “nao esquece de maxima seguranca [...] envolve muito dinheiro dos convidados e dados sensiveis do casal”. Reforça a segurança já prevista na arquitetura como critério verificável, incluindo acesso, isolamento, segredos, recuperação e futura autorização financeira. Não permite afirmar segurança absoluta ou considerar o produto pronto sem testes. Não antecipa presentes, escolhe provedor, amplia acessos ou autoriza gastos.

D22 tem origem em “vamos pro próximo passo, veja a melhor forma de fazer a parte do servidor e dos emails sem gastar nada, seguindo nossa arquitetura, pra começar a integrar o login com segurança”. A avaliação recomenda desenvolvimento local Next.js/Supabase Auth/Mailpit e prova do candidato Workers Free/vinext para o destino hospedado. O scanner local do vinext apontou 96% de compatibilidade estática; runtime, sessões, CPU e envio ainda não foram demonstrados. Brevo é candidato condicionado para um piloto sem domínio; outros provedores têm condições diferentes. Essas recomendações não são aprovação dos fundadores de vinext, provedor SMTP, migração da entrega estática, publicação ou despesa.

### Continuidade local e versionamento — D23/D24

D23 vem de “prepare o Docker, Supabase local e Mailpit e comece a integrar o login com segurança [...] sem gastar nada nem publicar por enquanto”, seguido do pedido para explicar os passos e concluir o Docker para a etapa de login. Autoriza preparação e integração local no alcance do acesso; não amplia para editor, dados reais, cobrança, provedor de produção ou hospedagem. A execução atual concluiu os serviços locais e as verificações declaradas; as telas continuam demonstrativas.

D24 vem de “depois disso antes do login ja mande pro git hub o nosso projeto q ja criei [...] mande os arquivos pra ali” e “dont forget documentation”. Autoriza Git local, commit e push do projeto/documentação para o repositório público `RodrigoSubtil/mywedding`, conferido vazio e com permissão de escrita. O pedido distingue guardar código no GitHub de publicar o site; não autoriza deploy, exposição de credenciais, dados privados ou alterações no Supabase hospedado. A sequência atual é Docker verificado → GitHub → integração do acesso.

## Condições que permanecem

- Supabase: provisão dedicada Free autorizada e confirmada em D20; integração e adequação operacional continuam dependentes das provas da etapa. Não assumir plano pago ou produto seguro pela provisão.
- Workers e vinext: avaliação e prova técnica antes de adoção; não substituem o Next.js aprovado por omissão.
- Componentes e bibliotecas posteriores: entram na etapa e necessidade previstas na arquitetura; aprovação futura não é ordem de instalar tudo agora.
- Modelos e demonstrações: material próprio/licenciado e conteúdo fictício identificado. Não são casamentos de clientes nem prova de produto funcional.
- Recolha de interesse: contacto existente ou serviço funcional escolhido; a página não pode simular envio concluído.
- Publicação e dados reais: exigem verificações da etapa e autorização aplicável ao pedido.
- Cobrança MyWedding e presentes dos casais: responsabilidades distintas, com aprovação própria dos fluxos financeiros.

## Como mudar a base

Ao propor uma exceção, apresentar a necessidade concreta, alternativa dentro da base, efeito em escopo, custo, dados e manutenção e quais ficheiros mudariam. Só aplicar uma mudança de decisão depois de autorização explícita, salvo se o próprio pedido atual já a autorizar claramente.

Depois de uma decisão: atualizar o documento central, esta tabela e a memória; ajustar os documentos dependentes e verificar referências. Registar data, origem e decisão substituída. Não duplicar especificações completas em vários documentos.

As pendências e a etapa em que cada uma precisa de resposta estão em [Prontidão e pendências](PRONTIDAO_E_PENDENCIAS.md). Cenários abandonados ficam no [histórico](../historico/CENARIOS_SUPERADOS.md), fora da leitura normal de implementação.
