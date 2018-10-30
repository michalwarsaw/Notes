import axios from './axios-api';

// Getting all notes to notes-sidebar
export const getAll = () => {
   return new Promise((resolve, reject) => {
      axios
         .get('/notes')
         .then(res => res.data)
         .then(notes => resolve(notes))
         .catch(err => console.log(err));
   });
}

// Adding new note to notepad in notes-sidebar section
export const add = title => {
   return new Promise((resolve, reject) => {
      axios
         .post('/notes', {
            title,
            lastModified: Date.now(),
            body: ''
         })
         .then(res => res.data)
         .then(notes => resolve(notes))
         .catch(err => console.log(err));
   });
}

// Removing note in single-note section
export const remove = noteId => {
   return new Promise((resolve, reject) => {
      axios
         .delete(`/notes/${noteId}`)
         .then(res => res.data)
         .then(notes => resolve(notes))
         .catch(err => console.log(err));
   });
}

// Saving selected note
export const save = (noteId, noteContent) => {
   return new Promise((resolve, reject) => {
      axios
         .patch(`/notes/${noteId}`, {
            body: noteContent,
            lastModified: Date.now()
         })
         .then(res => res.data)
         .then(notes => resolve(notes))
         .catch(err => console.log(err));
   });
}