const router = require('express').Router();
const brewRoutes = require('./brews');

// API Routes
router.use('/brews', brewRoutes);

module.exports = router;