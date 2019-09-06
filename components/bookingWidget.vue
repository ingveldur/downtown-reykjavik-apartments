<template>
  <footer class="footer">
    <form class="footer-form" target="_blank" action="https://property.godo.is/booking.php">
      <div class="footer-form-checkin">
        <label>Check in</label>
        <div>
          <input
            placeholder="Check-in"
            data-check-in="1"
            readonly
            data-translate="1"
            id="booking-strip-checkin-1"
          />
          <i class="icon-book-calendar"></i>
        </div>
      </div>
      <div class="footer-form-checkout">
        <label>Check out</label>
        <div>
          <input
            placeholder="Check-out"
            data-check-out="1"
            readonly
            data-translate="1"
            id="booking-strip-checkout-2"
          />
          <i class="icon-book-calendar"></i>
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
        <div>
          <button type="submit">Book Now</button>
        </div>
      </div>
      <input type="hidden" name="checkin" id="alt-checkin-0" value="2019-09-19" />
      <input type="hidden" name="checkout" id="alt-checkout-1" value="2019-09-20" />
      <input type="hidden" name="propid" value="38385" />
      <input type="hidden" name="lang" value="en" />
    </form>
  </footer>
</template>

<script>
export default {};
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
    }
    &-checkout {
    }
    &-guests {
      display: block;
    }
    &-submit {
    }
  }
}
</style>