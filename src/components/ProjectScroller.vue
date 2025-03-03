<template>
  <div class="project-scroller" ref="scrollerRef">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sticky section with project details -->
      <div class="lg:w-1/2 lg:sticky lg:top-32 h-fit">
        <div class="glass-panel p-8">
          <h3 class="text-2xl font-bold mb-4">{{ currentProject.title }}</h3>
          <p class="text-white/70 mb-6">{{ currentProject.description }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in currentProject.tags"
              :key="tag"
              class="px-3 py-1 rounded-full text-sm bg-white/10 text-white/90"
            >
              {{ tag }}
            </span>
          </div>
          <a
            :href="currentProject.link"
            target="_blank"
            class="inline-flex items-center text-purple-400 hover:underline"
          >
            Zobacz projekt
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Scrollable section with project images -->
      <div class="lg:w-1/2">
        <div class="space-y-60">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-item"
            :id="`project-${project.id}`"
          >
            <div class="glass-panel overflow-hidden h-[500px] group">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        <!-- Spacer to ensure last project can be scrolled fully into view -->
        <div class="h-screen"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useScroll } from "@vueuse/core";

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const scrollerRef = ref(null);
const { y: scrollY } = useScroll();
const currentProjectId = ref(1);

const currentProject = computed(() => {
  return (
    props.projects.find((p) => p.id === currentProjectId.value) ||
    props.projects[0]
  );
});

// Funkcja do określania widocznego projektu podczas scrollowania
const updateCurrentProject = () => {
  if (!scrollerRef.value) return;

  const projectElements = props.projects
    .map((p) => {
      const el = document.getElementById(`project-${p.id}`);
      if (!el) return null;

      const rect = el.getBoundingClientRect();
      return {
        id: p.id,
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height,
        visible:
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2,
      };
    })
    .filter(Boolean);

  const visibleProject = projectElements.find((p) => p.visible);
  if (visibleProject) {
    currentProjectId.value = visibleProject.id;
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateCurrentProject);
  updateCurrentProject(); // Initial update
});

watch(scrollY, () => {
  updateCurrentProject();
});
</script>

<style scoped>
.project-scroller {
  position: relative;
}

.glass-panel {
  @apply bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl;
  transition: all 0.3s ease;
}

.glass-panel:hover {
  @apply bg-white/10;
}
</style>
