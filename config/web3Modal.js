import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: 'https://bsc-dataseed1.binance.org/',
      },
    }
  }
};

export default new Web3Modal({
  cacheProvider: false,
  providerOptions,
});