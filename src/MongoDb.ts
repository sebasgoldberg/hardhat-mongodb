import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Db, MongoClient } from "mongodb";

export class HardhatMongoDb{

    protected db: Db|undefined

    constructor(protected hre: HardhatRuntimeEnvironment){
    }

    async getDb(): Promise<Db>{
        if (!this.db){
            const client = new MongoClient(this.hre.config.mongodb.dbConnectionString)
            await client.connect()
            this.db = client.db(this.hre.config.mongodb.dbName)
        }
        return this.db
    }
    
}