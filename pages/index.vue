<template>
  <div class="container mx-auto pt-8">
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="collectWallet">Collect Wallet</button>
    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="getid">chainId</button>
    <p>{{ account }}</p>
    <p>余额 {{ balance }}</p>

    <button class="px-4 py-2 font-bold rounded-md bg-slate-500 text-white" @click="send">发送eth</button>
  </div>
</template>

<script>
import web3Modal from '../config/web3Modal'
import { ethers } from "ethers";

export default {
  name: 'cultureNft',
  data() {
    return {
      web3Provider: null,
      provider: null,
      signer: null,
      account: '',
      balance: ''
    }
  },
  methods: {
    // connect wallet
    async collectWallet() {
      try {
        this.web3Provider = await web3Modal.connect()
        window.web3Provider = this.web3Provider
        console.log('web3Provider', this.web3Provider.chainId)
        this.provider = new ethers.providers.Web3Provider(this.web3Provider)
        this.syncAccount()
        this.getSign()
      } catch(err) {
        console.log(err)
      }
    },
    async syncAccount() {
      // check chainId
      // if (provider.chainId !== 1) {
      //   alert('Please link the right chainId')
      //   return
      // }

      const account = await this.web3Provider.enable()
      if (account.length) this.account = account[0]

      this.balance = await this.provider.getBalance(account[0])

      this.web3Provider.on('chainChanged', (chainId) => {
        console.log('chainId', chainId)
        this.syncAccount()
      })
      this.web3Provider.on('accountsChanged', (account) => {
        console.log('account', account)
        this.syncAccount()
      })
    },
    async getid() {
      console.log(this.web3Provider.chainId)
    },
    async getSign() {
      this.signer = await this.provider.getSigner()
    },
    async send() {
      const tx = this.signer.sendTransaction({
        to: '0x8b88F7A1256316FeAC25E889A56cd346C8992b94',
        value: ethers.utils.parseEther('0.0001')
      })
      
      console.log(tx)
    },
  },
}
</script>
