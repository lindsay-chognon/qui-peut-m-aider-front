<template>
  <div class="q-pa-md row items-start q-gutter-md ">
    <prestation-details :prestation="prestation"></prestation-details>
    <booking-banner></booking-banner>
  </div>
</template>

<script>
import axios from "axios";
import PrestationDetails from "components/PrestationDetails";
import BookingBanner from "components/BookingBanner";
export default {
  name: "App",
  components: {
    PrestationDetails,
    BookingBanner
  },
  data() {
    return {
      prestation: [],
      id: this.$route.params.id
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8000/api/prestations/${this.id}`);
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
