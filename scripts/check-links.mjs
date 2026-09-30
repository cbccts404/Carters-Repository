// Checks that every internal href/src in the built site (dist/) points at a file that exists.
// Usage: node scripts/check-links.mjs   (respects BASE_PATH, e.g. /PA-School-Repository)
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '') + '/';

const html = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) html.push(p);
  }
})(DIST);

const exists = (path) => {
  const p = join(DIST, decodeURIComponent(path));
  return existsSync(p) && (statSync(p).isFile() || existsSync(join(p, 'index.html')));
};

const broken = new Map();
let checked = 0;
for (const file of html) {
  const text = readFileSync(file, 'utf8');
  for (const [, url] of text.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    if (!url.startsWith(base) || url.startsWith('//')) continue; // external, relative or protocol-relative
    checked++;
    const path = url.slice(base.length);
    if (!exists(path)) {
      const from = broken.get(url) ?? [];
      from.push(file.slice(DIST.length));
      broken.set(url, from);
    }
  }
}

if (checked === 0) {
  console.error(`✗ no internal links found under base "${base}" — is BASE_PATH the same as for the build?`);
  process.exit(1);
}
if (broken.size) {
  console.error(`✗ ${broken.size} broken internal link(s):`);
  for (const [url, from] of broken) console.error(`  ${url}  (from ${from.slice(0, 3).join(', ')}${from.length > 3 ? ', …' : ''})`);
  process.exit(1);
}
console.log(`✓ ${checked} internal links in ${html.length} pages OK`);
