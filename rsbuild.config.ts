import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rsbuildConfig = defineConfig({
  plugins: [pluginSvelte(), pluginLess()],
  dev: {},
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@@': resolve(__dirname, '.')
    }
  },
  server: {
    port: 47969
  }
});

export default rsbuildConfig;
