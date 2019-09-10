<template>
  <div>
    <div class="hamburger-menu">
      <a href="javascript:void(0)" class="hamburger-menu-close" @click="close">&times;</a>
      <NuxtLink class="hamburger-menu-link" to="/">Home</NuxtLink>

      <NuxtLink
        class="hamburger-menu-link"
        v-for="link in header.links.filter(l => l.fields.id !== 'tours' && l.fields.id !== 'tripadvisor')"
        v-bind:key="link.fields.id"
        v-bind:to="link.fields.url"
      >{{link.fields.label}}</NuxtLink>
      <a
        class="hamburger-menu-link"
        v-bind:href="header.links.find(l => l.fields.id === 'tours').fields.url"
      >{{ header.links.find(l => l.fields.id === 'tours').fields.label }}</a>
      <a
        class="hamburger-menu-link"
        v-bind:href="header.links.find(l => l.fields.id === 'tripadvisor').fields.url"
      >{{header.links.find(l => l.fields.id === 'tripadvisor').fields.label}}</a>
      <div class="hamburger-menu-bottom">
        <a
          class="hamburger-menu-link"
          v-bind:href="'mailto:' + header.email.fields.url"
        >{{header.email.fields.label}}</a>
        <a
          class="hamburger-menu-link"
          v-bind:href="'tel:' + header.phone.fields.url"
        >{{header.phone.fields.url}}</a>
      </div>
    </div>

    <button v-bind:class="`${this.currentRoute} hamburger-menu-button`" @click="open">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["header", "currentRoute"],
  methods: {
    open: function() {
      document.querySelector(".hamburger-menu").style.width = "250px";
    },
    close: function() {
      document.querySelector(".hamburger-menu").style.width = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
  padding-top: 80px;
  transition: 0.5s;
  font-size: 18px;

  &-bottom {
    bottom: 100px;
    position: absolute;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #eb3323;
    }
  }

  &-link {
    padding: 8px 8px 8px 32px;
    display: block;
    transition: 0.3s;
  }

  &-close {
    position: absolute;
    top: 8px;
    right: 21px;
    font-size: 36px;
    margin-left: 50px;
  }

  &-button {
    display: none;

    @media screen and (max-width: 1100px) {
      display: block;
      background: none;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      span {
        display: block;
        width: 24px;
        height: 2px;
        margin-bottom: 4px;
        position: relative;
        background: black;
        border-radius: 3px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    @media screen and (max-width: 768px) {
      span {
        width: 18px;
      }
    }
  }
}

.at-home.hamburger-menu-button span {
  background: white;
}
</style>
