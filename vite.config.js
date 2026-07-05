import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $app: path.resolve('./src/app'),
      $pages: path.resolve('./src/pages'),
      $widgets: path.resolve('./src/widgets'),
      $features: path.resolve('./src/features'),
      $shared: path.resolve('./src/shared'),
      $entities: path.resolve('./src/entities'),
    }
  }
});
