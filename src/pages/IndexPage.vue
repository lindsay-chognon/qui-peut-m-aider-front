<template>

  <h1>Accueil</h1>

  <PromoCarousel></PromoCarousel>
</template>

<script>
import PromoCarousel from "components/PromoCarousel";
export default {
  name: "App",
  components: {
    PromoCarousel
  }

};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>





