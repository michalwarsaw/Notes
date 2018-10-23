const addBoxForm = document.querySelector('#note-add-form');
import * as notesActions from './../notes-actions';

export let init = (onChangeCallBack) => {
    addBoxForm.addEventListener('submit', function(event) {
        event.preventDefault() // stoping default submit addBoxForm

        let noteTitle = document.querySelector('#note-add-input').value.trim(); // take the imput value while imputed, not on the begining

        if (noteTitle) { // if noteTitle inputed invoke the add() from notesActions module
            notesActions.add(noteTitle)
            onChangeCallBack();
        }

    })
};