<template>
  <div>
    <p>progressbar.js 라이브러리 사용</p>
    <label for="">0 to 100 값 : </label>
    <input
      class="number-style-reset"
      type="number"
      name=""
      id=""
      v-model="progreeValue"
    />
    <br />
    <br />

    <div class="relative w-[10rem] h-[10rem] animate-spin">
      <div ref="barWarpRef" class="absolute left-0 top-0"></div>
      <div ref="barWarpValueRef" class="absolute left-0 top-0"></div>
    </div>

    <div ref="barRef" class="w-[10rem] h-[10rem]"></div>
  </div>
</template>

<script lang="ts">
// npm install progressbar.js
// npm install --save @types/progressbar.js
// 공식링크 : https://progressbarjs.readthedocs.io/en/latest/#get-started
import { defineComponent } from "vue";
import progoressBar, { Shape } from "progressbar.js";

// 에러 처리
// 'Shape'은(는) 값을 참조하지만, 여기서는 형식으로 사용되고 있습니다.
// 'typeof Shape'을(를) 사용하시겠습니까?

declare class ProgressBarShape extends Shape {}

export default defineComponent({
  setup() {
    const barWarpRef = useState<HTMLElement>("barWarpRef");
    const barWarpValueRef = useState<HTMLElement>("barWarpValueRef");
    const barRef = useState<HTMLElement>("barRef");
    const progreeValue = useState<number>("progressValue", () => 0);

    // let progressBar: Shape; // 에러
    let progressBar: ProgressBarShape;

    watch(progreeValue, () => {
      const setValue = progreeValue.value % 100;

      progressBar.animate(setValue / 100, {
        duration: 400,
      });
      progressBar.setText(setValue + "%");
    });

    onMounted(() => {
      new progoressBar.Circle(barWarpRef.value, {
        color: "gray",
      }).set(1);
      new progoressBar.Circle(barWarpValueRef.value, {
        color: "#FCB03C",
      }).set(0.2);

      progressBar = new progoressBar.Circle(barRef.value, {
        color: "#FCB03C",
        // strokeWidth: 3,
        // trailWidth: 1,
      });

      progressBar.animate(0.3, {
        duration: 800,
      });
    });

    return { barWarpRef, barRef, progreeValue, barWarpValueRef };
  },
});
</script>

<style lang="scss">
input.number-style-reset {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* 파이어폭스에서의 초기화 방법 */
  & {
    -moz-appearance: textfield;
  }
}
</style>
