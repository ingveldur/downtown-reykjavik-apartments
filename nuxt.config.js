require("dotenv").config();
export default {
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [
      // Each object in this array is its own meta tag
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ]
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  link: [
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap"
    }
  ],
  css: ["./static/css/main.scss"]
};
