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
			
			<div class="shape1"><NuxtImg src="/img/shape1.png" alt="shape"/></div>
			<div class="shape2 rotateme"><NuxtImg src="/img/shape2.svg" alt="shape"/></div>
			<div class="shape3"><NuxtImg src="/img/shape3.svg" alt="shape"/></div>
			<div class="shape4"><NuxtImg src="/img/shape4.svg" alt="shape"/></div>
			<div class="shape5"><NuxtImg src="/img/shape5.png" alt="shape"/></div>
			<div class="shape6 rotateme"><NuxtImg src="/img/shape4.svg" alt="shape"/></div>
			<div class="shape7"><NuxtImg src="/img/shape4.svg" alt="shape"/></div>
			<div class="shape8 rotateme"><NuxtImg src="/img/shape2.svg" alt="shape"/></div>
        </div>
        <!-- End Page Title -->

        <!-- Start Services Area -->
        <div class="agency-services-area ptb-80">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 m-auto">
                        <div class="card p-5">
                            <div class="mb-3">
                                <label for="" class="form-label">Email</label>
                                <input
                                    id=""
                                    v-model="email"
                                    type="email"
                                    class="form-control"
                                    name=""
                                    aria-describedby="emailHelpId"
                                    placeholder="abc@mail.com"

                                >
                              
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Mot de passe</label>
                                <input
                                    id=""
                                    v-model="password"
                                    type="password"
                                    class="form-control"
                                    name=""
                                    placeholder="****"
                                    >
                            </div>
                            <button type="submit" class="btn btn-primary" :disabled="isDisabled" @click="login()">
                                Save
                            </button>
                            
                           
                        </div>
                    </div>

                </div>
            </div>

			<div class="shape2 rotateme"><NuxtImg src="/img/shape2.svg" alt="shape"/></div>
			<div class="shape3"><NuxtImg src="/img/shape3.svg" alt="shape"/></div>
			<div class="shape4"><NuxtImg src="/img/shape4.svg" alt="shape"/></div>
			<div class="shape6 rotateme"><NuxtImg src="/img/shape4.svg" alt="shape"/></div>
			<div class="shape7"><NuxtImg src="/img/shape4.svg" alt="shape"/></div>
            <div class="shape8 rotateme"><NuxtImg src="/img/shape2.svg" alt="shape"/></div>
        </div>
        <!-- End Services Area -->
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNotificationStore } from '~/store/notif';
import { useAuthStore } from '~/store/user';

const ustore = useAuthStore()
const nstore = useNotificationStore()
const router = useRouter()
const email = ref("");
const password =  ref("")


const isDisabled = computed(() =>{
    if (email.value=="" || password.value=="") {
        return true
    } else {
        return false
    }
})

const login = async () =>{

   try {
    await ustore.login(email.value,password.value)
    router.push('/')
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   } catch (error) {
    nstore.successNotif("Bienvenue")

   }
}
</script>