console.log("NotesJS");

const fs = require('fs');

var fetchNotes = () => {
  try {
    let notes = fs.readFileSync('playground/notes.json');
    return JSON.parse(notes);
  } catch (e){
    return [];
  }
}

var addNote = (title, body) => {
  let note = {};
  let notesArray = fetchNotes();
  let duplicatedNotes = notesArray.filter( (note) => note.title === title );

  if(duplicatedNotes.length > 0 ){
    return;
  }
  note.title = title;
  note.body = body;
  notesArray.push(note);
  fs.writeFileSync('playground/notes.json', JSON.stringify(notesArray));
}

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  let notesArray = fetchNotes();
  let note = notesArray.filter( (note) => {
    return note.title === title
  });
  return note;
}

var removeNote = (title) => {
  let notesArray = fetchNotes();
  let removedNote = {};
  notesArray.forEach(function(value, index){
    removedNote = value;
    if(value.title === title){
      notesArray.splice(index, 1);
    }
    notesArray.splice(index, 1);
  })
  fs.writeFileSync('playground/notes.json', JSON.stringify(notesArray));
  return removedNote;
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
