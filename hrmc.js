const repl = require('repl');
const client = require('./lib/client');
const version = require('./package.json').version;

process.stdout.write(`Hydra Router Message Client v.${version}\r\n`);
process.stdout.write('Use client.help() for help.\r\n');
process.stdout.write('Use client members or .exit to close repl.\r\n');

let replServer = repl.start({
  prompt: ' \n➤ ',
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  ignoreUndefined: true
});

replServer.context.c = replServer.context.client = client;

replServer.on('exit', () => {
  replServer.context.client.close();
  process.exit();
});
