//this file is too short is about to facilitate editing and deleting noyte

import { deleteNote, getIndex} from "./store.js";


const getNoteTitle = (title)  => deleteNote(title)

const getNote = (text, desc) => {
  let note = {
    title: text,
    content: desc
  }

  getIndex(note);
}

export {getNoteTitle, getNote}


// ends 