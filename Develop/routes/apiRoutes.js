const notes = require('../lib/notes');
const router = require('express').Router();

//reads db.json and returns all saved notes as JSON
router.get('/notes', (req, res) => {
    
});

//receives new note to be added to db.json file
router.post('/notes', (req, res) => {
    
});

//allows user to delete stored notes
router.delete('/notes/:id', (req, res) => {

});