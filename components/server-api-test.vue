<script setup lang="ts">
// server Api 테스트
$fetch("/api/hello", {
  method: "get",
}).then((res) => console.log(res));

$fetch("/api/api", {
  method: "get",
}).then((res) => console.log(res));

const { data } = useAsyncData("hello-get", () =>
  $fetch("/api/hello", { method: "post" })
);
</script>

<template>
  <div>serverApiTest {{ data }}</div>
</template>

<style lang="scss" scoped></style>
