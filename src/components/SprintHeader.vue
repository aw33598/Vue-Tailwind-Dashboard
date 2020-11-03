<template>
  <div class="p-5 lg:p-7 rounded-3xl bg-white shadow-sm">
    <!-- sprint header week and date starts here -->
    <div
      class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-start"
    >
      <h1 class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-black">
        Weekly Sprint #4
      </h1>
      <div>
        <div class="text-left sm:text-right">
          <p class="text-gray-500 text-xs md:text-sm">Date created</p>
          <p class="text-gray-700 text-sm md:text-base">
            27 October, 2020. 4:15 pm
          </p>
        </div>
      </div>
    </div>
    <!-- sprint header week and date ends here -->

    <!-- sprint header avatar starts here -->
    <div
      class="mt-4 flex flex-col sm:flex-row items:start sm:justify-between sm:items-center -mr-2 sm:-mr-3 md:-mr-5 space-y-4 sm:space-y-0"
    >
      <div class="flex items-center ml-1.5">
        <div class="flex items-center">
          <Avatar
            v-for="user in users"
            :key="user.name"
            :color="user.color"
            :avatar="user"
          ></Avatar>
        </div>
        <button
          class="flex items-center justify-center space-x-1 text-purple-500 rounded-full bg-purple-150 px-2 md:px-3 py-1 shadow-xs ml-3 font-black outline-none focus:outline-none"
        >
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span class="inline-block text-xs md:text-sm">Invite People</span>
        </button>
      </div>

      <!-- sprint header avatar ends here -->

      <!-- sprint header filters starts here -->
      <div class="flex items-center -ml-3 sm:-ml-0">
        <div
          class="flex space-x-1 md:space-x-2 text-gray-500 px-3 md:px-5 border-r border-gray-400"
        >
          <button
            class="flex items-center justify-center outline-none focus:outline-none p-2 rounded-full"
          >
            <svg
              class="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <button
            class="flex items-center justify-center outline-none focus:outline-none p-2 rounded-full"
          >
            <svg
              class="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex space-x-1 md:space-x-2 text-gray-500 px-3 md:px-5">
          <button
            class="flex items-center justify-center outline-none focus:outline-none p-2 rounded-full text-purple-500 bg-purple-150"
          >
            <svg
              class="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              ></path>
            </svg>
          </button>
          <button
            class="flex items-center justify-center outline-none focus:outline-none p-2 rounded-full"
          >
            <svg
              class="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- sprint header filters ends here -->
    </div>
    <!-- sprint header avatar and filters ends here -->
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "SprintHeader",
  components: {
    Avatar,
  },
  data() {
    return {
      users: [
        { name: "boy", color: "bg-green-400" },
        { name: "girl", color: "bg-purple-400" },
        { name: "boy-1", color: "bg-red-400" },
        { name: "girl-1", color: "bg-blue-400" },
        { name: "boy-2", color: "bg-orange-400" },
      ],
    };
  },
};
</script>

<style>
</style>