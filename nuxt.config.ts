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
    '@nuxt/image',
    '@pinia/nuxt'
  ],
    sitemap: {
    siteUrl: 'https://codelab.it-advanced-technology.com/',
    routes: [
      '/', // ACCUEIL
      '/cours-programmation',
      '/cours-programmation/html-css',
      '/cours-programmation/angular',
      '/cours-programmation/vue',
      '/cours-programmation/javascript',
      '/cours-programmation/java',
      '/cours-programmation/node',
      '/cours-programmation/mysql',

      '/cours-reseaux-systemes',
      '/cours-reseaux-systemes/linux',
      '/cours-reseaux-systemes/fondamentaux-reseaux',
      '/cours-reseaux-systemes/reseaux-avances',
      '/cours-reseaux-systemes/gns3',
      '/cours-reseaux-systemes/securite-informatique',
      '/cours-reseaux-systemes/installation-windows',
      '/cours-reseaux-systemes/admin-serveur',
      '/cours-reseaux-systemes/bureautique',

      '/a-propos',
      '/contact',
      '/enroll',
      '/new_course',
      '/login',
      '/not-found'
    ]
  },
  css: ['bootstrap/dist/css/bootstrap.min.css',
    '@/assets/style/style.css'
  ],

})