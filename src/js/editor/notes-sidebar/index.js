import * as searchBox from './search-box'; // import all functions from search-box and named as searchBox
import {normalizeText} from './../utilities'; 
import * as addBox from './add-box';
import * as notesActions from './../notes-actions';

const notesListEl = document.querySelector('#notes-list');


const generateNoteList = () => { // function which genereting html

    const generateNoteHTML = note => {
        return `<li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
           <h6 class="my-0">${note.title}</h6>
           <small class="text-muted">${note.lastModified}</small>
        </div>
        </li>`;
    };
    
    const html = notesActions
        .getAll()
        .filter(note =>normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase()))) // filtering inputed phrase included in searchBox form tittle
        .map(note => generateNoteHTML(note)).join(''); // genereting html <li> filtered. join('') is deleting the "," between <li>
    notesListEl.innerHTML = html;
};

generateNoteList();

searchBox.init(() => generateNoteList()); // every time when input from searchBox will be changed init() will be invoke generateNoteList()
addBox.init(() => generateNoteList()); // every time when input from  addBox will be changed init() will be invoke generateNoteList()
