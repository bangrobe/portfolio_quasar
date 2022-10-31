<template>
  <div class="q-pa-md">
    <SectionTitle title="Projects" />
    <div class="row items-start">
      <div class="col-12">
        <ProjectCard v-for="(project,i) in projects" :key="i" :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from "quasar";
import SectionTitle from "src/components/SectionTitle.vue";
import ProjectCard from "src/components/ProjectCard.vue";
const projects = [
  {
    name: 'Task Manager',
    description: 'Django Rest Framework, ReactJs, MUI UI, Docker',
    features:'Authentication, CRUD category, CRUD task, display chart',
    link: 'https://taskmanager.bangdigital.xyz',
    github: 'https://github.com/bangrobe/drf-task-manager',
    image: '/img/taskmanager.jpeg'
  },
  {
    name: 'Music Player',
    description: 'Vue 3, Firebase, Tailwind, Docker',
    features:'Authentication, Manage songs, upload song to firebase, play and control song',
    link: 'https://musicplayer.bangdigital.xyz',
    github: 'https://github.com/bangrobe/musicplayer',
    image: '/img/musicplayer.jpeg'
  },
  {
    name: 'DigiFoodie',
    description: 'Nuxt 3, Strapi, Tailwind, Docker',
    features: 'Authentication, add to cart, place order, checkout with Stripe, get order via email',
    link: 'https://foodie.bangdigital.xyz/',
    github: 'https://github.com/bangrobe/foodie-fe',
    image: '/img/foodie.jpeg'
  }
]
useMeta(() => {
  return {
    title: "Projects Showcase",
  };
});
</script>

<style lang="scss" scoped></style>
