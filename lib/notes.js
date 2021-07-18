const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(
            (note) => note.title === query.title
        );
    }
    if (query.text) {
        filteredResults = filteredResults.filter(
            (note) => note.text === query.text
        );
    }
    return filteredResults;
}

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function findById(id, notesArray) {
    const result = notesArray.filter((notes) => notes.id === id)[0];
    return result;
}

module.exports = { filterByQuery, createNewNote, validateNote, findById };