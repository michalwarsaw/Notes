import axios from './axios-api'; // import an instance of axios with a custom config.

// Getting all notes to notes-sidebar from api
//
export const getAll = () => {
   return new Promise((resolve, reject) => {
      axios
         .get('/notes') // getting all from /notes
         .then(response => response.data) // getting all data from /notes
         .then(notes => resolve(notes)) // returning all notes
         .catch(err => console.log(err)); // in the case of an error => console.log error
   });
}


// Adding new note to notepad in notes-sidebar section
//
export const add = title => {
   return new Promise((resolve, reject) => {
      axios
         .post('/notes', {
            title,
            lastModified: Date.now(),
            body: ''
         })
         .then(response => response.data)
         .then(notes => resolve(notes))
         .catch(err => console.log(err));
   });
}

// Removing note in single-note section
export const remove = noteId => {
   return new Promise((resolve, reject) => {
      axios
         .delete(`/notes/${noteId}`)
         .then(response => response.data)
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
         .then(response => response.data)
         .then(notes => resolve(notes))
         .catch(err => console.log(err));
   });
}