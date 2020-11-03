<template>
  <div
    class="flex-1 min-h-screen transform translate-y-12 lg:translate-y-0 lg:ml-72 transition ease-in-out duration-500 sm:duration-700 navbar p-5 lg:p-8 overflow-y-auto"
  >
    <SprintHeader></SprintHeader>
    <SprintBody></SprintBody>
  </div>
</template>

<script>
import SprintHeader from "./SprintHeader";
import SprintBody from "./SprintBody";
export default {
  name: "Sprint",
  components: {
    SprintHeader,
    SprintBody,
  },
};
</script>

<style>
</style>