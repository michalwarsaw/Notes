import notesSidebarInit from './notes-sidebar/index';
import singleNoteInit from './single-note/index';
import * as notesActions from '../notes-actions';

const init = noteId => {
   notesActions.getAll().then(notes => {
      notesSidebarInit(notes, noteId);

      let noteToShow = !noteId ? notes[0] : notes.find(note => note.id === noteId);
      // if noteId is false set the notes[0] to noteToShow
      // else set notes.find(note => note.id === noteId)

      singleNoteInit(noteToShow);
   });
};

export default init;
