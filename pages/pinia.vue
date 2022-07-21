<template>
  <div>
    <section class="border my-2 p-1">
      <div class="border p-1">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p>storeCount : {{ store.count }}</p>
        <p>RefCount : {{ count }}</p>
        <p>NoRefCount : {{ noRefCount }}</p>
        <p>getterCount : {{ getterCount }}</p>
      </div>
      <div>
        <!-- 컴포지션api 타입 Store  -->
        <p>컴포지션api타입 : {{ store2.count }}</p>
        <button @click="store2.increment">+</button>
        <button @click="store2.decrement">-</button>
      </div>
      <div>
        <!-- cookie 타입 Store  -->
        <p>cookie count : {{ store3.count }}</p>
        <button @click="store3.increment">+</button>
        <button @click="store3.decrement">-</button>
      </div>
      <div>
        <p class="text-lg text-yellow-400">분해할당으로 사용시</p>
        <!-- 분해할당 타입 Store  -->
        <p>컴포넌트 api : {{ countCompo }}</p>
        <button @click="incrementCompo">+</button>
        <button @click="decrementCompo">-</button>
        <p>cookie: {{ cookieCounter }}</p>
        <button @click="cookieIncrement">+</button>
        <button @click="cookieDecrement">-</button>
      </div>
    </section>

    <section>
      <button @click="awaitFunc">async 함수 실행</button>
    </section>
    <test-2 />
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import {
  useCountCompositionApi,
  useCounterCookie,
  useCounterStore,
} from "~~/store";

export default defineComponent({
  setup() {
    // store
    const store = useCounterStore();
    const { count, getterCount } = toRefs(store);
    const { count: noRefCount, increment, decrement, waitFunction } = store;
    const awaitFunc = async () => {
      await waitFunction().then((v) => console.log(v));
    };
    // 커스텀 plugin 변수
    console.log(store.pluginInject);
    // 컴포지션 api 타입
    const store2 = useCountCompositionApi();
    // cookie
    const store3 = useCounterCookie();

    // 컴포지션 api 타입을 분해할당 방식으로 사용시
    // 분해할당 방식으로 사용할시 반응형 객체들을 무시하므로
    // 반응형 객체들은 storeToRefs로 반응형 객체로 변환시켜줌
    const { count: countCompo } = storeToRefs(useCountCompositionApi());
    const { increment: incrementCompo, decrement: decrementCompo } =
      useCountCompositionApi();

    const { count: cookieCounter } = storeToRefs(useCounterCookie());
    const { increment: cookieIncrement, decrement: cookieDecrement } =
      useCounterCookie();

    return {
      store,
      store2,
      count,
      noRefCount,
      getterCount,
      increment,
      decrement,
      awaitFunc,
      store3,
      cookieCounter,
      cookieIncrement,
      cookieDecrement,
      countCompo,
      incrementCompo,
      decrementCompo,
    };
  },
});
</script>

<style scoped></style>
