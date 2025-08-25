<template>
  <!-- Start Navbar Area -->
  <header id="header" :class="['headroom', { 'is-sticky': isSticky }]">
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">

            <a class="navbar-brand" href="/">
                <img src="assets/img/logo.svg" class="navbarbrand" :class="{ 'navbar-shrink': isShrunk }"  alt="IT+ Code Lab" >
            </a>

          <button
id="collapseBtn" class="navbar-toggler" type="button" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"/>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Acceuil</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/a-propos" class="nav-link">A propos de nous</router-link>
              </li>

              <li class="nav-item">
                <a class="nav-link">Programmes <vue-feather type="chevron-down"/></a>
                <ul class="dropdown_menu">
                  <li class="nav-item">
                    <router-link to="/cours-programmation" class="nav-link">Developpement</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/cours-reseaux-systemes" class="nav-link">Systemes et réseaux</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/enroll" class="nav-link">S'inscrire à une formation</router-link>
              </li>

              <li v-if="connectedUser" class="nav-item">
                <router-link to="/new_course" class="nav-link">Ajouter un cours</router-link>
              </li>

              <li v-if="connectedUser" class="nav-item">
               <button class="btn btn-danger" @click="logout()">
                Deconnecter
               </button>
              </li>

            </ul>
          </div>

        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '../../store/user'
import { useRouter } from 'vue-router'

const userStore = useAuthStore()
const router = useRouter()
const isSticky = ref(false)
const isMobile = ref(false)
const isShrunk = ref(false)
onMounted(async () => {
    const { Collapse } = await import('bootstrap')
  window.addEventListener('scroll', () => {
    isShrunk.value = window.scrollY > 50
    isSticky.value = window.scrollY >= 100
  })

  window.addEventListener('resize', handleResize)
  handleResize()

  // Initialize Bootstrap Collapse directly
  const btn = document.getElementById('collapseBtn')
  const element = document.getElementById('navbarSupportedContent')
  if (element) {
    const myCollapse = new Collapse(element)
    btn?.addEventListener('click', () => myCollapse.toggle())
  }
})


const connectedUser = computed(() => {
  return userStore.userData
})

const logout = async () => {
  await userStore.logout()
  router.push('/')
}

const handleResize = () => {
  if (window.innerWidth < 992) {
    isMobile.value = true
  } else isMobile.value = false
}

</script>

<style lang="scss" scoped>
.conn {
  text-decoration-line: underline;
  text-decoration-color: red;
  color: red;
}

.navbarbrand{
  width: 100px;
  animation: backwards 1s;

}
/* Navbar Shrinks on Scroll */
.navbar-shrink {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 40px; /* Shrinks the logo */

}

.navbar-shrink .navbarbrand {
  width: 40px; /* Shrinks the logo */

}
</style>
