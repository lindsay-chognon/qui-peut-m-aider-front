import { createStore } from "vuex";
import {accountService} from "src/_services";

export default createStore({
  state: {
    isLogged: accountService.isLogged(),
    currency: 'EUR',
    currencySymbol: '€'
  },
  getters: {
    getIsLogged(state) {
      return state.isLogged
    },
    getCurrency(state) {
      return state.currency
    },
    getCurrencySymbol(state) {
      return state.currencySymbol
    }
  },
  mutations: {
    changeIsLogged(state) {
      state.isLogged = accountService.isLogged()
    },
    changeCurrency(state, { newCurrency }) {
      state.currency = newCurrency
    },
    changeCurrencySymbol(state, { newCurrencySymbol }) {
      state.currencySymbol = newCurrencySymbol
    }
  },
  actions: {

  },
  modules: {

  }
})
