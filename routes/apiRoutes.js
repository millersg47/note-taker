const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');
const api = express.Router();

const readFile = util.promisify(fs.readFile);

//get request to pull notes from database
api.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post request to add a new note to database
api.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

    //checks if there is a body submitted on the request
    if(req.body) {
        
        const { title, text } = req.body;
        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };
        res.json('Note added');
        
        //reading the existing db file, adding the newNote and then rewriting file
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
              // Convert string into JSON object
              const parsedNotes = JSON.parse(data);
          
              // Add a new review
              parsedNotes.push(newNote);
          
              // Write updated reviews back to the file
              fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
              );
            }
          });
            
    } else {
        res.error('Error when adding new note');
    }
});

api.delete(`/notes/:id`, (req, res) => {
  var id = req.params.id;
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    const parsedNotes = JSON.parse(data);
    const savedNotes = parsedNotes.filter(note => id !== note.id);
    
    fs.writeFile(
      './db/db.json',
      JSON.stringify(savedNotes, null, 4),
      (writeErr) =>
        writeErr
          ? console.error(writeErr)
          : console.info('Successfully deleted note!')
    ); 

  });

  res.json('Note deleted');

});


module.exports = api;