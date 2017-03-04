# web3-console

### Node.js Command Line [REPL]() with Web3 auto-connect

`@digix/web3-console` is a small script that automatically hooks up web3 at various endpoints.

It will add a pre-configured `web3` to the console's namespace.

## Install

```
npm install -g @digix/web3-console
```

## Usage

```
web3-console [endpoint options]
```

## Examples

Leave the endpoint blank, and it'll connect to `http://localhost:8545`:

```
$ web3-repl

RPC Endpoint: http://localhost:8545
Node Version: Geth/v1.4.17-stable-3885907c/darwin/go1.7.1
Latest Block: 73813

// node REPL is now available, with `web3`
> web3.currentProvider
HttpProvider { host: 'http://localhost:8545', timeout: 0 }
```

Pass in a string as an endpoint:

```
$ web3-repl https://mainnet.infura.io

RPC Endpoint: https://mainnet.infura.io
Node Version: Parity//v1.4.11-stable-5452f71-20170217/x86_64-linux-gnu/rustc1.15.1
Latest Block: 3288877

> // node REPL
```

Pass in a number, and it will connect to that port on localhost:

```
$  web3-repl 6545

RPC Endpoint: http://localhost:6545
Node Version: EthereumJS TestRPC/v3.0.3/ethereum-js
Latest Block: 0

> // node REPL
```

## TODO

* Implement `web3-provider-engine` options (for transaction signing)
