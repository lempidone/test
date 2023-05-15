const header = document.querySelector('header');
const menuToggle = document.querySelector('[data-menu="toggle"]');
const nav = document.querySelector('[data-main-nav]');

const openMenu = () => {
  header.classList.add('is-menu');
  nav.classList.add('is-active');
  menuToggle.ariaPressed = 'true';
};

const closeMenu = () => {
  header.classList.remove('is-menu');
  nav.classList.remove('is-active');
  menuToggle.ariaPressed = 'false';
};

const initMenu = () => {
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (menuToggle.ariaPressed === 'true') {
        closeMenu(true);
      } else {
        openMenu();
      }
    });
  }
};

export {initMenu};
