<template>
  <div>
    <ul class="text-center q-px-none">
      <li
        v-for="(social, index) in socials"
        :key="index"
        class="text-center q-mr-sm"
        style="display: inline-block"
      >
        <a
          :href="social.link"
          target="_blank"
          class="bg-grey-9"
          style="
            display: block;
            text-decoration: none;
            color: white;
            border-radius: 50%;
            padding: 8px 0;
            text-align: center;
            width: 36px;
            height: 36px;
          "
        >
          <q-icon tag="i" :name="social.icon" size="16px" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const socials = ref([
  {
    name: "facebook",
    icon: "fa-brands fa-facebook-f",
    link: "https://facebook.com/bangrobe",
  },
  {
    name: "github",
    icon: "fa-brands fa-github",
    link: "https://github.com/bangrobe",
  },
  {
    name: "linkedin",
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/bang-nguyen-viet-b4b226235/",
  },
  {
    name: "youtube",
    icon: "fa-brands fa-youtube",
    link: "https://www.youtube.com/@bangdigi",
  },
]);
</script>
