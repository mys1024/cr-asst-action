import { builtinModules } from 'node:module';
import { defineConfig } from 'rolldown';

const config = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/index.mjs',
  },
  external: [...builtinModules, ...builtinModules.map((builtinModule) => `node:${builtinModule}`)],
});

export default config;
