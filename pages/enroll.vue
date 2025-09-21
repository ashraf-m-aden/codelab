<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Inscrivez-vous à nos formations disponibles</h2>
            <div class="bar" />
          </div>
        </div>
      </div>

      <!-- Shapes -->
      <div class="shape1">
        <NuxtImg
          src="/img/shape1.png"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape2 rotateme">
        <NuxtImg
          src="/img/shape2.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape3">
        <NuxtImg
          src="/img/shape3.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape4">
        <NuxtImg
          src="/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape5">
        <NuxtImg
          src="/img/shape5.png"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape6 rotateme">
        <NuxtImg
          src="/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape7">
        <NuxtImg
          src="/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape8 rotateme">
        <NuxtImg
          src="/img/shape2.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Formations Area -->
    <section class="pricing-area bg-f9f6f6">
      <div class="container">
        <div class="row">
          <div
            v-for="(formation, index) in allFormations"
            :key="index"
            class="col-md-6 col-12 m-auto"
          >
            <div class="pricing-table">
              <div class="pricing-header">
                <h3>{{ formation.courseName }}</h3>
              </div>

              <div class="price">
                <span
                  >{{ formation.price }}<sup>Fdj</sup> <span>/Mois</span></span
                >
                <br />
                <span>Pendant {{ formation.numberOfMonth }} mois</span>
              </div>

              <div class="description">
                <p>{{ formation.description }}</p>
              </div>

              <div class="pricing-footer d-flex justify-content-between p-2">
                <button
                  class="btn btn-success"
                  @click="openModal(formation, true)"
                >
                  Je m'inscris! 💪👩‍🎓
                </button>
                <button
                  class="btn btn-primary"
                  @click="openModal(formation, false)"
                >
                  Je suis interessé! 👀
                </button>
              </div>
            </div>
          </div>

          <!-- Modal inscription -->
          <div
            class="modal fade"
            :class="{ show: showModal }"
            :style="{ display: showModal ? 'block' : 'none' }"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">
                    Vous vous êtes enregistré à :
                    {{ selectedFormation.courseName }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    @click="showModal = false"
                  />
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label class="form-label">Mon nom</label>
                    <input
                      v-model="newStudent.name"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Mon email</label>
                    <input
                      v-model="newStudent.email"
                      type="email"
                      class="form-control"
                      placeholder="abc@mail.com"
                    />
                    <p v-if="isEmailDisabled" class="text-danger">
                      <em>Cet email est déjà utilisé pour ce cours</em>
                    </p>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Mon numéro</label>
                    <input
                      v-model="newStudent.mobile"
                      type="number"
                      class="form-control"
                      placeholder="77"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    class="btn btn-secondary"
                    :disabled="isDisabled"
                    @click="register(selectedFormation)"
                  >
                    Je m'enregistre
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal interested -->
          <div
            class="modal fade"
            :class="{ show: showModalInterestd }"
            :style="{ display: showModalInterestd ? 'block' : 'none' }"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">
                    Vous êtes intéressé par : {{ selectedFormation.courseName }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    @click="showModalInterestd = false"
                  />
                </div>
                <div class="modal-body">
                  <p>Indiquez vos coordonnées, vous serez contacté! 😌😄</p>
                  <div class="mb-3">
                    <label class="form-label">Mon nom</label>
                    <input
                      v-model="newStudent.name"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Mon email</label>
                    <input
                      v-model="newStudent.email"
                      type="email"
                      class="form-control"
                      placeholder="abc@mail.com"
                    />
                    <p v-if="isEmailDisabled2" class="text-danger">
                      <em>Cet email est déjà utilisé pour ce cours</em>
                    </p>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Mon numéro</label>
                    <input
                      v-model="newStudent.mobile"
                      type="number"
                      class="form-control"
                      placeholder="77"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    class="btn btn-secondary"
                    :disabled="isDisabled"
                    @click="imInterested(selectedFormation)"
                  >
                    Me contacter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Backdrop -->
          <div
            v-if="showModal || showModalInterestd"
            class="modal-backdrop fade show"
          />
        </div>
      </div>

      <!-- Shapes at bottom -->
      <div class="shape8 rotateme">
        <NuxtImg src="/img/shape2.svg" alt="" />
      </div>
      <div class="shape2 rotateme">
        <NuxtImg src="/img/shape2.svg" alt="" />
      </div>
      <div class="shape7"><NuxtImg src="/img/shape4.svg" alt="" /></div>
      <div class="shape4"><NuxtImg src="/img/shape4.svg" alt="" /></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from 'nuxt/app'
import { formationStore } from '~/store/formations'
import type { FormationType } from '~/types/formation'
import type { UserType } from '~/types/user'
definePageMeta({
  ssr: false})
useHead({
  title: 'Inscription ',
  meta: [
    { name: 'description', content: 'Inscrivez-vous à nos formations disponibles. | Code Lab | Cours et Formations en informatique à Djibouti' },
    { name: 'keywords', content: 'formation,Code Lab,formations,angular,vue, html, css,linux,sécurité,javascript, java, informatique,djibouti, programmation, réseaux, cours, codelab, it+' }
  ]
})

const toast = useToast()
const store = formationStore()

const showModal = ref(false)
const showModalInterestd = ref(false)
const selectedFormation = ref<FormationType>({} as FormationType)
const newStudent = ref<UserType>({} as UserType)
const allFormations = computed(() => store.getAllformationsDispo())

const openModal = (formation: FormationType, isModal: boolean) => {
  selectedFormation.value = formation
  if (isModal) showModal.value = true
  else showModalInterestd.value = true
}

const register = async (formation: FormationType) => {
  selectedFormation.value.students.push(newStudent.value)
  await store.updateFormation(formation)  
  if (import.meta.client) {

  toast.success({ message:'Enregistrement effectué avec succès'})
    }
  showModal.value = false

  const phoneNumber = '25377151875'
  const message = encodeURIComponent(`Je me suis inscrit à ${formation.courseName}`)
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
}

const imInterested = async (formation: FormationType) => {
  if (!selectedFormation.value.interestedStudents) selectedFormation.value.interestedStudents = []
  selectedFormation.value.interestedStudents.push(newStudent.value)
  await store.updateFormation(formation)
    if (import.meta.client) {

  toast.success({ message:'Enregistrement effectué avec succès'})
    }
  showModalInterestd.value = false
}

const isEmailDisabled = computed(() => selectedFormation.value.students?.some(s => s.email === newStudent.value.email))
const isEmailDisabled2 = computed(() => selectedFormation.value.interestedStudents?.some(s => s.email === newStudent.value.email))
const isDisabled = computed(() => !newStudent.value.name || !newStudent.value.email || !newStudent.value.mobile)
</script>

<style scoped lang="scss">
.description {
  padding: 20px;
  text-align: justify;
}
.modal {
  transition: opacity 0.3s ease-in-out;
}
</style>
