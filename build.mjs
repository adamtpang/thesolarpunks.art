import { mkdirSync, copyFileSync } from 'node:fs';
mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'script.js', 'styles.css', 'sunday_comic.pdf']) copyFileSync(file, 'dist/' + file);
