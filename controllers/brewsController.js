const Brew = require('../models/brew');

module.exports = {
  // Get All Brews
  getBrews: (req, res) => {
    Brew
      .find()
      .then(brews => res.json(brews))
      .catch(err => console.error(err));
  },
  createBrew: (req, res) => {
    Brew
      .create(req.body)
      .then(brewModel => res.json(brewModel))
      .catch(err => console.error(err));
  }
}