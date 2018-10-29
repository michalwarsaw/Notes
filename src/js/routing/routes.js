import * as view from './view';
import { DOMinit } from './../dom';


// Init

import introInit from './../intro/index';
import editorInit from './../editor/index';


// Views

import introView from './../views/intro.html';
import editorView from './../views/editor.html';

DOMinit();

export const index = () => {
    view.load(introView).then(() => {
        DOMinit();
    });
};

export const editor = () => {
    view.load(editorView).then(() => {
        DOMinit();
    });
};

