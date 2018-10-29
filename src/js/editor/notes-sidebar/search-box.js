import DOM from './../../dom';

let searchPhrase = ''; // declaring an empty string

export let getSearchPhrase = () => searchPhrase; 

export let init = (onChangeCallBack) => {
    DOM().searchBoxInput.addEventListener('input', function() {
        searchPhrase = this.value; // every time when input will be invoked value will be inputted to the let searchPhrase = '';
        onChangeCallBack(); //  every time when input will be changed call back will be invoked
    })
};