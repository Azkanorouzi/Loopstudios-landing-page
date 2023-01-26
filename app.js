// Hamburger menu
const HAMBURGER_MENU = document.querySelector(".hamburger-menu");
const MENU_CONTAINER = document.querySelector(".menu-container");
HAMBURGER_MENU.addEventListener('click', () => {
  // Rotates hamburger menu
  HAMBURGER_MENU.classList.toggle("hamburger-menu--rotated");
  // change src of the hamburger menu
  if (HAMBURGER_MENU.classList.contains("hamburger-menu--rotated")) {
    setTimeout(() => {
      HAMBURGER_MENU.src = "./images/icon-close.svg";
    }, 200)
  } else {
    setTimeout(() => {
      HAMBURGER_MENU.src = "./images/icon-hamburger.svg";
    },200)
  }
  MENU_CONTAINER.classList.toggle("hidden");
  document.body.classList.toggle('overflow-hidden');
  window.scrollTo(0,0);
})
