<template>
  <div class="home-container">
    <Header />
    <main class="home">
      <div class="home-title">{{home.title}}</div>
      <div class="home-description">{{home.description}}</div>
    </main>
    <BookingWidget v-if="!loading" />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import contentful from "~/plugins/contentful.js";
import flatPickr from "~/plugins/flatpickr.js";

import BookingWidget from "~/components/booking-widget.vue";

export default {
  components: {
    Header,
    BookingWidget,
    flatPickr
  },
  mounted() {
    this.loading = false;
  },
  data: function() {
    return {
      loading: true
    };
  },

  async asyncData() {
    const home = await contentful.getEntries(
      Object.assign(
        {
          content_type: "page",
          include: 3
        },
        { "fields.id": "home" }
      )
    );
    return {
      home: home.items[0].fields
    };
  }
};
</script>


<style lang="scss">
.home-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  background-image: url("../static/images/reykjavik-hd.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100vw;
}

.home {
  color: white;
  margin: 70px 80px 0;

  @media screen and (max-width: 768px) {
    margin: 50px 18px 0;
  }

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    width: 550px;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      margin: auto;
      font-size: 22.6784px;
      line-height: 28px;
      text-align: center;
    }
  }

  &-description {
    margin: 18px 0 0;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    width: 280px;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      margin: 12px auto 0;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }
}
</style>
