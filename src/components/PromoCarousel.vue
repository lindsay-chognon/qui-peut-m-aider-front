<template>
  <div class="q-pa-md">

    <q-carousel
      v-model="slide"
      :autoplay=10000
      infinite
      swipeable
      animated
      control-color="purple"
      navigation
      padding
      arrows
      height="80%"
      class="text-purple rounded-borders carousel"
    >

      <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="~assets/accueil1.png">
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
          <ButtonDiscover></ButtonDiscover>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <img src="~assets/accueil2.png">
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
          <ButtonDiscover></ButtonDiscover>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <img src="~assets/accueil3.png">
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
          <ButtonDiscover></ButtonDiscover>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <img src="~assets/accueil4.png">
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
          <ButtonDiscover></ButtonDiscover>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'
import ButtonDiscover from "components/ButtonDiscover";

export default {
  name: 'PromoCarousel',
  components: {
    ButtonDiscover
  },
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style>
img {
  width: 28%;
  height: auto;
}

.carousel {
  padding: 3%;
}
</style>
