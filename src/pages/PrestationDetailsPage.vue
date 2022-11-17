<template>
    <prestation-details :prestation="prestation"></prestation-details>
</template>

<script>
import axios from "axios";
import PrestationDetails from "components/PrestationDetails";
import {accountService} from "src/_services";

export default {
  name: "App",
  components: {
    PrestationDetails,
  },
  data() {
    return {
      prestation: [],
      id: this.$route.params.id
    };
  },
  async created() {
    const jwt = accountService.getToken()
    try {
      const res = await axios.get(`http://localhost:8000/api/prestations/${this.id}`, {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      });
      this.prestation = res.data;
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
