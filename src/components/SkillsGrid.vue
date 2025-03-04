<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-5 md:py-10"
  >
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="glass-panel p-4 flex flex-col items-center"
    >
      <div v-if="skill.icon" class="skill-icon-wrapper mb-3">
        <img
          :src="getIconUrl(skill.icon)"
          :alt="skill.name"
          :class="['w-8 h-8', getIconClass(skill.icon)]"
          @error="handleImageError"
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

// Mapa przekształcająca potencjalnie problematyczne nazwy ikon na prawidłowe identyfikatory
const iconMapping = {
  vue: "vuejs",
  nodejs: "nodedotjs",
  database: "postgresql", // Zastępujemy ogólną "database" konkretną bazą danych
  pinia: "vuejs", // Brak ikony pinia, używamy Vue jako zamiennika
  js: "javascript",
  ts: "typescript",
  react: "react",
  nextjs: "nextdotjs",
  github: "github",
  git: "git",
  figma: "figma",
  // Dodaj więcej mapowań w miarę potrzeb
};

// Ikony, które potrzebują specjalnego traktowania
const specialIcons = {
  javascript: true,
  html: true,
  html5: true,
  css: true,
  css3: true,
};

// Funkcja określająca klasę CSS dla ikony
function getIconClass(icon) {
  const iconName = icon.toLowerCase();
  const mappedIcon = (iconMapping[iconName] || iconName).toLowerCase();

  // Jeśli to specjalna ikona, użyj innej klasy
  if (specialIcons[mappedIcon]) {
    return "special-icon";
  }

  return "white-icon";
}

// Funkcja pobierająca prawidłowy URL dla ikony
function getIconUrl(icon) {
  // Sprawdź czy mamy mapowanie dla tej ikony
  const mappedIcon = (iconMapping[icon.toLowerCase()] || icon).toLowerCase();

  // Dla specjalnych ikon używamy wariantu 'plain'
  if (specialIcons[mappedIcon]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${mappedIcon}/${mappedIcon}-plain.svg`;
  }

  // Użyj CDN DevIcons zamiast SimpleIcons, który jest bardziej niezawodny
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${mappedIcon}/${mappedIcon}-original.svg`;
}

// Używamy emoji jako zastępnika ikony zamiast zewnętrznego obrazu
function handleImageError(event) {
  // Spróbuj alternatywny format nazwy ikony
  const iconName = event.target.alt.toLowerCase();
  const iconPath = event.target.src;

  // Jeśli to był już "original", spróbuj "plain"
  if (iconPath.includes("-original.svg")) {
    event.target.src = iconPath.replace("-original.svg", "-plain.svg");
    return;
  }

  // Jeśli to był już "plain", użyj zastępczego SVG
  // Zastępujemy niedostępne ikony prostym symbolem emoji
  event.target.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'%3E%3C/path%3E%3Cline x1='2' y1='20' x2='2' y2='20'%3E%3C/line%3E%3C/svg%3E";

  // Ukrywamy błędy w konsoli
  event.onerror = null;
}
</script>

<style scoped>
.white-icon {
  filter: brightness(0) invert(1);
}

.special-icon {
  /* Mniejsza inwersja, aby zachować więcej szczegółów */
  filter: brightness(0.1) invert(0.9);
}
</style>
