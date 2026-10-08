import { readdir, copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const website = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(website, 'dist/client');
const repository = path.resolve(website, '..');
const allowed = new Set(['index.html', 'assets']);

async function copyDirectory(from, to) {
  await mkdir(to, { recursive: true });
  for (const entry of await readdir(from, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error('Symlinks are not permitted in the static output');
    const source = path.join(from, entry.name);
    const target = path.join(to, entry.name);
    if (entry.isDirectory()) await copyDirectory(source, target);
    else if (entry.isFile()) await copyFile(source, target);
  }
}

const entries = await readdir(output, { withFileTypes: true });
for (const entry of entries) {
  if (!allowed.has(entry.name)) throw new Error(`Unexpected output: ${entry.name}`);
  if (entry.isSymbolicLink()) throw new Error('Symlinks are not permitted in the static output');
}
for (const entry of entries) {
  const source = path.join(output, entry.name);
  const target = path.join(repository, entry.name);
  if (entry.isDirectory()) await copyDirectory(source, target);
  else if (entry.isFile()) await copyFile(source, target);
}
console.log('Published index.html and assets. Existing support directories were not modified.');
