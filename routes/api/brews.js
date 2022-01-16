const router = require('express').Router();
const brewsController = require('../../controllers/brewsController');


// Read
// localhost:3001/api/brews/
router.get('/', brewsController.getBrews);

// Create
// localhost:3001/api/brews/new
router.post('/new')

// Update
// localhost:3001/api/brews/update/:id
router.put('/update/:id')

// Delete
// localhost:3001/api/brews/remove/:id
router.delete('/remove/:id')

module.exports = router;