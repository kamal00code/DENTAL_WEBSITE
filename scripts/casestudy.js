var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.querySelectorAll('.slides section');
  
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  // Ensure slideIndex is within bounds
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }
  
  // Display current slide
  slides[slideIndex].style.display = 'block';
}

// Navigation
document.querySelector('#prev').addEventListener('click', function() {
  showSlides(slideIndex - 1);
});

document.querySelector('#next').addEventListener('click', function() {
  showSlides(slideIndex + 1);
});