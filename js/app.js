let slides = document.querySelectorAll(".banner-slides");

let slideIndex = 1;
showSlides(slideIndex);

// Prev and Next Controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Slider Function
function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
