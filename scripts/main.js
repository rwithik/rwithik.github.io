// Navbar Stuff

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

// Intersection Observer Stuff

let introObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { rootMargin: "0px 0px 0px 0px" }
);

let cardObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { rootMargin: "0px 0px -100px 0px" }
);

document.querySelectorAll(".card").forEach(card => {
  cardObserver.observe(card);
});

document.querySelectorAll(".landing__content > *").forEach(item => {
  introObserver.observe(item);
});
