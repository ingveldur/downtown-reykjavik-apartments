<template>
  <nuxt />
</template>

<style lang="scss">
html {
  width: 100vw;
}
body {
  width: 100vw;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  width: fit-content;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>