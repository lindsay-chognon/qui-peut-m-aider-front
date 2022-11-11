import { createStore } from "vuex";
import {accountService} from "src/_services";

export default createStore({
  state: {
    isLogged: accountService.isLogged()
  },
  getters: {
    getIsLogged(state) {
      return state.isLogged
    }
  },
  mutations: {
    changeIsLogged(state) {
      state.isLogged = accountService.isLogged()
    }
  },
  actions: {

  },
  modules: {

  }
})
