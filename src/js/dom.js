let DOM = {};

export const DOMinit = () => {
    DOM = {
        container: document.querySelector('#view-container'),
        noteTotleEl: document.querySelector('#note-title'),
        noteContentEl: document.querySelector('#note-content'),
        noteContentForm: document.querySelector('#note-content-form'),
        noteEditBtn: document.querySelector('#note-edit-btn'),
        notePreviewBtn: document.querySelector('#note-view-btn'),
        noteRemoveBtn: document.querySelector('#note-delete-btn'),
        addBoxForm: document.querySelector('#note-add-form'),
        searchBoxInput: document.querySelector('#note-search-input'),
        notesListEl: document.querySelector('#notes-list')
    };
    console.log(DOM)
};

const get = () => DOM;
export default get;