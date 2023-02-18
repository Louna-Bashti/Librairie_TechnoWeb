<script setup>
defineProps(["livre"]);
const emit = defineEmits(["deleteC"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
    <!-- cette fois en param du handler on n'utilise pas l'index dans le tableau mais directement l'id du livre
    -->
    <button @click="$emit('deleteC', chose.id)">Supprimer</button>
  </li>
</template>

<style>
</style>
