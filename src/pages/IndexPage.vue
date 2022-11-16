<template>
<div class="row justify-center">
  <img src="~assets/logo-clair.png">

</div>

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
  width: 40%
  height: auto
</style>





