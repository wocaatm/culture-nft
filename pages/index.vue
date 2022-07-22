<template>
  <div class="home-page">
    <div class="flex justify-between items-center bg-black px-4 py-2 text-gray-400 font-bold fixed top-0 left-0 right-0 z-50">
      <!-- logo and page router -->
      <div class="left flex items-center">
        <div class="border border-white border-2 w-10 h-10 rounded-full text-base"></div>
        <div class="ml-8">首页</div>
        <div class="mx-4">路线图</div>
        <div class="">FAQ</div>
      </div>

      <div class="right flex items-center">
        <button v-if="!isLogin" class="px-4 py-1 font-bold rounded-md bg-slate-500 text-white" @click="collect">Collect Wallet</button>
        <div v-else class="px-4 py-1 font-bold rounded-md bg-slate-500 text-white">
          {{ balance }}
          /
          {{ account }}
        </div>
        <div class="mx-4 border border-white border-2 w-10 h-10 rounded-full text-base"></div>
        <div class="border border-white border-2 w-10 h-10 rounded-full text-base"></div>
      </div>
    </div>

    <div class="home-container h-screen relative">
      <div class="bg-container blur-md absolute inset-0 bg-cover bg-center -z-10"></div>
      <div class="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 rounded-sm bg-white px-16 py-16 flex">
        <div class="left w-64">
          <img class="w-64 h-64" src="../assets/images/1.png" alt="">
          <img class="w-64 h-64" src="../assets/images/2.png" alt="">
        </div>

        <div class="right ml-16 w-96">
          <div class="text-center text-blue-400">
            <span>Minted</span>
            <span>{{ totalSupply }} / {{ CONST_PARAMS.COLLECTION_SIZE }}</span>
          </div>
          <template v-if="status === 2">
            <input v-model.trim="mintCount" type="number" class="border border-gray-100 rounded-md w-full my-4 py-2 pl-2" placeholder="请输入mint的数量">
            <div>
              <button class="px-4 py-1 font-bold rounded-md bg-blue-400 text-white w-full text-center mt-2" @click="mint">Mint</button>
            </div>
          </template>
          <template v-else-if="status === 1">
            <button :disabled="!isWhiteList" class="px-4 py-1 font-bold rounded-md bg-blue-400 text-white w-full text-center mt-2" @click="wlMint">White List Mint</button>
            <p v-if="!isWhiteList">您不在白名单中，无法mint</p>
          </template>
          <template v-else-if="status === 0">
            <p>mint还未开始</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import web3Modal from '../config/web3Modal'
import { ethers, BigNumber } from "ethers";
import contractAbi from '../config/abi.json'
import { checkInWhiteList, getHexProof } from '../config/merkleProof'

// newest contract address
const nftAddress = '0x7a7172A97bacB841802fD96999B2A6cF05EB997B'
const mintStatus = {
  0: '未开始',
  1: '白名单阶段',
  2: '公共铸造阶段'
}
const CONST_PARAMS = {
  'MINT_PRICE': 0.001,
  'COLLECTION_SIZE': 100,
  'TOKENS_PER_TRAN_LIMIT': 5,
  'TOKENS_PER_PERSON_PUB_LIMIT': 2,
  'TOKENS_PER_PERSON_WL_LIMIT': 1,
  'PRESALE_MINT_PRICE': 0,
}

export default {
  name: 'cultureNft',
  data() {
    return {
      CONST_PARAMS,
      web3Provider: null,
      ethersProvider: null,
      signer: null,
      contractInstance: null,
      account: '',
      balance: 0,
      desiredChainId: 4,
      isWhiteList: false,
      isWrongNetWork: false,
      isLogin: false,
      mintCount: 0,
      mintPrice: 0,
      alreadyMint: 0,
      status: 0,
      totalSupply: 0,
    }
  },
  watch: {
    account(to) {
      if (to) this.isWhiteList = checkInWhiteList(to)
    },
  },
  methods: {
    // connect wallet
    async collect() {
      try {
        this.web3Provider = await web3Modal.connect()
        // listen provider info change
        this.listenProvider()
        this.setRequirement()
      } catch(err) {
        console.log(err)
      }
    },
    // set all info
    async setRequirement() {
      this.setEther()
      this.getAccountInfo()
      if (!await this.checkChainId()) return
      this.setContract()
    },
    async checkChainId() {
      const { chainId } = await this.ethersProvider.getNetwork()
      if (chainId !== this.desiredChainId) {
        this.isWrongNetWork = true
        // switch chain request or add new chain
        return false
      }
      return true
    },
    async getAccountInfo() {
      const accounts = await this.ethersProvider.listAccounts()
      if (accounts && accounts.length) {
        this.account = accounts[0]
        const balance = await this.ethersProvider.getBalance(accounts[0])
        this.balance = ethers.utils.formatEther(balance)
        this.isLogin = true
      } else {
        // metamsk all disconnect
        this.reset()
      }
    },
    async setEther() {
      this.ethersProvider = new ethers.providers.Web3Provider(this.web3Provider)
    },
    async setContract() {
      this.signer = this.ethersProvider.getSigner()
      this.contractInstance = new ethers.Contract(nftAddress, contractAbi, this.signer)
      this.getContractBaseInfo()
    },
    async mint() {
      let errorMsg = ''
      if (!this.mintCount) {
        errorMsg = '请填写mint的数量'
      } else if (this.mintCount > 2) {
        errorMsg = '每个钱包最多mint2个'
      }

      if (errorMsg) {
        alert(errorMsg)
        return
      }
      try {
        const result = await this.contractInstance.redeem([], this.mintCount, { value: ethers.utils.parseEther('0.001') })
        console.log(result)
      } catch(err) {
        console.log(err)
      }
    },
    async wlMint() {
      if (!this.isWhiteList) {
        alert('不在白名单中，无法mint')
        return
      } else if (this.alreadyMint >= CONST_PARAMS.TOKENS_PER_PERSON_WL_LIMIT) {
        alert('白名单最多mint1个')
        return
      }

      try {
        const hexProof = getHexProof(this.account)
        const result = await this.contractInstance.redeem(hexProof, CONST_PARAMS.TOKENS_PER_PERSON_WL_LIMIT)
        console.log(result)
      } catch(err) {
        console.log(err)
      }
    },
    async getContractBaseInfo() {
      const promise = [
        this.contractInstance.MINT_PRICE(),
        this.contractInstance.saleStatus(),
        this.contractInstance.balanceOf(this.account),
        this.contractInstance.totalSupply(),
      ]

      const [price, status, alreadyMint, totalSupply] = await Promise.all(promise)

      this.mintPrice = ethers.utils.formatEther(price)
      this.status = status
      this.alreadyMint = alreadyMint.toNumber()
      this.totalSupply = totalSupply.toNumber()
    },
    async switchNetWork() {
      try {
        console.log(this.ethersProvider)
        this.ethersProvider.send('wallet_switchEthereumChain', [{ chainId: ethers.utils.hexValue(this.desiredChainId) }])
      } catch(err) {
        console.log('error', err)
      }
    },
    async listenProvider() {
      this.web3Provider.on('chainChanged', () => {
        this.setRequirement()
      })
      this.web3Provider.on('accountsChanged', (accounts) => {
        this.getAccountInfo()
      })
      this.web3Provider.on('disconnect', (code, reason) => {
        // metamask don't have this event
        this.reset()
      })
    },
    reset() {
      // reset status
    },
  },
}
</script>

<style scoped>
.bg-container {
  background-image: url('../assets/images/home-bg.png');
}
</style>