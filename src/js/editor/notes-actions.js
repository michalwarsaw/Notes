const notesList = [
    {
        title: 'Note 1',
        lastModified: '01/01/2018 12:00'
    },
    {
        title: 'Note 2',
        lastModified: '01/01/2018 12:00'
    },
    {
        title: 'Note 3',
        lastModified: '01/01/2018 12:00'
    },
    {
        title: 'Note 4',
        lastModified: '01/01/2018 12:00'
    },
];

export let getAll = () => notesList;
export let add = title => notesList.push({
    title,
    lastModified: '01/01/2018 12:00'
});