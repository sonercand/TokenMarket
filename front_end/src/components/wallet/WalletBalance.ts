import { Token } from "../Main"
import { useEthers, useTokenBalance } from "@usedapp/core"
import { Box } from "@material-ui/core"
interface WalletBalanceProbs {
    token: Token
}
export const WalletBalance = ({ token }: WalletBalanceProbs) => {
    const { image, address, name } = token
    const { account } = useEthers()
    const tokenBalance = useTokenBalance(address, account)
    console.log(tokenBalance?.toString())
    return (
        <div>a < /div>
    )


}