import { HardhatPluginError } from "hardhat/plugins";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Db, MongoClient } from "mongodb";

export class HardhatMongoDb{

    protected db: Db|undefined
    protected client: MongoClient|undefined

    constructor(protected hre: HardhatRuntimeEnvironment){
        this.client = new MongoClient(this.hre.config.mongodb.dbConnectionString)
    }

    async getDb(): Promise<Db>{

        const client = this.getClient()

        if (!this.db){
            await client.connect()
            this.db = client.db(this.hre.config.mongodb.dbName)
        }

        return this.db

    }

    getClient(): MongoClient{

        if (!this.client) 
            throw new HardhatPluginError('hardhat-mongodb', 'MongoClient not created')

        return this.client

    }
    
}