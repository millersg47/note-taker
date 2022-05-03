const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

//unsure if I need this
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//redirects to notes.html file on click
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
  

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
