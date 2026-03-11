import { defineConfig } from 'astro/config';

// Borramos la línea de import netlify

export default defineConfig({
  site: 'https://GVPV12.github.io',
  base: '/anywhere-healing',
  output: 'static', 
  // Borramos adapter: netlify()
  // Borramos experimental: { session: true } (GitHub Pages no soporta sesiones de servidor)
});