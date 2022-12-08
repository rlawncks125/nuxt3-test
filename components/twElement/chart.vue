<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <div class="py-3 px-5 bg-gray-50">Line chart</div>
    <canvas class="p-10 bg-white" id="chartLine"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// 차트 템플릿 tailwind elements
// https://tailwind-elements.com/docs/standard/components/charts/
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/chart.js",
    },
  ],
});

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "hsl(252, 82.9%, 67.8%)",
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const configLineChart = {
  type: "line",
  data,
  options: {},
};

onMounted(() => {
  //@ts-ignore
  const chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  );
});
</script>

<style scoped></style>
