import './sass/styles.scss';
import menuTemplate from './templates/menu.hbs';

import storage from './modules/storage';

const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = menuTemplate(menuData);

const test = document.querySelector('#test');

test.innerHTML = markup;

console.log(storage.save);

storage.save('temVar', JSON.stringify(menuData));

storage.remove('temVar');
