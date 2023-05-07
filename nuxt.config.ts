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
      // tw-elemnet
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css",
      },
    ],
    script: [
      {
        // swiper js
        src: "https://unpkg.com/swiper/swiper-bundle.min.js",
      },
      {
        // reCAPTCHA
        src: "https://www.google.com/recaptcha/api.js",
      },
      {
        // tw-element
        src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
        body: true,
      },
      {
        // tw-element-chart
        src: "https://cdn.jsdelivr.net/npm/chart.js",
      },
    ],
  },

  runtimeConfig: {
    // server 측에서만 사용할수 있는 개인키
    apiServer: "https://myapi.kimjuchan97.xyz",
    public: {
      // 클라이언트 측에서도 노출되는 키
      publicApiServer: "https://myapi.kimjuchan97.xyz",

      reCAPTCHA_TEST_KEY: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
      reCAPTCHA_TEST_SECRET_KEY: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
      reCAPTCHA_SITE_KEY: process.env.SITE_KEY,
      reCAPTCHA_SECRET_KEY: process.env.SECRET_KEY,
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
    reCAPTCHA_SITE_KEY: string;
    reCAPTCHA_SECRET_KEY: string;
  }
}
