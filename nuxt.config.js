export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OscarRCS',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      try {
        if (savedPosition) {
          return savedPosition
        }

        const findEl = (hash, x) => {
          return (
            document.querySelector(hash) ||
            new Promise((resolve, reject) => {
              if (x > 50) {
                return resolve()
              }
              setTimeout(() => {
                resolve(findEl(hash, ++x || 1))
              }, 10)
            })
          )
        }

        if (to.hash) {
          const el = await findEl(to.hash)

          if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }

        return { x: 0, y: 0 }
      } catch (error) {
        console.log(error)
      }
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/social-media-icons',
    '~/components/main',
    '~/components/general-icons',
  ],

  googleFonts: {
    families: {
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Open+Sans': [300, 400, 500, 600, 700, 800],
    },
  },

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
  ],

  modules: [],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
