import { parent, editModel, addModel } from "./event.js";
import { getNote, getNoteTitle } from "./note.js";

//global variables
let card;
let card_header;
let card_body;
let div_icons;
let title, content;
let icon1, icon2;

function createElements() {
  card = document.createElement("div");
  card_header = document.createElement("div");
  card_body = document.createElement("div");
  div_icons = document.createElement("div");
  title = document.createElement("h1");
  content = document.createElement("p");
  icon1 = document.createElement("i");
  icon2 = document.createElement("i");

  //adding to these css class styled already
  card.classList.add("card");
  card_header.classList.add("card-header");
  card_body.classList.add("card-body");
  div_icons.classList.add("icons");
  icon1.classList.add("fa-solid", "fa-pencil");
  icon2.classList.add("fa-solid", "fa-x");
}

function createCard(heading, descreption) {
  createElements();

  //enabling to click the icons
  div_icons.addEventListener("click", (e) => {
    const ances_parent = e.target.closest(".card");
    const h1 = ances_parent.querySelector("h1");
    const ct = ances_parent.querySelector("p");
    if (e.target.classList.contains("fa-x")) {
      getNoteTitle(h1.textContent);
    } else {
      editModel(h1.textContent, ct.textContent);
      getNote(h1.textContent, ct.textContent);
    }
  });

  //setting text-content of the title and content-body
  title.textContent = heading;
  content.textContent = descreption;

  //adding childs to it's parent
  div_icons.append(icon1, icon2);
  card_header.append(title, div_icons);

  card_body.appendChild(content);

  card.append(card_header, card_body);

  return card;
}

function createDiv() {
  const emptyDiv = document.createElement("div");
  emptyDiv.innerHTML = `
      <div class="empty">
        <h2>No notes Yet</h2>
        <p>All your notes would be here.</p>
        <button  id="addNoteBtn">Add Note</button>
     </div>`;
  const addNoteBtn = emptyDiv.querySelector("#addNoteBtn");
  addNoteBtn.addEventListener("click", addModel);
  parent.appendChild(emptyDiv);
}

function renderCard(cards) {
  while (parent.firstChild) parent.removeChild(parent.firstChild);

  if (cards.length !== 0) {
    for (const card of cards) {
      let obj = createCard(card.title, card.content);
      parent.appendChild(obj);
    }
  } else {
    //to show empty message if notes is empthy
    createDiv();
  }
}

export { renderCard, createDiv };

//ends
