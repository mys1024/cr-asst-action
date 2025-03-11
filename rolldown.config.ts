import { defineConfig } from 'rolldown';

const config = defineConfig({
  platform: 'node',
  input: 'src/index.ts',
  output: {
    format: 'es',
    dir: 'dist',
  },
});

export default config;
