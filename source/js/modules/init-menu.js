const header = document.querySelector('header');
const menuToggle = document.querySelector('[data-menu="toggle"]');
const nav = document.querySelector('[data-main-nav]');
const links = nav.querySelectorAll('.main-nav__link');

const openMenu = () => {
  header.classList.add('is-menu');
  nav.classList.add('is-active');
  menuToggle.ariaPressed = 'true';
  window.scrollLock.disableScrolling();
};

const closeMenu = () => {
  header.classList.remove('is-menu');
  nav.classList.remove('is-active');
  menuToggle.ariaPressed = 'false';
  window.scrollLock.enableScrolling();
};

const initMenu = () => {
  if (!nav) {
    return;
  }

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

export {initMenu, closeMenu, openMenu};
