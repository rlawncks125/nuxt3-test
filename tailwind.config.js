// 참고 : https://tailwindcss.com/docs/guides/nuxtjs
// "@nuxt/postcss8", // 아직 nuxt2에서만 사용가능

// tailwind.config.js
module.exports = {
  mode: "jit",
  // purge -> content
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
