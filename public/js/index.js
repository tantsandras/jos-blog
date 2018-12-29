"use strict";
const blogpostList = document.getElementById("blogpost-list");

const menuBtn = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", e => {
  // add open class to the hamburger and app-drawer
  e.target.closest("a").classList.toggle("open");
  document.querySelector(".about-me").classList.toggle("open");
});

