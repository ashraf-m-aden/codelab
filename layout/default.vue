<template>
  <div>
    <HeaderComponent />

    <PreLoaderComponent v-show="isLoading" />

    <!-- Nuxt replaces router-view -->
    <NuxtPage />

    <FooterComponent />

    <!-- Scroll to top button -->
    <button class="fixed bottom-12 right-12" @click="toTopFunction">
      <div class="go-top">
        <vue-feather type="arrow-up" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { formationStore } from "../store/formations";
import { useAuthStore } from "../store/user";
import { useRoute } from "nuxt/app";
defineOptions({
  name: "DefaultLayout",
});
const isLoading = ref(false);
// const currentUrl = ref();
const route = useRoute()

const fstore = formationStore();
const ustore = useAuthStore();

const toTopFunction = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  await fstore.retrieveAllFormation();
  await ustore.checkAuth();
});

const currentUrl = ref('')
let loaderTimeout: ReturnType<typeof setTimeout> | null = null

watch(
  () => route.fullPath,
  (newPath) => {
    currentUrl.value = newPath
    isLoading.value = true

    if (loaderTimeout) clearTimeout(loaderTimeout)
    loaderTimeout = setTimeout(() => {
      isLoading.value = false
      loaderTimeout = null
    }, 1500)
  }
)

onBeforeUnmount(() => {
  if (loaderTimeout) clearTimeout(loaderTimeout)
})
</script>
