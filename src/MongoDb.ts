import { HardhatPluginError } from "hardhat/plugins";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Db, MongoClient } from "mongodb";

export class HardhatMongoDb{

    protected db: Db|undefined
    public client: MongoClient|undefined

    constructor(protected hre: HardhatRuntimeEnvironment){
        this.client = new MongoClient(this.hre.config.mongodb.dbConnectionString)
    }

    async getDb(): Promise<Db>{

        if (!this.client) throw new HardhatPluginError('hardhat-mongodb', 'MongoClient not created')

        if (!this.db){
            await this.client.connect()
            this.db = this.client.db(this.hre.config.mongodb.dbName)
        }

        return this.db

    }
    
}