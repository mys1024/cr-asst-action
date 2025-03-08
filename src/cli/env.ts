import { env } from 'node:process';
import 'dotenv/config';
import type { CliOptions } from './types';

function floatEnvVar(envVar: string | undefined): number | undefined {
  if (envVar === undefined) {
    return;
  }
  const val = parseFloat(envVar);
  return isNaN(val) ? undefined : val;
}

function booleanEnvVar(envVar: string | undefined): boolean | undefined {
  return envVar === 'true' ? true : envVar === 'false' ? false : undefined;
}

export const envOptions: CliOptions = {
  foo: env.FOO,
  bar: floatEnvVar(env.BAR),
  baz: booleanEnvVar(env.BAZ),
};
