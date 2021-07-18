const {
    filterByQuery,
    createNewNote,
    validateNote,
    findById
} = require('../lib/notes');
const router = require('express').Router();
const { data } = require('../data/db');

//reads db.json and returns all saved notes as JSON
router.get('/notes', (req, res) => {
    let notes = data;
    if (req.query) {
        notes = filterByQuery(req.query, notes)
    }
    res.json(notes);
});

//receives new note data to be added to db.json file
router.post('/notes', (req, res) => {
    req.body.id = data.length.toString();

    //verify validity of data
    if (!validateNote(req.body)) {
        res.status(400).send('Note has not been properly formatted');
    } else {
        const note = createNewNote(req.body, data);

        res.json(note);
    }
});

//allows user to delete stored notes
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);
    if (note) {

    } else {
        res.send(404);
    }
});

module.exports = router;