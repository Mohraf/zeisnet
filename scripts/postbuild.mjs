/**
 * Post-export step for cPanel/shared hosting:
 * some Apache/cPanel configurations block folders starting with an
 * underscore, so every /_next/... asset request 404s. This script renames
 * out/_next -> out/assets and rewrites all references in the exported files.
 *
 * Runs automatically after `next build` (see package.json).
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");
const OLD_DIR = path.join(OUT, "_next");
const NEW_DIR = path.join(OUT, "assets");

const TEXT_EXTENSIONS = new Set([".html", ".css", ".js", ".mjs", ".txt", ".xml", ".json", ".webmanifest", ".map"]);

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

try {
  await fs.access(OLD_DIR);
} catch {
  console.log("postbuild: out/_next not found — nothing to do.");
  process.exit(0);
}

// Remove any stale assets dir from a previous build, then rename.
await fs.rm(NEW_DIR, { recursive: true, force: true });
await fs.rename(OLD_DIR, NEW_DIR);

let rewritten = 0;
for await (const file of walk(OUT)) {
  if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
  const before = await fs.readFile(file, "utf8");
  const after = before
    .replaceAll("/_next/", "/assets/")
    .replaceAll('"_next/', '"assets/')
    .replaceAll("'_next/", "'assets/");
  if (after !== before) {
    await fs.writeFile(file, after);
    rewritten++;
  }
}

console.log(`postbuild: renamed out/_next -> out/assets and rewrote references in ${rewritten} files.`);
