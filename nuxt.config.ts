// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/robots',
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  css: [
    {
      src: '~/assets/scss/common.scss'
    },
  ],
})
