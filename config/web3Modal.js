import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import rpcJson from './rpc.json'

// get all walletconnect
const allRpc = {}
Object.keys(rpcJson).map((chainId) => {
  const rpcs = rpcJson[chainId]?.rpcs
  if (rpcs) allRpc[chainId] = rpcs[0] 
})

Object.assign(allRpc, {
  1: 'https://rpc.ankr.com/eth',
  // rinkeby test net
  4: 'https://rinkeby.infura.io/v3/5b08f1ec7d114231ab0e3fe82ea10def',
  // bsc network
  56: 'https://bsc-dataseed4.binance.org',
  137: 'https://rpc.ankr.com/polygon',
})

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: allRpc
    }
  }
};

export default new Web3Modal({
  cacheProvider: false,
  providerOptions,
});