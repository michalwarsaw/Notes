import DOM from '../../dom';

let searchPhrase = '';

export const getSearchPhrase = () => searchPhrase;

export const init = onChangeCallback => {
   DOM().searchBoxInput.addEventListener('input', function() {
      searchPhrase = this.value;

      onChangeCallback();
   });
}
