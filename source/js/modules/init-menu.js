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
  const links = nav.querySelectorAll('.main-nav__link');

  links.forEach((item, index) => {
    item.style.transitionDelay = `${0.33 + index * 0.08}s`;
  });

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
