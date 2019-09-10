<template>
  <div class="location-container">
    <Header />
    <main class="location">
      <div class="location-title">{{location.title}}</div>
      <div class="location-description">{{location.description}}</div>
    </main>
  </div>
</template>


<script>
import Header from "~/components/header.vue";
import contentful from "~/plugins/contentful.js";

export default {
  components: {
    Header
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
    const location = await contentful.getEntries(
      Object.assign(
        {
          content_type: "page",
          include: 3
        },
        { "fields.id": "location" }
      )
    );

    return {
      location: location.items[0].fields
    };
  }
};
</script>

<style lang="scss">
// TODO make shared styling sheet
.location-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  width: 100vw;
}

.location {
  color: black;
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
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    width: 355px;
    max-width: 100%;
    margin: 18px 0 0;

    @media screen and (max-width: 768px) {
      margin: 12px auto 0;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      width: 212px;
    }
  }
}
</style>
