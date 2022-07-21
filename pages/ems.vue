<template>
  <div class="p-1">
    <p class="text-center text-amber-400">ems vue</p>
    <nuxt-link to="/"> home Go</nuxt-link>

    <section class="border p-2 flex flex-col gap-4">
      <p class="text-center text-white">router params 이용</p>
      <div class="flex items-center gap-2">
        <div>
          <label for="id-input">users 값 </label>
          <input
            class="p-1"
            type="text"
            placeholder="/ems/page-[:users]"
            id="id-input"
            v-model="users"
          />
        </div>
        <div>
          <label for="id-input">id 값 </label>
          <input
            class="p-1"
            type="text"
            placeholder="/ems/page-[:users]/[:id]"
            id="id-input"
            v-model="parmId"
          />
        </div>
      </div>
      <NuxtLink class="text-center" :to="`/ems/page-${users}/${parmId}`"
        >/ems/page-${users}/${parmId} 이동</NuxtLink
      >
    </section>

    <NuxtLink to="/ems/child">/ems/child 이동</NuxtLink>

    <NuxtLayout name="non-header" class="border p-1 py-4 my-4">
      <p class="text-center text-pink-200">
        자식 컴포넌트들 랜더링 할곳 : &lt;NuxtPage/&gt;
      </p>
      <NuxtPage />
    </NuxtLayout>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const users = useState("users");
    const parmId = useState("id");

    useHead({
      title: "ems Vue",
      meta: [
        {
          name: "og:title",
          property: "og:title",
          content: `Nuxt3 Test Ems Vue Title.`,
        },
        {
          name: "og:description",
          property: "og:description",
          content: "Nuxt3 Test Ems Vue.",
        },
      ],
    });

    return { parmId, users };
  },
});
</script>

<style scoped></style>
