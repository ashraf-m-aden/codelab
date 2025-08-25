<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Cours et formations en programmation informatique</h2>
          </div>
        </div>
      </div>

      <!-- Shapes -->
      <div class="shape1">
        <img src="assets/img/shape1.png" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape2 rotateme">
        <img src="assets/img/shape2.svg" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape3">
        <img src="assets/img/shape3.svg" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape4">
        <img src="assets/img/shape4.svg" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape5">
        <img src="assets/img/shape5.png" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape6 rotateme">
        <img src="assets/img/shape4.svg" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape7">
        <img src="assets/img/shape4.svg" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
      <div class="shape8 rotateme">
        <img src="assets/img/shape2.svg" alt="Codelab IT+ formation cours informatique djibouti" >
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Services Area -->
    <div class="agency-services-area ptb-80">
      <div class="container">
        <div class="row">
          <div 
            v-for="course in courses" 
            :key="course.name" 
            class="col-lg-4 col-sm-6 col-md-6"
          >
            <div class="agency-services-box" @click="goPage(course.url)">
              <img :src="course.img" :alt="course.name" >

              <div class="content">
                <NuxtLink :to="course.url">
                  <h3>{{ course.name }}</h3>
                  <span class="read-more-btn">
                    Lire plus <vue-feather type="plus-circle" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Shapes repeated as before -->
      <div class="shape2 rotateme">
        <img src="assets/img/shape2.svg" alt="" >
      </div>
      <div class="shape3">
        <img src="assets/img/shape3.svg" alt="" >
      </div>
      <div class="shape4">
        <img src="assets/img/shape4.svg" alt="" >
      </div>
      <div class="shape6 rotateme">
        <img src="assets/img/shape4.svg" alt="" >
      </div>
      <div class="shape7">
        <img src="assets/img/shape4.svg" alt="" >
      </div>
      <div class="shape8 rotateme">
        <img src="assets/img/shape2.svg" alt="" >
      </div>
    </div>
    <!-- End Services Area -->
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { useRouter } from 'vue-router'

const router = useRouter()

const goPage = (url: string) => router.push(url)

useHead({
  title: 'PROGRAMMATION - IT+ CODE LAB',
  meta: [
    {
      name: 'description',
      content: 'Consultez la liste de nos formations en programmation | Code Lab | Cours et Formations en informatique à Djibouti'
    },
    {
      name: 'keywords',
      content: 'formation,Code Lab,formations,angular,vue, html, css,linux,sécurité,javascript, java, informatique,djibouti, Djibouti, programmation, réseaux, cours, codelab, it+'
    }
  ]
})

// Courses array to simplify template
const courses = [
  { name: 'HTML et CSS', url: '/cours-programmation/html-css', img: '/img/courses/logo-html5-css3.png' },
  { name: 'Javascript', url: '/cours-programmation/javascript', img: '/img/courses/JavaScript-Logo.png' },
  { name: 'MySQL', url: '/cours-programmation/mysql', img: '/img/courses/mysql.jpg' },
  { name: 'Vue.js', url: '/cours-programmation/vue', img: '/img/courses/Logo-Vuejs.png' },
  { name: 'Angular', url: '/cours-programmation/angular', img: '/img/courses/2048px-Angular_full_color_logo.png' },
  { name: 'Node.js', url: '/cours-programmation/node', img: '/img/courses/1200px-Node.js_logo.png' },
]
</script>
