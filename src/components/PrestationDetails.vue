<template>

  <div class="q-pa-lg row justify-center">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ prestation.titre }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            {{ prestation.ville.ville }}
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          User
        </div>
        <div class="text-caption text-grey">
          {{ prestation.description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <li v-for="disponibilite in prestation.disponibilites" :key="disponibilite.id">
          {{ disponibilite.datetime_debut }}
          {{ disponibilite.datetime_fin }}
        </li>
      </q-card-actions>
      <q-card-actions>
        <q-btn
          color="deep-orange-5">
          Reserve
        </q-btn>
        <q-btn
          color="deep-orange-5"
          @click.prevent="retour"
        >
          Retour
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    prestation: Object
  },
  methods: {
    retour() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
