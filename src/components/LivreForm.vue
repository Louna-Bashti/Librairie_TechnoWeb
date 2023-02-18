<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const titre = ref("");

const emit = defineEmits(["addC"]);
</script>

<template>
  <form @submit.prevent="$emit('addC', titre)">
    <input type="text" v-model="titre" placeholder="Titre ?" />
    <input type="submit" value="valider" />
  </form>
</template>

<style scoped>
</style>