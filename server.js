const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3001;

// Defined Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Manages All Routes
app.use(routes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/brews', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});