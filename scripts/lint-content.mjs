// Checks every structure file's YAML frontmatter and reports the file + line of any syntax error.
// Usage: npm run lint   (schema errors are reported by `npm run build`/`npm run dev`)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import * as yaml from 'js-yaml';

const root = 'content/structures';
const files = [];
const walk = (dir) =>
  readdirSync(dir).forEach((f) => {
    const p = join(dir, f);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') && files.push(p);
  });
walk(root);

let bad = 0;
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    console.log(`✗ ${file}: missing --- frontmatter block`);
    bad++;
    continue;
  }
  try {
    yaml.load(match[1]);
  } catch (e) {
    bad++;
    const line = (e.mark?.line ?? 0) + 2; // +1 for 0-index, +1 for the opening ---
    console.log(`✗ ${file}:${line}  ${e.reason}`);
    console.log(`    ${text.split('\n')[line - 1]?.trim().slice(0, 120)}`);
    console.log('    Tip: text containing ": ", or starting with [[, {{ or *, must be in quotes or a >- block.');
  }
}
console.log(bad ? `\n${bad} file(s) with YAML errors.` : `✓ ${files.length} files OK`);
process.exit(bad ? 1 : 0);
