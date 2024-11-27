// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
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
  css: [
    'vue-toastification/dist/index.css',
    '@/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:5123'
    }
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://127.0.0.1:5123/api',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  plugins: ['~/plugins/google-analytics.js'], // 确保路径正确

})
