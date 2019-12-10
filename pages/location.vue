<template>
  <div class="location-container">
    <Header :header="header" />
    <main class="location">
      <div class="location-title">{{ location.title }}</div>
      <div class="location-description">{{ location.description }}</div>
      <iframe
        class="location-map"
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1846548795115!2d-21.916759783731887!3d64.14110198359275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674c96faa2e29%3A0x2c7641f7181d7cac!2sDowntown+Reykjav%C3%ADk+Apartments!5e0!3m2!1sen!2sid!4v1565951928087!5m2!1sen!2sid"
        width="100%"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
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

    const header = await contentful.getEntries({
      content_type: "header",
      include: 3
    });

    return {
      location: location.items[0].fields,
      header: header.items[0].fields
    };
  }
};
</script>

<style lang="scss">
// TODO make shared styling sheet
.location-container {
  position: relative;
  height: 100vh;
  padding: 0.05px;
  width: 100vw;
}

.location {
  color: black;
  height: 100%;

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    width: 550px;
    max-width: 100%;
    margin: 70px 80px 0;

    @media screen and (max-width: 768px) {
      margin: 50px auto 0;
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
    margin: 18px 80px 0;

    @media screen and (max-width: 768px) {
      margin: 12px auto 0;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      width: 212px;
    }
  }

  &-map {
    margin: 30px 0 0;
    height: 100%;
  }
}
</style>
