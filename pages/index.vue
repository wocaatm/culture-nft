<template>
  <div class="home-page">
    <div class="flex justify-between items-center bg-gray-900 text-gray-200 font-bold fixed top-0 left-0 right-0 z-50 px-2 py-2 lg:px-8 lg:py-2">
      <!-- logo and page router -->
      <div class="left flex items-center">
        <div class="h-16 cursor-pointer">
          <img src="../assets/images/icon.png" alt="" style="width: 100%; height: 100%">
        </div>
        <div class="hidden md:flex">
          <a href="#home" class="ml-8 hover:scale-110 cursor_pointer_scale">{{ $t('HOME') }}</a>
          <a href="#product" class="mx-4 hover:scale-110 cursor_pointer_scale">{{ $t('PRODUCTT') }}</a>
          <a href="#faq" class="hover:scale-110 cursor_pointer_scale">{{ $t('FAQ') }}</a>
        </div>
      </div>

      <div class="right flex items-center">
        <div v-if="!isLogin" class="wallet text-center h-10 p-1 w-48 bg-cover bg-center text-base cursor-pointer" @click="collect">{{ $t('CollectWallet') }}</div>
        <div v-else class="px-4 py-1 font-bold rounded-md bg-slate-500 text-white">
          {{ `${balance.toFixed(2)}${balanceUnit}` }} / {{ accountString }}
        </div>
        <div class="hidden md:flex items-center">
          <img class="meduim_icon cursor_pointer_scale" src="../assets/images/dc.png" alt="">
          <img class="meduim_icon cursor_pointer_scale" src="../assets/images/twitter.png" alt="">
          <img class="meduim_icon cursor_pointer_scale" src="../assets/images/os.png" alt="">
        </div>
        <nuxt-link v-if="language === 'en'" class="meduim_icon border border-2 border-white flex items-center justify-center rounded-full" :to="localePath('index', 'en')">EN</nuxt-link>
        <nuxt-link v-else class="meduim_icon border border-2 border-white flex items-center justify-center rounded-full" :to="localePath('index', 'zh')">ZH</nuxt-link>
      </div>
    </div>

    <div id="home" class="page-one relative pt-20">
      <div class="mint-button absolute left-2/4 transform -translate-x-2/4 bottom-0 cursor_pointer_scale" @click="mint">
        <img src="../assets/images/mint.png" alt="">
      </div>
      <div class="absolute right-1/4 bottom-0 transform -translate-y-60 translate-x-10 hidden lg:block md:w-48 lg:w-96 cursor_pointer_scale">
        <div class="white-list-content absolute-center text-2xl text-center" style="color: #E10A45">
          <p class="font-bold text-xl">{{ $t(mintPraph) }}</p>
          <p v-if="mintContent" class="text-base">{{ $t(mintContent) }}</p>
          <p v-if="status !== 0" class="text-xl font-bold mt-2">{{ $t('minted') }} {{ totalSupply }} / {{ CONST_PARAMS.COLLECTION_SIZE }}</p>
        </div>
        <img src="../assets/images/whiteList.png" alt="">
      </div>
      <!-- mobile phone mint info -->
      <div class="fixed p-3 rounded-3xl left-1/2 -translate-x-1/2 bottom-10 z-50 shadow-2xl text-white lg:hidden" style="background-color: #E10A45">
        <p class="font-bold text-xl">{{ $t(mintPraph) }}</p>
        <p v-if="mintContent" class="mt-2 text-base">{{ $t(mintContent) }}</p>
        <p v-if="status !== 0" class="text-xl font-bold mt-2">{{ $t('minted') }} {{ totalSupply }} / {{ CONST_PARAMS.COLLECTION_SIZE }}</p>
      </div>

      <img src="../assets/images/home-bg.png" alt="">
    </div>

    <div id="product" class="page-two relative pb-10">
      <div class="wall">
        <img src="../assets/images/wall.png" alt="">
      </div>
      <div class="tree absolute right-0 top-0 w-24 md:w-30 lg:w-40">
        <img src="../assets/images/tree.png" alt="">
      </div>

      <h3 class="text-center text-white text-2xl my-2 md:my-6 md:text-3xl lg:my-16 lg:my-2 lg:text-5xl">{{ $t('ProductShow') }}</h3>

      <div class="product-show flex px-0 md:px-2 lg:px-10 flex-wrap">
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/1.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/2.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/3.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/4.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/5.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/6.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/7.png" alt="">
          </div>
        </div>
        <div class="w-1/2 p-2 md:w-1/4 lg:p-4">
          <div class="shadow-2xl hover:scale-110 rounded-3xl overflow-hidden">
            <img class="" src="../assets/images/8.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div id="faq" class="page-three text-white py-4 pb-12 md:py-12 lg:py-24">
      <h3 class="text-center text-2xl md:text-3xl lg:text-5xl">{{ $t('FAQ') }}</h3>

      <div class="faq-container container mx-auto flex flex-wrap text-white flex-wrap py-0 pt-2 md:py-4 lg:py-8">
        <div class="faq-item w-full px-2 mx-4 mt-2 md:mx-0 md:mt-4 md:w-1/2 md:px-4" v-for="(faq, index) in FAQS" :key="index">
          <div class="border border-2 rounded-md border-white px-3 py-2 md:py-4 md:px-8">
            <div class="question text-lg tetxt-center">{{ $t(faq.title) }}</div>
            <div class="answer text-sm pl-4">{{ $t(faq.answer) }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 px-2 py-5 text-sm md:text-base lg:pl-20 text-white md:pl-2 flex justify-between items-center">
      <span>Copyright © Culture Dao</span>
      <div class="flex md:hidden items-center">
        <img class="meduim_icon cursor_pointer_scale" src="../assets/images/dc.png" alt="">
        <img class="meduim_icon cursor_pointer_scale" src="../assets/images/twitter.png" alt="">
        <img class="meduim_icon cursor_pointer_scale" src="../assets/images/os.png" alt="">
      </div>
    </div>

    <div class="error-network fixed top-32 left-1/2 -translate-x-1/2 p-3 rounded-2xl shadow-2xl bg-gray-900 text-white" v-if="wrongNetWork">
      {{ $t('wrongNetWork') }}
    </div>
  </div>
</template>

<script>
import web3Modal from '../config/web3Modal'
import { ethers } from "ethers";
import contractAbi from '../config/abi.json'
import { checkInWhiteList, getHexProof } from '../config/merkleProof'
import { FAQS } from '../config/constant'

// newest contract address
const nftAddress = '0x3916c98589dAe0bd1eD8F2FC460BFdC7936dE42A'
const CONST_PARAMS = {
  'COLLECTION_SIZE': 100,
  'RESERVE_SIZE': 10,
  'TOKENS_PER_PERSON_LIMIT': 10,
}
const balanceUnit = {
  1: 'Eth',
  4: 'Eth',
  56: 'Bnb',
  137: 'Matic'
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
      isLogin: false,
      wrongNetWork: false,
      chainId: 1,
      mintPrice: 0,
      alreadyMint: 0,
      status: 0,
      totalSupply: 0,
      FAQS,
      language: 'en'
    }
  },
  created() {
    // 清除缓存
    localStorage.removeItem('walletconnect')
  },
  watch: {
    account(to) {
      if (to) this.isWhiteList = checkInWhiteList(to)
    },
    $route: {
      immediate: true,
      handler(to) {
        this.language = to.path.includes('en') ? 'zh' : 'en'
      }
    }
  },
  computed: {
    accountString() {
      return `${this.account.slice(0,3)}..${this.account.slice(this.account.length - 4)}`
    },
    balanceUnit() {
      return balanceUnit[this.chainId] || ''
    },
    mintPraph() {
      let praph = ''
      if (!this.isLogin) {
        praph = `NeedLogin`
      } else if (this.status === 0) {
        praph = 'NotStart'
      } else if(this.status === 1) {
        praph = 'WhiteList'
      } else {
        praph = 'Pub'
      }
      return praph
    },
    mintContent() {
      let content = ''
      if(this.status === 1) {
        content = this.isWhiteList ? 'InWhiteList' : 'NotInWhiteList'
      }
      return content
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
      // webProvider
      // this.isMetaMask = this.web3Provider.isMetaMask
      // const chainId = this.web3Provider.networkVersion || this.web3Provider.chainId
      const { chainId } = await this.ethersProvider.getNetwork()
      this.chainId = chainId
      if (chainId !== this.desiredChainId) {
        this.wrongNetWork = true
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
        this.balance = +ethers.utils.formatEther(balance)
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

      if (!this.isLogin) {
        errorMsg = 'NeedLogin'
      } else if (this.status === 0) {
        errorMsg = 'NotStart'
      } else if (this.status === 1) {
        if (!this.isWhiteList) errorMsg = 'NotInWhiteList'
      } else if (this.alreadyMint >= CONST_PARAMS.TOKENS_PER_PERSON_LIMIT) {
        errorMsg = 'TOKENS_PER_PERSON_LIMIT'
      }

      if (errorMsg) {
        alert(this.$t(errorMsg))
        return
      }
      try {
        const hexProof = getHexProof(this.account)
        const result = await this.contractInstance.redeem(hexProof)
        console.log(result)
      } catch(err) {
        console.log(err)
      }
    },
    async getContractBaseInfo() {
      const promise = [
        this.contractInstance.saleStatus(),
        this.contractInstance.balanceOf(this.account),
        this.contractInstance.totalSupply(),
      ]

      const [status, alreadyMint, totalSupply] = await Promise.all(promise)
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
    listenProvider() {
      this.web3Provider.on('chainChanged', () => {
        this.wrongNetWork = false
        this.setRequirement()
      })
      this.web3Provider.on('accountsChanged', () => {
        this.getAccountInfo()
      })
      this.web3Provider.on('disconnect', () => {
        this.reset()
      })
    },
    reset() {
      // reset status
      this.isLogin = false
      localStorage.removeItem('walletconnect')
    },
  },
}
</script>

<style scoped>
.wallet {
  background-image: url('../assets/images/wallet.png');
  background-size: 100% 100%;
}
.mint-button {
  width: 16%;
  bottom: 8%;
}

@media (min-width: 640px)
{
  .mint-button {
    bottom: 10%;
  }
}

.absolute-center {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
}

.cursor_pointer_scale {
  @apply cursor-pointer hover:scale-110
}

.meduim_icon {
  @apply w-10 h-10 ml-5 cursor-pointer
}
.page-two {
  background-color: #AA2B24;
}
.page-three {
  background-image: url('../assets/images/faq-bg.png');
  background-size: 100% 100%;
}
</style>