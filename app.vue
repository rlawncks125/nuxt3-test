<template>
  <div>
    <div class="border text-red-400">app vue navBar</div>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    useHead({
      titleTemplate: (titleChunk) => {
        const baseTitle = "Nuxt3";
        return titleChunk ? `${titleChunk} - ${baseTitle}` : baseTitle;
      },
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content: "Nuxt3 Test App Vue.",
        },
        {
          name: "og:title",
          property: "og:title",
          content: `Nuxt3 Test App Vue Title.`,
        },
        {
          name: "og:description",
          property: "og:description",
          content: "Nuxt3 Test App Vue.",
        },
        {
          name: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/dhdq4v4ar/image/upload/v1654624758/%ED%8F%AC%ED%94%841_isxw3h.jpg",
        },
        {
          name: "og:type",
          property: "og:type",
          content: "website",
        },
        // {
        //   name: "og:url",
        //   property: "og:url",
        //   content: "http://kimjuchan97.xyz",
        // },
      ],
    });
    onMounted(async () => {
      const setDarkmode = () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };
      // 다크모드 감지
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", setDarkmode);
    });
    return {};
  },
});
</script>

<style>
body {
  @apply bg-blue-400 dark:bg-teal-400;
}
</style>
