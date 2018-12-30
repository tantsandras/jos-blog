"use strict";
const blogpostList = document.getElementById("blogpost-list");

const menuBtn = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", e => {
  e.target.closest("a").classList.toggle("open");
  document.querySelector(".about-me").classList.toggle("open");
});


const loginBtn = document.querySelector("#login-button");
loginBtn.addEventListener("click", e => {
  
  document.location.href = '/login';
});