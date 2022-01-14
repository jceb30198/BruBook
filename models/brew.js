const mongoose = require('mongoose');

// Previous Method Included:
// const Schema = mongoose.Schema;

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  originalGrav: {
    type: Number,
    required: true
  },
  finalGrav: {
    type: Number,
    required: true
  },
  abv: Number
});

const Brew = mongoose.model('Brew', beerSchema);

module.exports = Brew;