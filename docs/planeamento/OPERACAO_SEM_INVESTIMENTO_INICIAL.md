# MyWedding operação sem investimento inicial

Base atualizada em **15 de outubro de 2026**, por orientação explícita de Rodrigo. Este documento substitui os cenários com anúncios pagos, contratação e mensalidades presumidas como plano de partida. Os mercados iniciais continuam a ser Brasil e Portugal, com preparação para expansão mundial.

## O que está confirmado

- Rodrigo é engenheiro de software; a esposa é designer. Os dois são os donos e construtores do MyWedding.
- Construção e operação inicial exclusivamente pelos fundadores, sem contratar pessoas para ajudar na plataforma.
- Meta de **desembolso adicional zero**: usar equipamento, ligação à internet e recursos já disponíveis, ferramentas gratuitas e planos sem pagamento inicial compatíveis com o uso pretendido.
- Divulgação gradual e orgânica no Instagram, com conteúdo produzido pelos próprios fundadores. Sem anúncios, impulsionamentos, compra de seguidores ou produção terceirizada paga.
- Parcerias fazem parte de uma etapa futura. Nenhum parceiro, contrato, comissão ou troca de serviços foi acordado.
- O style guide já existe. A arquitetura e stack foram aprovadas em 15/10/2026; a landing será a primeira construção seguindo [Arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md). Esta atualização é documental e não inicia implementação, criação de contas ou publicação.

**A meta financeira refere-se ao gasto dos fundadores para começar.** Não estabelece site gratuito para todos os casais, preço final, divisão societária, retirada mensal ou prazo de lançamento. Esses pontos continuam por definir.

## Como começar sem desembolso adicional

| Frente | Caminho proposto | Condição para continuar sem pagar |
| --- | --- | --- |
| Desenvolvimento | Código, testes e manutenção feitos por Rodrigo, com recursos já disponíveis | Não depender de licença, API ou serviço pago novo |
| Design | Identidade, interfaces, modelos e peças feitos pela esposa, reutilizando guia e tokens | Usar ferramentas existentes e materiais próprios ou com licença adequada |
| Primeira página pública | Exportação estática do Next.js no Cloudflare Pages, escolha técnica aprovada, com subdomínio do fornecedor | Conferir uso comercial, conta, quotas e ausência de cobrança automática; não comprar domínio nesta fase |
| Instagram | Publicações, demonstrações e conversas conduzidas pelos fundadores | Sem anúncios pagos; ajustar frequência à disponibilidade real |
| Contacto inicial | Usar os canais gratuitos já disponíveis, por exemplo mensagens recebidas no Instagram | Não depender de automação paga; recolher apenas os dados necessários |
| Aplicação futura | PostgreSQL aprovado; Supabase como primeira candidata condicionada para dados, Auth e Storage | Validar quotas da conta, região, email, recuperação e hospedagem dinâmica antes de aceitar casamentos reais |
| Atendimento | Suporte pelos dois fundadores, com horário e capacidade definidos | Limitar o piloto ao volume que consigam atender com qualidade |

O tempo dos fundadores é o investimento inicial. Sem contratação, há menos despesas de caixa, mas desenvolvimento, conteúdo, correções e atendimento disputam as mesmas horas. A capacidade precisa ser medida antes de prometer muitos casamentos simultâneos.

### Hospedagem inicial aprovada e limites de operação

A documentação do Cloudflare Pages anuncia pedidos de ficheiros estáticos gratuitos e distingue funções, sujeitas a quotas. O fornecedor também permite publicação em `<projeto>.pages.dev`. Rodrigo aprovou essa opção técnica para a exportação estática da landing, sem compra inicial de domínio. Isso não demonstra que toda a futura plataforma cabe gratuitamente nesse serviço. [Preços e distinção entre estático e funções](https://developers.cloudflare.com/pages/functions/pricing/), [publicação com Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).

Antes da publicação, conferir termos de uso comercial, limites de builds e ficheiros, configuração da conta, colaboração dos fundadores e possibilidade de bloquear despesas. Nem toda oferta gratuita serve uma empresa: a Vercel restringe o plano Hobby a uso pessoal e não comercial. [Limites do Pages](https://developers.cloudflare.com/pages/platform/limits/), [Vercel Hobby](https://vercel.com/docs/plans/hobby).

As fontes acima foram consultadas em 15/10/2026. A escolha técnica do Pages foi aprovada posteriormente na mesma conversa, conforme [Arquitetura e stack](../arquitetura/ARQUITETURA_E_STACK.md); não houve criação de conta, provisionamento ou teste de publicação. Testes gratuitos por prazo limitado e créditos promocionais não devem sustentar uma promessa de custo zero permanente.

Para a evolução, avaliar as quotas e a pausa por inatividade do Supabase Free, a disponibilidade de projetos na conta, cópias de dados e ficheiros e restauração. Workers e vinext exigem avaliação de runtime e limites. O SMTP padrão do Supabase e o requisito de domínio verificado do Resend impedem presumir que envio de email de produção cabe automaticamente no desembolso zero. A base aprovada conserva estas validações, sem assumir mensalidades ou ativar upgrades. As fontes e a data da consulta estão em [Fontes e verificação](../pesquisa/FONTES_E_VERIFICACAO.md).

Atualização operacional de 16/10/2026 (D20–D22): organização/projeto Supabase Free criados para preparar o acesso, sem alterar a organização Pro existente. A [avaliação de servidor/e-mail](CONSTRUCAO_DO_ACESSO.md#servidor-e-e-mail-sem-desembolso--avaliação-de-16102026-d22) recomenda testes locais e separa o destino hospedado/envio a clientes. Mailpit local não exige domínio nem envios externos; Workers Free e um eventual provedor SMTP exigem provas e condições da conta. Nenhuma nova conta de e-mail, plano pago, domínio, publicação ou envio foi realizado nesta avaliação. O custo zero inicial não garante recuperação de acesso disponível em produção sem resolver essas condições.

Continuidade D23/D24: ambiente local Docker/Supabase/Mailpit preparado sem criar serviços pagos ou enviar mensagens externas. Apenas serviços essenciais locais em execução; domínio/provedor de produção não adotados. Volumes consomem disco e serviços consomem recursos do computador; não representam servidor publicado. Rodrigo autorizou enviar código/documentação ao seu GitHub público antes do login, excluindo segredos/dados privados. [Configuração, rotina e evidência](CONSTRUCAO_DO_ACESSO.md#ambiente-local-preparado--16102026-d23).

## Divulgação orgânica no Instagram

O objetivo inicial é transformar conteúdo em conversas com casais e, depois, em utilização real. Seguidores e gostos ajudam a observar interesse, mas não demonstram procura paga.

1. **Apresentar o problema:** mostrar como organizar informações do casamento, confirmar presenças e evitar mensagens repetidas.
2. **Mostrar o trabalho:** apresentar identidade, escolhas de design e bastidores. Identificar claramente imagens de demonstração e recursos ainda planeados.
3. **Convidar para acompanhar:** quando existir landing publicada, colocar o link na apresentação do perfil. Antes disso, usar os canais já disponíveis para receber interesse.
4. **Validar com poucos casais:** ouvir necessidades e, numa etapa posterior, testar a experiência. Publicar histórias e imagens reais apenas com autorização.
5. **Repetir o que gerar procura:** acompanhar conversas qualificadas, visitas, testes, uso e vendas por origem, além do tempo para produzir e responder.

Cadência candidata, a ajustar pelos fundadores: duas publicações por semana, alternando dica prática e demonstração, e stories quando houver algo útil a mostrar. Esta frequência é uma proposta de organização, não um calendário aprovado nem promessa de alcance. Não há taxa de conversão ou quantidade de vendas orgânicas verificada.

## Etapas propostas

| Etapa | Entrega pelos fundadores | Sinal para avançar |
| --- | --- | --- |
| Identidade | Style guide e materiais de referência | Referência v1 existente; manter guia e tokens juntos |
| Landing | Apresentação simples e publicação gratuita, quando solicitada | Página acessível em telemóvel e contacto verificado |
| Interesse orgânico | Conteúdo e conversas com casais do Brasil e de Portugal | Problemas concretos repetidos e interesse em testar |
| Produto mínimo | Site do casal, publicação e RSVP, com escopo a confirmar | Percurso funcional e isolamento de dados demonstrados |
| Piloto limitado | Pequeno grupo dentro da capacidade de suporte | Uso real, quotas e horas registados; falhas tratadas |
| Receita | Oferta e cobrança depois de definir preço e enquadramento | Pagamento, faturação e reembolso preparados e verificados |
| Parcerias | Explorar canais com profissionais a partir da evidência de uso | Acordo compreensível, retorno medido e responsabilidades definidas |

Não há prazo aprovado para estas etapas. A disponibilidade semanal, a evolução do produto e os limites gratuitos condicionam o ritmo.

## Como calcular ganhos neste modelo

Separar quatro grandezas:

1. **Faturamento:** o valor dos serviços MyWedding vendidos, com impostos sobre vendas identificados à parte.
2. **Caixa disponível:** recebimentos menos taxas, despesas efetivas e valores reservados para obrigações e reembolsos.
3. **Resultado económico:** considerar também o trabalho dos fundadores e o serviço devido durante todo o período contratado.
4. **Retirada pessoal:** depende da forma de operação, impostos, reservas e decisão dos fundadores. Não equivale automaticamente ao faturamento.

Na validação sem anúncios, o gasto com publicidade pode ser zero. O tempo dedicado ao Instagram e às vendas deve ser registado separadamente. Não atribuir automaticamente €25 de aquisição a cada cliente orgânico, nem €300–€500 de custos fixos por mês. Também não presumir que todas as vendas orgânicas terão custo monetário zero para sempre.

### Exemplo de caixa após vendas, não previsão

Hipóteses para mostrar a diferença em relação às contas anteriores: **€99 de receita por casamento sem IVA**, zero publicidade paga e zero custos fixos adicionais enquanto todos os recursos couberem nos planos gratuitos. Simular processamento de **3% + €0,30** e reserva de **5% da receita** para reembolsos e continuidade do serviço. A tarifa e a reserva são arbitrárias; nenhum preço, parceiro ou retirada foi aprovado. Aplicar a taxa ao total efetivamente processado quando houver IVA ou outros valores na cobrança; o exemplo simplifica essa situação.

Por venda: €99 − €3,27 de processamento hipotético − €4,95 de reserva = **€90,78** disponíveis antes de outras obrigações. A reserva continua a ser dinheiro da operação, destinado a riscos e serviço futuro; não é uma despesa já incorrida.

| Vendas no mês | Receita sem IVA | Processamento hipotético | Reserva de 5% | Caixa após taxa e reserva |
| --- | ---: | ---: | ---: | ---: |
| 0 | €0,00 | €0,00 | €0,00 | €0,00 |
| 5 | €495,00 | €16,35 | €24,75 | €453,90 |
| 10 | €990,00 | €32,70 | €49,50 | €907,80 |
| 25 | €2.475,00 | €81,75 | €123,75 | €2.269,50 |
| 50 | €4.950,00 | €163,50 | €247,50 | €4.539,00 |

Esta coluna não é lucro líquido nem salário dos fundadores. Exclui impostos sobre resultado ou rendimentos, encargos aplicáveis, despesas de enquadramento da atividade e outras obrigações ainda não apuradas. Não remunera as horas próprias nem garante que as quotas gratuitas suportem esses volumes. Custos de servir contas gratuitas também precisam de medição. Nenhuma quantidade de vendas foi prevista; sem uma oferta paga e procura real, a receita pode ser zero.

No Brasil, construir a mesma conta em reais com preço, forma de cobrança e obrigações próprios. Não converter o exemplo em euros e tratá-lo como preço aprovado para os dois mercados. Dinheiro de presentes pertence aos casais; apenas uma eventual receita contratada da plataforma entra nas suas contas.

## Custos e limites que podem surgir depois

Domínio próprio, consumo acima das quotas, armazenamento de fotos, mensagens automáticas, cobrança de vendas e obrigações da atividade podem exigir dinheiro. Por isso, a meta atual é começar sem desembolso, não garantir que qualquer volume ou funcionalidade permaneça gratuito.

Quando um recurso não couber no gratuito, rever o escopo, limitar novas adesões ou comparar alternativas. Reinvestir receitas, comprar domínio ou aderir a um plano pago será uma decisão futura explícita dos fundadores. Não ativar upgrades, cobranças por excesso ou contratação com base neste documento.

Antes de um piloto com dados reais, verificar privacidade, isolamento, cópias de segurança, recuperação e suporte. Antes de cobrar, apurar o enquadramento fiscal e comercial aplicável em fontes oficiais; ser dono e construtor não resolve automaticamente essas obrigações. Estas verificações não estabelecem um orçamento de consultoria nem autorização de contratação.

## Parcerias futuras

Possibilidades para estudar mais tarde: organizadores de casamento, espaços, fotógrafos, profissionais de convites e outros negócios que já atendam os casais. Indicações recíprocas, demonstrações conjuntas e condições para vários casamentos são hipóteses, não acordos existentes.

Uma parceria futura precisa definir entrega, eventual comissão, uso de marca e imagens, proteção de dados, atendimento e forma de medir o retorno. Nenhuma comissão ou despesa com parceiros entra no orçamento inicial. A construção e a propriedade continuam com os fundadores, salvo decisão futura explícita; não há percentagens societárias definidas nesta base.

## O que registar antes de crescer

- Horas semanais de engenharia, design, conteúdo, atendimento e manutenção.
- Origem dos interessados, conversas qualificadas, uso real e vendas por país.
- Consumo e limites dos serviços gratuitos, com possibilidade de exportar e recuperar dados.
- Recebimentos, taxas, reservas, obrigações apuradas e despesas efetivas.
- Capacidade de atender casamentos ativos, sem depender de promessas de suporte permanente.

Registar os resultados em [Registo de validação](../../templates/REGISTRO_DE_VALIDACAO.md). As decisões confirmadas deste documento são a equipa de dois, a construção própria, a meta de desembolso inicial zero, o Instagram orgânico e a intenção de parcerias futuras. Os restantes detalhes são propostas ou verificações pendentes.
