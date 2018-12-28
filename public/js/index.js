const menuBtn = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", e => {
  // add open class to the hamburger and app-drawer
  e.target.closest("a").classList.toggle("open"); // use .closest to get the closest parent 'a' tag
  document.querySelector(".about-me").classList.toggle("open");
});