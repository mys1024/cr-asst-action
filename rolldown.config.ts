import { builtinModules } from 'node:module';
import { defineConfig } from 'rolldown';

const config = defineConfig({
  platform: 'node',
  input: 'src/index.ts',
  output: {
    dir: 'dist',
  },
  external: [...builtinModules, ...builtinModules.map((builtinModule) => `node:${builtinModule}`)],
});

export default config;
