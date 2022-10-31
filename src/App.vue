<template>
  <router-view />
</template>

<script setup>
import { useMeta } from "quasar";
import { ref } from "vue";
const title = ref("");
useMeta(() => {
  return {
    title: title.value,
    titleTemplate: (title) => `${title} - Son Bang Porfolio`,
  };
});
</script>
