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

  }
}