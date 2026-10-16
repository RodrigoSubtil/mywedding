import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { resolve, relative, extname, isAbsolute } from "node:path";

const root = resolve("out");
const port = Number(process.env.MYWEDDING_PREVIEW_PORT ?? 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("Execute pnpm build antes de pnpm preview.");
  process.exit(1);
}

createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method ?? "")) {
    response.writeHead(405);
    response.end();
    return;
  }
  let target;
  try {
    target = resolve(
      root,
      `.${decodeURIComponent(new URL(request.url, "http://localhost").pathname)}`,
    );
  } catch {
    response.writeHead(400);
    response.end();
    return;
  }
  const location = relative(root, target);
  if (location.startsWith("..") || isAbsolute(location)) {
    response.writeHead(403);
    response.end();
    return;
  }
  let code = 200;
  try {
    if ((await stat(target)).isDirectory())
      target = resolve(target, "index.html");
    await stat(target);
  } catch {
    target = resolve(root, "404.html");
    code = 404;
  }
  response.writeHead(code, {
    "Content-Type": types[extname(target)] ?? "application/octet-stream",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  const stream = createReadStream(target);
  stream.on("error", () => response.destroy());
  stream.pipe(response);
}).listen(port, "127.0.0.1", () =>
  console.log(`MyWedding · exportação estática: http://127.0.0.1:${port}`),
);
