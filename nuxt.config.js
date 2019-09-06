require("dotenv").config();
export default {
  head: {
    titleTemplate: "%s",
    meta: [
      // Each object in this array is its own meta tag
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
      }
    ]
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  plugins: [
    { src: "~/plugins/hotel-datepicker", ssr: false },
    { src: "~/plugins/flatpickr", ssr: false }
  ],
  build: {
    vendor: ["hotel-datepicker", "flatpickr"]
  }
};
