// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/i18n'],
  i18n: {
    langDir: 'locales', // Use a relative path
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'zh',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'en',
  },
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'], 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
  },

})
