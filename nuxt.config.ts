// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare-pages',
  },
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
});
