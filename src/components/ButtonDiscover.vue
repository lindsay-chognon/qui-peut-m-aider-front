<template>
  <div class="row justify-center">

    <router-link :to="{ name: 'prestations' }">
      <q-btn
        color="deep-orange-5"
        label="Découvrir les prestations"
        size="md"
        class="q-mt-lg"
      />
    </router-link>

  </div>
</template>

<script>
export default {
  name: "ButtonDiscover"
}
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
