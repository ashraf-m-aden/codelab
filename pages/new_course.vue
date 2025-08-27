<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Nouveau cours</h2>
            <div class="bar" />
          </div>
        </div>
      </div>

      <!-- Shapes -->
      <div class="shape1">
        <img
          src="/assets/img/shape1.png"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape2 rotateme">
        <img
          src="/assets/img/shape2.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape3">
        <img
          src="/assets/img/shape3.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape4">
        <img
          src="/assets/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape5">
        <img
          src="/assets/img/shape5.png"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape6 rotateme">
        <img
          src="/assets/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape7">
        <img
          src="/assets/img/shape4.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
      <div class="shape8 rotateme">
        <img
          src="/assets/img/shape2.svg"
          alt="Codelab IT+ formation cours informatique djibouti"
        />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Form Area -->
    <section class="pricing-area bg-f9f6f6">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="mb-3">
              <label class="form-label">Nom</label>
              <input
                v-model="newFormation.courseName"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Prix</label>
              <input
                v-model="newFormation.price"
                type="text"
                class="form-control"
              />
              <label class="form-label">Mois</label>
              <input
                v-model="newFormation.numberOfMonth"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea
                v-model="newFormation.description"
                cols="30"
                rows="10"
                class="form-control-plaintext"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Date de début</label>
              <input
                v-model="newFormation.startDate"
                type="date"
                class="form-control"
              />
            </div>

            <button
              v-if="isLoading"
              class="btn btn-primary"
              type="button"
              disabled
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>

            <button
              v-else
              type="submit"
              :disabled="isDisabled"
              class="btn btn-primary"
              @click="addFormation"
            >
              Démarré
            </button>
          </div>
        </div>
      </div>

      <!-- Decorative shapes -->
      <div class="shape8 rotateme">
        <img src="/assets/img/shape2.svg" alt="" />
      </div>
      <div class="shape2 rotateme">
        <img src="/assets/img/shape2.svg" alt="" />
      </div>
      <div class="shape7"><img src="/assets/img/shape4.svg" alt="" /></div>
      <div class="shape4"><img src="/assets/img/shape4.svg" alt="" /></div>
    </section>

    <!-- Liste des formations -->
    <div class="d-table mt-5">
      <div class="d-table-cell">
        <div class="container">
          <h2>Liste des formations</h2>
          <div class="bar" />
        </div>
      </div>
    </div>

    <section class="pricing-area bg-f9f6f6">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-primary">
                <thead>
                  <tr>
                    <th>Cours</th>
                    <th>Prix</th>
                    <th>Durée</th>
                    <th>Date de début</th>
                    <th>Max student</th>
                    <th>Description</th>
                    <th>Inscription ouvert</th>
                    <th>Nbre inscris</th>
                    <th>Nbre intéressé</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(formation, index) in allFormations"
                    :key="index"
                    :class="
                      formation.enabled ? 'table-success' : 'table-warning'
                    "
                  >
                    <td>
                      <input v-model="formation.courseName" type="text" />
                    </td>
                    <td><input v-model="formation.price" type="text" /></td>
                    <td>
                      <input v-model="formation.numberOfMonth" type="text" />
                    </td>
                    <td>
                      {{ formatDate(formation.startDate) }}
                      <input v-model="formation.startDate" type="date" />
                    </td>
                    <td>
                      <input v-model="formation.maxStudents" type="text" />
                    </td>
                    <td>
                      <textarea
                        v-model="formation.description"
                        cols="30"
                        rows="10"
                        class="form-control-plaintext"
                      />
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div
                          v-for="option in [true, false]"
                          :key="option.toString()"
                          class="form-check"
                        >
                          <input
                            :id="formation.courseName"
                            v-model="formation.inscription"
                            class="form-check-input"
                            type="radio"
                            :name="formation.courseName"
                            :value="option"
                          />
                          <label
                            class="form-check-label"
                            :for="formation.courseName"
                          >
                            {{ option ? "Démarré" : "Arrêté" }}
                          </label>
                        </div>
                      </div>
                    </td>
                    <td>
                      <ul class="list-group">
                        <li
                          v-for="(student, index) in formation.students"
                          :key="index"
                          class="list-group-item"
                        >
                          <button
                            class="bg-danger text-light small float-end"
                            @click="delStudent(formation, student)"
                          >
                            Del
                          </button>
                          Nom: {{ student.name }} <br />
                          Email: {{ student.email }} <br />
                          Numéro: {{ student.mobile }}
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul class="list-group">
                        <li
                          v-for="(
                            student, index
                          ) in formation.interestedStudents"
                          :key="index"
                          class="list-group-item"
                        >
                          Nom: {{ student.name }} <br />
                          Email: {{ student.email }} <br />
                          Numéro: {{ student.mobile }}
                        </li>
                      </ul>
                    </td>
                    <td>
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary"
                          @click="updateFormation(formation)"
                        >
                          Mettre à jour
                        </button>
                      </div>
                      <div v-if="formation.enabled" class="d-grid gap-2">
                        <button
                          class="btn btn-danger"
                          @click="toggleFormation(formation)"
                        >
                          Désactiver
                        </button>
                      </div>
                      <div v-else class="d-grid gap-2">
                        <button
                          class="btn btn-success"
                          @click="toggleFormation(formation)"
                        >
                          Activer
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative shapes -->
      <div class="shape8 rotateme">
        <img src="/assets/img/shape2.svg" alt="" />
      </div>
      <div class="shape2 rotateme">
        <img src="/assets/img/shape2.svg" alt="" />
      </div>
      <div class="shape7"><img src="/assets/img/shape4.svg" alt="" /></div>
      <div class="shape4"><img src="/assets/img/shape4.svg" alt="" /></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { formationStore } from "~/store/formations";
import type { FormationType } from "~/types/formation";
import type { UserType } from "~/types/user";
import type { Timestamp } from "firebase/firestore";
definePageMeta({
  ssr: false,
});
const store = formationStore();
const toast = useToast();

const isLoading = ref(false);
const newFormation = ref<FormationType>({} as FormationType);

const addFormation = async () => {
  isLoading.value = true;
  try {
    await store.addFormation(newFormation.value);
    if (import.meta.client) {
      toast.success("Formation enregistrée avec succès");
    }
    newFormation.value = {} as FormationType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (import.meta.client) {
      toast.warning(error.toString());
    }
  } finally {
    isLoading.value = false;
  }
};

const delStudent = async (formation: FormationType, student: UserType) => {
  formation.students = formation.students.filter(
    (s) => s.email !== student.email
  );
  await updateFormation(formation);
};

const updateFormation = async (formation: FormationType) => {
  isLoading.value = true;
  try {
    await store.updateFormation(formation);
    if (import.meta.client) {
      toast.success("Formation mise à jour avec succès");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (import.meta.client) {
      toast.warning(error.toString());
    }
  } finally {
    isLoading.value = false;
  }
};

const toggleFormation = async (formation: FormationType) => {
  isLoading.value = true;
  formation.enabled = !formation.enabled;
  try {
    await store.updateFormation(formation);
    if (import.meta.client) {
      toast.success("Formation mise à jour avec succès");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (import.meta.client) {
      toast.warning(error.toString());
    }
  } finally {
    isLoading.value = false;
  }
};

const allFormations = computed(() => store.getAllformations());

const isDisabled = computed(() => !newFormation.value.courseName);

const formatDate = (date: Date | Timestamp) => {
  return new Date(date.toString()).toLocaleDateString();
};
</script>
