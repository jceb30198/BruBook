/* eslint-disable import/no-anonymous-default-export */
export default {
  // Gets All Brew Data
  getBrews: () => {
    return fetch('http://localhost:3001/api/brews').then(res => res.json());
  },
  // Posts New Brew to DB
  postBrew: (data) => {
    return fetch('http://localhost:3001/api/brews/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        originalGrav: data.originalGrav,
        finalGrav: data.finalGrav,
        abv: data.abv
      })
    })
      .then(res => res.json())
  },
  // Update Previous Brew Information
  updateBrew: (id) => {
    return fetch(`http://localhost:3001/api/brews/update/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  },
  // Remove Previous Brew from DB
  deleteBrew: (id) => {
    return fetch(`http://localhost:3001/api/brews/remove/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  }
}