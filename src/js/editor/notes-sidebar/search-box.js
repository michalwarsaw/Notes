const searchBoxInput = document.querySelector('#note-search-input');
let searchPhrase = '';

export let getSearchPhrase = () => searchPhrase;

export let init = (onChangeCallBack) => {
    searchBoxInput.addEventListener('input', function() {
        searchPhrase = this.value;
        onChangeCallBack();
    })
};