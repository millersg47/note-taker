const fs = require('fs');
const path = require('path');
const express = require('express');
const html = require('/.routes/htmlRoutes.js');
const api = require('./routes/apiRoutes.js');

const app = express();
const PORT = 3001;

//middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', html);
app.use('/api', api);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
