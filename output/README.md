# Materiais derivados

Esta pasta contém exportações e evidência de verificação. As fontes editáveis permanecem em `design/`, `docs/` e `scripts/`.

| Material | Origem e alcance |
| --- | --- |
| [PDF do style guide](pdf/MyWedding-Style-Guide-v1.pdf) | Cinco páginas de referência da identidade v1 |
| [Preview do style guide](design/style-guide-preview.png) | Prévia da primeira página da prancha; não representa a landing |
| [Contrastes](reports/contrast-report.json) | 36 pares autorizados; não é auditoria integral de acessibilidade |
| [Verificação documental](reports/verificacao-documental.json) | Última execução do verificador local; não comprova runtime ou publicação |
| [Assets da landing](reports/landing-assets.json) | Cópias WebP/WOFF2, dimensões, tamanhos, origem local e hashes |
| [Landing e seletor de idioma](previews/landing-idioma-2026-10-15.jpg) | Captura da landing em modo dev; não é publicação |
| [Landing desktop](previews/revisao-desktop-1440.jpg) e [móvel](previews/revisao-mobile-390.jpg) | Capturas completas da revisão local de 15/10/2026 |
| [Primeira dobra](previews/landing-desktop-final.jpg), [login](previews/login-desktop.jpg) e [cadastro móvel](previews/cadastro-mobile.jpg) | Apresentação final local; acesso demonstrativo sem banco |
| [Integridade da exportação](reports/verificacao-landing.json) | Rotas, links locais, traduções e hashes; não substitui testes de UI |
| [Assets de partilha](reports/social-assets.json) | Origem, dimensões e hashes das duas capas em public/social |
| [Estudo da assinatura](previews/estudo-logo.html) e [proveniência](reports/brand-assets.json) | Três composições preparadas; assinatura aplicada com folha no i e ponto final terracota |
| [Assinatura em detalhe](previews/logo-refinada.png), [desktop refinado](previews/refinamento-desktop.jpg) e [móvel refinado](previews/refinamento-mobile.jpg) | Refinamento posterior com marca, ícones semânticos e movimento; aparência local |
| [Kit ZIP da marca](brand/MyWedding-Brand-Kit.zip), [catálogo](brand/catalogo.png) e [instruções](brand/LEIA-ME.txt) | 14 SVGs e 14 PNGs, licenças e combinações da assinatura aprovada |
| [Manifesto do kit](reports/brand-kit.json) e [verificação](reports/verificacao-brand-kit.json) | Proveniência/hashes, transparência e comparação dos contornos aprovados |

Não editar derivados como forma de mudar a decisão: alterar a fonte correspondente e regenerar/verificar quando necessário. Relatórios de execução podem incluir data técnica em UTC; a data da revisão documental está indicada nos documentos.

Envio inicial ao GitHub D24: [revisão do stage](reports/git-upload-audit-2026-10-16.json) confere caminhos, tamanhos e padrões comuns de segredos; [verificação documental D23/D24](reports/docker-local-documentacao-2026-10-16.json) confere referências e integridade. Não são certificação de segurança ou confirmação de push; envio é comprovado pelo SHA remoto e CI tem resultado próprio.

Preparação do acesso em 16/10/2026: [captura do projeto Supabase](reports/supabase-myWedding-2026-10-16.jpg) confirma nome, estado Healthy e região; [verificação documental](reports/acesso-preparacao-verification-2026-10-16.json) cobre links/integridade. Nenhum destes artefactos comprova login, isolamento, recuperação ou pagamentos. A fonte do processo e dos limites é [Construção do acesso](../docs/planeamento/CONSTRUCAO_DO_ACESSO.md).

Preparação local D23: [restrição de portas](reports/docker-local-harden-2026-10-16.json), [paragem](reports/docker-local-down-2026-10-16.json), [retoma](reports/docker-local-up-2026-10-16.json) e [conferência](reports/docker-local-check-2026-10-16.json). Registam serviços, volumes, bindings, health/HTTP e configuração Auth não secreta; não contêm credenciais. Comprovam apenas o ambiente local, não cadastro, envio de confirmação, sessões/RLS, produção ou recuperação operacional.

Avaliação de servidor/e-mails D22: [compatibilidade e ambiente](reports/servidor-email-compatibilidade-2026-10-16.json) regista o scanner vinext 1.2.1 e pré-requisitos locais; [verificação documental](reports/servidor-email-documentacao-verification-2026-10-16.json) confere referências. Não são provas de execução em Workers, envio de e-mail, sessões ou isolamento.
