<template>
  <div
    class="flex items-center justify-center p-1.5 border-2 border-white rounded-full -ml-2"
    :class="avatarColor"
  >
    <img
      class="h-6 w-6 md:h-7 md:w-7"
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
  },
  computed: {
    avatarColor: function () {
      if (this.avatar.name === "boy") return "bg-green-400";
      else if (this.avatar.name === "girl") return "bg-purple-400";
      else if (this.avatar.name === "boy-1") return "bg-red-400";
      else if (this.avatar.name === "girl-1") return "bg-blue-400";
      else return "bg-orange-400";
    },
  },
};
</script>

<style>
</style>