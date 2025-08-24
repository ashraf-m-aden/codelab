// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,  // enable SSR
  nitro: {
    preset: 'static' // generate static HTML
  },
  app: {
    head: {
      meta: [
        { name: 'description', content: 'CODELAB IT+ Djibouti' }
      ],
      link: [
        { rel: 'canonical', href: 'https://codelab.it-advanced-technology.com/' }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ]
})