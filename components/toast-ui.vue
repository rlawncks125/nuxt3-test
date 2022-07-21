<template>
  <div>
    <button @click="getHTML">Get HTML</button>
    <div ref="tostRef"></div>
  </div>
</template>

<script lang="ts">
import Editor from "@toast-ui/editor";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const tostRef = ref();
    const { $setToastEditor } = useNuxtApp();
    let control: Editor;

    const getHTML = () => {
      console.log(control.getHTML());
    };

    onMounted(() => {
      control = $setToastEditor(tostRef.value);
    });

    return { tostRef, getHTML };
  },
});
</script>

<style scoped></style>
