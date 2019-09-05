<template>
  <div class="foo">
    <header class="header">
      <div class="header-left">
        <img v-bind:src="header.logo.fields.file.url" />
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
    <main class="content">
      <div class="content-title">{{home.title}}</div>
      <div class="content-description">{{home.description}}</div>
      <!-- <NuxtLink to="/about">About page</NuxtLink> -->
    </main>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";

export default {
  head: {
    // TODO fill out carefully
    title: "Dra home page 🚀",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Dra page description"
      }
    ],
    noscript: [{ innerHTML: "Body No Scripts", body: true }],
    script: [
      { src: "/head.js" },
      { src: "/body.js", body: true },
      { src: "/defer.js", defer: "" }
    ]
  },
  async asyncData() {
    const header = await contentful.getEntries({
      content_type: "header",
      include: 3
    });
    const home = await contentful.getEntries({
      content_type: "page",
      include: 3
    });
    console.log("home", home.items[0].fields);
    return {
      header: header.items[0].fields,
      home: home.items[0].fields
    };
  }
};
</script>

<style lang="scss">
body {
  background-image: url("../static/images/reykjavik-wallpaper.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

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

.content {
  margin-top: 36px;
  color: white;

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 44.3607px;
    line-height: 54px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    width: 550px;
  }

  &-description {
    margin-top: 18px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.1em;
    width: 280px;
  }
}
</style>
