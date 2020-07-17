const burgerBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".navbar-menu--mobile");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("is-active");

  mobileMenu.classList.toggle("navbar-menu--hidden");
});
