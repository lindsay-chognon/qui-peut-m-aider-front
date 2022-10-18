<template>

  <LoginForm></LoginForm>

</template>

<script>

import LoginForm from "components/LoginForm";

export default {
  name: "App",
  components: {
    LoginForm
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
