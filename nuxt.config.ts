import { defineNuxtModule } from "@nuxt/kit";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // target: "static", // SSG 배포 설정
  // ssr: false, // CSA배포

  // tailwind & postcss 설정
  css: [
    "@/assets/css/tailwind.css",
    // font Awesome css
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    // "@nuxtjs/composition-api/module", // nuxt2 에서 사용할경우
    "@pinia/nuxt",

    // 모듈로 css 주입
    defineNuxtModule({
      setup(options, nuxt) {
        nuxt.options.css.push("@/assets/css/test.css");
        // nuxt.options.css.push("~/assets/css/tailwind.css");
      },
    }),
  ],

  meta: {
    link: [
      {
        hid: "icon",
        rel: "icon",
        type: "image/png",
        href: "/icons/logo_x32.png",
      },
      {
        hid: "apple-touch-icon",
        rel: "apple-touch-icon",
        href: "/icons/logo_x180.png",
      },
      { rel: "manifest", href: "/manifest.json" },
      {
        // swiper css
        rel: "stylesheet",
        href: "https://unpkg.com/swiper/swiper-bundle.min.css",
      },
    ],
    script: [
      {
        // swiper js
        src: "https://unpkg.com/swiper/swiper-bundle.min.js",
      },
    ],
  },

  runtimeConfig: {
    // server 측에서만 사용할수 있는 개인키
    apiServer: "https://myapi.kimjuchan97.xyz",
    public: {
      // 클라이언트 측에서도 노출되는 키
      publicApiServer: "https://myapi.kimjuchan97.xyz",
    },
  },
});

// runtimeConfig 타입
declare module "@nuxt/schema" {
  interface RuntimeConfig {
    apiServer: string;
  }

  interface PublicRuntimeConfig {
    publicApiServer: string;
  }
}
