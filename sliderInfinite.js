const sliderCarousel = document.querySelector(".slider-carousel");
const dotsContainer = document.querySelector(".dots-container");

function creatSlider(slidesCount) {
    for (let i = 0; slidesCount > i; i++) {
        const newSlide = document.createElement("div");
        newSlide.innerText = i + 1;
        newSlide.className = "slide";
        sliderCarousel.append(newSlide);
    }

    for (let i = 0; slidesCount > i; i++) {
        const newDot = document.createElement("div");
        newDot.className = "dot";
        dotsContainer.append(newDot);
    }
}

creatSlider(7);

function moveSlides(direction) {
    const slides = document.querySelectorAll(".slide");
    const lastSlideNum = slides.length - 1;
    const changedCarouselList = [];
    const directionNumber = direction === "previous" ? -1 : 1;

    for (let i = 0, j = directionNumber; i < slides.length; i++, j++) {
        if (direction === "previous" && i === 0) {
            changedCarouselList[i] = slides[lastSlideNum];
        } else if (direction === "next" && i === lastSlideNum) {
            changedCarouselList[i] = slides[0];
        } else {
            changedCarouselList[i] = slides[j];
        }
    }

    sliderCarousel.innerHTML = "";
    sliderCarousel.append(...changedCarouselList);
}

const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

btnPrevious.onclick = () => {
    moveSlides("previous");
};

btnNext.onclick = () => {
    moveSlides("next");
};






