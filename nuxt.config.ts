// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY,
  },

  modules: ["@nuxtjs/tailwindcss"],
});
