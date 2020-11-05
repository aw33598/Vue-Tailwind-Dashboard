<template>
  <!-- board layout starts here -->
  <div>
    <!-- board header starts here -->
    <div class="flex items-center justify-between px-3 lg:px-4 mb-6">
      <h2 class="text-base md:text-lg font-semibold" :class="boardNameColor">
        {{ board.name }}
      </h2>
      <svg
        class="text-gray-500 w-5 h-5 md:w-6 md:h-6 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </svg>
    </div>
    <!-- board header ends here -->

    <div class="overflow-x-hidden">
      <div
        class="flex flex-row lg:flex-col space-x-4 lg:space-x-0 space-y-0 lg:space-y-5 xl:space-y-6 overflow-x-auto scroll"
      >
        <!-- board body starts here -->
        <Task v-for="task in board.tasks" :key="task.name" :task="task"></Task>
        <!-- board body ends here -->
      </div>
    </div>
    <AddTask v-if="board.name === 'Backlog'"></AddTask>
  </div>
  <!-- board layout ends here -->
</template>

<script>
import Task from "./Task";
import AddTask from "./AddTask";
export default {
  name: "Board",
  props: {
    board: {
      type: Object,
      required: true,
    },
  },
  components: {
    Task,
    AddTask,
  },
  computed: {
    boardNameColor: function () {
      if (this.board.name === "Backlog") {
        return "text-red-400";
      } else if (this.board.name === "In Progress") {
        return "text-indigo-400";
      } else if (this.board.name === "In Review") {
        return "text-blue-400";
      } else {
        return "text-green-400";
      }
    },
  },
};
</script>

<style scoped>
.scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.scroll::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
</style>