<template>
  <div>
    <header class="header">
      <div class="header-left">
        <HamburgerMenu :header="header" />
        <a v-bind:href="'/'">
          <img v-bind:src="header.logo.fields.file.url" />
        </a>
      </div>
      <div class="header-center">
        <a v-bind:href="'/'">
          <img v-bind:src="header.logo.fields.file.url" />
        </a>
        <!-- <NuxtLink
          class="header-center-link"
          v-for="link in header.links.filter(l => l.fields.id !== 'tours' && l.fields.id !== 'tripadvisor')"
          v-bind:key="link.fields.id"
          v-bind:to="link.fields.url"
        >{{link.fields.label}}</NuxtLink>-->
        <a
          class="header-center-link"
          v-bind:href="header.links.find(l => l.fields.id === 'tours').fields.url"
        >{{header.links.find(l => l.fields.id === 'tours').fields.label}}</a>
        <a
          class="header-center-link"
          v-bind:href="header.links.find(l => l.fields.id === 'tripadvisor').fields.url"
        >{{header.links.find(l => l.fields.id === 'tripadvisor').fields.label}}</a>
      </div>
      <div class="header-right">
        <div class="header-right-link">
          <a v-bind:href="'mailto:' + header.email.fields.url">
            <img v-bind:src="header.email.fields.icon.fields.file.url" />
            {{header.email.fields.label}}
          </a>
        </div>
        <div class="header-right-link">
          <a v-bind:href="'tel:' + header.phone.fields.url">
            <img v-bind:src="header.phone.fields.icon.fields.file.url" />
            {{header.phone.fields.label}}
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HamburgerMenu from "~/components/hamburger-menu.vue";

export default {
  props: ["header"],
  components: {
    HamburgerMenu
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  &-left {
    display: flex;
    align-items: baseline;
    margin: 0 auto 0 0;

    img {
      filter: invert(1);
    }

    @media screen and (max-width: 1100px) {
      margin: 0;

      img {
        display: none;
      }
    }
  }

  &-center {
    margin: auto;

    img {
      display: none;
      filter: invert(1);
    }

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

    @media screen and (max-width: 1100px) {
      img {
        display: block;
        transform: translateX(-24px);
      }

      &-link {
        display: none;
      }
    }
  }

  &-right {
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 13px;
    text-transform: uppercase;

    &-link {
      align-items: center;
      margin-right: 24px;

      a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;

        img {
          width: 22px;
          margin-right: 8px;
          filter: invert(1);
        }
      }
    }

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
}
</style>