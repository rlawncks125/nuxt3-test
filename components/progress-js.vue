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

    <div ref="barRef" class="w-[10rem] h-[10rem]"></div>
  </div>
</template>

<script lang="ts">
// npm install progressbar.js
// npm install --save @types/progressbar.js
// 공식링크 : https://progressbarjs.readthedocs.io/en/latest/#get-started
import { defineComponent } from "vue";
import progoressBar, { Shape } from "progressbar.js";

declare class ProgressBarShape extends Shape {}

export default defineComponent({
  setup() {
    const barRef = useState<HTMLElement>("barRef");
    const progreeValue = useState<number>("progressValue", () => 0);

    let progressBar: ProgressBarShape;

    watch(progreeValue, () => {
      const setValue = progreeValue.value % 100;

      progressBar.animate(setValue / 100, {
        duration: 400,
      });
      progressBar.setText(setValue + "%");
    });

    onMounted(() => {
      progressBar = new progoressBar.Circle(barRef.value, {
        color: "#FCB03C",
        // strokeWidth: 3,
        // trailWidth: 1,
      });

      progressBar.animate(0.3, {
        duration: 800,
      });
    });

    return { barRef, progreeValue };
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
