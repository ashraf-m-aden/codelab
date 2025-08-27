<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Connection</h2>
          </div>
        </div>
      </div>

      <div class="shape1"><img src="/img/shape1.png" alt="shape" ></div>
      <div class="shape2 rotateme"><img src="/img/shape2.svg" alt="shape" ></div>
      <div class="shape3"><img src="/img/shape3.svg" alt="shape" ></div>
      <div class="shape4"><img src="/img/shape4.svg" alt="shape" ></div>
      <div class="shape5"><img src="/img/shape5.png" alt="shape" ></div>
      <div class="shape6 rotateme"><img src="/img/shape4.svg" alt="shape" ></div>
      <div class="shape7"><img src="/img/shape4.svg" alt="shape" ></div>
      <div class="shape8 rotateme"><img src="/img/shape2.svg" alt="shape" ></div>
    </div>
    <!-- End Page Title -->

    <!-- Start Login Area -->
    <div class="agency-services-area ptb-80">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 m-auto">
            <div class="card p-5">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="abc@mail.com"
                >
              </div>
              <div class="mb-3">
                <label class="form-label">Mot de passe</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="****"
                >
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isDisabled"
                @click="login"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative shapes -->
      <div class="shape2 rotateme"><img src="/img/shape2.svg" alt="shape" ></div>
      <div class="shape3"><img src="/img/shape3.svg" alt="shape" ></div>
      <div class="shape4"><img src="/img/shape4.svg" alt="shape" ></div>
      <div class="shape6 rotateme"><img src="/img/shape4.svg" alt="shape" ></div>
      <div class="shape7"><img src="/img/shape4.svg" alt="shape" ></div>
      <div class="shape8 rotateme"><img src="/img/shape2.svg" alt="shape" ></div>
    </div>
    <!-- End Login Area -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "./../store/user";
import { useNotificationStore } from "./../store/notif";
//import { useRouter } from "nuxt/app";

//const router = useRouter();
const ustore = useAuthStore();
const nstore = useNotificationStore();

const email = ref("");
const password = ref("");

const isDisabled = computed(() => !email.value || !password.value);

const login = async () => {
  try {
   const us =  await ustore.login(email.value, password.value);
   console.log(us);
   
  //  router.push("/");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    nstore.successNotif(error.message || "Erreur inconnue" );
  }
};
</script>
