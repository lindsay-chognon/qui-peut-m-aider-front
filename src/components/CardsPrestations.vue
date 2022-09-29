<template>
    <q-card dark bordered class="bg-grey-9 my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-section>
        <div class="text-h6">{{ prestation.titre }}</div>
        <div class="text-subtitle2">{{ prestation.ville }}</div>
        <div class="text-subtitle2">{{ prestation.taux_horaire }} € </div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <router-link :to="{ name: 'prestation', params: { id: prestation.id }}"><q-btn @click="prestationDetails()" flat>Action 1</q-btn></router-link>

      </q-card-actions>

    </q-card>
</template>

<script>
export default {
  props: {
    prestation: Object
  },
  methods: {
    prestationDetails() {
      console.log(this.prestation)
    }
  }
}
</script>
