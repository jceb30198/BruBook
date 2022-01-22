/* eslint-disable import/no-anonymous-default-export */
export default {
  // Gets All Brew Data
  getBrews: () => {
    return fetch('/api/brews').then(res => res.json());
  },
  // Posts New Brew to DB
  postBrew: (data) => {
    return fetch('/api/brews/new', {
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
      .then(res => res.json());
  },
  // Update Previous Brew Information
  updateBrew: (data) => {
    return fetch(`/api/brews/update/${data.id}`, {
      method: 'PUT',
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