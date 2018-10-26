import * as notesActions from './../notes-actions';
import DOM from './../../dom';

// Remove Notes

export let noteRemoveHandler =  (noteId) => {
    DOM.noteRemoveBtn.addEventListener('click', function() {
        notesActions.remove(noteId);
    })
}

// Save Note

export let noteSaveHandler = (noteId) => {
    DOM.noteContentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const noteContent = DOM.noteContentEl.value;
        notesActions.save(noteId, noteContent);
    })

}