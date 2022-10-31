<template>
  <li class="q-mb-md text-h6">
    <ListItemInfoIcon /><span class="text-weight-bolder">{{ itemName }}: </span>
    <slot></slot>
  </li>
</template>
<script setup>
import ListItemInfoIcon from "./ListItemInfoIcon.vue";
const props = defineProps({
  itemName: {
    type: String,
    required: true,
  },
});
</script>
