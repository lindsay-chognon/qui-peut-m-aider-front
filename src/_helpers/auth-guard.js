// to reçoit le chemin où on veut aller
import { accountService } from "src/_services";
import {createStore} from "vuex";

export function authGuard(to){
  let token = accountService.getToken()

  let isExpired = accountService.isExpired()

  if (token && !isExpired) {
    return true
  }


  window.location.href = "http://localhost:8080/login"
}
