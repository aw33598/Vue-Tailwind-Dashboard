<template>
  <div
    class="flex-1 min-h-screen transform translate-y-12 xl:translate-y-0 xl:ml-64 transition ease-in-out duration-500 sm:duration-700 navbar px-4 lg:px-6 py-6 xl:p-10 overflow-y-auto"
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