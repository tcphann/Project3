let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { currentSlide = 0; }
    if (slideIndex < 0) { currentSlide = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
});
