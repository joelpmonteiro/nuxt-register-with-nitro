// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  modules: ["@nuxt/eslint", "@nuxt/ui"],
});
