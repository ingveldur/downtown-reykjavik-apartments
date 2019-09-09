<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/header.vue";

export default {
  components: {
    Header
  }
};
</script>

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
</style>