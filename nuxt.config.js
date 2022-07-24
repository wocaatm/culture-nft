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
          Title_One: '1.Question One',
          Answer_One: 'answer one'
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
          Title_One: '1.问题1',
          Answer_One: '回答1'
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
