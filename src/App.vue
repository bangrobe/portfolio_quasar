<template>
  <router-view />
</template>

<script setup>
import { useMeta } from "quasar";
import { ref } from "vue";
const title = ref("Son Bang Porfolio");
useMeta(() => {
  return {
    title: title.value || "Son Bang Portfolio",
    titleTemplate: (title) => `${title} - Son Bang Porfolio`,
    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Nguyễn Viết Sơn Bằng, fresher web developer. Available for hire.",
      },
      keywords: {
        name: "keywords",
        content: "Web developer, Frontend developer",
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8",
      },
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        property: "og:title",
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template(title) {
          return `${title} - Son Bang Porfolio`;
        },
      },
      ogImage: {
        property: "og:image",
        template() {
          return 'https://bangdigital.xyz/img/avatar.jpg';
        }
      }
    },
  };
});
</script>
