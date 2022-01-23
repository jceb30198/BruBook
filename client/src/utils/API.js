import axios from 'axios';

export const API = {
  // Gets All Brew Data
  getBrews: () => {
    return axios.get('/api/brews')
    .then(res => res.data);
  },
  // Posts New Brew to DB
  postBrew: (data) => {
    return axios.post('/api/brews/new', {
      name: data.name,
      originalGrav: data.originalGrav,
      finalGrav: data.finalGrav,
      abv: data.abv
    })
      .then(res => res.data);
  },
  // Update Previous Brew Information
  updateBrew: (data) => {
    return axios.put(`/api/brews/update/${data.id}`, {
      name: data.name,
      originalGrav: data.originalGrav,
      finalGrav: data.finalGrav,
      abv: data.abv
    })
      .catch(err => console.error(err));
  },
  // Remove Previous Brew from DB
  deleteBrew: (id) => {
    return axios.delete(`/api/brews/remove/${id}`)
      .catch(err => console.error(err));
  }
}