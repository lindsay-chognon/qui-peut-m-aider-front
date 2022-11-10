/** import des modules nécessaires */
import Axios from './caller.services'

// fonction login qui va recevoir des identifiants
let login = (credentials) => {
  // le nom de l'objet et le verbe que l'on veut utiliser
  // puis l'url et les objets que l'on veut envoyer
  return Axios.post('/api/login_check', credentials)
}

// on supprime le token du localstorage
let logout = () => {
  localStorage.removeItem('token')
}

// enregistrer le token dans le localstorage
let saveToken = (token) => {
  localStorage.setItem('token', token)
}

//vérifie si l'utilisateur est connecté
// si je n'ai pas de token = false, si j'ai un token = true
let isLogged = () => {
  let token = localStorage.getItem('token')
  // le not not transforme la chaîne en boolean
  return !! token
}

let getToken = () => {
  let jwt = localStorage.getItem('token')
  return jwt
}

// exporte tout dans accountService
export const accountService = {
  login,
  logout,
  saveToken,
  isLogged,
  getToken
}
