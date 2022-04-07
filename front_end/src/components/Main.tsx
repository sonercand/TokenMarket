
import { useEthers } from "@usedapp/core"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"
import helperConfig from "../helper-config.json"
import networkMapping from "../chain-info/deployments/map.json"
import brownieConfig from "../brownie-config.json"
import { constants } from "ethers"
import tokenImage from "../token.png"
import wethImage from "../ether.png"
import { Wallet } from "./wallet/Wallet"
export type Token = {
    image: string,
    address: string,
    name: string
}
export const Main = () => {
    // show token values from wallet
    const { chainId } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    const TokenAddress = chainId ? networkMapping[String(chainId)]['Token'][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig['networks']['kovan']['contracts']['wethAddress'] : constants.AddressZero
    const supportedTokens: Array<Token> = [
        {
            image: tokenImage,
            address: TokenAddress,
            name: 'ST'
        },
        {
            image: wethImage,
            address: wethTokenAddress,
            name: 'wETH'
        }
    ]
    return (<Wallet supportedTokens={supportedTokens} />)
}