<template>
  <div class="border p-2 bg-emerald-100">test2 컴포넌트</div>
  <template v-for="test in [{ name: 'ss' }, { name: 'ww' }]">
    {{ test.name }}
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { testProps: String },
  setup() {
    const childSS = "sss";
    return { childSS };
  },
});
</script>

<style scoped></style>
