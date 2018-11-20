import page from 'page'; // Micro client-side router (http://visionmedia.github.io/page.js/)
import * as routes from './routes';

page.base('/dist'); // destination when the app is starting
page('/', routes.index);

page('/editor', routes.editor); // editor section
page('/editor/:id', routes.editor); // intro

page(); // go :)
