import DOM from '../../dom';
import * as notesActions from '../../notes-actions';
import * as events from './single-note-events';

const init = () => {
    notesActions.getAll().then(notes => {
        const firstNote = notes[0];
        const noteId = firstNote.id;
        
        DOM().noteTotleEl.textContent = firstNote.title;
        DOM().noteContentEl.textContent = firstNote.body;
        
        // Events
        
        events.noteRemoveHandler(noteId);
        events.noteSaveHandler(noteId);
    })
  
  };
export default init;
