import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://heluvaguy.github.io',
  base: '/invisible-series/invisible-interface/',
  integrations: [mdx()],
});
