<template>
  <div id="app">
    <Loading v-if="isLoading"></Loading>
    <template v-else>
      <div class="max-w-7xl">
        <MobileNav></MobileNav>
      </div>
      <div class="flex max-w-7xl">
        <Navbar></Navbar>
        <Sprint></Sprint>
      </div>
    </template>
  </div>
</template>

<script>
import Loading from "./components/Loading";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import Sprint from "./components/Sprint";
export default {
  name: "App",
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    });
  },
  components: {
    MobileNav,
    Navbar,
    Sprint,
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
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
}

html {
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-150;
  @apply tracking-wider;
}

#app {
  font-family: "Product Sans", sans-serif;
  @apply antialiased;
}
</style>
