<template>
  <vue-qrcode
    :value="$props.url"
    :color="{ dark: '#000000ff', light: '#0000' }"
    :type="'image/png'"
    :quality="0.92"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vueQrcode from "vue-qrcode";

export default defineComponent({
  props: { url: String },
  components: { vueQrcode },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
