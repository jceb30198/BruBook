const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Manages API Routes
router.use('/api', apiRoutes);

module.exports = router;