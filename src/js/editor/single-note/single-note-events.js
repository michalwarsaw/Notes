import DOM from '../../dom';
import showdown from 'showdown'; // Markdown to HTML converter (http://www.showdownjs.com/)
import page from 'page'; // Micro client-side router (http://visionmedia.github.io/page.js/)
import * as notesActions from '../../notes-actions';

const mdConverter = new showdown.Converter();

// Show editor
const showEditor = () => {
   DOM().noteContentEl.classList.remove('d-none');
   DOM().noteContentPreviewEl.classList.add('d-none');
}

export const noteShowEditorHandler = () => {
   DOM().noteEditorBtn.addEventListener('click', function() {
      showEditor();
   });
}

// Show preview
const showPreview = () => {
   DOM().noteContentEl.classList.add('d-none');
   DOM().noteContentPreviewEl.classList.remove('d-none');
}

export const noteShowPreviewHandler = () => {
   DOM().notePreviewBtn.addEventListener('click', function() {
      const text = DOM().noteContentEl.value;

      // Show preview only if MD content exists
      if (text) {
         const html = mdConverter.makeHtml(text);

         showPreview();
         DOM().noteContentPreviewEl.innerHTML = html;
      }
   });
}

// Remove
export const noteRemoveHandler = noteId => {
   DOM().noteRemoveBtn.addEventListener('click', function() {
      notesActions.remove(noteId).then(() => page('/editor'));
   });
}

// Save
export const noteSaveHandler = noteId => {
   DOM().noteContentForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const noteContent = DOM().noteContentEl.value;
      notesActions.save(noteId, noteContent);
   });
}