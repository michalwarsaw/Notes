let notesList = [
    {
        id: 1,
        title: 'Note 1',
        body: '# sample body 1',
        lastModified: 1540326489711
    },
    {
        id: 2,
        title: 'Note 2',
        body: '# sample body 2',
        lastModified: 1540326489711
    },
    {
        id: 3,
        title: 'Note 3',
        body: '# sample body 3',
        lastModified: 1540326489711
    },
    {
        id: 4,
        title: 'Note 4',
        body: '# sample body 4',
        lastModified: 1540326489711
    },
];

export let getAll = () => notesList;
export let add = title => notesList.push({
    title,
    lastModified: Date.now()
});

// Remove

export let remove = (noteId) => {
    notesList = notesList.filter(note => note.id !== noteId) // returning the new noteList without note with noteId from parameter.
    console.log(`${noteId} - removed`);
    console.log(notesList);
}

// Save

export let save = (noteId, noteContent) => {
    notesList.map(note => {
        if (note.id === noteId) {
            note.body = noteContent;
            note.lastModified = Date.now();
        }
        
        return note;
    })
}