<template>
  <div class="container">
    <Header :header="header" />
    <main class="main">
      <div class="main-title">{{home.title}}</div>
      <div class="main-description">{{home.description}}</div>
    </main>
    <BookingWidget />
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import Header from "~/components/header.vue";
import BookingWidget from "~/components/booking-widget.vue";

export default {
  components: {
    Header,
    BookingWidget
  },
  head: {
    // TODO fill out carefully
    title: "DRA ehf.",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Dra page description"
      }
    ]
  },
  async asyncData() {
    const header = await contentful.getEntries({
      content_type: "header",
      include: 3
    });
    const home = await contentful.getEntries({
      content_type: "page",
      include: 3
    });
    return {
      header: header.items[0].fields,
      home: home.items[0].fields
    };
  }
};
</script>


<style lang="scss">
body {
  background-image: url("../static/images/reykjavik-wallpaper.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
}

.main {
  margin-top: 36px;
  color: white;

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 44.3607px;
    line-height: 54px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    width: 550px;
  }

  &-description {
    margin-top: 18px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.1em;
    width: 280px;
  }
}

.header,
.main {
  margin: 36px 36px 0 36px;
}
</style>
