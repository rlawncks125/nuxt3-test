<template>
  <div>
    <p>{{ $route.params }}</p>
    <img :src="srcImage" alt="" />
  </div>

  <vue-qrcode
    :url="`http://nuxt3-og-test.herokuapp.com/ems/page-${$route.params.users}/${$route.params.id}`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

const queryImage = async (id: number) => {
  return new Promise((res, rej) => {
    console.log(id);
    setTimeout(() => {
      if (id === 1) {
        res(
          "https://res.cloudinary.com/dhdq4v4ar/image/upload/v1653939813/back-Portfolio/cvgfjjza5eqoz4ufwowd.jpg"
        );
      } else {
        res(
          "https://res.cloudinary.com/dhdq4v4ar/image/upload/v1649754055/back-Portfolio/xkwziu66c4zsno46n4o3.jpg"
        );
      }
    }, 100);
  });
};

export default defineComponent({
  setup() {
    const route = useRoute();
    const srcImage = ref();
    console.log(route.params);

    onMounted(async () => {
      srcImage.value = await queryImage(+route.params.id);
    });

    // og
    const ogImage = useState("ogImage");
    useLazyAsyncData("ogData", () =>
      queryImage(+route.params.id).then((res) => {
        ogImage.value = res;
      })
    );

    useHead({
      title: `parms 를 가지는 페이지 : ${route.params.users} + ${route.params.id}`,
      meta: [
        {
          name: "description",
          content: "Nuxt3 Params Vue.",
        },
        {
          name: "og:title",
          property: "og:title",
          content: `users 와 id params을 받습니다.`,
        },
        {
          name: "og:description",
          property: "og:description",
          content: `${route.params.users} - ${route.params.id} 사이트 입니다.`,
        },
        {
          name: "og:image",
          property: "og:image",
          content: ogImage,
        },
      ],
    });

    return { srcImage };
  },
});
</script>
