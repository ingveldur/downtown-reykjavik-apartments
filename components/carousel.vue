<template>
  <hooper :itemsToShow="1" :autoPlay="true" :playSpeed="3000">
    <slide v-for="image in images" v-bind:key="image.id">
      <div class="img" v-bind:style="'background-image:url(' + image.url + ');'"></div>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  props: ["images"],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
};
</script>

<style lang="scss" scoped>
.img {
  position: relative;
  float: left;
  width: 800px;
  height: 500px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.hooper {
  height: 100%;
}
</style>