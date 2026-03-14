import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mm-securite.fr',
  integrations: [sitemap()],
  compressHTML: true,
});
