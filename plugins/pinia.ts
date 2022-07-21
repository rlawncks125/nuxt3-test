import { PiniaPluginContext } from "pinia";
import { createNuxtPersistedState } from "pinia-plugin-persistedstate";

function MyPiniaPlugin({
  store, // the store the plugin is augmenting
  options, // 'defineStore()'로 전달된 스토어를 정의하는 옵션 개체
}: PiniaPluginContext) {
  // 모든 sotre에 pluginInject 변수 값을 추가
  store.pluginInject = "pluginInject 값";
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(MyPiniaPlugin);

  // 상태 쿠키로 저장 플러그인 사용
  // 저장할 저장소 persist: true 값 추가
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie));
});

import "pinia";

declare module "pinia" {
  export interface PiniaCustomProperties {
    pluginInject: string;
  }
}
