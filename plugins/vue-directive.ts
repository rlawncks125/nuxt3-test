export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("directive-test", {
    mounted: (el: HTMLElement) => {
      console.log("directive test call text : ", el.innerText);
      el.style.color = "red";
      el.style.padding = "0 0 0 1rem";
      el.style.border = "1px solid black";
    },
  });
});
