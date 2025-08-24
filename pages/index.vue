<template>
  <div>
    <h1>Bienvenue sur IT+ Code Lab</h1>
    <p>Votre centre de formation pratique en informatique à Djibouti.</p>
    <!-- Add your home page components here -->
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'ACCUEIL - IT+ Code Lab',
  meta: [
    { name: 'description', content: 'Bienvenue dans le meilleur centre de formation pratique en informatique à Djibouti.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://yourdomain.com/' }
  ]
})
</script>

<style>

</style>