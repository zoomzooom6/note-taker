const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote, deleteNote } = require('../lib/notes');
const { notes } = require('../data/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
})

router.post('/notes', (req, res) => {
    //get latest note's id num
    const lastIdNum = notes.length - 1;
    const lastId = notes[lastIdNum].id;
    //increment above that to allow deleting of notes
    req.body.id = lastId + 1;
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;