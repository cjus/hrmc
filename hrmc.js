'use strict';

const repl = require('repl');
const client = require('./lib/client');
const version = require('./package.json').version;

process.stdout.write(`Hydra Router Message Client v.${version}\r\n`);
process.stdout.write('Use client members or .exit to close repl.\r\n');

let replServer = repl.start({
  prompt: '\n➤ ',
  ignoreUndefined: true
});

replServer.context.client = client;
