<template>
  <div>
    <div>swiper</div>
    <div class="swiper h-[10rem] border" v-swiper-contr>
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <button @click="prevSilde">이전 버튼</button>
    <button @click="nextSlide">다음 버튼</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperControl } from "@/plugins/swiper-cdn";

export default defineComponent({
  setup() {
    const nextSlide = () => {
      SwiperControl.instance.nextSilde();
    };
    const prevSilde = () => {
      SwiperControl.instance.prevSilde();
    };
    return { nextSlide, prevSilde };
  },
});
</script>

<style></style>
