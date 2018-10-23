import * as notesActions from './../notes-actions';
import * as events from './single-note-events';

const noteTotleEl = document.querySelector('#note-title');
const noteContentEl = document.querySelector('#note-content');

const noteContentForm = document.querySelector('#note-content-form');

const noteEditBtn = document.querySelector('#note-edit-btn');
const notePreviewBtn = document.querySelector('#note-view-btn');
const noteRemoveBtn = document.querySelector('#note-delete-btn');

const notes = notesActions.getAll();
const firstNote = notes[0];
const noteId = firstNote.id;

noteTotleEl.textContent = firstNote.title;
noteContentEl.textContent = firstNote.body;

// Events

events.noteRemoveHandler(noteRemoveBtn, noteId);
events.noteSaveHandler(noteContentForm, noteId, noteContentEl);