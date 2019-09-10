require("dotenv").config();
export default {
  head: {
    titleTemplate: "%s",
    title: "DRA ehf.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Self-catering apartments in the heart of Reykjavik, homepage and booking portal"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Reykjavik,Iceland,Hotel,Apartments,Rooms,Lodging,Rent,Booking,Portal"
      },
      {
        hid: "copyright",
        name: "copyright",
        content: "Downtown Reykjavik Apartments"
      },
      {
        hid: "author",
        name: "author",
        content: "Ingveldur Dis Heidarsdottir"
      },
      {
        hid: "designer",
        name: "designer",
        content: "Ingveldur Dis Heidarsdottir"
      },
      {
        hid: "url",
        name: "url",
        content: "http://dra.is"
      }
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
  plugins: [{ src: "~/plugins/flatpickr", ssr: false }],
  build: {
    vendor: ["flatpickr"]
  },
  buildModules: ["@nuxtjs/moment"],
  loading: {
    color: "#eb3323",
    height: "5px"
  }
};
