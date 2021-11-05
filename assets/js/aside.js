const button = document.querySelector(".menu__button");

const menuIconOpen = document.querySelector(".menu__icon--open");
const menuIconClose = document.querySelector(".menu__icon--close");
const menuIconHidden = "menu__icon--hidden";

const aside = document.querySelector(".aside__container");
const asideVisible = "aside__container--visible";
const asideHidden = "aside__container--hidden";

function closeMenu() {
  menuIconClose.classList.add(menuIconHidden);
  menuIconOpen.classList.remove(menuIconHidden);
}

function openMenu() {
  menuIconOpen.classList.add(menuIconHidden);
  menuIconClose.classList.remove(menuIconHidden);
}

aside.addEventListener("click", (e) => {
  aside.classList.replace(asideVisible, asideHidden);
  closeMenu();
});

button.addEventListener("click", () => {
  if (aside.classList.contains(asideVisible)) {
    closeMenu();
    aside.classList.replace(asideVisible, asideHidden);
  } else {
    openMenu();
    aside.classList.replace(asideHidden, asideVisible);
  }
});
