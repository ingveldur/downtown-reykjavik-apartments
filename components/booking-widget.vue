<template>
  <footer class="footer">
    <form class="footer-form" target="_blank" action="https://property.godo.is/booking.php">
      <div class="footer-form-dates">
        <label>Dates</label>
        <div class="footer-form-dates-wrapper">
          <flat-pickr
            v-model="selectedDates"
            :config="config"
            placeholder="Check-in - Check-out"
            name="dates"
          ></flat-pickr>
          <a title="toggle" data-toggle>
            <i class="icon ion-ios-calendar"></i>
          </a>
        </div>
      </div>
      <div class="footer-form-guests">
        <label>Guests</label>
        <div class="footer-form-guests-wrapper">
          <select
            name="numadult"
            data-min-value="1"
            data-max-value="10"
            data-default-value="2"
            data-translate-min="guestSelect"
            data-translate-other="guestsSelect"
          >
            <option
              v-for="index in 10"
              v-bind:key="index"
            >{{index === 1 ? `${index} Guest` : `${index} Guests`}}</option>
          </select>
          <a>
            <i class="icon ion-ios-code"></i>
          </a>
        </div>
      </div>
      <div class="footer-form-submit">
        <button v-bind:disabled="selectedDates === ''" type="submit">Book Now</button>
      </div>
      <input
        type="hidden"
        name="checkin"
        id="alt-checkin-0"
        v-bind:value="selectedDates.split(' to ')[0]"
      />
      <input
        type="hidden"
        name="checkout"
        id="alt-checkout-1"
        v-bind:value="selectedDates.split(' to ')[1]"
      />
      <input type="hidden" name="propid" value="38385" />
      <input type="hidden" name="lang" value="en" />
    </form>
  </footer>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      selectedDates: "",
      rangeValid: true,
      config: {
        dateFormat: "d.m.Y",
        minDate: "today",
        wrap: true,
        maxDate: moment()
          .add(1, "years")
          .toDate(),
        mode: "range"
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" >
.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: white;
  transition: 0.5s;
  box-shadow: 0px -10px 40px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 1000px) {
    height: fit-content;
    padding: 32px 0;
  }

  &-form {
    display: flex;
    align-items: flex-end;
    margin: auto;

    @media screen and (max-width: 1000px) {
      width: 100%;
      max-width: 100%;
      display: block;
    }

    @media screen and (max-width: 1000px) {
      & > div {
        margin-bottom: 18px;
      }
    }

    label {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 15px;
      text-transform: uppercase;
    }

    &-dates {
      text-align: center;
      margin: 0 21px 0 0;

      @media screen and (max-width: 1000px) {
        margin: 0;
      }

      label {
        margin-right: 12px;
      }

      &-wrapper {
        display: flex;

        @media screen and (max-width: 1000px) {
          margin: 0 50px;
        }

        a {
          width: 0;
        }

        input {
          width: 210px;
          height: 36px;
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          border: none;
          padding: 0 18px;
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
          font-family: "Montserrat", sans-serif;
          padding: 0 0 0 12px;
          -webkit-appearance: none;

          @media screen and (max-width: 1000px) {
            width: 100%;
            max-width: 100%;
          }

          &::placeholder {
            color: black;
          }
        }
      }
    }

    &-guests {
      display: block;
      margin: 0 21px 0 0;
      text-align: center;

      @media screen and (max-width: 1000px) {
        margin: 0;
      }

      &-wrapper {
        display: flex;

        @media screen and (max-width: 1000px) {
          margin: 0 50px;
        }

        a {
          width: 0;
        }
        select {
          width: 110px;
          height: 36px;
          background: transparent;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          border: none;
          font-family: "Montserrat", sans-serif;
          text-indent: 12px;
          font-size: 12px;
          -webkit-appearance: none;

          @media screen and (max-width: 1000px) {
            width: 100%;
            max-width: 100%;
          }

          &:-moz-focusring {
            color: transparent;
            text-shadow: 0 0 0 #000;
          }
        }
      }
    }

    &-submit {
      @media screen and (max-width: 1000px) {
        margin: 0 50px;
      }
      button {
        width: 100px;
        height: 36px;
        background: #eb3323;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        color: white;
        font-family: "Montserrat", sans-serif;
        border: none;

        @media screen and (max-width: 1000px) {
          width: 100%;
          max-width: 100%;
        }

        &:disabled {
          background: lighten($color: #eb3323, $amount: 10%);
          cursor: not-allowed;
        }
      }
    }

    .ion-ios-calendar:before {
      transform: translate(-24px, 16px);
      cursor: pointer;
    }

    .ion-ios-code:before {
      transform: translate(-24px, 16px) rotate(90deg);
    }
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input,
  select,
  button {
    margin-top: 8px;
    cursor: pointer;
  }

  label {
    font-weight: 500;
  }
}

// flatpickr overrides
.flatpickr-current-month .flatpickr-monthDropdown-months {
  -webkit-appearance: none !important;
}
</style>