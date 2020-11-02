<template>
  <div id="app">
    <div class="max-w-7xl">
      <Navbar></Navbar>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
html {
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}

body {
  @apply bg-purple-100;
}
#app {
  font-family: "Inter", sans-serif;
  @apply antialiased;
}
</style>
