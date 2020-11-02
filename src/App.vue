<template>
  <div id="app">
    <div class="max-w-7xl">
      <MobileNav></MobileNav>
    </div>
    <div class="flex max-w-7xl">
      <Navbar></Navbar>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
export default {
  name: "App",
  components: {
    Navbar,
    MobileNav,
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
  overflow: hidden;
}
#app {
  font-family: "Raleway", sans-serif;
  @apply antialiased;
}
</style>
