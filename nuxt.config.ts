const path = require("path");
const appConfig = require(path.resolve(__dirname, "./config.json"));

export default defineNuxtConfig({
  ssr: false,
  generate: {
    routes: "/baic",
  },
  runtimeConfig: {
    public: {
      // BASE_URL:
      //   process.env.NODE_ENV === "development"
      //     ? appConfig.dev.apiRoot
      //     : appConfig.prod.apiRoot,
      // IMAGE_BASE_URL:
      //   process.env.NODE_ENV === "development"
      //     ? appConfig.dev.imageApi
      //     : appConfig.prod.imageApi,
      BASE_URL: "https://redspark.a2hosted.com:30006/",
      IMAGE_BASE_URL: "https://redspark.a2hosted.com:30006/uploads/.tmp/",
    },
  },

  modules: ["@nuxt/image"],
  image: {},
  routeRules: {},
  app: {
    baseURL: "/",
    head: {
      title: "BAIC Global",
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
      // script: [
      //   {
      //     type: "text/javascript",
      //     src: "~/assets/js/script.js",
      //     defer: true,
      //   },
      // ],
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.scss",
    "~/assets/css/bootstrap.min.css",
    "~/assets/fontawesome/css/all.min.css",
    "~/assets/css/responsive.css",
  ],

  plugins: [
    "~/plugins/i18n.js",
    "~/plugins/pinia.js",
    "~/plugins/animexyz.client.js",
  ],
  build: {},
  // modules: ["@nuxtjs/i18n"],
  // i18n: {
  //   // Module Options
  //   lazy: true,
  //   langDir: "locales",
  //   strategy: "prefix_except_default",
  //   defaultLocale: "en-US", // Default Language
  //   // switchLocalePath: "/:lang/:route",
  //   locales: [
  //     { code: "ar-SA", iso: "ar-SA", file: "ar.json" },
  //     { code: "en-US", iso: "en-US", file: "en.json" },
  //   ],
  //   // vuei18n: {
  //   //   fallbackLocal: "en-US",
  //   // },
  // },
});
