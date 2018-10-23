import * as notesActions from './../notes-actions';
import DOM from './../dom';


export let noteRemoveHandler =  (noteId) => {
    DOM.noteRemoveBtn.addEventListener('click', function() {
        notesActions.remove(noteId);
    })
}
export let noteSaveHandler = (noteId) => {
    DOM.noteContentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const noteContent = DOM.noteContentEl.value;
        notesActions.save(noteId, noteContent);
    })

}