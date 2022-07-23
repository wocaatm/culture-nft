<template>
  <div class="home-page">
    <div class="flex justify-between items-center bg-black text-gray-200 font-bold fixed top-0 left-0 right-0 z-50 px-2 py-2 lg:px-8 lg:py-2">
      <!-- logo and page router -->
      <div class="left flex items-center">
        <div class="h-16 w-16">
          <img src="../assets/images/icon.png" alt="" style="width: 100%; height: 100%">
        </div>
        <div class="hidden sm:flex">
          <div class="ml-8">{{ $t('Home') }}</div>
          <div class="mx-4">{{ $t('RoadMap') }}</div>
          <div class="">{{ $t('Faq') }}</div>
        </div>
      </div>

      <div class="right flex items-center">
        <div v-if="!isLogin" class="wallet text-center h-10 p-1 w-48 bg-cover bg-center text-base cursor-pointer" @click="collect">Collect Wallet</div>
        <div v-else class="px-4 py-1 font-bold rounded-md bg-slate-500 text-white">
          {{ balance }}
          /
          {{ account }}
        </div>
        <div class="meduim hidden sm:flex items-center">
          <img src="../assets/images/dc.png" alt="">
          <img src="../assets/images/twitter.png" alt="">
          <img src="../assets/images/os.png" alt="">
        </div>
      </div>
    </div>

    <div class="page-one relative pt-20">
      <div class="mint-button absolute left-2/4 transform -translate-x-2/4 bottom-0 cursor-pointer hover:scale-110">
        <img src="../assets/images/mint.png" alt="">
      </div>
      <img src="../assets/images/home-bg.png" alt="">
    </div>

    <div class="page-two relative pb-10">
      <div class="wall">
        <img src="../assets/images/wall.png" alt="">
      </div>
      <div class="tree absolute right-0 top-0 w-24 md:w-30 lg:w-40">
        <img src="../assets/images/tree.png" alt="">
      </div>

      <h3 class="text-center text-white text-2xl my-2 md:my-6 md:text-3xl lg:my-16 lg:my-2 lg:text-5xl">{{ $t('productShow') }}</h3>

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
      </div>

      <div class="product-show flex px-0 md:px-2 lg:px-10 flex-wrap">
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

    <div class="page-three text-white py-4 pb-12 md:py-12 lg:py-24">
      <h3 class="text-center text-2xl md:text-3xl lg:text-5xl">FAQ</h3>

      <div class="faq-container container mx-auto flex flex-wrap text-white flex-wrap py-0 pt-2 md:py-4 lg:py-8">
        <div class="faq-item w-full px-2 mx-4 mt-2 md:mx-0 md:mt-4 md:w-1/2 md:px-4">
          <div class="border border-2 rounded-md border-white px-3 py-2 md:py-4 md:px-8">
            <div class="question text-lg tetxt-center">1. 我们的愿景？</div>
            <div class="answer text-sm pl-4">通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容</div>
          </div>
        </div>
        <div class="faq-item w-full px-2 mx-4 mt-2 md:mx-0 md:mt-4 md:w-1/2 md:px-4">
          <div class="border border-2 rounded-md border-white px-3 py-2 md:py-4 md:px-8">
            <div class="question text-lg tetxt-center">1. 我们的愿景？</div>
            <div class="answer text-sm pl-4">通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容</div>
          </div>
        </div>
        <div class="faq-item w-full px-2 mx-4 mt-2 md:mx-0 md:mt-4 md:w-1/2 md:px-4">
          <div class="border border-2 rounded-md border-white px-3 py-2 md:py-4 md:px-8">
            <div class="question text-lg tetxt-center">1. 我们的愿景？</div>
            <div class="answer text-sm pl-4">通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容</div>
          </div>
        </div>
        <div class="faq-item w-full px-2 mx-4 mt-2 md:mx-0 md:mt-4 md:w-1/2 md:px-4">
          <div class="border border-2 rounded-md border-white px-3 py-2 md:py-4 md:px-8">
            <div class="question text-lg tetxt-center">1. 我们的愿景？</div>
            <div class="answer text-sm pl-4">通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容通过nft展示各种文化的内容</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer bg-black pl-1 py-5 text-sm md:text-base lg:pl-20 text-white md:pl-2">
      Copyright © 2021 Culture Dao — All rights reserved.
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

.meduim img {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  cursor: pointer;
}
.page-two {
  background-color: #AA2B24;
}
.page-three {
  background-image: url('../assets/images/faq-bg.png');
  background-size: 100% 100%;
}
</style>