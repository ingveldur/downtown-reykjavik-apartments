<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="image in images" v-bind:key="image.id">
        <img :src="image.url" />
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
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
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  mounted() {
    console.log("app init", this);
    setTimeout(() => {}, 3000);
    console.log(
      "This is current swiper instance object",
      this.mySwiper,
      "I will slideTo banners 3"
    );
    this.mySwiper.slideTo(3);
  }
};
</script>


<style lang="scss" scoped>
.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}

.swiper-wrapper {
  max-width: 600px;
}
img {
  width: 100%;
}
</style>