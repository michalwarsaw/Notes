import page from 'page'; // Micro client-side router (http://visionmedia.github.io/page.js/)
import * as routes from './routes';

page.base('/dist');
page('/', routes.index);

page('/editor', routes.editor);
page('/editor/:id', routes.editor);

page();
