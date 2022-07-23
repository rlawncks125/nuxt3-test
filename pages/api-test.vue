<template>
  <div>
    <p>api test</p>
    <p>useFetch</p>
    <div v-if="pending">Loading ...</div>
    <div v-else>
      {{ data.restaurant.restaurantName }}
    </div>
    <p>clinet call</p>
    <div v-if="restaurantData">
      {{ restaurantData.restaurant.restaurantName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRestaurantInfo } from "~~/api/test";

const { data, pending } = useLazyFetch("/api/test", { pick: ["restaurant"] });

const { data: restaurantData } = getRestaurantInfo();

watch(data, () => {
  console.log(data.value);
});
</script>

<style scoped></style>
