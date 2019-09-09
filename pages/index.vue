<template>
  <div class="container">
    <Header />
    <main class="main">
      <div class="main-title">{{home.title}}</div>
      <div class="main-description">{{home.description}}</div>
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
    if (process.browser) {
      window.onNuxtReady(app => {
        this.loading = false;
      });
    }
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
body {
  background-image: url("../static/images/reykjavik-hd.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  transition: opacity 2s ease-in;
  width: 100vw;
}

.container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
}

.main {
  margin-top: 36px;
  color: white;

  @media screen and (max-width: 768px) {
    margin-top: 54px;
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
    margin-top: 18px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    width: 280px;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      margin: 8px auto 0;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }
}

.header,
.main {
  margin: 36px 36px 0 36px;
}
</style>
