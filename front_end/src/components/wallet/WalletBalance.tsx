import { Token } from "../Main"
import { useEthers, useTokenBalance } from "@usedapp/core"
export interface WalletBalanceProbs {
    token: Token
}
export const WalletBalance = ({ token }: WalletBalanceProbs) => {
    const { image, address, name } = token
    const { account } = useEthers()
    return (<div>{account}</div>)
}