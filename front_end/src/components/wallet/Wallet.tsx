import { Token } from "../Main"
import { Box, Tab } from "@material-ui/core"
import { TabContext, TabList, TabPanel } from "@material-ui/lab"
import React, { useState } from "react"
import { WalletBalance } from "./WalletBalance"
interface WalletProps { supportedTokens: Array<Token> }


export const Wallet = ({ supportedTokens }: WalletProps) => {
    const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setSelectedTokenIndex(parseInt(newValue))
    }
    return (
        <Box>
            <h2>Your Wallet</h2>
            <Box>
                <TabContext value={selectedTokenIndex.toString()}>
                    <TabList onChange={handleChange} aria-label="stake">
                        {supportedTokens.map((token, index) => {
                            return (<Tab label={token.name} value={index.toString()} key={index} />)
                        })}
                    </TabList>
                    {supportedTokens.map((token, index) => {
                        return (
                            <TabPanel value={index.toString()} key={index}>
                                <div>
                                    <WalletBalance token={supportedTokens[selectedTokenIndex]} />
                                </div>
                            </TabPanel>
                        )
                    })}
                </TabContext>
            </Box>
        </Box>)
}