<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-6">
      <h2 class="text-center col-6">{{ prestation.titre }}</h2>
      <p>{{ prestation.description }}</p>
    </div>
    <div class="col"></div>
  </div>

</template>

<script>
export default {
  props: {
    prestation: Object
  },
}
</script>
