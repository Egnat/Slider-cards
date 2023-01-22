//https://www.w3schools.com/howto/howto_js_lightbox.asp сайт со слайдерами
    /*когда пишу скрипт в футере, в хэде ссылка <script type="text/javascript" src="main.js">>не нужна*/
  let slideIndex = 0;
  showSlides(slideIndex); 

function plusSlides(n) {
  showSlides(slideIndex += n);
}      
function currentSlide(n) {
  showSlides(slideIndex = n);
} 
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}