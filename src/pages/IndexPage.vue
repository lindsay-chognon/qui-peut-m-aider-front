<template>
  <div class="q-pa-md row items-start q-gutter-md ">
    <CardsPrestations v-for="prestation of prestations"
                      :key="prestation.id "
                      :prestation="prestation"

    >
    </CardsPrestations>
  </div>





</template>

<script>
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
    try {
      const res = await axios.get(`http://localhost:8000/api/prestations`);
      this.prestations = res.data['hydra:member'];
      console.log(res.data['hydra:member'])
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>





