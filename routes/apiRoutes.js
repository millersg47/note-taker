const path = require('path');
const express = require('express');

const api = express();

api.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
    console.log(req.body);

    const { title, text } = req.body;

    if(req.body) {
        const newNote = {title, text};
        readAndAppend(newNote, '../db/db.json');
        res.json('Note added');
    } else {
        res.error('Error when adding new note');
    }
});

api.delete('/api/notes', (req, res) => {

});


module.exports = api;