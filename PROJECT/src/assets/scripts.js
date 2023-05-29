let slideIndex = 1;
showSlide(slideIndex);

// Start automatic slideshow
let slideInterval = setInterval(() => {
  changeSlide(1);
}, 5000);

function changeSlide(n) {
  clearInterval(slideInterval); // Clear previous interval
  showSlide(slideIndex += n);
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000); // Start new interval
}

function currentSlide(n) {
  clearInterval(slideInterval); // Clear previous interval
  showSlide(slideIndex = n);
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000); // Start new interval
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
