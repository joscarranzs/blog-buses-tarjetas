import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joscarranzs.github.io',
  base: '/blog-buses-tarjetas',
  output: 'static',
  devToolbar: { enabled: false },
});