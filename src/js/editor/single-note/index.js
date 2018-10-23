import * as notesActions from './../notes-actions';
import * as events from './single-note-events';
import DOM from './../dom';

const notes = notesActions.getAll();
const firstNote = notes[0];
const noteId = firstNote.id;

DOM.noteTotleEl.textContent = firstNote.title;
DOM.noteContentEl.textContent = firstNote.body;

// Events

events.noteRemoveHandler(noteId);
events.noteSaveHandler(noteId);