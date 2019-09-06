<template>
  <footer class="footer">
    <form class="footer-form" target="_blank" action="https://property.godo.is/booking.php">
      <div class="footer-form-checkin">
        <label>Check in</label>
        <div>
          <flat-pickr
            v-model="checkInDate"
            :config="config"
            placeholder="Check-in"
            name="checkInDate"
          ></flat-pickr>

          <i class="icon ion-md-calendar"></i>
        </div>
      </div>
      <div class="footer-form-checkout">
        <label>Check out</label>
        <div class="foo">
          <flat-pickr
            class
            v-model="checkOutDate"
            :config="config"
            placeholder="Check-out"
            name="checkOutDate"
          >
            <i class="icon ion-md-calendar"></i>
          </flat-pickr>

          <i class="icon ion-md-calendar"></i>
        </div>
      </div>
      <div class="footer-form-guests">
        <label>Guests</label>
        <div>
          <select
            name="numadult"
            data-min-value="1"
            data-max-value="10"
            data-default-value="2"
            data-translate-min="guestSelect"
            data-translate-other="guestsSelect"
          >
            <!-- loop through array rather... -->
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
            <option value="7">7 Guests</option>
            <option value="8">8 Guests</option>
            <option value="9">9 Guests</option>
            <option value="10">10 Guests</option>
          </select>
        </div>
      </div>
      <div class="footer-form-submit">
        <button type="submit">Book Now</button>
      </div>
      <input type="hidden" name="checkin" id="alt-checkin-0" v-bind:value="checkInDate" />
      <input type="hidden" name="checkout" id="alt-checkout-1" v-bind:value="checkOutDate" />
      <input type="hidden" name="propid" value="38385" />
      <input type="hidden" name="lang" value="en" />
    </form>
  </footer>
</template>

<script>
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

let yearFromNow = new Date();
yearFromNow.setDate(yearFromNow.getDate() + 365);

export default {
  data() {
    return {
      checkInDate: new Date(),
      checkOutDate: tomorrow,
      config: {
        dateFormat: "d.m.Y",
        minDate: "today",
        wrap: true,
        maxDate: yearFromNow
      }
    };
  }
};
</script>

<style lang="scss" >
.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 84px;
  background: white;

  &-form {
    display: flex;
    align-items: flex-end;
    margin: auto;

    label {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
    }

    &-checkin {
      display: block;
      margin-right: 21px;
    }
    &-checkout {
      margin-right: 21px;
    }

    &-checkin,
    &-checkout {
      input {
        width: 186px;
        height: 32px;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        border: none;
        padding: 0 18px;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        font-family: "Montserrat", sans-serif;
      }
    }

    &-guests {
      display: block;
      margin-right: 21px;
      select {
        width: 94px;
        height: 32px;

        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        border: none;
      }
    }

    &-submit {
      button {
        width: 94px;
        height: 32px;

        background: #eb3323;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        color: white;
        font-family: "Montserrat", sans-serif;
      }
    }

    .ion-md-calendar:before {
      transform: translateX(-30px);
    }
  }
}
</style>