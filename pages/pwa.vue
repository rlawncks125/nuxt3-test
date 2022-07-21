<template>
  <div>pwa</div>
  <button id="subscribe" @click.prevent="clickSubBtn">subscribe!</button>
  <div id="subscription_detail" class="break-words"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { clickSubBtn, initPush } from "@/plugins/sw.client";

export default defineComponent({
  setup() {
    onMounted(() => {
      initPush();
    });
    return { clickSubBtn };
  },
});
</script>

<style scoped></style>
