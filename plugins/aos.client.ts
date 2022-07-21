import aos from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  aos.init();
});
