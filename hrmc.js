'use strict';

const repl = require('repl');
const client = require('./client');
const version = require('./package.json').version;

process.stdout.write(`Hydra Router Message Client  ver ${version}\r\n`);

// open the repl session
var replServer = repl.start({
  prompt: `\n➤ `,
  ignoreUndefined: true
});

replServer.context.client = client;

