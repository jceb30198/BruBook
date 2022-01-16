const Brew = require('../models/brew');

module.exports = {
  // Get All Brews
  getBrews: (req, res) => {
    Brew
      .find()
      .then(brews => res.json(brews))
      .catch(err => console.error(err));
  },
  // Create New Brew
  createBrew: (req, res) => {
    Brew
      .create(req.body)
      .then(brewModel => res.json(brewModel))
      .catch(err => console.error(err));
  },
  // Update Brew
  updateBrew: (req, res) => {
    Brew
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(brewModel => res.json(brewModel))
      .catch(err => console.error(err));
  },
  // Delete Brew
  deleteBrew: (req, res) => {
    Brew
      .findByIdAndDelete(req.params.id)
      .then(removedBrew => res.json(removedBrew))
      .catch(err => console.error(err));
  }
}