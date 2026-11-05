// Downloads every Pexels photo the site uses into public/photos as WebP,
// so the page serves its own images instead of hot-linking the CDN.
// Run once (and again after adding a photo):  npm run photos
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = join(root, "public", "photos");
mkdirSync(out, { recursive: true });

const sources = ["src/lib/apps.js", "src/lib/photos.js"].map((f) => readFileSync(join(root, f), "utf8")).join("\n");
const wanted = new Map();
for (const m of sources.matchAll(/pexels\((\d+)(?:,\s*(\d+))?\)/g)) {
  const id = m[1], w = Number(m[2] || 800);
  wanted.set(`${id}-${w}`, { id, w });
}

let ok = 0, skipped = 0, failed = 0;
for (const [name, { id, w }] of wanted) {
  const file = join(out, `${name}.webp`);
  if (existsSync(file)) { skipped++; continue; }
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&fm=webp&q=72&w=${w}&h=${Math.round(w * 0.75)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    ok++;
    console.log(`saved  ${name}.webp`);
  } catch (e) {
    failed++;
    console.warn(`failed ${name}: ${e.message} (the page will fall back to the Pexels CDN)`);
  }
}
console.log(`\n${ok} downloaded, ${skipped} already there, ${failed} failed → public/photos`);
