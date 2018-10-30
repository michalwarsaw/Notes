import DOM from '../dom';

// Get HTML template
const getTemplate = url => new Promise(resolve => resolve(url));

// Render the view
const render = html => (DOM().container.innerHTML = html);


// Load view
export const load = view =>
   new Promise((resolve, reject) => {
      getTemplate(view).then(html => { // Get HTML template
         render(html); // Render the view
         resolve(); // Resolve()
      });
   });
