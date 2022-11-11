import axios from 'axios'

// préparamétrage pour que axios ait déjà l'url de base pour la modifier seulement ici si la base de l'url change (prod, etc)
const Axios = axios.create({
  baseURL: 'http://localhost:8000'
})

export default Axios
