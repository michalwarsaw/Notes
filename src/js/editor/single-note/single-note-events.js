import * as notesActions from './../notes-actions';

export let noteRemoveHandler =  (noteRemoveBtn, noteId) => {
    noteRemoveBtn.addEventListener('click', function() {
        notesActions.remove(noteId);
    })
}
export let noteSaveHandler = (noteContentForm, noteId, noteContentEl) => {
    noteContentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const noteContent = noteContentEl.value;
        notesActions.save(noteId, noteContent);
    })

}