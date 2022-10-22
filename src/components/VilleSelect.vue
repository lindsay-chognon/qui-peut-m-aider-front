<template>
  <q-select
    label="Standard"
    :options="options"
    v-model="options"
    option-value="options.id"
    emit-value
    map-options
    class="q-pa-md"
  />

  <ul>
    <li v-for="option in options" :key="option.id">
      {{ option.ville }}

    </li>
  </ul>

</template>


<script>
import {ref} from "vue";
import axios from "axios";

export default {
  data() {
    return {
      options: []
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8000/api/villes`);
      this.options = res.data['hydra:member'];
      console.log(res.data['hydra:member'])
    } catch (error) {
      console.log(error);
    }
  },
  setup () {
    return {
      model: ref(null)
    }
  }
}

</script>
