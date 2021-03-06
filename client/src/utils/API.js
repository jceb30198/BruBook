import axios from 'axios';

export const API = {
  // Gets All Brew Data
  getBrews: () => {
    return axios.get('http://localhost:3001/api/brews')
    .then(res => res.data);
  },
  // Posts New Brew to DB
  postBrew: (data) => {
    return axios.post('http://localhost:3001/api/brews/new', {
      name: data.name,
      originalGrav: data.originalGrav,
      finalGrav: data.finalGrav,
      abv: data.abv
    })
      .then(res => res.data);
  },
  // Update Previous Brew Information
  updateBrew: (data) => {
    return axios.put(`http://localhost:3001/api/brews/update/${data.id}`, {
      name: data.name,
      originalGrav: data.originalGrav,
      finalGrav: data.finalGrav,
      abv: data.abv
    })
      .catch(err => console.error(err));
  },
  // Remove Previous Brew from DB
  deleteBrew: (id) => {
    return axios.delete(`http://localhost:3001/api/brews/remove/${id}`)
      .catch(err => console.error(err));
  }
}