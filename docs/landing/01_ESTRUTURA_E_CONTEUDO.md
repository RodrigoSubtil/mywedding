# MyWedding estrutura e conteúdo da landing page

Direção de estrutura, arquitetura e visual confirmada por Rodrigo no pedido de revisão de 15/10/2026. Mercados iniciais: Brasil e Portugal, com preparação mundial. Este documento orienta a construção; textos finais, materiais e condições de operação mantêm as pendências indicadas. Rodrigo autorizou posteriormente a implementação local, em 15/10/2026, e pediu acabamento de página final, sem comunicação de pré-lançamento.

**Base técnica aprovada em 15/10/2026:** seguir [Arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md). Landing em React/Next.js App Router e TypeScript, Tailwind ligado aos tokens, componentes reutilizáveis, next-intl e conteúdo separado, com exportação estática no Cloudflare Pages. A confirmação da direção da landing não aprova preços, datas, condições do piloto, método de login ou serviços externos. Textos de trabalho e materiais devem ser finalizados e verificados na construção, sem alterar a direção por omissão.

A landing deve permitir que o casal compreenda a proposta, veja um resultado desejável e encontre uma próxima ação clara. A narrativa recomendada combina personalização visual, informação do casamento e organização de respostas. O visual segue integralmente o [style guide](../../design/STYLE_GUIDE.md) e os [tokens](../../design/tokens.css).

A página deve responder, nesta ordem: o que é; como pode ficar; como funciona; como ajuda o casal e os convidados; por que confiar; qual é a oferta; e como começar. A seleção de recursos deriva das referências e das necessidades do produto; a disposição para pagar ainda exige validação com casais.

A construção seguirá a [arquitetura aprovada](../arquitetura/ARQUITETURA_E_STACK.md) e a [operação sem desembolso inicial](../planeamento/OPERACAO_SEM_INVESTIMENTO_INICIAL.md): trabalho próprio dos fundadores, recursos existentes ou gratuitos adequados, Instagram orgânico e parcerias apenas numa etapa futura. Este plano editorial não altera a stack, não cria despesas nem pressupõe anúncios pagos.

## Estado de lançamento e promessa

Direção atual de Rodrigo, em 15/10/2026: landing com acabamento comercial final, sem faixa de pré-lançamento ou acesso antecipado. A navegação apresenta modelos, demonstração, contacto direto e Entrar. O pedido posterior autoriza entrar/criar conta apenas frontend, com o modo demonstrativo explícito nessas páginas. Autenticação, editor e operações reais permanecem para a etapa do produto; exemplos fictícios mantêm identificação discreta. Esta direção substitui a comunicação de pré-lançamento anteriormente proposta.

| Elemento | Landing atual | Quando o produto estiver disponível |
| --- | --- | --- |
| Ação principal | Encontre seu estilo / Encontrem o vosso estilo → modelos | Criar meu site / Criar o nosso site |
| Ação secundária | Ver demonstração | Ver modelos |
| Oferta | Conversa com os fundadores pelos contactos fornecidos | Plano, preço, validade e condições reais |
| Login no cabeçalho | Entrar → interface demonstrativa, sem autenticação ou banco, conforme D13 | Entrar → acesso real |
| Recursos | Percurso demonstrativo identificado, com interação local | Funcionalidades efetivamente disponíveis |
| Prova social | Fundadores e exemplos próprios; sem avaliações fictícias | Casos e depoimentos reais autorizados |

Uma inscrição na lista de interesse só apresenta sucesso depois de ser realmente guardada pelo serviço escolhido. Uma página visual sem esse serviço deve ser identificada como protótipo e não simular recolha concluída. Não prometer publicação, gratuitidade, lançamento em data fechada ou presente em dinheiro com base apenas no desenho da página.

A base estática aprovada permite começar com contacto por canais existentes. O serviço da lista de interesse permanece em aberto; um formulário com gravação real exige integração própria, proteção contra abuso e informação adequada. Não adicionar essa dependência nem simular sucesso apenas para preencher a composição.

## Funcionalidades com maior prioridade na comunicação

Separar o valor do futuro produto das funcionalidades da própria landing. A landing precisa de navegação, modelos demonstráveis, informação, uma ação coerente e contacto; ela não precisa implementar um editor completo ou uma ferramenta financeira.

| Prioridade | Benefício a comunicar | Como demonstrar | Condição para anunciar como disponível |
| --- | --- | --- | --- |
| Central | Um site com a identidade do casal | Três modelos próprios e prévia em computador e telemóvel | Personalização e publicação testadas |
| Central | Informações fáceis de encontrar | Agenda, local, deslocação e perguntas num exemplo | Conteúdo editável e versão publicada funcionais |
| Central | Confirmações organizadas | Percurso do convidado e resumo das respostas | RSVP por pessoa/evento realmente guardado |
| Central | Partilha simples | Um link de convite e acesso pelo telemóvel | Endereço e partilha funcionais; não confundir com envio automático |
| Central | Facilidade para o convidado | Exemplo sem obrigar a criar conta | Percurso de acesso e permissões testados |
| Apoio | Privacidade e controlo | Explicação de visibilidade e acesso | Regras implementadas e verificadas |
| Apoio | Experiência em pt-BR e pt-PT | Seletor de localidade e textos próprios | Revisão de conteúdo nas duas variantes |
| Apoio | Ajuda para começar | Canal e condições reais de atendimento | Operação e disponibilidade definidas |
| Posterior | Domínio próprio e montagem assistida | Informação na oferta quando houver condições | Entrega e limites definidos |
| Posterior | Presentes, mesas, orçamento, IA e aplicações | Páginas específicas quando forem frentes viáveis | Implementação, contratos e operação correspondentes |

Na primeira leitura, destacar apenas três ideias: identidade do casal, informações reunidas e respostas organizadas. Os restantes recursos entram como evidência dessas ideias. Evitar uma grelha com dezenas de ícones ou a promessa de organizar toda a festa quando o escopo inicial é site e comunicação.

Presentes têm relevância comercial nas referências brasileiras, mas o MyWedding ainda precisa decidir e validar o fluxo. No início, mencionar links externos apenas se esse recurso existir e explicar a etapa atual na FAQ. Taxas, repasses, Pix e outros métodos não entram como promessa da landing enquanto não estiverem aprovados e operacionais.

## Estrutura da página principal

Os nomes de secção são rótulos de planeamento; os títulos públicos podem ser refinados no trabalho de texto. Não é necessário transformar cada linha numa área enorme. A faixa de benefícios é compacta e o bloco de oferta muda conforme a etapa.

| Ordem | Bloco e objetivo | Conteúdo recomendado | Representação e ação |
| --- | --- | --- | --- |
| 1 | Cabeçalho | Marca, Modelos, Como funciona, Recursos, Dúvidas, localidade, Entrar e contacto | Uma linha no desktop; Entrar no menu móvel; interface de acesso identificada como demonstração |
| 2 | Abertura | Proposta explícita, frase de apoio e etapa do produto | Texto à esquerda, exemplo de site à direita; ação principal e demonstração |
| 3 | Benefícios rápidos | Identidade, informações e confirmações | Três frases curtas; sem novo botão |
| 4 | Modelos | Três direções próprias: Clássico, Natural e Contemporâneo | Prévia identificada, nome e Ver exemplo |
| 5 | Como funciona | Escolher → personalizar → partilhar e acompanhar | Três passos; vídeo curto por clique se houver material pronto |
| 6 | Experiência dos convidados | Consultar evento, confirmar presença e perceber o resultado | Uma demonstração com três estados; explicação prática e acesso sem conta |
| 7 | Confiança e ajuda | Quem está a construir, privacidade e atendimento realista | Fotografia própria opcional, texto concreto e contacto |
| 8 | Contacto | Conversa direta com Rodrigo e Maria Eduarda | Instagram e telefone fornecidos; sem formulário |
| 9 | Dúvidas | Disponibilidade, funcionamento, custo, convidados, privacidade e presentes | Seis a oito perguntas em acordeão acessível |
| 10 | Encerramento | Reforçar o benefício e a próxima ação | Fundo verde profundo, texto branco e mesma ação principal |
| 11 | Rodapé | Contacto, políticas, localidade e páginas efetivamente existentes | Navegação curta, sem inventar empresa, parceiros ou redes |

O bloco de confiança pode receber depoimentos e casos reais quando existirem, substituindo parte da apresentação inicial. Não reservar espaço para avaliações fictícias, números de clientes, prémios ou logótipos de imprensa que não pertençam ao projeto.

## Abertura em detalhe

No desktop, usar duas colunas equilibradas, aproximadamente 45% para a mensagem e 55% para o exemplo. São proporções de composição, adaptáveis ao conteúdo, e não dimensões fixas. O exemplo deve ocupar área suficiente para se perceber que estamos a oferecer um site de casamento.

Texto da abertura; a implementação centraliza as variantes em `src/i18n/messages/`:

| Elemento | pt-BR | pt-PT |
| --- | --- | --- |
| Etiqueta | Para o dia de vocês. E tudo que vem antes. | Para o vosso dia. E tudo o que vem antes. |
| H1 | Seu casamento, com a sua identidade. | O vosso casamento, com a vossa identidade. |
| Apoio | Uma história que merece um lugar só dela. Um site para reunir os detalhes, compartilhar a alegria e ter por perto quem faz parte de vocês. | Uma história que merece um lugar só dela. Um site para reunir os detalhes, partilhar a alegria e ter por perto quem faz parte de vocês. |
| Principal | Encontre seu estilo | Encontrem o vosso estilo |
| Secundário | Ver demonstração | Ver demonstração |

Na versão comercial, o texto de apoio pode passar a descrever a operação no presente e a ação principal pode levar à criação do site. A palavra grátis só entra se houver uma oferta definida com limites e duração publicados.

O exemplo visual terá um único casamento fictício, coerente em todas as imagens, com nomes, agenda e locais ilustrativos. Mostrar computador e telemóvel sem molduras excessivas. Usar uma fotografia licenciada dentro do exemplo e uma etiqueta discreta de demonstração. Não sobrepor texto essencial da landing à fotografia.

No telemóvel, a sequência é mensagem → ação principal → ação secundária → imagem. Não usar um vídeo em altura de ecrã inteiro que empurre os botões para baixo. A altura da abertura acompanha o conteúdo; não impor `100vh`.

## Modelos e demonstração

A galeria inicial tem três modelos suficientemente diferentes para demonstrar liberdade visual, sem exigir um catálogo grande. O estilo comercial MyWedding permanece estável em volta deles. Os modelos do casal são exemplos de personalização e podem seguir uma identidade própria documentada; não são uma segunda paleta para a landing.

Cada cartão mostra o nome do estilo, uma prévia legível, duas características concretas e Ver exemplo. Explorar modelos não exige cadastro. Não criar filtros para três resultados. Não usar modelos protegidos dos concorrentes ou fotografias retiradas das suas galerias.

A demonstração pode ser uma rota própria com navegação simples e aviso de conteúdo fictício. O visitante escolhe um dos três estilos e vê a mesma história. Na landing atual, o estilo abre a demonstração e o contacto leva aos fundadores; a ação Usar este modelo só entra quando consegue iniciar a criação preservando a escolha.

Na primeira demonstração do percurso do convidado, mostrar agenda → resposta → resultado organizado. Se for um conceito interativo, a confirmação é explicitamente uma simulação e não envia dados para um casal real. Se não houver interação implementada, usar três imagens sequenciais em vez de fingir uma aplicação funcional.

## Como funciona e recursos

O bloco de três passos reduz a dúvida sobre esforço:

1. Escolher uma direção visual.
2. Acrescentar nomes, eventos, imagens e informações.
3. Partilhar o endereço e acompanhar as respostas.

Cada passo usa uma frase, um desenho simples ou um recorte do produto, e uma legenda. Um vídeo de 30–45 segundos pode mostrar esse percurso sem exigir que o visitante o assista para compreender a página.

O bloco seguinte aprofunda os convidados, em vez de repetir os mesmos três benefícios. Organizar em três estados selecionáveis: informações, confirmação e acompanhamento. Os títulos devem falar da tarefa: saber onde ir, responder com facilidade e acompanhar as confirmações. No ecrã pequeno, usar uma sequência vertical se as abas perderem legibilidade.

Informações adicionais como alojamento, traje e calendário aparecem dentro do exemplo, sem virar seis secções independentes. A colaboração entre o casal e eventos com listas diferentes podem surgir como apoio quando o produto demonstrar esse funcionamento.

## Navegação e páginas

Começar com uma página comercial forte, uma demonstração e as páginas de confiança necessárias à operação. Separar páginas quando houver uma tarefa própria ou conteúdo suficiente; não criar páginas vazias para preencher o menu.

| Destino previsto | Função | Etapa |
| --- | --- | --- |
| `/pt-BR/` e `/pt-PT/` | Duas versões da landing com linguagem revista | Primeira implementação |
| `#modelos`, `#como-funciona`, `#recursos`, `#duvidas` | Atalhos dentro da landing | Primeira implementação |
| `/{localidade}/demonstracao` | Exemplo fictício; tema selecionável se implementado | Primeira implementação, se a demonstração estiver pronta |
| Contacto no rodapé | Canais reais fornecidos pelos fundadores | Implementado localmente; conferir antes de publicar |
| Privacidade, termos e política de cookies aplicável | Informação adequada ao funcionamento real | Antes da operação correspondente |
| `/{localidade}/modelos` | Catálogo e filtros quando houver variedade real | Expansão do catálogo |
| `/{localidade}/planos` | Preços, validade, limites e condições | Oferta comercial definida |
| `/{localidade}/entrar` | Interface demonstrativa de acesso, com validação local | Frontend autorizado em D13; autenticação real futura |
| `/{localidade}/criar-conta` | Interface demonstrativa de cadastro, sem criação de conta | Frontend autorizado em D13; persistência/continuidade futuras |
| `/{localidade}/recuperar-acesso` | Recuperação de acesso | Junto do login |
| Ajuda e contacto detalhado | Resolver dúvidas frequentes e situações de suporte | Conforme volume e conteúdo |
| Conteúdos, parcerias e recursos específicos | Pesquisa orgânica e necessidades segmentadas | Depois da base validada |

`{localidade}` representa `pt-BR` ou `pt-PT`, não uma rota literal. A geração estática utiliza prefixos explícitos e não depende de negociação de idioma no servidor ou middleware. A raiz abre diretamente pt-BR. O cabeçalho oferece troca pt-BR/pt-PT sem página intermediária e sem deslocar a posição de leitura. Localidade da interface e país de faturação são informações diferentes.

No desktop, a navegação principal tem quatro itens. Sobre, ajuda e políticas ficam no rodapé inicialmente. No telemóvel, marca, menu e ação compacta quando couber; o menu revela os mesmos destinos. Recomenda-se cabeçalho aderente discreto, sem múltiplas barras fixas. Não adicionar uma segunda barra de ação inferior na v1; avaliar necessidade com testes e garantir que nunca cobre conteúdo ou foco.

Não colocar uma busca global de casais na primeira landing. O visitante convidado deve receber o endereço diretamente. Se houver descoberta pública no futuro, ela será uma funcionalidade própria com escolha explícita dos casais e regras de privacidade.

## Login e cadastro — interface atual e evolução

Rodrigo autorizou em 15/10/2026 as páginas apenas frontend, sem banco. Estão implementadas nas duas localidades: email, senha/palavra-passe e confirmação no cadastro; validação local, mostrar/ocultar, foco no primeiro erro, autocomplete e ligação entre as páginas. O mínimo de oito caracteres pertence apenas ao exemplo, não define a política futura. Os formulários ficam desativados antes da hidratação, impedindo submissão nativa; não enviam dados, não usam armazenamento de credenciais e não criam sessão. A validação concluída informa explicitamente que não houve acesso/conta. Recuperação mostra informação local, sem alegar envio. As páginas têm `noindex` enquanto demonstrações.

Recomendação para a etapa com contas: página própria, com marca, título Entrar no MyWedding, uma breve frase de apoio e um formulário central com largura aproximada de 400–440 px. O visual segue o guia; a área de login não repete a página de vendas nem abre por cima de um conteúdo longo.

Propor email e palavra-passe/senha como percurso familiar, com mostrar/ocultar senha, recuperação, preenchimento automático e colagem permitida. Continuar com Google pode ser uma alternativa se o fornecedor escolhido e a implementação estiverem prontos. Não mostrar uma coleção de opções sociais indisponíveis. Um acesso por link de email pode ser comparado em testes; não o impor sem avaliar entrega e compreensão.

Permitir gestores de senhas e colagem é compatível com a orientação de autenticação acessível da W3C. Supabase Auth é a primeira candidata condicionada na arquitetura; o método concreto de autenticação, políticas de senha, email e recuperação será fechado e verificado na etapa do produto. [W3C](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html).

| Situação | Comportamento proposto |
| --- | --- |
| Visitante a explorar | Modelos e demonstração livres de cadastro |
| Pessoa com conta | Login leva ao casamento ou ao destino interno pretendido |
| Pessoa sem conta | Criar conta mantém localidade e modelo escolhido |
| Senha incorreta ou falha de rede | Mensagem clara, preservando email e permitindo nova tentativa |
| Recuperação | Instruções, estado de envio e opção de repetir conforme limites do serviço |
| Autenticação externa cancelada | Retorno seguro à página, com alternativa por email |
| Convidado do casamento | Acesso pelo convite, sem exigir conta do MyWedding para RSVP |
| Outro membro do casal | Conta própria e convite de colaboração quando implementado |

O cadastro inicial deve pedir apenas o necessário para a conta. Nomes de apresentação, país, data aproximada e escolha do modelo pertencem a uma etapa curta seguinte, admitindo Ainda não decidimos. Não pedir orçamento da festa, CPF/NIF, telefone, cartão ou lista de convidados para simplesmente explorar a proposta.

A landing atual usa contacto direto, sem formulário de contacto, inscrições ou armazenamento de visitantes. Os formulários de acesso são demonstrações locais. Se uma recolha de interesse entrar numa etapa posterior, escolher e verificar o serviço, a finalidade, a informação de privacidade e a proteção contra abuso antes de apresentar sucesso. A construção da landing não autoriza esse serviço.

## Oferta e transparência

Preços ainda estão em aberto. A primeira versão não deve publicar as hipóteses do estudo como valores finais. O bloco de contacto convida a conversar com os fundadores; não anuncia preços, vagas, datas, gratuitidade ou condições de contratação não definidas.

Com a oferta aprovada, apresentar até três alternativas com diferenças reais. Cada cartão precisa indicar moeda, preço final aplicável, validade, renovação, limites, domínio e assistência. Não inventar um selo Mais escolhido antes de ter dados. Oferecer ajuda na escolha por um canal real.

Em Brasil e Portugal, testar a proposta e os preços localmente. Não converter automaticamente euros para reais como se isso validasse a oferta. Não misturar taxa do plano com encargos sobre presentes.

## FAQ inicial

A landing implementa seis perguntas; os textos por variante ficam centralizados em `src/i18n/messages/`: conta para explorar modelos, exemplos fictícios, idiomas, conversa sobre estilos, valores/condições e limites de RSVP/presentes. Responder segundo a operação real; não transformar um conceito em produto disponível.

Acordeões usam botões, estado expandido, associação entre pergunta e resposta, foco e teclado. Condições comerciais essenciais exigem uma oferta própria quando forem definidas; não ficam escondidas apenas na FAQ.

## Promoção dentro e fora da página

Dentro da landing, a promoção deve dirigir o visitante à proposta MyWedding. A direção de composição não inclui publicidade de terceiros nesta fase: ela acrescentaria saídas e competição visual à tarefa principal. Esta escolha não é um resultado de teste de conversão.

Uma faixa promocional no topo só entra com campanha real, condições acessíveis e prazo correto. Não criar urgência falsa, contagem regressiva permanente, descontos sem preço de referência ou janelas que interrompem a leitura. A lista de interesse fica integrada na página, sem abertura automática de modal.

As mensagens de aquisição podem testar três ângulos: um site com a identidade do casal; informações e confirmações organizadas; e experiência adaptada a Brasil e Portugal. O anúncio e o primeiro bloco da página precisam manter a mesma promessa, etapa e idioma. Campanhas por recurso podem apontar a uma secção ou página específica quando esse conteúdo existir.

A divulgação inicial confirmada é orgânica e gradual no Instagram. Reaproveitar os exemplos da landing em publicações, stories e vídeos curtos feitos pelos fundadores, com um link real para a página e uma próxima ação coerente. Não prever impulsionamento, ferramentas pagas ou produção contratada. Parcerias ficam para a etapa futura. Depoimentos, nomes de parceiros e marcas de meios de pagamento só aparecem com fundamento e permissão adequados.

## Escopo da primeira construção e aceitação

Construir a landing com acabamento final, estrutura acima, pt-BR/pt-PT, modelos próprios e demonstração identificada. Os modelos Clássico, Natural e Contemporâneo usam Clara & Miguel, 18/09/2027 e Jardim das Oliveiras, todos fictícios e centralizados em `src/content/wedding.ts`. Refinamentos de texto e composição que respeitem esta direção fazem parte da execução.

Contacto direto por canal existente é o caminho mais simples já previsto enquanto não houver serviço de lista de interesse escolhido. Não inventar perfil, endereço ou sucesso de formulário. Rodrigo forneceu os contactos dos fundadores durante a construção; estão configurados em `src/config/contacts.ts`. Vídeo e fotografia dos fundadores são opcionais.

Login/cadastro têm interfaces estáticas demonstrativas autorizadas; autenticação, recuperação real, planos pagos, editor, painel e presentes pertencem à evolução descrita neste documento. As condições de cada destino continuam na tabela de navegação.

Os critérios técnicos e as pendências estão em [Prontidão e pendências](../governanca/PRONTIDAO_E_PENDENCIAS.md). A produção visual está em [Assets e interações](03_ASSETS_E_INTERACOES.md); as observações datadas ficam em [Referências](02_REFERENCIAS_E_APRENDIZAGENS.md). Mudança de direção exige o procedimento de [AGENTS](../../AGENTS.md).
