import { HardhatRuntimeEnvironment } from "hardhat/types";
import { HardhatPluginError } from 'hardhat/plugins';

export class NetworkAlias{

    constructor(protected hre: HardhatRuntimeEnvironment){

    }

    public getNetworkName(group: string): string{
        const networkAliasesForGroup = this.hre.config.networkAliases[group]
        if (!networkAliasesForGroup)
            throw new HardhatPluginError("hardhat-network-alias", `ERROR: Group '${group}' not defined in hre.config.networkAliases.`)
        const aliasPath: { [networkNameOrAlias: string]: boolean } = {}
        let lastNetworkName = this.hre.network.name
        while (true){
            aliasPath[lastNetworkName] = true
            if (!networkAliasesForGroup[lastNetworkName])
                break
            lastNetworkName = networkAliasesForGroup[lastNetworkName]
            if (lastNetworkName in aliasPath)
                throw new HardhatPluginError("hardhat-network-alias", "ERROR: hre.config.networkAliases circular dependency found.")
        }
        return lastNetworkName
    }

   
}