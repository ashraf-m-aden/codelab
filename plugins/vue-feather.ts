import { defineNuxtPlugin } from 'nuxt/app'
import VueFeather from 'vue-feather'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueFeather', VueFeather)
})
