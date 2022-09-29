<template>
  <h1 class="text-right">{{ prestation.titre }}</h1>
  <p>{{ prestation.description }}</p>


</template>

<script>
export default {
  props: {
    prestation: Object
  },
}
</script>
