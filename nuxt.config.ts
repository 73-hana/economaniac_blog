// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";
import BasicAuth from 'nuxt-basic-authentication-module';

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    [BasicAuth, {enabled: true}],
  ],
  css: [
    {
      src: '~/assets/scss/common.scss'
    },
  ],
  runtimeConfig: {
    basicAuth: {
      pairs: {
        admin: process.env.BASIC_PASS,
      }
    }
  }
})
