<template>
  <div class="p-2">
    <p class="text-center text-amber-400">home vue( index vue )</p>
    <ul class="flex gap-2">
      <nuxt-link to="/ems"> ems Go</nuxt-link>
      <nuxt-link to="/pwa"> pwa Go</nuxt-link>
      <nuxt-link to="/pinia"> pinia Go</nuxt-link>
    </ul>

    <p class="text-center text-white">data Bind Test</p>
    <div class="my-2 border p-1">
      <div>{{ ts }} : {{ useX }}</div>
      <button @click="chageState">state Change</button>
    </div>

    <p v-directive-test>vue directive test</p>
    <div>
      <vue-qrcode url="https://study.kimjuchan97.xyz/" />
    </div>

    <fa-icon icon="bacon" size="4x" />

    <toast-ui />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FaIcon from "~~/components/fa-icon.vue";

export default defineComponent({
  setup() {
    const ts = "text Change Test";
    // ref <-- 메모리 누수 문제로
    // nuxt에서는 useState로 대체
    const useX = useState<string>("x", () => "xState");
    const chageState = () => {
      useX.value = "change State ";
    };
    onMounted(() => {
      console.log("index.vue");
    });
    useHead({
      title: "Nuxt3 Test Index Vue",
      meta: [
        {
          name: "description",
          content: "Nuxt3 Test Index Vue.",
        },
      ],
    });
    return {
      ts,
      useX,
      chageState,
    };
  },
  components: { FaIcon },
});
</script>
