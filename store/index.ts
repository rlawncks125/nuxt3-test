// vuex대신
// pinia 사용

import { defineStore } from "pinia";

interface State {
  count: number;
}

export const useCounterStore = defineStore("counter", {
  state: (): State => ({ count: 0 }),

  getters: {
    getterCount: (state) => state.count,
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async waitFunction() {
      return new Promise((res, rej) => {
        setTimeout(() => res("d"), 1000);
      });
    },
  },
  // pinia-plugin-persistedstate 라이브러리 를 활용한
  // 쿠기 저장 활성화
  persist: true,
});

// 컴포지션 api 방식을 이용한 store
export const useCountCompositionApi = defineStore(
  "counter2",
  () => {
    const count = useState("compositionCount", () => 0);

    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };

    return { count, increment, decrement };
  },
  {
    // 컴포지션 api 방식을 사용하더라도 persist선언 가능
    persist: true,
  }
);

// nuxt3 에서 지원하는 useCookie를 이용한
// 쿠키 저장
export const useCounterCookie = defineStore("cookieCount", () => {
  const count = useCookie<number>("cookie counter", { default: () => 0 });

  const increment = () => {
    count.value = ++count.value;
  };
  const decrement = () => {
    count.value = --count.value;
  };

  return { count, increment, decrement };
});
