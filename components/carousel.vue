<template>
  <!-- :autoPlay="true" :playSpeed="3000" -->
  <hooper :itemsToShow="1" :infiniteScroll="true">
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

<style lang="scss">
.img {
  position: relative;
  float: left;
  width: -webkit-fill-available;
  max-width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 400px;
}
.hooper {
  height: 100%;
}

.hooper-indicator {
  background-color: black !important;
}

.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #eb3323 !important;
}

.hooper-pagination {
  position: unset;
  right: unset;
  transform: unset;
  display: flex;
  padding: 5px 10px;
  width: fit-content;
  margin: auto;
}

.hooper-prev {
  transform: translate(-100%, -50%);
}

.hooper-next {
  transform: translate(100%, -50%);
}

.hooper-slide {
  width: 100% !important;
}

*:focus {
  outline: none;
}
</style>