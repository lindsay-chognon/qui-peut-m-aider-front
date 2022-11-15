<template>
  <div class="row justify-center">

    <router-link :to="{ name: 'prestationAdd' }">
      <q-btn
        color="deep-orange-5"
        icon="add"
        label="Ajouter une prestation"
        size="xl"
        class="q-ma-md"
      />
    </router-link>

  </div>

  <div class="row justify-center">

    <router-link :to="{ name: 'prestations' }">
      <q-btn
        outline
        color="deep-orange-5"
        icon="visibility"
        label="Consulter les prestations"
        size="xl"
        class="q-ma-md bg-white"
      />
    </router-link>

  </div>
</template>

<script>
export default {
  name: "ButtonAdd"
}
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
