<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-grey-3" v-if="!$q.screen.gt.sm">
      <q-space></q-space>
      <q-btn
        @click="drawer = !drawer"
        round
        dense
        icon="fa-solid fa-bars"
        color="primary"
      />
    </q-toolbar>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="720"
      dark
    >
      <MainProfile />

      <SiteMenu style="margin-top: 100px" />
      <div class="text-center q-mt-lg">
        <q-btn color="white" text-color="black" label="Download CV" href="https://www.dropbox.com/s/pmhq1ohqdyugx5x/Bang%20CV%202022.pdf?dl=0" target="_blank" />
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// import { api } from "boot/axios";
import SiteMenu from "../components/SiteMenu.vue";
import MainProfile from "src/components/MainProfile.vue";
export default defineComponent({
  name: "MainLayout",
  components: { SiteMenu, MainProfile },
  setup() {
    // const url = 'https://www.dropbox.com/s/pmhq1ohqdyugx5x/Bang%20CV%202022.pdf?dl=0'
    // const forceFileDownload = (response) => {
    //   console.log(title);
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", 'sonbang_cv.pdf');
    //   document.body.appendChild(link);
    //   link.click();
    // };

    // const downloadCV = () => {
    //   api({
    //     method: "get",
    //     url,
    //     responseType: "arraybuffer",
    //   })
    //     .then((response) => {
    //       forceFileDownload(response);
    //     })
    //     .catch(() => console.log("error occured"));
    // };

    return {
      drawer: ref(true),

    };
  },
});
</script>
