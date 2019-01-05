"use strict";
// const blogpostList = document.getElementById("blogpost-list");

const menuBtn = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", e => {
  e.target.closest("a").classList.toggle("open");
  document.querySelector(".about-me").classList.toggle("open");
});  




const html = item => {
  let outputHtml = `
  <span class="date">${item.date}</span>
        <h4 id="post-title">${item.header}</h4>
        <img src="${item.img_url}" alt="${item.header}" id="read-post-img">
        <p class="read-post">${item.text}</p>
            `;
        console.log(outputHtml)
        const post = document.querySelector(".post");
        post.innerHTML = outputHtml;
        
      };

    

const allBps = [];
fetch("/bps")
.then(res => res.json())
.then(data => allBps.push(...data))
.then(() => {
const readPost = document.URL;
const id = readPost.split("posts/")[1];
  console.log(id)
const bpFind = obj => {
  return obj.id === +id;
};
const bp = allBps.find(bpFind)
html(bp);
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
 

