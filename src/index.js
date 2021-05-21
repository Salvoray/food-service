import './styles.css';
import dishesTpl from './templates/menu-list.hbs';
import menu from './data/menu';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const toggle = document.querySelector('#theme-switch-toggle');

const onChangeToggle = e => {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.body.classList.add(currentTheme);

  if (currentTheme === Theme.DARK) {
    toggle.checked = true;
  }
}

toggle.addEventListener('change', onChangeToggle);

const dishesMarkup = dishesTpl(menu);

menuContainer.insertAdjacentHTML('afterbegin', dishesMarkup);
