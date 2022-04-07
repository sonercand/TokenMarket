# TokenMarket

## Requierements
    *nodejs
    *brownie
## Installation

     cd source
     brownie init
     cd ..
     npx create-react-app front_end --template typescript
     cd front_end
     yarn
     # view front end
     yarn start
     # stop
     ctrl c 
     yarn add @usedapp/core
     yarn add @material-ui/core
     # deploy brownie config yaml to front end
     brownie run scripts/frontEndHelper 
     brownie run scripts/deployERC20Tokens # deploy token
     brownie run scripts/updateFrontEnd