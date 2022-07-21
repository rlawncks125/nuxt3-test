<template>
  <font-awesome :icon="['fa', $props.icon]" :size="$props.size" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FaIconName, FaIconSize } from "@/plugins/font-awesome";

export default defineComponent({
  props: {
    icon: String as () => keyof typeof FaIconName,
    size: String as () => keyof typeof FaIconSize,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
