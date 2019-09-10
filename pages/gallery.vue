<template>
  <div class="gallery-container">
    <Header />
    <main class="gallery">
      <div class="gallery-title">{{gallery.title}}</div>
      <div class="gallery-description">{{gallery.description}}</div>
      <div class="gallery-carousel">
        <Carousel :images="images" />
      </div>
    </main>
  </div>
</template>


<script>
import contentful from "~/plugins/contentful.js";
import Header from "~/components/header.vue";
import Carousel from "~/components/carousel.vue";

export default {
  components: {
    Header,
    Carousel
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
    const gallery = await contentful.getEntries(
      Object.assign(
        {
          content_type: "page",
          include: 3
        },
        { "fields.id": "gallery" }
      )
    );

    const images = [];

    gallery.items[0].fields.blocks[0].fields.images.forEach(image => {
      images.push({
        id: image.fields.id,
        url: image.fields.image.fields.file.url
      });
    });

    return {
      gallery: gallery.items[0].fields,
      images: images
    };
  }
};
</script>


<style lang="scss">
.gallery-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  width: 100vw;
}

.gallery {
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

  &-carousel {
    width: 600px;
    max-width: 100%;
    margin: auto;
    padding: 20px;

    @media screen and (max-width: 768px) {
      width: unset;
    }
  }
}
</style>
