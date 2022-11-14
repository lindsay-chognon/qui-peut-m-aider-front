<template>
  <div class="row">
    <q-btn
      v-if="getCurrency === 'EUR'"
      flat
      label="Voir les prix en $"
      class="text-purple-5 bg-white q-ma-md"
      size="lg"
      @click="changeCurrencyToUSD"
    />

    <q-btn
      v-if="getCurrency === 'USD'"
      flat
      label="Voir les prix en €"
      class="text-purple-5 bg-white q-ma-md"
      size="lg"
      @click="changeCurrencyToEUR"
    />
  </div>
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
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    CardsPrestations
  },
  computed: {
    ...mapGetters(['getCurrency']),
  },
  data() {
    return {
      prestations: [],
    };
  },
  methods: {
    changeCurrencyToUSD() {
        const res = axios.get(`https://api.apilayer.com/currency_data/live?source=EUR&currencies=USD`, {
          headers: {
            'apikey': 'MOHQPjF6ctvfTYXaHnfmklG1mF8cOodE'
          }
        });
        const promise = Promise.resolve(res)
      promise.then((value) => {
        let change = value.data.quotes.EURUSD
        this.prestations.forEach((item, index) => {
          item.taux_horaire = Math.round(item.taux_horaire * change)
          let newCurrency = 'USD'
          let newCurrencySymbol = '$'
          this.$store.commit('changeCurrency', {
            newCurrency
          })
          this.$store.commit('changeCurrencySymbol', {
            newCurrencySymbol
          })
        })

      })
    },
    changeCurrencyToEUR() {
      const res = axios.get(`https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR`, {
        headers: {
          'apikey': 'MOHQPjF6ctvfTYXaHnfmklG1mF8cOodE'
        }
      });
      const promise = Promise.resolve(res)
      promise.then((value) => {
        let change = value.data.quotes.USDEUR
        this.prestations.forEach((item, index) => {
          item.taux_horaire = Math.round(item.taux_horaire * change)
          let newCurrency = 'EUR'
          let newCurrencySymbol = '€'
          this.$store.commit('changeCurrency', {
            newCurrency
          })
          this.$store.commit('changeCurrencySymbol', {
            newCurrencySymbol
          })
        })

      })
    }
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
