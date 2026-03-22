import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mm-securite.fr',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/merci/'),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
