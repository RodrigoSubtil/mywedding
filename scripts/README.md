# Ferramentas locais

Estes scripts mantêm a documentação, preparam assets e servem a exportação local. Executar a partir da raiz. O modo de desenvolvimento da aplicação é `pnpm dev`, descrito no README principal.

| Ferramenta | Uso | Dependências |
| --- | --- | --- |
| [verify_project.py](verify_project.py) | `python scripts/verify_project.py` — verifica referências e integridade; sem alterações por omissão | Biblioteca padrão |
| [export_style_guide.py](export_style_guide.py) | `python scripts/export_style_guide.py` — regenera o PDF a partir dos tokens e fontes locais | ReportLab e FontTools |
| [prepare_landing_assets.py](prepare_landing_assets.py) | `python scripts/prepare_landing_assets.py` — gera WebP, WOFF2 e manifesto sem alterar os originais | [Dependências](requirements-assets.txt); usadas apenas na preparação |
| [prepare_social_assets.py](prepare_social_assets.py) | `python scripts/prepare_social_assets.py` — gera capas pt-BR/pt-PT 1200 × 630 com tokens, fontes e fotografia licenciada locais | Pillow; apenas preparação |
| [prepare_brand_assets.py](prepare_brand_assets.py) | `python scripts/prepare_brand_assets.py` — gera assinatura SVG, favicon, estudo de posições e manifesto com Fraunces local | FontTools e Pillow; apenas preparação |
| [export_brand_kit.py](export_brand_kit.py) | `python scripts/export_brand_kit.py` — preserva os contornos aprovados e prepara as 14 variantes SVG e catálogo | FontTools e Pillow; apenas ferramentas |
| [render_brand_kit.mjs](render_brand_kit.mjs) | `node scripts/render_brand_kit.mjs` — renderiza os PNGs RGBA e catálogo a partir dos SVGs | Sharp no ambiente Node de ferramentas, fora das dependências da aplicação |
| [package_brand_kit.py](package_brand_kit.py) | `python scripts/package_brand_kit.py` — verifica contornos/hashes/transparência e cria o ZIP com instruções/licenças | Pillow e biblioteca padrão |
| [verify_landing.py](verify_landing.py) | `python scripts/verify_landing.py` — depois do build, confere rotas, referências, idiomas, estrutura e hashes; escreve relatório em output | Biblioteca padrão |
| [preview-static.mjs](preview-static.mjs) | `pnpm preview` — serve `out/` em 127.0.0.1:4173 depois do build | Node.js; nenhuma dependência adicional |
| [local-supabase.mjs](local-supabase.mjs) | `pnpm local:up`, `local:down`, `local:check`, `local:harden` — opera apenas os contentores MyWedding, preserva volumes e verifica loopback/HTTP | Node.js e Docker Desktop Linux local no Windows; sem dependência adicional |
| [verify-git-upload.mjs](verify-git-upload.mjs) | `node scripts/verify-git-upload.mjs` — confere caminhos e padrões comuns de credenciais no snapshot staged, sem imprimir valores | Node.js e Git; não substitui revisão humana ou auditoria de binários |

Para guardar um relatório da verificação: `python scripts/verify_project.py --report output/reports/verificacao-documental.json`. Esse relatório é derivado; não substitui as fontes nem a revisão semântica dos documentos.

O exportador escreve em `output/pdf/MyWedding-Style-Guide-v1.pdf` e usa fontes temporárias descartadas no final. Antes de o executar, confirmar as dependências no ambiente Python escolhido. A eventual preparação gratuita do ambiente não altera a stack da aplicação; não instalar dependências da documentação no frontend.

Os comandos `local:*` exigem os contentores já preparados; não instalam Docker nem iniciam outro projeto. O helper recusa contexto remoto, confere nomes/labels, usa o pipe local e não grava credenciais. `harden` reutiliza os volumes e retém originais parados; `up/down` conservam bindings explícitos. Relatórios em `output/reports/docker-local-<comando>-<data>.json`. A [fonte do acesso](../docs/planeamento/CONSTRUCAO_DO_ACESSO.md#ambiente-local-preparado--16102026-d23) explica a falha do default da rede, recuperação do gateway, rotina e limites de bootstrap. HTTP/health aprovados não são teste do login.
