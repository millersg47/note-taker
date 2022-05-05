const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//redirects to notes.html file on click
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

module.exports = router;