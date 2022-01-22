const router = require('express').Router();
const brewsController = require('../../controllers/brewsController');


// Read
// /api/brews/
router.get('/', brewsController.getBrews);

// Create
// /api/brews/new
router.post('/new', brewsController.createBrew);

// Update
// /api/brews/update/:id
router.put('/update/:id', brewsController.updateBrew);

// Delete
// /api/brews/remove/:id
router.delete('/remove/:id', brewsController.deleteBrew);

module.exports = router;