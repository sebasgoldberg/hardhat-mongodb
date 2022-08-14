// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";
import { NetworkAlias } from "../src/NetworkAlias";


import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
    describe("Hardhat Runtime Environment extension", function () {
        useEnvironment("hardhat-project");

        it("Should add the networkAlias field", function () {
            assert.instanceOf(
                this.hre.networkAlias,
                NetworkAlias
            );
        });

    });

    describe("HardhatConfig extension", function () {
        useEnvironment("hardhat-project");

        it("Should get the mainnet network name for aave group.", function () {
            assert.equal(
                this.hre.networkAlias.getNetworkName("aave"),
                'mainnet'
            )
        });
    });

    describe("HardhatConfig extension", function () {
        useEnvironment("hardhat-project");
        it("Should throw exception when group name does not exists.", function () {
            assert.throws(() => {
                this.hre.networkAlias.getNetworkName("aave2")
            })
        });
    });

    describe("HardhatConfig extension", function () {
        useEnvironment("no-hardhat-alias");
        it("Should return the actual network name, when no mapping is found.", function () {
            assert.equal(
                this.hre.networkAlias.getNetworkName("aave"),
                'hardhat'
            )
        });
    });

    describe("HardhatConfig extension", function () {
        useEnvironment("circular-reference");
        it("Should throw exception when exists circular reference in config.", function () {
            assert.throws(() => {
                this.hre.networkAlias.getNetworkName("aave")
            })
        });
    });

});
