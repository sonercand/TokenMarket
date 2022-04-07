from brownie import interface, accounts, Token, config
from web3 import Web3


def deployToken(initialSuply, name, symbol):
    account = accounts.add(config["wallets"]["from_key"])
    tst = Token.deploy(
        initialSuply, name, symbol, {"from": account}, publish_source=True
    )


def main():
    print("Initial Supply:")
    initialSupply = input()
    print("Name:")
    name = input()
    print("Symbol:")
    symbol = input()

    deployToken(Web3.toWei(initialSupply, "ether"), name, symbol)
