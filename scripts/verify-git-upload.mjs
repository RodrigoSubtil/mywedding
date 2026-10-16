import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { extname } from "node:path";

// Review the staged snapshot, never print matching secret values.
const git = (...args) =>
  execFileSync("git", args, { maxBuffer: 20 * 1024 * 1024 });
const paths = git("ls-files", "--cached", "-z")
  .toString("utf8")
  .split("\0")
  .filter(Boolean);
const findings = [];
const textExtensions = new Set([
  ".md",
  ".json",
  ".ts",
  ".tsx",
  ".mjs",
  ".js",
  ".css",
  ".html",
  ".svg",
  ".txt",
  ".toml",
  ".yaml",
  ".yml",
  ".example",
  ".py",
]);
const rules = [
  ["private-key", /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  [
    "github-token",
    /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/g,
  ],
  [
    "supabase-secret",
    /\b(?:sb_secret_[A-Za-z0-9_-]{20,}|sbp_[a-f0-9]{30,})\b/g,
  ],
  ["openai-key", /\bsk-(?:proj-|org-)?[A-Za-z0-9_-]{32,}/g],
  ["aws-access-key", /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/g],
  [
    "database-credential",
    /postgres(?:ql)?:\/\/[^:\s/]+:(?!<|\[|YOUR_|PASSWORD|password@)[^@\s]+@/g,
  ],
];
let bytes = 0;
let textFiles = 0;
let maxFileBytes = 0;
for (const path of paths) {
  if (
    /^(?:private|tmp|node_modules|out|dist|\.next)\//.test(path) ||
    /^supabase\/(?:\.temp|\.branches)\//.test(path) ||
    (/(?:^|\/)\.env(?:$|\.)/.test(path) && path !== ".env.example") ||
    /(?:\.(?:pem|key|p12|pfx)$|(?:^|\/)signing_keys\.json$)/i.test(path)
  )
    findings.push({ path, rule: "excluded-private-or-runtime-path" });
  const data = git("show", `:${path}`);
  bytes += data.length;
  maxFileBytes = Math.max(maxFileBytes, data.length);
  if (data.length >= 100 * 1024 * 1024)
    findings.push({ path, rule: "github-file-size-limit" });
  if (!textExtensions.has(extname(path)) && !path.startsWith(".")) continue;
  textFiles++;
  const content = data.toString("utf8");
  for (const [rule, pattern] of rules) {
    pattern.lastIndex = 0;
    for (const match of content.matchAll(pattern))
      findings.push({
        path,
        rule,
        line: content.slice(0, match.index).split("\n").length,
      });
  }
  // JWT-shaped strings need payload inspection: service_role credentials are privileged.
  for (const match of content.matchAll(
    /\beyJ[A-Za-z0-9_-]+\.(eyJ[A-Za-z0-9_-]+)\.[A-Za-z0-9_-]+\b/g,
  )) {
    try {
      if (
        JSON.parse(Buffer.from(match[1], "base64url").toString()).role ===
        "service_role"
      )
        findings.push({ path, rule: "service-role-jwt" });
    } catch {
      /* A malformed example is not a credential. */
    }
  }
}
const report = {
  checkedAt: new Date().toISOString(),
  scope:
    "Staged Git paths and common secret patterns only; not a security certification or binary-content audit.",
  origin: git("remote", "get-url", "origin").toString().trim(),
  branch: git("branch", "--show-current").toString().trim(),
  files: paths.length,
  textFiles,
  bytes,
  maxFileBytes,
  findings,
  passed: findings.length === 0 && paths.length > 0,
};
await mkdir("output/reports", { recursive: true });
await writeFile(
  `output/reports/git-upload-audit-${report.checkedAt.slice(0, 10)}.json`,
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
