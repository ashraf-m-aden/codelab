// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
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
        { rel: 'canonical', href: 'https://codelab.codes/' }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
    'nuxt-toast',
    '@nuxtjs/robots',
  ],
   site: {
      url: 'https://codelab.codes'
    },
  sitemap: {
    crawlLinks: true, // automatically find all pages
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