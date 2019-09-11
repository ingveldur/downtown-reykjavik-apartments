<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-container-close">
            <a href="javascript:void(0)" @click="$emit('close')">&times;</a>
          </div>
          <div class="modal-header">
            <div class="modal-header-title">{{ title }}</div>
          </div>
          <div class="modal-body">
            <div class="modal-body-description" v-html="$md.render(description)"></div>
          </div>
          <hr />
          <div class="modal-footer">
            <div name="modal-footer-coupon">
              Voucher code:
              <strong>{{ couponCode }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["title", "description", "couponCode"]
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 16px;
  }

  &-container {
    margin: 0px auto;
    transition: all 0.3s ease;
    font-family: "Montserrat", sans-serif;
    max-width: 440px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    &-close {
      display: flex;
      margin: 0 0 0 auto;
      width: fit-content;
      font-size: 36px;
      line-height: 18px;
      padding: 21px 21px 0;

      a {
        text-decoration: none;
        color: black;

        &:hover {
          color: #eb3323;
        }
      }
    }

    hr {
      border: 0 none;
      border-top: 2px dashed #322f32;
      background: none;
      height: 0;
      width: 80%;
      border-color: #eb3323;
      margin: 0 auto;
    }
  }

  &-header {
    margin: 8px 46px 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    @media screen and (max-width: 768px) {
      font-size: 21px;
    }
  }

  &-body {
    margin: 0 46px 54px;
    font-size: 16px;
    line-height: 20px;
    @media screen and (max-width: 768px) {
      margin: 0 36px 36px;
      font-size: 15px;
    }
  }

  &-footer {
    padding: 21px 46px;
    font-size: 18px;
    line-height: 22px;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }

    strong {
      font-size: 24px;
      line-height: 29px;
      font-weight: bold;
      margin-left: 6px;
      @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-left: 0;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>