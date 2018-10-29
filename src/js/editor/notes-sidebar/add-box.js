import * as notesActions from './../notes-actions';
import DOM from './../../dom';


export let init = (onChangeCallBack) => {
    DOM().addBoxForm.addEventListener('submit', function(event) {
        event.preventDefault() // stoping default submit addBoxForm

        let noteTitle = document.querySelector('#note-add-input').value.trim(); // take the imput value while imputed, not on the begining

        if (noteTitle) {
            notesActions.add(noteTitle)
            .then(notes => {
                onChangeCallBack();
            })
        }
    })
};