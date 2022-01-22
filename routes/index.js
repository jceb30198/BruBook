const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Manages API Routes
router.use('/api', apiRoutes);

// Send React App if no API Calls are made
router.use((req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
})

module.exports = router;