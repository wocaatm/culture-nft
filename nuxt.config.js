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
          Answer_One: 'Build and grow our community through NFTs of a range of cultural elements, including members in various roles (developers, marketers, products, etc.). In the future, it will give full play to the various capabilities of the team and community members, become a community-driven company DAO, and create blockchain services. Our vision is to do what we want to do, for ourselves',
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
          Answer_One: '通过一系列文化元素的NFT来构建和不断壮大我们的社区，吸纳各种角色成员（开发人员，营销人员，产品等等）。未来充分发挥团队以及社区成员的各种能力，成为一个社区驱动的公司DAO，打造区块链的服务。我们的愿景就是做自己想做的事，为自己而做',
          Title_Two: '2.铸造相关的机制？',
          Answer_Two: '首先，该NFT为免费铸造，只需个人支付GAS费即可，总量为1100个，1000个为公共铸造，剩下的100个为团队所有（供合作关系等铸造）。铸造分为两个阶段，第一阶段为白名单阶段（通过各种活动产生）、第二阶段为公共铸造（白名单铸造有剩余）。去twitter查看第一个twitter获得白名单吧',
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
