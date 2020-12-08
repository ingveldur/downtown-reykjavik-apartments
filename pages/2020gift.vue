<template>
  <div class="giftcard-container">
    <Header :header="header" />
    <main class="giftcard">
      <iframe src ="https://property.godo.is/booking2.php?propid=122358&amp;referer=iframe" width="800" height="1800" style="max-width:100%;border:none;overflow:auto;"><p><a href="https://property.godo.is/booking2.php?propid=122358&amp;referer=iframe" title="Book Now">Book Now</a></p></iframe>
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
    const header = await contentful.getEntries({
      content_type: "header",
      include: 3
    });

    return {
      header: header.items[0].fields
    };
  }
};
</script>

<style lang="scss">
.giftcard-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  width: 100vw;
}

.giftcard {
  margin: 70px 0 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 50px 0 0;
  }
}
</style>
