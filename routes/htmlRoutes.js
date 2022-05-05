const path = require('path');
const express = require('express');

const html = express.Router();

//loads index.html on page load
html.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

//redirects to notes.html file on button click
html.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

module.exports = html;