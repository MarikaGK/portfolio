<script setup>
import { useI18n } from "vue-i18n";

// Oryginalnie SkillsGrid prawdopodobnie oczekuje props 'skills'
// a teraz wysyłamy 'technicalSkills' i 'softSkills'
const props = defineProps({
  technicalSkills: {
    type: Array,
    required: true,
  },
  softSkills: {
    type: Array,
    required: true,
  },
});

// Mapa przekształcająca potencjalnie problematyczne nazwy ikon na prawidłowe identyfikatory
const iconMapping = {
  vue: "vuejs",
  nodejs: "nodejs",
  database: "database",
  mongodb: "mongodb",
  sql: "mysql",
  pinia: "vuejs",
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

// Obsługa specjalnych przypadków dla konkretnych technologii
const specialIconFormats = {
  nodejs: "plain-wordmark", // Node.js używa plain-wordmark, który pokaże logo z tekstem
  mongodb: "plain-wordmark", // MongoDB również wygląda lepiej z tekstem
  sql: "plain-wordmark", // SQL (MySQL) również z tekstem
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
  const iconName = icon.toLowerCase();
  const mappedIcon = (iconMapping[iconName] || iconName).toLowerCase();

  // Sprawdź, czy mamy specjalny format dla tej ikony
  const format =
    specialIconFormats[iconName] ||
    (specialIcons[mappedIcon] ? "plain" : "original");

  // Użyj CDN DevIcons z odpowiednim formatem
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${mappedIcon}/${mappedIcon}-${format}.svg`;
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

// Dodajemy dostęp do aktualnego języka
const { locale } = useI18n();
</script>

<template>
  <div class="mb-12">
    <h3 class="text-2xl font-semibold mb-6 text-center text-white/90">
      {{ $t("skills.technical") }}
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      <div
        v-for="skill in technicalSkills"
        :key="skill.name"
        class="skill-card bg-black/30 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center"
      >
        <div class="skill-icon-wrapper mb-3 flex justify-center items-center">
          <img
            :src="getIconUrl(skill.icon)"
            :alt="skill.name"
            class="w-8 h-8 mx-auto"
            :class="getIconClass(skill.icon)"
            @error="handleImageError"
          />
        </div>
        <h4 class="text-lg font-medium">{{ skill.name }}</h4>

        <div class="w-full bg-white/10 h-2 rounded-full mt-2">
          <div
            class="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
            :style="{ width: `${skill.level}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl font-semibold mb-6 text-center text-white/90">
      {{ $t("skills.soft") }}
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div
        v-for="skill in softSkills"
        :key="typeof skill.name === 'object' ? skill.name.en : skill.name"
        class="skill-card bg-black/30 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center"
      >
        <!-- Używamy odpowiedniej wersji językowej dla nazwy umiejętności -->
        <h4 class="text-lg font-medium mb-2">
          {{
            typeof skill.name === "object"
              ? skill.name[locale] || skill.name.en
              : skill.name
          }}
        </h4>

        <div class="w-full bg-white/10 h-2 rounded-full mt-2">
          <div
            class="bg-gradient-to-r from-rose-300 to-purple-600 h-2 rounded-full"
            :style="{ width: `${skill.level}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.white-icon {
  filter: brightness(0) invert(1);
}

.special-icon {
  /* Mniejsza inwersja, aby zachować więcej szczegółów */
  filter: brightness(0.1) invert(0.9);
}
</style>
