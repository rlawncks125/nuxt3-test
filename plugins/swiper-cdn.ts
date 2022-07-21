export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("swiper-contr", {
    mounted: (el: HTMLElement) => {
      let nextEl, prevEl;
      el.childNodes.forEach((v: HTMLElement) => {
        if (!v.className) return;
        v.className.includes("swiper-button-next") ? (nextEl = v) : "";
        v.className.includes("swiper-button-prev") ? (prevEl = v) : "";
      });

      SwiperControl.instance.setSwiper(el, {
        navigation: {
          nextEl,
          prevEl,
        },
      });
    },
  });
});

export class SwiperControl {
  #swiper;
  static instance = new SwiperControl();
  constructor() {}

  setSwiper(el: HTMLElement, options) {
    // @ts-ignore
    this.#swiper = new Swiper(el, {
      ...options,
    });
    // console.log(this.#swiper);
  }

  nextSilde() {
    this.#swiper.slideNext(500, true);
  }
  prevSilde() {
    this.#swiper.slidePrev(500, true);
  }
}
