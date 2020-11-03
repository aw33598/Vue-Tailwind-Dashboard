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
@font-face {
  font-family: "Product Sans";
  src: url("../src/assets/fonts/ProductSans-Regular.woff") format("woff"),
    url("../src/assets/fonts/ProductSans-Medium.woff") format("woff"),
    url("../src/assets/fonts/ProductSans-Bold.woff") format("woff"),
    url("../src/assets/fonts/ProductSans-Black.woff") format("woff");
  font-style: normal;
  font-weight: normal;
}

html {
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}

body {
  @apply bg-gray-100;
  overflow: hidden;
}
#app {
  font-family: "Product Sans", sans-serif;
  @apply antialiased;
}
</style>
