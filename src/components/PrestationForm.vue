
<template>

    <div class="column q-pa-lg row justify-center items-center">
      <div class="row">
        <q-card square class="shadow-24" style="width:45em;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Proposer une prestation</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>

            <q-form class="q-px-sm q-pt-xl">
              <q-input
                class="q-pa-md"
                square
                clearable
                v-model="form.titre"
                type="text"
                label="Titre"
                :rules="[val => !!val || 'Obligatoire']">
              </q-input>

              <q-input
                class="q-pa-md"
                square
                clearable
                outlined
                :rules="[val => !!val || 'Obligatoire']"
                v-model="form.description"
                filled
                type="textarea"
              />

              <div class="row">
                <q-input
                  class="q-pa-md col-6"
                  square
                  :rules="[val => !!val || 'Obligatoire']"
                  v-model="form.taux_horaire"
                  type="number"
                  step="0.5"
                  label="Taux horaire">
                </q-input>

                <q-file
                  class="q-pa-md col-6"
                  square
                  clearable
                  v-model="form.photo"
                  label="Photo"
                />
              </div>

              <q-input
                class="q-pa-md"
                square
                clearable
                :rules="[val => !!val || 'Obligatoire']"
                v-model="form.code_postal"
                type="text"
                label="CP">
              </q-input>

                <ville-select></ville-select>

              <q-toggle
                v-model="form.statut"
                color="green"
                label="Mettre mon annonce en ligne (vous pourrez modifier cela à tout moment)"
                value=1
              />

            </q-form>

          </q-card-section>

          <q-card-actions class="q-px-lg">

            <div class="row items-center justify-center">
              <q-btn
                unelevated
                size="lg"
                color="purple-4"
                class="text-white q-mb-md"
                label="Proposer la prestation"
                style="width: 20em;"
                @click.prevent="submit()"
              />
              <q-btn
                unelevated
                size="lg"
                color="purple-4"
                class="text-white q-mb-md"
                label="Retour"
                style="width: 20em;"
                @click.prevent="retour()"
              />
            </div>


          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

</template>

<script>

import axios from "axios";
import VilleSelect from "components/VilleSelect";

export default {
  components: {
    VilleSelect
  },
  data() {
    return {
      form: {
        ville: '',
        code_postal: ''
      }

    }
  },
  methods: {
    submit(){
      axios.post('http://localhost:8000/api/prestations', this.form, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    retour() {
      this.$router.go(-1)
    }
  }
}

</script>

<style>
</style>
