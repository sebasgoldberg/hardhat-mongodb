# hardhat-mongodb

This plug-in it is used to add a mongodb db instance to the hardhat runtime environment.

[Hardhat](https://hardhat.org) mongodb plugin. 

## What

This plugin will help you with the usage of a mongodb database in your hardhat's projects.

## Installation

```bash
npm install @sebasgoldberg/hardhat-mongodb
```

Import the plugin in your `hardhat.config.js`:

```js
require("@sebasgoldberg/hardhat-mongodb");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@sebasgoldberg/hardhat-mongodb";
```

## Environment extensions

This plugin extends the Hardhat Runtime Environment by adding a `mongodb` field.

Here is an example to get the mongodb db:

``` typescript
// ...
const db = await this.hre.mongodb.getDb()
// ...
```

## Configuration

Here is the optional configuration of this plugin:

``` typescript
const config: HardhatUserConfig = {
    // ...
    mongodb: {
        dbConnectionString: 'mongodb://localhost:27017',
        dbName: 'hardhat'
    }
    // ...
}
```

The example above, shows the default configuration values.