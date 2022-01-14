const router = require('express').Router();


// Read
// localhost:3001/api/brews/
router.get('/')

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