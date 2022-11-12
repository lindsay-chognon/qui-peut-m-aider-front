<template>
  <div class="row justify-center">

    <router-link :to="{ name: 'prestationAdd' }">
      <q-btn
        color="deep-orange-5"
        icon="add"
        label="Ajouter une prestation"
        size="xl"
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
