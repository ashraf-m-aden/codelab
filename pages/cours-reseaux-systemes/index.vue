<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Cours et formations en systemes et réseaux informatiques</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img
          src="~/assets/img/shape1.png"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape2 rotateme">
        <img
          src="~/assets/img/shape2.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape3">
        <img
          src="~/assets/img/shape3.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape4">
        <img
          src="~/assets/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape5">
        <img
          src="~/assets/img/shape5.png"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape6 rotateme">
        <img
          src="~/assets/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape7">
        <img
          src="~/assets/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
      <div class="shape8 rotateme">
        <img
          src="~/assets/img/shape2.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        >
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Services Area -->
    <div class="agency-services-area ptb-80">
      <div class="container">
        <div class="row">
          <div
            v-for="course in courses"
            :key="course.url"
            class="col-lg-4 col-sm-6 col-md-6"
          >
            <div class="agency-services-box" @click="goPage(course.url)">
              <img :src="course.img" :alt="course.title" >
              <div class="content">
                <h3>{{ course.title }}</h3>
                <NuxtLink :to="course.url" class="read-more-btn">
                  Lire plus <vue-feather type="plus-circle" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative shapes -->
      <div class="shape2 rotateme"><img src="~/assets/img/shape2.svg" ></div>
      <div class="shape3"><img src="~/assets/img/shape3.svg" ></div>
      <div class="shape4"><img src="~/assets/img/shape4.svg" ></div>
      <div class="shape6 rotateme"><img src="~/assets/img/shape4.svg" ></div>
      <div class="shape7"><img src="~/assets/img/shape4.svg" ></div>
      <div class="shape8 rotateme"><img src="~/assets/img/shape2.svg" ></div>
    </div>
    <!-- End Services Area -->
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import { useRouter } from "vue-router";

// Make sure images are in `public/img/` folder for direct URL access
const router = useRouter();
const goPage = (url: string) => router.push(url);

// Page head / SEO
useHead({
  title: "RESEAUX - IT+ CODE LAB",
  meta: [
    {
      name: "description",
      content:
        "La liste de nos formations en réseaux informatiques | Code Lab | Cours et Formations en informatique à Djibouti",
    },
    {
      name: "keywords",
      content: "formation,réseaux,informatique,cours,Djibouti,codelab",
    },
  ],
});

// Courses array for iteration
const courses = [
  {
    title: "Les fondamentaux des réseaux",
    url: "/cours-reseaux-systemes/fondamentaux-reseaux",
    img: "/img/courses/fondamentaux.jpeg",
  },
  {
    title: "Réseaux avancés",
    url: "/cours-reseaux-systemes/reseaux-avances",
    img: "/img/courses/ccna.jpeg",
  },
  {
    title: "Maitriser l'émulation des réseaux",
    url: "/cours-reseaux-systemes/gns3",
    img: "/img/courses/gns3.jpeg",
  },
  {
    title: "Sécurité informatique",
    url: "/cours-reseaux-systemes/securite-informatique",
    img: "/img/courses/security.jpeg",
  },
  {
    title: "Installation et configuration de Windows 7, 8, 10 et 11",
    url: "/cours-reseaux-systemes/installation-windows",
    img: "/img/courses/windows.jpeg",
  },
  {
    title: "Administration système Windows Server (2008, 2012, 2016)",
    url: "/cours-reseaux-systemes/admin-serveur",
    img: "/img/courses/winserverr.jpeg",
  },
  {
    title: "Administration système Linux",
    url: "/cours-reseaux-systemes/linux",
    img: "/img/courses/LINUX-LOGO.png",
  },
  {
    title: "Bureautique",
    url: "/cours-reseaux-systemes/bureautique",
    img: "/img/courses/Office_logos.jpg",
  },
];
</script>
