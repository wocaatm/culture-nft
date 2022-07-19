<template>
  <div class="container mx-auto pt-8">
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="collect">Collect Wallet</button>
    <p>余额： {{ balance }}</p>
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="mint">Mint Nft</button>

    <input v-model="methodName" type="text">
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="read">get Contract</button>
    <p>结果：{{ result }}</p>

    <button @click="airdrop">Set token base uri</button>
  </div>
</template>

<script>
import web3Modal from '../config/web3Modal'
import { ethers } from "ethers";
import contractAbi from '../config/abi.json'

const nftAddress = '0x9989D94F7d0Ab5B1b1cBb20203F38c0d63C3699e'

export default {
  name: 'cultureNft',
  data() {
    return {
      web3Provider: null,
      ethersProvider: null,
      signer: null,
      contractInstance: null,
      account: '',
      balance: 0,
      desiredChainId: 4,

      // 合约测试
      methodName: '',
      result: '',
    }
  },
  methods: {
    // connect wallet
    async collect() {
      try {
        this.web3Provider = await web3Modal.connect()
        this.setEther()
        this.checkChainId()
        this.getAccountInfo()
        this.setContract()
      } catch(err) {
        console.log(err)
      }
    },
    async checkChainId() {
      const { chainId } = await this.ethersProvider.getNetwork()
      if (chainId !== this.desiredChainId) {
        // switch chainId
        console.log('wrong networkd')
        // alert('worong network')
      }
    },
    async getAccountInfo() {
      // const accounts = await this.web3Provider.enable()
      // const accounts = await this.ethersProvider.send('eth_requestAccounts', [])
      const accounts = await this.ethersProvider.listAccounts()
      if (accounts && accounts.length) {
        this.account = accounts[0]
        const balance = await this.ethersProvider.getBalance(accounts[0])
        this.balance = ethers.utils.formatEther(balance)
      }
    },
    async setEther() {
      this.ethersProvider = new ethers.providers.Web3Provider(this.web3Provider)
      this.signer = this.ethersProvider.getSigner()
    },
    async setContract() {
      this.contractInstance = new ethers.Contract(nftAddress, contractAbi, this.signer)
    },
    async mint() {
      console.log('mint')
    },
    async airdrop() {
      const tx = await this.contractInstance.setBaseURL('https://chinese-culture.4everland.store')
      console.log(tx)
    },
    async read() {
      if (this.methodName) {
        this.result = await this.contractInstance[this.methodName]()
      }
    },
    async syncAccount() {
      this.web3Provider.on('chainChanged', (chainId) => {
        console.log('chainId', chainId)
      })
      this.web3Provider.on('accountsChanged', (account) => {
        console.log('account', account)
      })
    },
  },
}
</script>
