<template>
  <div>
    <header class="header" v-if="header">
      <div class="header-left">
        <HamburgerMenu :header="header" :currentRoute="getClass()" />
        <NuxtLink to="/">
          <img v-bind:src="getLogo()" />
        </NuxtLink>
      </div>
      <div class="header-center">
        <NuxtLink to="/">
          <img v-bind:src="getLogo()" />
        </NuxtLink>
        <NuxtLink
          v-for="link in header.links.filter(
            l => l.fields.id !== 'tours' && l.fields.id !== 'tripadvisor'
          )"
          v-bind:class="
            `${getClass()} ${
              link.fields.id === $route.name ? 'selected-route' : ''
            } header-center-link`
          "
          v-bind:key="link.fields.id"
          v-bind:to="link.fields.url"
          >{{ link.fields.label }}</NuxtLink
        >
        <a
          v-bind:class="`${getClass()} header-center-link`"
          v-bind:href="'terms'"
          >Terms</a
        >
        <a
          v-bind:class="`${getClass()} header-center-link`"
          v-bind:href="
            header.links.find(l => l.fields.id === 'tours').fields.url
          "
          >{{ header.links.find(l => l.fields.id === "tours").fields.label }}</a
        >
        <a
          v-bind:class="`${getClass()} header-center-link`"
          v-bind:href="
            header.links.find(l => l.fields.id === 'tripadvisor').fields.url
          "
          >{{
            header.links.find(l => l.fields.id === "tripadvisor").fields.label
          }}</a
        >
      </div>
      <div class="header-right">
        <div v-bind:class="`${getClass()} header-right-link`">
          <a v-bind:href="'mailto:' + header.email.fields.url">
            <img v-bind:src="header.email.fields.icon.fields.file.url" />
            {{ header.email.fields.label }}
          </a>
        </div>
        <div v-bind:class="`${getClass()} header-right-link`">
          <a v-bind:href="'tel:' + header.phone.fields.url">
            <img v-bind:src="header.phone.fields.icon.fields.file.url" />
            {{ header.phone.fields.label }}
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import HamburgerMenu from "~/components/hamburger-menu.vue";

export default {
  props: ["header"],
  components: {
    HamburgerMenu
  },
  methods: {
    getClass() {
      return this.$route.name === "index" ? "at-home" : "";
    },
    getLogo() {
      return this.$route.name === "index"
        ? this.header.logos.find(l => l.fields.title === "dra-logo-white")
            .fields.file.url
        : this.header.logos.find(l => l.fields.title === "dra-logo").fields.file
            .url;
    }
  },
  data: function() {
    return {
      currentRoute: ""
    };
  },
  mounted() {
    this.currentRoute = this.$route.name;
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 26px 80px 0;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    margin: 18px 18px 0 18px;
  }

  &-left {
    display: flex;
    align-items: baseline;
    margin: 0 auto 0 0;

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
    }

    &-link {
      margin-right: 18px;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      line-height: 16px;
      text-transform: uppercase;
      color: black;

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

    @media screen and (max-width: 768px) {
      img {
        width: 130px;
      }
    }
  }

  &-right {
    margin: auto 0 auto auto;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    line-height: 13px;
    text-transform: uppercase;

    &-link {
      align-items: center;
      margin: 0 18px 0 0;

      a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;

        img {
          width: 22px;
          margin-right: 6px;
          filter: invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg)
            brightness(93%) contrast(97%);
        }
      }
      &:last-child {
        a img {
          margin-right: 2px;
        }
      }
    }

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
}
a.at-home,
.at-home.header-right-link a {
  color: white;
}

.at-home.header-right-link a img {
  filter: invert(1);
}

.selected-route {
  font-weight: 600;
  color: #eb3323;
}
</style>
