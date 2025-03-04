<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import ProjectScroller from "../components/ProjectScroller.vue";
import SkillsGrid from "../components/SkillsGrid.vue";
import AboutMe from "../components/AboutMe.vue";
import ContactForm from "../components/ContactForm.vue";
import DebugInfo from "../components/DebugInfo.vue";

// Import danych z JSON
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

const { t, locale } = useI18n();

// Dynamiczne pobieranie danych w zależności od języka
const projects = computed(() => {
  return projectsData[locale.value] || projectsData.en;
});

// Umiejętności techniczne
const technicalSkills = computed(() => skillsData.technical);
const softSkills = computed(() => skillsData.soft);

// Funkcja do pobierania CV
const downloadCV = () => {
  const cvFilename =
    locale.value === "pl"
      ? "CV_Marika_Groenke_Kurpios.pdf"
      : "CV_Marika_Groenke_Kurpios_EN.pdf";

  console.log(`Pobieranie CV: ${cvFilename}`);

  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}${cvFilename}`;
  link.download = cvFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <main>
    <DebugInfo />
    <section
      id="home"
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div class="absolute inset-0 z-[-1]">
        <div
          class="absolute inset-x-0 top-10 z-[-1] mx-auto opacity-70 overflow-hidden"
        >
          <!-- Tło z siatką, podobne do przykładu -->
          <div class="grid-pattern"></div>
        </div>

        <!-- Gradientowe efekty -->
        <div
          class="absolute top-1/2 left-0 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            class="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          ></div>
        </div>
        <div
          class="absolute top-1/2 right-0 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            class="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[#9089fc] to-[#ff80b5] opacity-30"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-4 text-center">
        <h1 class="text-2xl md:text-5xl font-medium mb-6">
          {{ $t("home.title_p1") }}
          <span class="gradient-text-pink">{{ $t("home.title_high1") }}</span>
        </h1>
        <h1 class="text-2xl md:text-5xl font-medium mb-6">
          {{ $t("home.title_p2") }}
          <span class="gradient-text-purple shimmer-effect">{{
            $t("home.title_high2")
          }}</span>
        </h1>
        <h2 class="text-xl md:text-2xl text-white/80 mb-8 py-2 md:">
          {{ $t("home.subtitle") }}
        </h2>
        <p class="max-w-2xl mx-auto text-white/70 mb-12">
          {{ $t("home.description") }}
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projekty"
            class="bg-gradient-to-r from-violet-500 to-purple-800 px-6 py-3 rounded-full font-medium"
          >
            {{ $t("home.buttons.projects") }}
          </a>
          <button
            @click="downloadCV"
            class="bg-gradient-to-r from-fuchsia-900 to-rose-400 px-6 py-3 rounded-full font-medium flex items-center justify-center"
          >
            <span>{{ $t("home.buttons.downloadCV") }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
          <a
            href="#kontakt"
            class="border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full font-medium"
          >
            {{ $t("home.buttons.contact") }}
          </a>
        </div>
      </div>
    </section>

    <section id="projekty" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-heading">{{ $t("projects.title") }}</h2>

        <div class="project-scroll-container relative">
          <ProjectScroller :projects="projects" />
        </div>
      </div>
    </section>

    <section id="umiejetnosci" class="section">
      <div class="container mx-auto px-4">
        <h2 class="section-heading">{{ $t("skills.title") }}</h2>

        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 text-center text-white/90">
            {{ $t("skills.technical") }}
          </h3>
          <SkillsGrid :skills="technicalSkills" />
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-6 text-center text-white/90">
            {{ $t("skills.soft") }}
          </h3>
          <SkillsGrid :skills="softSkills" />
        </div>
      </div>
    </section>

    <section id="o-mnie" class="section">
      <div class="container mx-auto px-4">
        <h2 class="section-heading">{{ $t("about.title") }}</h2>
        <AboutMe />
      </div>
    </section>

    <section id="kontakt" class="section">
      <div class="container mx-auto px-4">
        <h2 class="section-heading">{{ $t("contact.title") }}</h2>
        <ContactForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
.grid-pattern {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(23, 23, 23, 0.5) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(23, 23, 23, 0.5) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Gradient dla pierwszego wyróżnionego słowa */
.gradient-text-pink {
  font-weight: 600;
  background-image: linear-gradient(to bottom, #f9a8d4, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

/* Gradient dla drugiego wyróżnionego słowa z animacją "shimmer" */
.gradient-text-purple {
  font-weight: 600;
  background-image: linear-gradient(to bottom, #d8b4fe, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  position: relative;
}

/* Efekt przesuwającego się świetlnego paska */
.shimmer-effect {
  background-image: linear-gradient(
    to right,
    #8b5cf6 0%,
    #8b5cf6 40%,
    #c4b5fd 50%,
    #8b5cf6 60%,
    #8b5cf6 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 3s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
