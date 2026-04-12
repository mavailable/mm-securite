import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://mm-securite.fr',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/merci') &&
        !page.includes('/404') &&
        !page.includes('/admin'),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
    }),
    react(),
  ],
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
    build: { cssMinify: true },
  },
});
