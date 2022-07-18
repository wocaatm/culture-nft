import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        // rinkeby test net
        4: 'https://rinkeby.infura.io/v3/5b08f1ec7d114231ab0e3fe82ea10def',
        // bsc network
        56: 'https://bsc-dataseed1.binance.org/',
      },
    }
  }
};

export default new Web3Modal({
  cacheProvider: false,
  providerOptions,
});