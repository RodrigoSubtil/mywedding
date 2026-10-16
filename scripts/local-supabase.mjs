import http from "node:http";
import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

// Local Docker only. Never connects to the Supabase cloud or exposes this API over TCP.
const project = "MyWedding";
const network = "mywedding-local";
const command = process.argv[2] ?? "check";
const core = ["db", "auth", "rest", "pg_meta", "kong", "inbucket", "studio"];
const optional = ["realtime", "storage", "edge_runtime", "vector", "analytics"];
const nameOf = (service) => `supabase_${service}_${project}`;
const endpoint = JSON.parse(
  execFileSync(
    "docker",
    ["context", "inspect", "--format", "{{json .Endpoints.docker.Host}}"],
    { encoding: "utf8" },
  ),
);
if (endpoint !== "npipe:////./pipe/dockerDesktopLinuxEngine") {
  throw new Error(
    "This helper requires the verified local Docker Desktop Linux engine.",
  );
}
const socketPath = "\\\\.\\pipe\\dockerDesktopLinuxEngine";
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function docker(method, path, body, { binary = false } = {}) {
  const serialized = Buffer.isBuffer(body)
    ? body
    : body === undefined
      ? undefined
      : JSON.stringify(body);
  return new Promise((resolve, reject) => {
    const request = http.request(
      {
        socketPath,
        path: `/v1.51${path}`,
        method,
        headers: serialized
          ? {
              "Content-Type": Buffer.isBuffer(body)
                ? "application/x-tar"
                : "application/json",
              "Content-Length": Buffer.byteLength(serialized),
            }
          : {},
      },
      (response) => {
        const chunks = [];
        response.on("data", (chunk) => {
          chunks.push(chunk);
        });
        response.on("end", () => {
          if (response.statusCode >= 400) {
            // Do not print Docker payloads: inspect/create can contain credentials.
            reject(
              new Error(
                `Docker ${method} ${path.split("?")[0]}: HTTP ${response.statusCode}`,
              ),
            );
            return;
          }
          const data = Buffer.concat(chunks);
          resolve(
            binary
              ? data
              : data.length
                ? JSON.parse(data.toString("utf8"))
                : null,
          );
        });
      },
    );
    request.setTimeout(45_000, () =>
      request.destroy(new Error("Local Docker request timed out")),
    );
    request.on("error", reject);
    request.end(serialized);
  });
}
const inspect = (name) =>
  docker("GET", `/containers/${encodeURIComponent(name)}/json`);
async function preserveGatewayFiles(source, target) {
  // The CLI injects these files into the writable layer, not a volume.
  // Transfer the archive through the local pipe in memory; never write keys to disk.
  const archive = await docker(
    "GET",
    `/containers/${source}/archive?path=%2Fhome%2Fkong`,
    undefined,
    { binary: true },
  );
  await docker("PUT", `/containers/${target}/archive?path=%2Fhome`, archive);
}
function owned(container, expectedName) {
  if (
    container.Name !== `/${expectedName}` ||
    container.Config.Labels?.["com.supabase.cli.project"] !== project
  ) {
    throw new Error(`Ownership check failed: ${expectedName}`);
  }
}
function bindings(container) {
  return Object.entries(container.HostConfig.PortBindings ?? {}).flatMap(
    ([port, list]) =>
      (list ?? []).map((entry) => ({
        containerPort: port,
        hostPort: entry.HostPort,
        hostIp: entry.HostIp,
      })),
  );
}
function liveBindings(container) {
  return Object.entries(container.NetworkSettings.Ports ?? {}).flatMap(
    ([port, list]) =>
      (list ?? []).map((entry) => ({
        containerPort: port,
        hostPort: entry.HostPort,
        hostIp: entry.HostIp,
      })),
  );
}
function summary(container) {
  return {
    name: container.Name.slice(1),
    running: container.State.Running,
    health: !container.State.Running
      ? "stopped"
      : (container.State.Health?.Status ?? container.State.Status),
    ports: liveBindings(container),
    volumeNames: container.Mounts.filter(
      (mount) => mount.Type === "volume",
    ).map((mount) => mount.Name),
  };
}
const allBefore = await docker("GET", "/containers/json?all=true");
const otherBefore = allBefore
  .filter((item) => item.Labels?.["com.supabase.cli.project"] !== project)
  .map((item) => ({ id: item.Id, state: item.State }))
  .sort((a, b) => a.id.localeCompare(b.id));
const originals = [];
for (const service of core) {
  const name = nameOf(service);
  const container = await inspect(name);
  owned(container, name);
  originals.push(container);
}
if (command === "harden") {
  // Stop optional services only. Their containers, images and volumes are retained.
  for (const service of optional) {
    const match = allBefore.find((item) =>
      item.Names.includes(`/${nameOf(service)}`),
    );
    if (!match) continue;
    const container = await inspect(match.Id);
    owned(container, nameOf(service));
    if (container.State.Running || container.State.Restarting)
      await docker("POST", `/containers/${container.Id}/stop?t=20`);
  }
  for (const original of originals) {
    const ports = bindings(original);
    if (ports.every((entry) => entry.hostIp === "127.0.0.1")) {
      // Recover the first hardening attempt, which missed CLI-injected Kong files.
      if (
        original.Name === `/${nameOf("kong")}` &&
        original.State.Health?.Status !== "healthy"
      ) {
        const previous = allBefore.find((item) =>
          item.Names.some((name) =>
            name.startsWith(`/${nameOf("kong")}_before_loopback_`),
          ),
        );
        if (previous) {
          const source = await inspect(previous.Id);
          if (
            source.Config.Labels?.["com.supabase.cli.project"] !== project ||
            source.State.Running ||
            source.Image !== original.Image ||
            JSON.stringify(source.Config.Env) !==
              JSON.stringify(original.Config.Env)
          )
            throw new Error(
              "Gateway recovery source does not match the current local configuration.",
            );
          if (original.State.Running || original.State.Restarting)
            await docker("POST", `/containers/${original.Id}/stop?t=20`);
          await preserveGatewayFiles(source.Id, original.Id);
          await docker("POST", `/containers/${original.Id}/start`);
          console.log(
            "Local gateway configuration recovered; no credentials were written to disk.",
          );
        }
      }
      continue;
    }
    if (!original.NetworkSettings.Networks[network])
      throw new Error(`Unexpected network: ${original.Name}`);
    const name = original.Name.slice(1);
    const backupName = `${name}_before_loopback_${Date.now()}`;
    const hostConfig = structuredClone(original.HostConfig);
    for (const list of Object.values(hostConfig.PortBindings ?? {})) {
      for (const entry of list ?? []) entry.HostIp = "127.0.0.1";
    }
    // Explicitly reuse every existing volume, including anonymous ones.
    hostConfig.Binds ??= [];
    for (const mount of original.Mounts.filter(
      (item) => item.Type === "volume",
    )) {
      if (
        !hostConfig.Binds.some(
          (binding) => binding.split(":")[1] === mount.Destination,
        )
      ) {
        hostConfig.Binds.push(
          `${mount.Name}:${mount.Destination}:${mount.RW ? "rw" : "ro"}`,
        );
      }
    }
    const endpoints = Object.fromEntries(
      Object.entries(original.NetworkSettings.Networks).map(([key, value]) => [
        key,
        { Aliases: value.Aliases ?? [] },
      ]),
    );
    if (original.State.Running)
      await docker("POST", `/containers/${original.Id}/stop?t=20`);
    await docker(
      "POST",
      `/containers/${original.Id}/rename?name=${encodeURIComponent(backupName)}`,
    );
    try {
      const created = await docker(
        "POST",
        `/containers/create?name=${encodeURIComponent(name)}`,
        {
          ...original.Config,
          HostConfig: hostConfig,
          NetworkingConfig: { EndpointsConfig: endpoints },
        },
      );
      if (name === nameOf("kong"))
        await preserveGatewayFiles(original.Id, created.Id);
      await docker("POST", `/containers/${created.Id}/start`);
      const replacement = await inspect(name);
      owned(replacement, name);
      const originalVolumes = summary(original).volumeNames.sort();
      if (
        JSON.stringify(originalVolumes) !==
        JSON.stringify(summary(replacement).volumeNames.sort())
      ) {
        await docker("POST", `/containers/${replacement.Id}/stop?t=20`);
        throw new Error(`Volume verification failed: ${name}`);
      }
      if (
        liveBindings(replacement).some((entry) => entry.hostIp !== "127.0.0.1")
      ) {
        await docker("POST", `/containers/${replacement.Id}/stop?t=20`);
        throw new Error(`Loopback verification failed: ${name}`);
      }
      console.log(
        `${name}: ports restricted to 127.0.0.1; original retained stopped.`,
      );
    } catch (error) {
      console.error(
        `Stopped original retained as ${backupName}; no volumes were deleted.`,
      );
      throw error;
    }
  }
} else if (command === "up") {
  for (const container of originals) {
    if (bindings(container).some((entry) => entry.hostIp !== "127.0.0.1"))
      throw new Error(
        "Run local:harden before starting: unrestricted port found.",
      );
  }
  for (const container of originals)
    if (!container.State.Running)
      await docker("POST", `/containers/${container.Id}/start`);
} else if (command === "down") {
  for (const container of [...originals].reverse())
    if (container.State.Running)
      await docker("POST", `/containers/${container.Id}/stop?t=20`);
} else if (command !== "check") {
  throw new Error("Use check, harden, up or down.");
}
let current;
const deadline = Date.now() + 90_000;
do {
  current = await Promise.all(core.map((service) => inspect(nameOf(service))));
  if (
    command === "down" ||
    command === "check" ||
    current.every(
      (item) =>
        item.State.Running &&
        (!item.State.Health || item.State.Health.Status === "healthy"),
    )
  )
    break;
  await pause(2000);
} while (Date.now() < deadline);
const allAfter = await docker("GET", "/containers/json?all=true");
const retained = allAfter
  .filter(
    (item) =>
      item.Labels?.["com.supabase.cli.project"] === project &&
      item.Names.some((name) => name.includes("_before_loopback_")),
  )
  .map((item) => ({
    name: item.Names[0].slice(1),
    id: item.Id,
    state: item.State,
  }));
const otherAfter = allAfter
  .filter((item) => item.Labels?.["com.supabase.cli.project"] !== project)
  .map((item) => ({ id: item.Id, state: item.State }))
  .sort((a, b) => a.id.localeCompare(b.id));
const httpChecks =
  command === "down"
    ? []
    : await Promise.all(
        [
          "http://127.0.0.1:54321/auth/v1/health",
          "http://127.0.0.1:54323/",
          "http://127.0.0.1:54324/api/v1/messages",
        ].map(async (url) => {
          try {
            const response = await fetch(url, {
              signal: AbortSignal.timeout(10_000),
            });
            await response.body?.cancel();
            return { url, status: response.status, ok: response.ok };
          } catch {
            return { url, status: null, ok: false };
          }
        }),
      );
const auth = current.find((item) => item.Name === `/${nameOf("auth")}`);
const authSettings = Object.fromEntries(
  auth.Config.Env.filter((entry) =>
    /^(GOTRUE_PASSWORD_MIN_LENGTH|GOTRUE_MAILER_AUTOCONFIRM|GOTRUE_SECURITY_UPDATE_PASSWORD_REQUIRE_REAUTHENTICATION|GOTRUE_SMTP_HOST|GOTRUE_SMTP_PORT)=/.test(
      entry,
    ),
  ).map((entry) => {
    const index = entry.indexOf("=");
    return [entry.slice(0, index), entry.slice(index + 1)];
  }),
);
const report = {
  checkedAt: new Date().toISOString(),
  project,
  scope:
    "Local MyWedding Docker only. No hosted project, login integration, production email or publication.",
  command,
  httpChecks,
  authSettings,
  services: current.map(summary),
  originalContainersRetained: retained,
  optionalServices: allAfter
    .filter((item) =>
      optional.some((service) => item.Names.includes(`/${nameOf(service)}`)),
    )
    .map((item) => ({ name: item.Names[0].slice(1), state: item.State })),
  otherContainersUnchanged:
    JSON.stringify(otherBefore) === JSON.stringify(otherAfter),
  loopbackOnly: current.every(
    (item) =>
      bindings(item).every((entry) => entry.hostIp === "127.0.0.1") &&
      liveBindings(item).every((entry) => entry.hostIp === "127.0.0.1"),
  ),
  healthy: current.every(
    (item) =>
      item.State.Running &&
      (!item.State.Health || item.State.Health.Status === "healthy"),
  ),
};
await mkdir("output/reports", { recursive: true });
await writeFile(
  `output/reports/docker-local-${command}-${report.checkedAt.slice(0, 10)}.json`,
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
if (
  !report.otherContainersUnchanged ||
  !report.loopbackOnly ||
  (command !== "down" &&
    (!report.healthy || httpChecks.some((item) => !item.ok)))
)
  process.exitCode = 1;
