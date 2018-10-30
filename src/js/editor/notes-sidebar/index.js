import DOM from '../../dom';
import page from 'page'; // Micro client-side router (http://visionmedia.github.io/page.js/)
import { format } from 'date-fns'; // JavaScript date utility library (https://date-fns.org)
import { normalizeText } from '../../utilities'; // function which normalizes and seting to lower case inputed text
import * as searchBox from './search-box';
import * as addBox from './add-box';

const generateNoteHTML = (note, activeNoteId) => {
   return `<a href="${page.base()}/editor/${
      note.id
   }" class="list-group-item list-group-item-action ${note.id === activeNoteId ? 'active' : ''}">
      <div>
         <h6 class="my-0">${note.title}</h6>
         <small>Last modified: ${format(note.lastModified, 'DD/MM/YYYY HH:mm:ss')}</small>
      </div>
   </a>`;
};

const generateNotesList = (notes, activeNoteId) => {
   const html = notes
      .filter(note =>
         normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase()))
      )
      .map(note => generateNoteHTML(note, activeNoteId))
      .join('');

   DOM().notesListEl.innerHTML = html;
};

const init = (notes, activeNoteId) => {
   generateNotesList(notes, activeNoteId);

   searchBox.init(() => generateNotesList(notes, activeNoteId));
   addBox.init(newNote => {
      notes = [...notes, newNote];

      generateNotesList(notes, activeNoteId);
   });
};

export default init;
