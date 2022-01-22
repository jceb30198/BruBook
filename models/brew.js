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

// This is where the collection gets its name
// An "S" is added to the end of the model name
const Brew = mongoose.model('Brew', beerSchema);

module.exports = Brew;