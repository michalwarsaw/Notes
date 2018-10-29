import * as searchBox from "./search-box"; // import all functions from search-box and named as searchBox
import { normalizeText } from "./../utilities";
import * as addBox from "./add-box";
import * as notesActions from "./../notes-actions";
import DOM from "./../../dom";
import { format } from "date-fns";

console.log(DOM());

const generateNoteHTML = note => {
  return `<li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
       <h6 class="my-0">${note.title}</h6>
       <small class="text-muted">${format(
         note.lastModified,
         "DD/MM/YYYY HH:mm:ss"
       )}</small>
    </div>
    </li>`;
};

const generateNoteList = () => {
  notesActions.getAll().then(notes => {
    const html = notes
      .filter(note =>
        normalizeText(note.title).includes(
          normalizeText(searchBox.getSearchPhrase())
        )
      )
      .map(note => generateNoteHTML(note))
      .join("");

    DOM().notesListEl.innerHTML = html;
  });
};
const init = () => {
  generateNoteList();
  
  searchBox.init(() => generateNoteList()); // every time when input from searchBox will be changed init() will be invoke generateNoteList()
  addBox.init(() => generateNoteList()); // every time when input from  addBox will be changed init() will be invoke generateNoteList()

};
export default init;