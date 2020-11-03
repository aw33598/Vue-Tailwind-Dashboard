<template>
  <div
    class="flex items-center justify-center p-1.5 border-2 border-white rounded-full -ml-1.5"
    :class="avatar.color"
  >
    <img
      class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
      :src="require(`@/assets/${avatar.name}.svg`)"
      :alt="avatar.name"
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    avatar: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>