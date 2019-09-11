<template>
  <div class="home-container">
    <Header />
    <main class="home">
      <div class="home-title">{{home.title}}</div>
      <div class="home-description">{{home.description}}</div>
    </main>
    <BookingWidget v-if="!loading" />
    <modal
      v-if="voucher && showModal"
      @close="showModal = false"
      :title="voucher.fields.title"
      :description="voucher.fields.description"
      :couponCode="voucher.fields.voucherCode"
    />
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import flatPickr from "~/plugins/flatpickr.js";
import Header from "~/components/header.vue";
import BookingWidget from "~/components/booking-widget.vue";
import modal from "~/components/modal.vue";
import moment from "moment";

export default {
  components: {
    Header,
    BookingWidget,
    flatPickr,
    modal
  },
  mounted() {
    this.loading = false;
    this.showModal = this.shouldShowVoucher();
  },
  data: function() {
    return {
      loading: true,
      showModal: false
    };
  },
  methods: {
    shouldShowVoucher: function() {
      if (this.showVoucher && this.voucher) {
        const today = moment();
        const validFrom = moment(this.voucher.fields.validFrom);
        const validTo = moment(this.voucher.fields.validTo);

        return (
          validFrom.isBefore(validTo) && today.isBetween(validFrom, validTo)
        );
      } else {
        return false;
      }
    }
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

    const voucher = await contentful.getEntries(
      Object.assign(
        {
          content_type: "activeVoucher",
          include: 3
        },
        { "fields.id": "active-voucher" }
      )
    );

    return {
      home: home.items[0].fields,
      voucher: voucher.items[0].fields.voucher,
      showVoucher: voucher.items[0].fields.isVisible
    };
  }
};
</script>


<style lang="scss">
.home-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  background-image: url("../static/images/reykjavik-wallpaper.svg");
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
