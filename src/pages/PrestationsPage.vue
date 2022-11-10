<template>
  <div class="q-pa-md row justify-center q-gutter-md ">
    <CardsPrestations v-for="prestation of prestations"
                      :key="prestation.id "
                      :prestation="prestation"
    >
    </CardsPrestations>
  </div>

</template>

<script>
import { accountService } from "src/_services";
import axios from "axios";
import CardsPrestations from "components/CardsPrestations";
export default {
  name: "App",
  components: {
    CardsPrestations
  },
  data() {
    return {
      prestations: [],
    };
  },
  async created() {
    if (accountService.isLogged()) {
      const jwt = accountService.getToken()
      try {
        const res = await axios.get(`http://localhost:8000/api/prestations`, {
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        });
        this.prestations = res.data['hydra:member'];
        console.log(res.data['hydra:member'])
      } catch (error) {
        console.log(error);
      }
    }

  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
