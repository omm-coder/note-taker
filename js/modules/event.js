import { saveOrEditNote } from "./store.js";
import validate from "./validation.js";

let parent = document.querySelector("#parent");
let model = document.querySelector("#model");
let add_Model = document.querySelector("#add-model");
let hide_model = document.querySelector("#hide-model");
let close_model = document.querySelector("#close-model");
let saveBtn = document.querySelector("#save");


let showError = document.querySelector("h3");
let title = document.querySelector("#title");
let content = document.querySelector("textarea");

// all function in events
const addModel = () => {
  model.querySelector("h1").textContent = "Add New Note";
  model.style.display = "block";
  model.classList.add("animate-model");
};

const editModel = (title_text, desc) => {
  model.querySelector("h1").textContent = "Edit Note";
  model.style.display = "block";
  model.classList.add("animate-model");
  title.value = title_text;
  content.value = desc;
};

function closeModel() {
  model.style.display = "none";
  model.classList.remove("animate-model");
  clearInputs();
}

const clearInputs = () => {
  title.value = '';
  content.value = ''
}

function showInSeconds(msg) {
  showError.textContent = msg;
  setTimeout(() => {
    showError.style.opacity = 1;
  }, 500);
}

const hidenInSeconds = () =>  setTimeout(() => {
  showError.style.opacity = '0';
}, 3500)

//event listners
add_Model.addEventListener("click", addModel);
close_model.addEventListener("click", closeModel);
hide_model.addEventListener("click", closeModel);

saveBtn.addEventListener('click', () => {

  let note = {
    "text_title": title.value,
    "text_content": content.value
  }
  let {isValid, message} = validate(note);

  if(isValid)  {
    saveOrEditNote(note)
    closeModel();
  }
  else {
    showInSeconds(message);
    hidenInSeconds();
  }
})


export { addModel, closeModel, editModel, add_Model, showInSeconds, parent };


//ends