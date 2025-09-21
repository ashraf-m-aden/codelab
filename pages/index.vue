<template>
  <div>
    <BannerComponent/>
    <BoxesArea />
    <ReseauxInformatiques />
    <ProgrammationComponent />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import BannerComponent from "~/components/it-startup/BannerComponent.vue";
import BoxesArea from "~/components/it-startup/BoxesArea.vue";
import ProgrammationComponent from "~/components/it-startup/ProgrammationComponent.vue";
import ReseauxInformatiques from "~/components/it-startup/ReseauxInformatiques.vue";

useHead({
  title: "ACCUEIL ",
  meta: [
    {
      name: "description",
      content:
        "Bienvenue dans le meilleur centre de formation pratique en informatique à Djibouti. | Code Lab | Cours et Formations en informatique à Djibouti",
    },
    {
      name: "keywords",
      content:
        "formation,Code Lab,formations,angular,vue, html, css,linux,sécurité,javascript, java, informatique,djibouti, Djibouti, programmation, réseaux, cours, codelab, it+",
    },
  ],
});
</script>
