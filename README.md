# hardhat-network-alias

This plug-in it is used to add network aliases, organizing the aliases by group.

[Hardhat](https://hardhat.org) network alias plugin. 

## What

This plugin will help you with:
- I you want the configuration of one network to be applied in another network.

## Installation

```bash
npm install @sebasgoldberg/hardhat-network-alias
```

Import the plugin in your `hardhat.config.js`:

```js
require("@sebasgoldberg/hardhat-network-alias");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@sebasgoldberg/hardhat-network-alias";
```

## Environment extensions

This plugin extends the Hardhat Runtime Environment by adding an `networkAlias` field.

Here is an example to get the network name, considering the alias config.

``` typescript
// ...
this.hre.networkAlias.getNetworkName("aave")
// ...
```

For the configuration defined below, if it is runnning the `'hardhat'`, will be obtained the `'mainnet'` network.

Please checkout the tests for further details.


## Configuration

In the following example it is configured the `'aave'` group.

For the `'aave'` group `'localhost'` and `'hardhat'` will be considered as `'mainnet'` network.

``` typescript
const config: HardhatUserConfig = {
  // ...
  networkAliases: {
    'aave': {
      'localhost': 'mainnet',
      'hardhat': 'mainnet'
    }
  }
  // ...
}
```
