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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();
const baseUrl = import.meta.env.BASE_URL;
const componentsLoaded = ref(false);

onMounted(() => {
  componentsLoaded.value = true;
});
</script>
