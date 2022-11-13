<template>
  <div class="q-pa-md">

    <q-carousel
      v-model="slide"
      swipeable
      animated
      :control-type="controlType"
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
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PromoCarousel',
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
  width: 30%;
  height: auto;
}

.carousel {
  padding: 3%;
}
</style>
