<template>
  <div
    class="absolute top-0 right-0 z-50 h-screen w-screen flex items-center justify-center bg-white"
  >
    <div class="spinner space-x-0.5">
      <div class="bounce1 w-3 h-3 lg:w-5 lg:h-5"></div>
      <div class="bounce2 w-3 h-3 lg:w-5 lg:h-5"></div>
      <div class="bounce3 w-3 h-3 lg:w-5 lg:h-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.spinner {
  text-align: center;
}

.spinner > div {
  @apply bg-purple-500;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>