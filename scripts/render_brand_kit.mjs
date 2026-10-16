/** Ferramenta de assets: Sharp no ambiente de ferramentas, fora da aplicação. */
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const loadToolModule = createRequire(import.meta.url);
const sharp = loadToolModule("sharp");

async function main() {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const reportPath = path.join(root, "output/reports/brand-kit.json");
  const manifest = JSON.parse(await fs.readFile(reportPath, "utf8"));
  await fs.mkdir(path.join(root, "output/brand/png"), { recursive: true });
  for (const item of manifest.outputs) {
    const output = path.join(root, item.png);
    await sharp(path.join(root, item.svg), { density: 720 })
      .resize({ width: item.png_width })
      .png()
      .toFile(output);
    const bytes = await fs.readFile(output);
    const { data, info } = await sharp(bytes)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const alphaAt = (x, y) =>
      data[(y * info.width + x) * info.channels + info.channels - 1];
    if (
      item.transparent &&
      [
        alphaAt(0, 0),
        alphaAt(info.width - 1, 0),
        alphaAt(0, info.height - 1),
        alphaAt(info.width - 1, info.height - 1),
      ].some(Boolean)
    ) {
      throw new Error(`Fundo não transparente: ${item.name}`);
    }
    item.png_sha256 = crypto.createHash("sha256").update(bytes).digest("hex");
    item.png_height = info.height;
    item.png_bytes = bytes.length;
  }
  await sharp(path.join(root, "output/brand/catalogo.svg"), { density: 144 })
    .resize({ width: 1600 })
    .png()
    .toFile(path.join(root, "output/brand/catalogo.png"));
  await fs.writeFile(reportPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `${manifest.outputs.length} PNGs renderizados; transparência conferida.`,
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
