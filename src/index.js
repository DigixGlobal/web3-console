#!/usr/bin/env node

import repl from 'repl';
import paraseArgs from 'minimist';
import chalk from 'chalk';
import Web3 from 'web3';

const args = paraseArgs(process.argv.slice(2));
const arg = (args._ || [])[0];

let url = 'http://localhost:8545';

if (typeof arg === 'string') {
  url = arg;
} else if (typeof arg === 'number') {
  url = `http://localhost:${arg}`;
}

const web3 = new Web3(new Web3.providers.HttpProvider(url));

function prettyInfo(name, value) {
  return `${chalk.dim(`${name}:`)} ${chalk.green(value)}`;
}

try {
  process.stdout.write(`
${prettyInfo('RPC Endpoint', url)}
${prettyInfo('Node Version', web3.version.node)}
${prettyInfo('Latest Block', web3.eth.blockNumber)}
${prettyInfo('Network ID #', web3.version.network)}

`);
  global.web3 = web3;
  repl.start({});
} catch (e) {
  process.stdout.write(`${chalk.red(`Error connecting to ${url}`)}\n${e}\n`);
}
