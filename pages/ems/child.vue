<template>
  <div>child Page layout non-header</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    useHead({
      title: "ems 자식 컴포넌트",
    });
    return {};
  },
});
</script>

<style scoped></style>
