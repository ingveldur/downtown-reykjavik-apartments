<template>
  <div class="terms-container">
    <Header :header="header" />
    <main class="terms">
      <div class="terms-title">Terms and Conditions</div>
      <div class="terms-description">
        <p>
          These terms and conditions, as may be amended from time to time, apply
          as a contract to all hotel supplies and services at Downtown Reykjavík
          Apartments. All bookings, agreements, partnership and marketing
          activities are subject to the below terms for Downtown Reykjavík
          Apartments ehf.
        </p>

        <h4>1. General Terms</h4>
        <p>
          Check in is guaranteed at 15:00 (3pm). Early check in is based on
          availability and cannot be guaranteed. Guests checking in after 17:00
          (5pm) should follow the self-check in procedure provided per Email.
        </p>
        <p>
          Check out: Check out time is until 11:00 (11am). If you require a
          later check out, please contact reception (info@dra.is) prior to the
          day of your departure and we will do our best to accommodate your
          request. A charge may apply for late check outs.
        </p>

        <p>
          Luggage storage: provide luggage storage is available to all guests
          who have received their check-in procedure details. Downtown Reykjavík
          Apartments does not take any responsibility any items in luggage
          storage.
        </p>
        <p>
          Extra bed policy: All extra beds are subject to availability. Extra
          beds can only be placed in two, three, and four bedroom apartments,
          not the studios. A charge may apply.
        </p>
        <p>
          Children’s policy: Downtown Reykjavík Apartments are family friendly,
          can provide baby cribs, high chairs etc. All children 12 years and
          younger stay for free when using existing beds.
        </p>
        <p>Pets: Pets are not allowed.</p>
        <p>
          Smoking Policy: For the health, safety and comfort of our guests, all
          rooms and other indoor areas are non-smoking. Indoor smoking is
          subject to a 300 EUR penalty.
        </p>
        <p>
          Noise/disturbance policy: To ensure a restful stay for all of our
          guests, parties and loud gatherings are not allowed in the hotel
          guests rooms or hallways. The hotel values its guest and enforces a
          strict policy on noise and disturbance. Guests who violate this policy
          with excessive noise, overcrowding in rooms, or parties will be
          evicted without a refund. No noise hours are between 23:00 – 07:00
          (11pm-7am)
        </p>
        <p>
          Room damages/Missing Items: Downtown Reykjavík Apartments reserves the
          right to charge guests for any damages or missing items the amount it
          costs to replace item or return room to its original state.
        </p>
        <p>
          Please note that Downtown Reykjavík Apartments is not staffed at all
          times, but we can be reached by e-mail: info@dra.is or by phone: +354
          612 2777.
        </p>

        <h4>2. Prices</h4>
        <p>
          The prices on our Website are highly competitive. All apartment prices
          are per apartment for all nights and all prices are displayed
          including VAT (11%) and €2.70 City tax per night (subject to change of
          all taxes), unless stated differently on our Website or the
          confirmation email. Applicable taxes may be charged in the event of a
          no-show or cancellation fee. The price list includes both rates for
          individual as well as groups. The term group includes 3 or more
          apartments when booking together.
        </p>
        <p>
          Sometimes cheaper rates are available for a specific stay or special
          offer, however, these rates may carry special restrictions and
          conditions, for example non-cancelable and non-refundable.
        </p>
        <p>
          Accepted credit cards: Visa and Mastercard. A 3% surcharge applies to
          American Express cards.
        </p>
        <p>
          Retail rates are always subject to fluctuate. Once agreed in writing,
          prices are binding for both parties and exchange rates frozen where
          applicable. Downtown Reykjavík Apartments nevertheless reserves the
          right to make alterations in prices due to increased costs by
          suppliers, increased taxes, changes in exchange rate or other
          circumstances beyond Downtown Reykjavík Apartments control.
        </p>
        <p>
          Net/Commissionable Rates. The contractor is required to sell rooms to
          clients at retail value unless packaged with other elements and non
          transparent. Downtown Reykjavík Apartments does not offer any referral
          fee or commission for referring the properties to third parties. All
          Net/Commissionable rate offers are CONFIDENTIAL. The hotel reserves
          the right to revoke any Net/commissionable rates upon breach of this
          confidentiality.
        </p>

        <h4>3. Bookings & Cancelation Policy</h4>
        <p>
          Individuals: Cancellations are free of charge 14 days prior to
          arrival. All bookings must be 100% pre-paid of the total amount 13
          days prior to arrival and are non-refundable.
        </p>
        <p>
          Groups (3 apartments or more): Cancellation is free of charge up to 6
          weeks before arrival. All bookings must per-pay a 50% non-refundable
          deposit of the total amount 6 weeks prior to arrival. If cancelled
          between 2-6 weeks before arrival, the 50% deposit is non-refundable.
          The remaining 50% of the total amount must be pre-paid 13 days prior
          to arrival and is non-refundable.
        </p>
        <p>
          In case of relocation Downtown Reykjavík Apartments is considered
          non-liable for compensation as long as it can provide accommodation of
          the same or superior standard or category.
        </p>
      </div>
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
.terms-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  width: 100vw;
}

.terms {
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
    width: 855px;
    max-width: 100%;
    margin: 18px 0 0;

    @media screen and (max-width: 768px) {
      margin: 12px auto 0;
      font-size: 12px;
      line-height: 16px;
      width: 90%;
    }
  }
}
</style>
