import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://GVPV12.githu.io',
  base:'anywhere-healing',
  output: "static", // Para Shopify
  adapter: netlify(),
  experimental: {
    session: true // Esto soluciona el error
  }
});