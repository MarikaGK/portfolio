<template>
  <div
    style="
      background-color: rgba(255, 0, 0, 0.1);
      padding: 20px;
      margin: 20px;
      border: 1px solid red;
    "
  >
    <h2>Debug Info</h2>
    <p>Base URL: {{ baseUrl }}</p>
    <p>Ścieżka: {{ $route.path }}</p>
    <p>Parametry: {{ JSON.stringify($route.params) }}</p>
    <p>Komponenty załadowane: {{ componentsLoaded }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();
const baseUrl = ref("");

onMounted(() => {
  baseUrl.value = import.meta.env.BASE_URL;
  componentsLoaded.value = true;
});

const componentsLoaded = ref(false);
</script>
