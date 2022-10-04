<template>
  <input-form></input-form>

</template>

<script>

import InputForm from "components/PrestationForm";

export default {
  name: "App",
  components: {
    InputForm
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
