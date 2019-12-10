<template>
  <div class="awards-container">
    <Header :header="header" />
    <main class="awards">
      <div class="awards-title">{{ awards.title }}</div>
      <div class="awards-description">{{ awards.description }}</div>
      <div class="awards-items">
        <div
          class="awards-items-item"
          v-for="award in awards.blocks"
          v-bind:key="award.fields.id"
        >
          <div class="awards-items-item-image">
            <img v-bind:src="award.fields.companyLogo.fields.file.url" />
          </div>
          <div class="awards-items-item-title">{{ award.fields.title }}</div>
          <div class="awards-items-item-description">
            {{ award.fields.description }}
          </div>
          <div class="awards-items-item-rating">
            <img v-bind:src="award.fields.rating.fields.file.url" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import contentful from "~/plugins/contentful.js";

export default {
  components: {
    Header
  },
  mounted() {
    if (process.browser) {
      window.onNuxtReady(app => {
        this.loading = false;
      });
    }
  },
  data: function() {
    return {
      loading: true
    };
  },

  async asyncData() {
    const awards = await contentful.getEntries(
      Object.assign(
        {
          content_type: "page",
          include: 3
        },
        { "fields.id": "awards" }
      )
    );

    const header = await contentful.getEntries({
      content_type: "header",
      include: 3
    });

    return {
      awards: awards.items[0].fields,
      header: header.items[0].fields
    };
  }
};
</script>

<style lang="scss">
// TODO make shared styling sheet
.awards-container {
  position: relative;
  min-height: 100vh;
  padding: 0.05px;
  width: 100vw;
}

.awards {
  color: black;
  margin: 70px 80px 0;
  @media screen and (max-width: 768px) {
    margin: 50px 18px 0;
  }

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    width: 550px;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      margin: auto;
      font-size: 22.6784px;
      line-height: 28px;
      text-align: center;
    }
  }

  &-description {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    width: 355px;
    max-width: 100%;
    margin: 18px 0 0;

    @media screen and (max-width: 768px) {
      margin: 12px auto 0;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      width: 212px;
    }
  }

  &-items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: fit-content;
    margin: 80px auto 0;
    width: 100%;

    @media screen and (max-width: 768px) {
      margin: 60px auto 0;
      width: 100%;
    }

    &-item {
      margin: 40px 21px 0;
      width: 300px;
      max-width: 100%;
      padding: 21px;
      // box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.25);
      // border-radius: 6px;

      @media screen and (max-width: 768px) {
        margin: 0 30px 60px;
        padding: 16px;
        width: 100%;
        max-width: 300px;
      }

      &-image {
        margin: 21px 0 0;
        width: fit-content;
        margin: auto;

        img {
          width: 212px;
          height: 54px;
          max-width: 100%;

          @media screen and (max-width: 768px) {
            width: 190px;
            height: 43px;
          }
        }
      }

      &-title {
        width: fit-content;
        height: 21px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.1em;
        margin: 21px auto 0;

        @media screen and (max-width: 768px) {
          font-size: 13px;
          line-height: 16px;
          margin: 16px auto 0;
        }
      }

      &-description {
        width: fit-content;
        height: 15px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.1em;
        margin: 8px auto 0;

        @media screen and (max-width: 768px) {
          font-size: 9px;
          line-height: 11px;
          margin: 3px auto 0;
        }
      }

      &-rating {
        margin: 21px auto 0;
        width: fit-content;

        @media screen and (max-width: 768px) {
          margin: 16px auto 0;
        }

        img {
          width: 130px;
          max-width: 100%;

          @media screen and (max-width: 768px) {
            width: 100px;
          }
        }
      }
    }
  }
}
</style>
