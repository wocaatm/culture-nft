<template>
  <div class="container mx-auto pt-8">
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="collect">Collect Wallet</button>
    <p>余额： {{ balance }}</p>
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="mint">Mint Nft</button>

    <input v-model="methodName" type="text">
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="read">get Contract</button>
    <p>结果：{{ result }}</p>
  </div>
</template>

<script>
import web3Modal from '../config/web3Modal'
import { ethers } from "ethers";
import contractAbi from '../config/abi.json'

const nftAddress = '0x27B4BC6343f247316Ba013280dB0BdE772BF822c'

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
  created() {
    console.log(contractAbi)
  },
  methods: {
    // connect wallet
    async collect() {
      try {
        this.web3Provider = await web3Modal.connect()
        this.checkChainId()
        this.setEther()
        this.getAccountInfo()
        this.setContract()
      } catch(err) {
        console.log(err)
      }
    },
    checkChainId() {
      if (this.web3Provider.chainId !== this.desiredChainId) {
        // switch chainId
        // alert('worong network')
      }
    },
    async getAccountInfo() {
      // const accounts = await this.web3Provider.enable()
      const accounts = await this.ethersProvider.send('eth_requestAccounts', [])
      if (accounts && accounts.length) {
        this.account = accounts[0]
        const balance = await this.ethersProvider.getBalance(accounts[0])
        console.log('balance', balance)
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
