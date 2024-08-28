

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let setIntervalId = null;

console.log(slides);

// intializeSlider();
document.addEventListener("DOMContentLoaded",intializeSlider);

function intializeSlider(){

if(slides.length > 0){
  slides[slideIndex].classList.add("displaySlide"); // 1st img will load using this class
  setIntervalId = setInterval(nxtSlide,5000); // call nxtslide fun after 5s, assign to interval id to access later
  console.log(setIntervalId);
}


}

function showSlide(index){


  if(index >= slides.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");

  
}

function prevSlide(){
  clearInterval(setIntervalId); // stope the interval fun
 slideIndex--;
 showSlide(slideIndex)
}

function nxtSlide(){
  slideIndex++;
  showSlide(slideIndex);
}