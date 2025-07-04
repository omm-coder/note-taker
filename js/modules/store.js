import { renderCard } from "./createElementor.js";

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let index;

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

function saveOrEditNote(obj) {
  // alert(index)
  if(index) edit(obj);
  else save(obj);

  index = undefined;

}

//this function saves a note to local Storage
function save({text_title, text_content}) {

  let note = new Note(text_title, text_content);
  notes.unshift(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes()
}

// this function renders notes
function renderNotes() {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
  renderCard(notes);
}

// this function edit notes and updates a local storage 
function edit({text_title, text_content})  {

  let noteToEdit = notes[index];
  noteToEdit.title = text_title;
  noteToEdit.content = text_content;

  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

// this function deletes a note and updates localStorage
function deleteNote(title) {
  let filteredNote = notes.filter((note) => note.title !== title);
  localStorage.setItem("notes", JSON.stringify(filteredNote));
  renderNotes();
}

// this function get the note to edit 
const getIndex = (oldNote)  => index = notes.findIndex((note) => note.title === oldNote.title);

export { saveOrEditNote, renderNotes, deleteNote, getIndex};

//ends