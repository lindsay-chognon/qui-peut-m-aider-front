<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="prestation of prestations" :key="prestation.id">
        {{ prestation.titre }}
      </li>
    </ul>
  </q-page>
</template>

<script>
  import axios from "axios";
  export default {
    name: "App",
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
