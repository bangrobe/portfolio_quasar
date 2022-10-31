<template>
  <div>
    <h2 class="text-h5 font-weight-bold text-info relative-position q-py-sm">
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h2::after {
  content: "";
  position: absolute;
  display: block;
  height: 3px;
  width: 50px;
  background: #0a58ca;
  left: 0;
  bottom: 0;
}
</style>
