<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="glass-panel p-6 md:p-8 order-2 md:order-1">
      <h3 class="text-xl font-semibold mb-4">Kim jestem</h3>
      <p class="mb-4 text-white/80">
        Jestem front-end developerem z pasją do tworzenia interaktywnych i
        responsywnych interfejsów użytkownika. Z wykształcenia informatyk, z
        zamiłowania artysta cyfrowy.
      </p>
      <p class="mb-4 text-white/80">
        Moja przygoda z programowaniem zaczęła się ponad 5 lat temu. Od tego
        czasu regularnie rozwijam swoje umiejętności, śledząc najnowsze trendy i
        technologie w świecie web developmentu.
      </p>
      <p class="text-white/80">
        Poza programowaniem, interesuję się fotografią, grami wideo i muzyką. Te
        pasje często inspirują mnie w projektowaniu ciekawych i niestandardowych
        rozwiązań dla moich klientów.
      </p>

      <div class="mt-6 flex gap-4">
        <a
          href="https://www.linkedin.com/in/marika-gk/"
          target="_blank"
          class="social-link"
        >
          <span class="sr-only">LinkedIn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://github.com/marikagk"
          target="_blank"
          class="social-link"
        >
          <span class="sr-only">GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="relative order-1 md:order-2">
      <div
        class="glass-panel overflow-hidden aspect-square rounded-full mx-auto max-w-[300px]"
      >
        <img
          src="/img/profile.jpg"
          alt="Profile"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"
      ></div>
    </div>
  </div>
</template>

<script setup>
// Możesz dodać tutaj logikę, jeśli będzie potrzebna
</script>

<style scoped>
.social-link {
  @apply text-white/70 hover:text-white transition-colors;
}
</style>
