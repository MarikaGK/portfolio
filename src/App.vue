<script setup>
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <div class="bg-grid"></div>
    <Navbar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<style>
.app-container {
  position: relative;
  min-height: 100vh;
}

.bg-grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: linear-gradient(to right, #171717 1px, transparent 1px),
    linear-gradient(to bottom, #171717 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 15%,
    #000 80%,
    transparent
  );
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
