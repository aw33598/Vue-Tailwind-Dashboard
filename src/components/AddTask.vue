<template>
  <div class="mt-6">
    <button
      class="bg-purple-200 rounded-full flex px-16 lg:px-0 lg:w-full items-center justify-center py-3 md:py-4 outline-none focus:outline-none space-x-2 md:space-x-3 text-purple-500 font-black"
    >
      <div class="rounded-full p-1 bg-purple-500 text-white shadow">
        <svg
          class="w-2 h-2 md:w-3 md:h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </div>
      <span class="text-xs md:text-sm">Add New Task</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddNewTask",
};
</script>

<style>
</style>