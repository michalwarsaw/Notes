import axios from "./axios-api";

// Get Notes

export let getAll = () =>
  new Promise((resolve, reject) => {
    axios
      .get("/notes")
      .then(response => response.data)
      .then(notes => resolve(notes))
      .catch(error => console.log(error));
  });

// Add Notes

export let add = title =>
	new Promise((resolve, reject) => {
	axios
		.post("/notes", {
			title,
			lastModified: Date.now()
		})
		.then(response => response.data)
		.then(notes => resolve(notes))
		.catch(error => console.log(error));
});

// Remove Notes

export let remove = noteId => 
	new Promise((resolve, reject) => {
		axios
			.delete(`/notes${noteId}`)
			.then(response => response.data)
			.then(notes => resolve(notes))
			.catch(error => console.log(error));
});


// Save Notes

export let save = (noteId, noteContent) =>
	new Promise((resolve, reject) => {
		axios
			.patch(`/notess${noteId}`, {
				body: noteContent,
				lastModified: Date.now()
			})
			.then(response => response.data)
			.then(notes => resolve(notes))
			.catch(error => console.log(error));
});
