
<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:40em;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Se connecter</h4>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="login" class="q-px-sm q-pt-xl">

              <q-input
                square
                clearable
                v-model="user.username"
                type="email"
                label="Email"
                :rules="[val => !!val || 'Obligatoire']"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                square
                clearable
                v-model="user.password"
                type="password"
                label="Password"
                :rules="[val => !!val || 'Obligatoire']"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn @click="login" unelevated size="lg" color="purple-4" class="full-width text-white" label="Se connecter" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Mot de passe oublié ?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>

// je peux importer directement grâce à index.js
import { accountService } from "src/_services"

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      console.log(this.user)
      accountService.login(this.user)
        .then(res => {
          accountService.saveToken(res.data.token)
          this.$store.commit('changeIsLogged')
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log("erreur")
          console.log(err)
        })

    }
  }
}
</script>

<style>
</style>
