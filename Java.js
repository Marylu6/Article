document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideWidth = carousel.clientWidth;
    const previousButton = carousel.querySelector(".previous-button");
    const nextButton = carousel.querySelector(".next-button");
    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.childElementCount;
        updateSlide();
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + slides.childElementCount) % slides.childElementCount;
        updateSlide();
    }

    function updateSlide() {
        const translateX = -currentSlide * slideWidth;
        slides.style.transform = `translateX(${translateX}px)`;
    }

    nextButton.addEventListener("click", nextSlide);
    previousButton.addEventListener("click", previousSlide);
});