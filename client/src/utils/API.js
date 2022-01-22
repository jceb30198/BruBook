/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  // Gets All Brew Data
  getBrews: () => {
    return axios.get('http://localhost:3001/api/brews');
  },
  // Posts New Brew to DB
  postBrew: (data) => {
    return axios.post('http://localhost:3001/api/brews/new', {
      name: data.name,
      originalGrav: data.originalGrav,
      finalGrav: data.finalGrav,
      abv: data.abv
    });
  },
  // Update Previous Brew Information
  updateBrew: (data) => {
    return axios.put(`http://localhost:3001/api/brews/update/${data.id}`, {
      body: JSON.stringify({
        name: data.name,
        originalGrav: data.originalGrav,
        finalGrav: data.finalGrav,
        abv: data.abv
      })
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  },
  // Remove Previous Brew from DB
  deleteBrew: (id) => {
    return fetch(`/api/brews/remove/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  }
}