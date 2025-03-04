<template>
  <header class="fixed top-0 left-0 right-0 z-40">
    <div class="absolute inset-0 h-15 backdrop-blur-sm bg-black/20"></div>
    <div class="container mx-auto px-4 py-4 relative z-10">
      <div class="flex justify-between items-center">
        <div class="logo">
          <a href="#" class="text-xl font-thin">{{ $t("header.title") }}</a>
        </div>
        <nav class="hidden md:block">
          <ul class="flex gap-8">
            <li v-for="item in menuItems" :key="item.id">
              <a
                :href="item.url"
                class="text-white/80 hover:text-white transition-colors"
              >
                {{ $t(item.i18nKey) }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Przełącznik języków -->
        <div class="language-switcher ml-4">
          <button
            @click="changeLanguage('pl')"
            class="px-2"
            :class="{
              'text-white': currentLanguage === 'pl',
              'text-white/50': currentLanguage !== 'pl',
            }"
          >
            PL
          </button>
          <span class="text-white/30">|</span>
          <button
            @click="changeLanguage('en')"
            class="px-2"
            :class="{
              'text-white': currentLanguage === 'en',
              'text-white/50': currentLanguage !== 'en',
            }"
          >
            EN
          </button>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
          <span class="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md py-4 md:hidden"
    >
      <ul class="container mx-auto px-4 flex flex-col gap-4">
        <li v-for="item in menuItems" :key="item.id">
          <a
            :href="item.url"
            class="block py-2 text-white/80 hover:text-white transition-colors"
            @click="isMenuOpen = false"
          >
            {{ $t(item.i18nKey) }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const isMenuOpen = ref(false);
const currentLanguage = computed(() => locale.value);

const changeLanguage = (lang) => {
  locale.value = lang;
  // Opcjonalnie zapisz preferencję w localStorage
  localStorage.setItem("preferredLanguage", lang);
};

const menuItems = [
  { id: 1, i18nKey: "header.home", url: "#home" },
  { id: 2, i18nKey: "header.projects", url: "#projekty" },
  { id: 3, i18nKey: "header.skills", url: "#umiejetnosci" },
  { id: 4, i18nKey: "header.about", url: "#o-mnie" },
  { id: 5, i18nKey: "header.contact", url: "#kontakt" },
];

// Wczytaj zapisany język przy starcie
onMounted(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});
</script>
