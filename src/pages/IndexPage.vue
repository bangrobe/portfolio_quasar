<template>
  <q-page
    class="flex flex-center bg-grey-6"
    style="background: url('img/IT-Wall.jpg') center center no-repeat !important"
  >
    <div>
      <h2 class="text-h5 text-white text-weight-bold">
        <span
          ><VueWriter :array="['Hello','I\'m Bằng.','A web developer','Available for an immediate start']"
        /></span>
      </h2>
    </div>
  </q-page>
</template>

<script>
import VueWriter from "vue-writer";
import { useMeta } from "quasar";

import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    VueWriter,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Intro Page",
      };
    });
  },
});
</script>
<style>
.is-typed {
  font-family: "Roboto";
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  display: inline-block;
}

.is-typed span.typed {
  color: black;
  color: #fff;
  border-bottom: 2px solid #0a58ca;
}

.is-typed span.cursor {
  display: inline-block;
  width: 2px;
  background-color: white;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}
</style>
