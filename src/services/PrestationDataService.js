import axios from 'axios';


export default {
  async getAllPrestation() {
    const response = await axios.get('http://127.0.0.1:8000/api/prestations/')
    const dataPromise = promise.then((response) => response.data)
    return dataPromise


  },
  getPrestation(id) {
    return axios.get('/api/prestation/' + id).then((response) => {
      return response.data;
    });
  },
  addPrestation(title) {
    return axios.put('/api/prestation', { name: title }).then((response) => {
      return response.data;
    });
  }
};

