// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Static site. Vercel serves the built files from dist/ with no adapter.
export default defineConfig({
  // Inter is downloaded once at build time and served from this site,
  // so visitors' browsers never contact Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
