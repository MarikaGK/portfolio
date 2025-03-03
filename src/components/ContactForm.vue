<template>
  <div class="max-w-2xl mx-auto">
    <div class="glass-panel p-8">
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium"
              >Imię i nazwisko</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-input"
              placeholder="Jan Kowalski"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-input"
              placeholder="jan.kowalski@example.com"
              required
            />
          </div>
        </div>

        <div class="mb-6">
          <label for="subject" class="block mb-2 text-sm font-medium"
            >Temat</label
          >
          <input
            type="text"
            id="subject"
            v-model="form.subject"
            class="form-input"
            placeholder="Temat wiadomości"
            required
          />
        </div>

        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm font-medium"
            >Wiadomość</label
          >
          <textarea
            id="message"
            rows="5"
            v-model="form.message"
            class="form-input"
            placeholder="Twoja wiadomość..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting">Wysyłanie...</span>
          <span v-else>Wyślij wiadomość</span>
        </button>

        <p
          v-if="formStatus"
          class="mt-4 text-center"
          :class="{
            'text-green-400': formStatus === 'success',
            'text-red-400': formStatus === 'error',
          }"
        >
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const formStatus = ref("");
const statusMessage = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  formStatus.value = "";

  try {
    // Tutaj możesz dodać logikę wysyłania formularza do API
    // np. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

    // Symulacja opóźnienia odpowiedzi serwera
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Symulacja udanej odpowiedzi
    formStatus.value = "success";
    statusMessage.value = "Wiadomość została wysłana! Dziękuję za kontakt.";

    // Resetowanie formularza
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  } catch (error) {
    console.error("Error submitting form:", error);
    formStatus.value = "error";
    statusMessage.value =
      "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50;
}
</style>
