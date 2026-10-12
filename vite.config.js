import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Assets are referenced with an absolute base so the same bundle works from
// both `/` and `/de` (relative URLs would resolve to `/de/assets/...`).
// If you host under a sub-path (e.g. /portfolio/), change base accordingly.
//
// After the build, emit:
//   dist/de/index.html – German entry point (lang + title + description set
//                        for crawlers; the app also derives the language from
//                        the URL at runtime, so this is purely a bonus)
//   dist/404.html      – SPA fallback for static hosts such as GitHub Pages
//                        that have no rewrite rules (nginx already falls back
//                        to /index.html, see nginx.conf)
function localizedEntryPages() {
  let outDir = 'dist';
  return {
    name: 'localized-entry-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const html = readFileSync(resolve(outDir, 'index.html'), 'utf8');
      const de = html
        .replace('<html lang="en">', '<html lang="de">')
        .replace(/<title>.*?<\/title>/, '<title>Shohan · Softwareentwickler</title>')
        .replace(
          /(<meta name="description" content=")[^"]*(")/,
          '$1Md Jahan Ali Shohan – Softwareentwickler. Java, Liferay, Spring Boot, React. Wohnhaft in Essen, Deutschland.$2',
        );
      mkdirSync(resolve(outDir, 'de'), { recursive: true });
      writeFileSync(resolve(outDir, 'de', 'index.html'), de);
      writeFileSync(resolve(outDir, '404.html'), html);
    },
  };
}

export default defineConfig({
  plugins: [react(), localizedEntryPages()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
