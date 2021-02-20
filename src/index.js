import './sass/styles.scss';
import menuTemplate from './templates/menu.hbs';
// import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markup = menuTemplate(menuData);

const test = document.querySelector('#test');

test.innerHTML = markup;

console.log(storage.save);

storage.save('temVar', JSON.stringify(menuData));

storage.remove('temVar');
