const navButton = document.querySelector(".navbar-toggle");
const navList = document.querySelector(".navbar__list");
const hamburger = document.querySelector(".hamburger");

navButton.addEventListener("click", () => {
  navList.classList.toggle("navbar__list--open");
  hamburger.classList.toggle("hamburger--close");
});

const navItems = document.querySelectorAll(".navbar__item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navList.classList.remove("navbar__list--open");
    hamburger.classList.toggle("hamburger--close");
  });
});
