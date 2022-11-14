import Axios from './caller.services'
import {accountService} from "src/_services/account.service";

let getAllPrestations = () => {
  return Axios.get('/api/prestations')
}

let getPrestation = (id) => {
  return Axios.get('/api/prestations/'+id)
}

let updatePrestation = (prestation) => {
  return Axios.patch('api/prestations/'+prestation.id, prestation)
}

let createVille = (ville) => {
  return Axios.post('/api/villes', ville, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

let createPrestation = (prestation) => {
  let token = accountService.getToken()
  return Axios.post('/api/prestations', prestation, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    }
  })
}

let deletePrestation = (id) => {
  return Axios.delete('/api/prestations/'+id)
}

export const prestationService = {
  getAllPrestations,
  getPrestation,
  updatePrestation,
  createVille,
  createPrestation,
  deletePrestation
}
