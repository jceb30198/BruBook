/* eslint-disable import/no-anonymous-default-export */
export default {
  // Gets All Brew Data
  getBrews: () => {
    fetch('http://localhost:3001/api/brews')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  },
  // Posts New Brew to DB
  postBrew: () => {
    fetch('http://localhost:3001/api/brews/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name:,
        originalGrav:,
        finalGrav:,
        abv:
      })
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  },
}