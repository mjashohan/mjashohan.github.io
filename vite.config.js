import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you host at https://mjashohan.github.io/portfolio change base to '/portfolio/'.
// If you host at https://mjashohan.github.io/ (user site) keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
