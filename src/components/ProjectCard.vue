<template>
  <q-card class="my-card q-my-sm" flat bordered>
    <q-card-section horizontal class="full-width">
      <q-card-section class="q-pt-xs col-8">
        <div class="text-h4 q-mt-sm q-mb-xs">
            {{ project.name }}
        </div>
        <p class="q-my-sm">
            <strong>Technologies</strong>: {{ project.description }}
        </p>
        <p class="q-my-sm">
            <strong>Features: </strong>{{ project.features }}
        </p>
        <p class="subtitle q-my-sm">
            <strong>Github:</strong> {{ project.github}}
        </p>
        <p class="subtitle q-my-sm">
            <strong>Demo: </strong>
            <a :href="project.link" target="_blank">{{ project.link}}</a>
        </p>
      </q-card-section>

      <q-card-section class="col-4 text-right">
        <q-img
          height="180px"
          class="rounded-borders"
          :src="project.image"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>