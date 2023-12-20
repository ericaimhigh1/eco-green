let navMenu = document.querySelector(".nav-menu");
let menuToggle = document.querySelector(".menuToggle");

isNavMenuOpen = false;

let openNavMenu = () => {
  isNavMenuOpen = true;
  navMenu.style.display = "flex";
  menuToggle.classList.remove("fa-bars");
  menuToggle.classList.add("fa-x");
};

let closeNavMenu = () => {
  isNavMenuOpen = false;
  navMenu.style.display = "none";
  menuToggle.classList.add("fa-bars");
  menuToggle.classList.remove("fa-x");
};

menuToggle.addEventListener("click", () => {
  if (!isNavMenuOpen) {
    openNavMenu();
  } else {
    closeNavMenu();
  }
});

let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", closeNavMenu);
});
