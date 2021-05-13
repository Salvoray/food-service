import './styles.css';
import dishesTpl from './templates/menu-list.hbs';
import menu from './data/menu';

console.log(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const toggle = document.querySelector('#theme-switch-toggle');

const dishesMarkup = dishesTpl(menu);

menuContainer.insertAdjacentHTML('afterbegin', dishesMarkup);
