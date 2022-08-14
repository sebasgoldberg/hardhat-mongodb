// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import { Db } from "mongodb";

import { useEnvironment } from "./helpers";
import { HardhatMongoDb } from "../src/MongoDb";


describe("Integration tests examples", function () {
    describe("Hardhat Runtime Environment extension", function () {
        useEnvironment("hardhat-project");

        it("Should add the mongodb field", function () {
            assert.instanceOf(
                this.hre.mongodb,
                HardhatMongoDb
            );
        });

    });

    describe("HardhatConfig extension", function () {
        useEnvironment("hardhat-project");

        it("Should be possible to get the db.", async function () {
            assert.instanceOf(
                await this.hre.mongodb.getDb(),
                Db
            )
        });
    });

});
