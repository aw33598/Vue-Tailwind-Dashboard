<template>
  <!-- side bar that will be shown above screens lg starts here -->
  <div
    class="fixed z-50 top-0 transform -translate-x-full lg:translate-x-0 transition ease-in-out duration-500 sm:duration-700"
  >
    <div class="shadow-sm h-screen w-72 bg-white overflow-y-auto">
      <div class="flex flex-col h-full pt-8">
        <!-- logo starts -->
        <div class="flex items-center space-x-5 px-10" id="logo">
          <div class="flex items-center space-x-1">
            <span
              class="inline-block rounded-full bg-blue-300 h-6 w-1.5"
            ></span>
            <span
              class="inline-block rounded-full bg-purple-400 h-4 w-1.5"
            ></span>
          </div>
          <div class="font-semibold text-lg text-purple-400">
            <p>Tasking.io</p>
          </div>
        </div>
        <!-- logo ends -->

        <!-- new sprint starts -->
        <div class="px-10">
          <div
            class="flex items-center justify-between rounded-2xl px-5 py-4 bg-purple-150 shadow-sm mt-12"
          >
            <div class="text-gray-800 font-black text-base pr-6">
              <h2>Start New Sprint</h2>
            </div>
            <button
              class="outline-none focus:outline-none p-3 bg-purple-500 hover:bg-purple-400 focus:hover:bg-purple-400 transition-colors duration-200 ease-in rounded-full flex items-center text-white shadow-lg"
            >
              <svg
                class="w-6 h-6"
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
            </button>
          </div>
        </div>
        <!-- new sprint ends here -->

        <!-- navigation starts here -->
        <ul class="flex flex-col space-y-7 list-none mt-10">
          <li class="relative cursor-pointer">
            <div class="flex items-center space-x-5 px-10 text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <span class="text-sm">Backlog</span>
            </div>
          </li>
          <li class="relative cursor-pointer">
            <div
              class="absolute l-0 h-full w-1.5 rounded-full rounded-tl-none rounded-bl-none bg-purple-400"
            ></div>
            <div class="flex items-center space-x-5 px-10 text-purple-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="text-sm">Active Sprint</span>
            </div>
          </li>
          <li class="relative cursor-pointer">
            <div class="flex items-center space-x-5 px-10 text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span class="text-sm">Calendar</span>
            </div>
          </li>
          <li class="relative cursor-pointer">
            <div class="flex items-center space-x-5 px-10 text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
              <span class="text-sm">Reports</span>
            </div>
          </li>
          <li class="relative cursor-pointer">
            <div class="flex items-center space-x-5 px-10 text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span class="text-sm">All Issues</span>
            </div>
          </li>
          <li class="relative cursor-pointer">
            <div class="flex items-center space-x-5 px-10 text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                ></path>
              </svg>
              <span class="text-sm">Teams</span>
            </div>
          </li>
          <li class="relative cursor-pointer">
            <div class="flex items-center space-x-5 px-10 text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span class="text-sm">Settings</span>
            </div>
          </li>
        </ul>
        <!-- navigation ends here -->

        <!-- upgrade to pro button start -->
        <div class="px-10 mt-10 pb-4 text-center">
          <div class="bg-purple-150 px-4 pt-6 pb-5 rounded-3xl">
            <div>
              <p class="text-sm text-gray-700">Your trial ends in</p>
              <p class="text-purple-500 text-sm font-semibold mt-1.5">
                24 days
              </p>
            </div>
            <button
              class="outline-none focus:outline-none w-full mt-4 py-3 bg-purple-500 hover:bg-purple-400 focus:hover:bg-purple-400 transition-colors duration-200 ease-in text-white rounded-xl text-xs font-semibold"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
        <!-- upgrade to pro button ends -->
      </div>
    </div>
  </div>
  <!-- side bar that will be shown above screens lg ends here -->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      sideBarOpen: false,
    };
  },
};
</script>

<style>
</style>