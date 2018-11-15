console.log("AppJS");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const commandOptions = {
  title:{
    describle: "Note title",
    demand: true,
    alias: 't'
  },
  body:{
    describle: "Note body",
    demand: true,
    alias: 'b'
  }
}

const argv = yargs.command('add', 'Add a new note', {
                      title: commandOptions.title,
                      body: commandOptions.body
                    })
                    .command('list', 'List all notes')
                    .command('read', 'Read single note',{
                      title: commandOptions.title
                    })
                    .command('remove', 'Remove a Note', {
                      title: commandOptions.title
                    })
                    .help()
                    .argv;

// console.log(argv);
//
var command = argv._[0];

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log(notes.getAll());
} else if (command === 'read') {
  console.log(notes.getNote(argv.title));
} else if (command === 'remove') {
  console.log(notes.removeNote(argv.title));
} else {
  console.log("command not found");
}
