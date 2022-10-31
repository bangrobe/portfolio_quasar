<template>
  <div class="q-pa-md">
    <SectionTitle title="About" />
    <p class="text-subtitle">
      I'm a web developer who always eager to learn new technologies and gain as
      much knowledge as possible. My strongest points are troubleshooting
      issues, implementing features for new or existing products, adapting to
      any development frameworks. I like helping people and collaborating with
      co-worker to make each other better. Having knowledge in some famous
      programming languages including Javascript (Vue, React, Strapi), Python
      (Django, Scrappy).
    </p>
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <!--About -->
        <h3 class="text-h6 text-primary text-weight-bold">
          I'm A Wed Developer
        </h3>

        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <ul>
              <ListItemInfo itemName="Birthday">14 Feb, 1988</ListItemInfo>
              <ListItemInfo itemName="Website">
                <a href="https://bangdigital.xyz">bangdigital.xyz</a>
              </ListItemInfo>
              <ListItemInfo itemName="Phone">0974 334 911</ListItemInfo>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <ul>
              <ListItemInfo itemName="Degree">Bachelor</ListItemInfo>
              <ListItemInfo itemName="Email">
                <a href="mailto:bangnugyen1488@gmail.com"
                  >bangnguyen1488@gmail.com</a
                >
              </ListItemInfo>
              <ListItemInfo itemName="Job Status"
                >Unemployed/Available for hire</ListItemInfo
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-12">
        <h3 class="text-h6 text-primary text-weight-bold">
          My working languages & framework
        </h3>
        <div class="row full-width">
          <div class="col-12 flex flex-center">
            <q-img
              src="/icons/icons8-javascript-96.png"
              style="height: 120px; max-width: 150px"
            />

            <q-img src="/icons/icons8-vue.png" style="width: 96px" ratio="1" />

            <q-img
              src="/icons/icons8-react-80.png"
              style="width: 96px"
              ratio="1"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 flex flex-center">
            <q-img
              src="/icons/icons8-python-96.png"
              style="height: 120px; max-width: 150px"
            />

            <q-img
              src="/icons/icons8-django-96.png"
              style="width: 96px"
              ratio="1"
            />

            <q-img
              src="/icons/icons8-web-scraper-96.png"
              style="width: 96px"
              ratio="1"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <h3 class="text-h6 text-primary text-weight-bold">
          Another skills & Tools use
        </h3>
        <div class="row full-width">
          <div class="col-12 flex flex-center">
            <q-img
              src="/icons/icons8-docker-96.png"
              style="width: 96px" ratio="1"
            />

            <q-img src="/icons/icons8-linux-96.png" style="width: 96px" ratio="1" />

            <q-img
              src="/icons/icons8-wordpress-100.png"
              style="width: 96px"
              ratio="1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "src/components/SectionTitle.vue";
import ListItemInfo from "src/components/ListItemInfo.vue";
import { useMeta } from "quasar";
export default {
  setup() {
    useMeta(() => {
      return {
        title: "About Page",
      };
    });
  },

  components: { SectionTitle, ListItemInfo },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
