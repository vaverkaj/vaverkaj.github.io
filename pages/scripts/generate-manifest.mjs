/**
 * Scans src/assets/posts/*.md and writes src/assets/posts/manifest.json.
 * Run automatically via the prestart / prebuild npm scripts.
 *
 * Frontmatter format (must be the very first thing in the file):
 *
 *   ---
 *   title: My Post Title
 *   date: 2026-03-10
 *   description: One-sentence summary shown in the card
 *   tags: [angular, typescript]
 *   ---
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __dir = fileURLToPath(new URL('.', import.meta.url));
const postsDir = join(__dir, '../src/assets/posts');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const result = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const raw = line.slice(colonIdx + 1).trim();

    if (raw.startsWith('[') && raw.endsWith(']')) {
      result[key] = raw.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    } else {
      result[key] = raw;
    }
  }
  return result;
}

const files = readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .sort()
  .reverse(); // newest first

const manifest = files.map(filename => {
  const content = readFileSync(join(postsDir, filename), 'utf-8');
  const meta = parseFrontmatter(content);
  const slug = basename(filename, '.md');

  return {
    slug,
    filename,
    title: meta.title ?? slug,
    date: meta.date ?? '',
    description: meta.description ?? '',
    tags: meta.tags ?? [],
  };
});

const outPath = join(postsDir, 'manifest.json');
writeFileSync(outPath, JSON.stringify(manifest, null, 2));
console.log(`[posts] manifest written: ${manifest.length} post(s) → ${outPath}`);
