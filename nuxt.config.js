export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'culture-nft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        en: {
          welcome: 'Welcome',
          HOME: 'Home',
          PRODUCTT: 'Product Show',
          FAQ: 'FAQ',
          CollectWallet: 'Collect Wallet',
          ProductShow: 'Product Show',
          wrongNetWork: 'If you use MetaMask, please switch to ETH mainnet, otherwise please disconnect and reconnect to ETH mainnet',
          NeedLogin: 'Please Collect Wallet First',
          NotStart: 'The Mint function has not yet started, follow the Twitter information',
          WhiteList: 'Whitelist stage',
          Pub: 'Public Mint stage',
          InWhiteList: 'Congratulations, you are on the whitelist! !',
          NotInWhiteList: 'Sorry, you are not on the whitelist! !',
          TOKENS_PER_PERSON_LIMIT: 'Sorry, you have already minted and cannot continue minting!',
          minted: 'Minted',
          Title_One: '1. The vision of the project?',
          Answer_One: 'Build and grow our community through a series of NFTs with cultural elements, growing each other. In the future, we will provide a common platform for artists and collectors who do not understand WEB3 (from the ideas of friends who are engaged in ceramic art), so that art will not be so lonely, and eventually become a platform linking art producers and consumers',
          Title_Two: '2. Mechanisms related to minting?',
          Answer_Two: 'First of all, the NFT is free to mint, and only individuals need to pay the gas fee. The total amount is 1100, 1000 are for public minting, and the remaining 100 are owned by the team (for partnership minting etc). The minting is divided into two stages, the first stage is the whitelist stage (generated through various activities, check the twitter), and the second stage is the public minting (whitelist minting has surplus).By the way, go to twitter to check the first twitter to get the whitelist'
        },
        zh: {
          welcome: '欢迎',
          HOME: '首页',
          PRODUCTT: '作品展示',
          FAQ: '常见问题',
          CollectWallet: '连接钱包',
          ProductShow: '作品展示',
          wrongNetWork: '如果您使用MetaMask，请切换到ETH主网，否则请断开连接，重新使用ETH主网连接',
          NeedLogin: '请先登录钱包',
          NotStart: '铸造还未开始，关注Twitter信息',
          WhiteList: '白名单阶段',
          Pub: '公开铸造',
          InWhiteList: '恭喜，您在白名单中！！',
          NotInWhiteList: '抱歉，您不在白名单中！！',
          TOKENS_PER_PERSON_LIMIT: '抱歉，您已经铸造过了，无法继续铸造！',
          minted: '已铸造',
          Title_One: '1.项目的愿景？',
          Answer_One: '通过一系列文化元素的NFT来构建和不断壮大我们的社区，互相成长。未来提供通用的平台，给不了解WEB3的艺术家和收藏家们一个平台（来自从事陶瓷艺术的朋友的想法），让艺术不在那么孤单，最终成为一个链接艺术生产者和消费者的平台',
          Title_Two: '2.铸造相关的机制？',
          Answer_Two: '首先，该NFT为免费铸造，只需个人支付GAS费即可，总量为1100个，1000个为公共铸造，剩下的100个为团队所有（供合作关系等铸造）。铸造分为两个阶段，第一阶段为白名单阶段（通过各种活动产生）、第二阶段为公共铸造（白名单铸造有剩余）。对了，去twitter查看第一个twitter获得白名单吧',
          Title_Three: '3.',
          Answer_Three: ''
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
