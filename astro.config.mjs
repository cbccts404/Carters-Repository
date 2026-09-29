// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH lets the same build run at "/" locally and under a sub-path on
// GitHub Pages (e.g. /Carters-Repository/). See .github/workflows/deploy.yml.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
