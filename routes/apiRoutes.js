const path = require('path');
const express = require('express');

const api = express();

api.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/api/notes', (req, res) => {

});

api.delete('/api/notes', (req, res) => {

});


module.exports = api;