<template>
  <div class="flex flex-shrink-0">
    <div
      class="flex flex-col self-start flex-1 bg-white rounded-2xl shadow-sm p-4 lg:p-5 w-72 lg:w-auto"
    >
      <!-- task body header starts here -->

      <div class="space-y-2">
        <div class="text-xs md:text-sm font-black" :class="taskCategoryColor">
          {{ task.category }}
        </div>
        <div class="text-gray-700 text-sm md:text-base font-black">
          {{ task.name }}
        </div>
      </div>
      <!-- task body header ends here -->

      <!-- task body image starts here -->
      <div class="overflow-hidden" v-if="task.image">
        <img
          class="object-cover mt-3 mb-1 h-48 w-full"
          :src="require(`@/assets/${task.image}.png`)"
          alt="covid"
        />
      </div>
      <!-- task body image ends here -->

      <!-- task body files and comment starts here -->
      <div class="flex items-center mt-4 text-gray-500 space-x-5 md:space-x-7">
        <div class="flex items-center space-x-1 text-xs">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
          <span class="font-semibold">{{ task.files.length }} files</span>
        </div>
        <div class="flex items-center space-x-1 text-xs">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span class="font-semibold">{{ task.comments.length }} comment</span>
        </div>
      </div>
      <!-- task body files and comment ends here -->

      <!-- task body avatar and number starts here -->
      <div class="flex items-center justify-between mt-4 ml-2">
        <div class="flex items-center">
          <Avatar
            v-for="avatar in task.peoples"
            :key="avatar.name"
            :avatar="avatar"
          ></Avatar>
        </div>
        <div
          class="flex items-center justify-center h-7 w-7 md:h-9 md:w-9 bg-red-100 rounded-full text-xs md:text-sm font-bold text-red-500 leading-none"
        >
          {{ task.number }}
        </div>
      </div>
      <!-- task body avatar and number ends here -->
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  components: {
    Avatar,
  },
  computed: {
    taskCategoryColor: function () {
      if (this.task.category === "Landing Page") {
        return "text-orange-400";
      } else if (this.task.category === "Dashboard") {
        return "text-indigo-400";
      } else if (this.task.category === "Design Critique") {
        return "text-pink-400";
      } else if (this.task.category === "Illustration") {
        return "text-green-400";
      } else {
        return "text-red-400";
      }
    },
  },
};
</script>

<style>
</style>