#!/usr/bin/env node

import { argv } from 'node:process';
import { program } from 'commander';
import { version } from '../../package.json';
import { envOptions } from './env';
import type { CliOptions } from './types';

async function cli() {
  const options = program
    .name('starter-node')
    .option('--foo <foo>', 'Foo.', envOptions.foo)
    .option(
      '--bar <bar>',
      'Bar.',
      parseFloat,
      typeof envOptions.bar === 'number' ? envOptions.bar : 0,
    )
    .option(
      '--baz [bool]',
      'Baz.',
      (val) => val !== 'false',
      typeof envOptions.baz === 'boolean' ? envOptions.baz : true,
    )
    .version(version, '-v, --version', 'Print version.')
    .helpOption('-h, --help', 'Print help.')
    .parse(argv)
    .opts<CliOptions>();

  console.log(options);
}

cli();
