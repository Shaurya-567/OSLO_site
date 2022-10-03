var slideIndex = 0;
showSlides();




function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 3000); 
}

var slideIndex12= 1;
showSlides23(slideIndex12);
function plusSlides(n) {
  showSlides23(slideIndex += n)

}

function currentSlide(n) {
  let slideDoorExit=1;
  slideDoorExit++;
 showSlides23(slideIndex = n);
}

function showSlides23(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length)
   {
     slideIndex = 1
    }
  if (n < 1)
   {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
