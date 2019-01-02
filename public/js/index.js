"use strict";
// const blogpostList = document.getElementById("blogpost-list");

const menuBtn = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", e => {
  e.target.closest("a").classList.toggle("open");
  document.querySelector(".about-me").classList.toggle("open");
});  

  let slide_index = 1;  
  displaySlides(slide_index);  
  const nextSlide = (n) => {  
      displaySlides(slide_index += n);  
  }  
  const currentSlide = (n) => {  
        displaySlides(slide_index = n);  
  }  
  
  function displaySlides(n) {    
      let slides = document.getElementsByClassName("list-item"); 
      if (n > slides.length) { 
          slide_index = 1 }  
      if (n < 1) { 
          slide_index = slides.length }  
        for (let item of slides) {
        item.style.display = "none";
        } 
      slides[slide_index -1].style.display = "grid";
      slides[slide_index +1].style.display = "grid";
  }  
