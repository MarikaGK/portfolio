<template>
  <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="glass-panel p-4 flex flex-col items-center"
    >
      <div v-if="skill.icon" class="skill-icon-wrapper mb-3">
        <img
          :src="`https://cdn.simpleicons.org/${skill.icon}/white`"
          :alt="skill.name"
          class="w-8 h-8"
        />
      </div>
      <h3 class="font-medium mb-2">{{ skill.name }}</h3>
      <div class="w-full bg-white/10 h-2 rounded-full">
        <div
          class="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full"
          :style="{ width: `${skill.level}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: Array,
});
</script>
