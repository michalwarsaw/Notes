import DOM from "../dom";

// GET HTML tempate

const getTemplate = url => new Promise(resolve => resolve(url));

// Render the View

const render = html => (DOM.container.innerHTML = html);

// Load View

export const load = view =>
  new Promise((resolve, reject) => {
    getTemplate(view).then(html => {
      render(html);
      resolve();
    });
  });
