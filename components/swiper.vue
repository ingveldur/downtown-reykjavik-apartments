<template>
  <div v-swiper:swiper="swiperOption" style="height: auto">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="image in images"
        v-bind:key="image.id"
        data-swiper-autoplay="2500"
      >
        <div class="swiper-image" v-bind:style="'background-image:url(' + image.url + ');'"></div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  props: ["images"],

  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        autoHeight: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    this.swiper.autoplay.start();
  }
};
</script>


<style lang="scss">
.swiper {
  &-wrapper {
    max-width: 600px;
  }
  &-image {
    position: relative;
    float: left;
    width: -webkit-fill-available;
    max-width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 400px;
    border-radius: 6px;
  }

  &-button {
    &-next {
      background-image: url("../static/images/arrow-forward.svg");
    }

    &-prev {
      background-image: url("../static/images/arrow-backward.svg");
    }

    &-next,
    &-prev {
      filter: drop-shadow(2px 4px 6px black);
    }
  }
}
</style>