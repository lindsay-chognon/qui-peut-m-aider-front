<template>

  <img src="~assets/logo-clair.png">

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

img
  width: 15%
  height: auto
</style>





