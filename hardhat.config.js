require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vJI_jEn4nXVjbEXzVA8yUpGrpmYysgQo",
      accounts: ["6e2aa47f5b0bfc555017200527b8dc78daf6411a2b3c97459e0122bf32b6b995"]
    },
  },
};