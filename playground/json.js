const fs = require('fs');

var notes = [];
var note = {
  title: "",
  body: ""
};

notes.push(note);

fs.writeFileSync('notes.json', JSON.stringify(notes));

var notes = fs.readFileSync('notes.json');
console.log(JSON.parse(notes));
