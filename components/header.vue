<template>
  <header class="header">
    <div class="header-left">
      <a v-bind:href="'/'">
        <img v-bind:src="header.logo.fields.file.url" />
      </a>
    </div>
    <div class="header-center">
      <NuxtLink
        class="header-center-link"
        v-for="link in header.links"
        v-bind:key="link.fields.id"
        v-bind:to="link.fields.url"
      >{{link.fields.label}}</NuxtLink>
    </div>
    <div class="header-right">
      <div class="header-right-link">
        <img v-bind:src="header.email.fields.icon.fields.file.url" />
        <a v-bind:href="'mailto:' + header.email.fields.url">{{header.email.fields.label}}</a>
      </div>
      <div class="header-right-link">
        <img v-bind:src="header.phone.fields.icon.fields.file.url" />
        <a v-bind:href="'tel:' + header.phone.fields.url">{{header.phone.fields.label}}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["header"]
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  &-left {
    margin: 0 auto 0 0;
    img {
      filter: invert(1);
    }
  }

  &-center {
    &-link {
      margin-right: 40px;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      text-transform: uppercase;
      color: white;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-right {
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;

    &-link {
      display: flex;
      align-items: center;
      margin-right: 24px;

      img {
        width: 22px;
        margin-right: 8px;
        filter: invert(1);
      }

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>