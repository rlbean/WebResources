let slideIndex = 0; //starts the list of images at 0
showSlides(slideIndex); //show the first slide -- based on variable

//increase the number so our slide images increase -- showing next one. 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  //grab the reference to the carousel-slide class
  //this is wrapped around each image. 
  const slides = document.getElementsByClassName("carousel-slide");
  //if n is higher than the number of pictures we have 
  //-- return to first pic
  if (n > slides.length - 1) 
  {
    slideIndex = 0;
  }
  //if we are on the first image and we click to go back
  //load the last image in our list
  // -1 because we start counting at 0
  if (n < 0) 
  { 
    slideIndex = slides.length - 1;
  }
  //for each image wrapper there is
  for (i = 0; i < slides.length; i++) {
    //make them invisible -- by changing their display to none
    slides[i].style.display = "none";
  }
  //show the image we are on
  slides[slideIndex].style.display = "block";
}
//if the person clicks on previous button -- run the code to move back
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
//click on the next button -- run function to move forward
document.querySelector('.next').addEventListener('click', () => plusSlides(1));