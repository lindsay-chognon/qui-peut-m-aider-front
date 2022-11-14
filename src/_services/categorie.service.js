import Axios from './caller.services'

let getAllCategories = () => {
  return Axios.get('/api/categories')
}

let getCategorie = (id) => {
  return Axios.get('/api/categories/'+id)
}


export const categorieService = {
  getAllCategories,
  getCategorie,
}
