import DOM from '../../dom';
import * as notesActions from '../../notes-actions';

export let init = (onChangeCallBack) => {
    DOM().addBoxForm.addEventListener('submit', function(event) {
        event.preventDefault() 

        const noteTitle = DOM().addBoxInput.value.trim(); // take the imput value while imputed, not on the begining

        if (noteTitle) {
            notesActions.add(noteTitle).then(notes => {
               onChangeCallback();
            });
         }
    })
};