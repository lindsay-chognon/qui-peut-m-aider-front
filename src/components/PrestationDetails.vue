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
        <q-btn class="q-mt-md" flat color="primary">
          Reserve
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
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
