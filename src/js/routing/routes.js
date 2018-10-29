import * as view from './view';

// Views
import introView from './../views/intro.html';
import editorView from './../views/editor.html';


export const index = () => {
    view.load(introView);
};

export const editor = () => {
    view.load(editorView).then(() => {
        
    });
};

