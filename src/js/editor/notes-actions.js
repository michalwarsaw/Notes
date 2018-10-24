import axios from 'axios';

axios.get('/notes')
  .then(function (response) {
    // handle success
    console.log(response);
  })

let notesList = [];

export let getAll = () => notesList;
export let add = (title) =>
	notesList.push({
		title,
		lastModified: Date.now()
	});

// Remove

export let remove = (noteId) => {
	notesList = notesList.filter((note) => note.id !== noteId); // returning the new noteList without note with noteId from parameter.
	console.log(`${noteId} - removed`);
	console.log(notesList);
};

// Save

export let save = (noteId, noteContent) => {
	notesList.map((note) => {
		if (note.id === noteId) {
			note.body = noteContent;
			note.lastModified = Date.now();
		}

		return note;
	});
};
