<template>
  <q-list>
    <q-item
      clickable
      v-for="(item, index) in menuItems"
      :key="index"
      style="margin-bottom: 10px"
      :to="item.route"
      exact
    >
      <q-item-section avatar class="q-pl-md">
        <q-icon :name="item.icon" size="20px" />
      </q-item-section>
      <q-item-section class="menu-text">{{ item.name }}</q-item-section>
    </q-item>
  </q-list>
</template>
<script setup>
import { ref } from "vue";
const menuItems = ref([
  {
    name: "Home",
    icon: "fa-solid fa-house",
    route: "/",
  },
  {
    name: "About",
    icon: "fa-solid fa-user",
    route: "/about",
  },
  {
    name: "Resume",
    icon: "fa-solid fa-file",
    route: "/resume",
  },
  {
    name: "Projects",
    icon: "fa-solid fa-diagram-project",
    route: "/projects",
  },
  {
    name: "Contact",
    icon: "fa-solid fa-envelope",
    route: "/contact",
  },
]);
</script>
<style>
.q-hoverable:hover > .q-focus-helper {
  background: none;
  opacity: 0 !important;
}
.q-hoverable:hover .q-icon {
  transition: color 0.3s ease-in;
  color: #0a58ca;
}
.menu-text {
  color: #a8a9b4;
}
.q-hoverable:hover .menu-text {
  transition: color 0.3s ease-in;
  color: #fff;
}
</style>
