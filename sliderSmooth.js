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
        newDot.className = `${i} dot`;
        dotsContainer.append(newDot);
    }
}

creatSlider(7);

const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

const oneStepSlider = 360;

function getLastStepCarousel() {
    let lastStepCarousel = (sliderCarousel.scrollWidth - oneStepSlider * 3);

    if (innerWidth === 1255) {
        lastStepCarousel = sliderCarousel.scrollWidth - oneStepSlider * 2;
    } else if (innerWidth === 770) {
        lastStepCarousel = sliderCarousel.scrollWidth - oneStepSlider;
    }
    return lastStepCarousel;
}

btnPrevious.onclick = () => {
    if (sliderCarousel.scrollLeft === 0) {
        sliderCarousel.scrollLeft = getLastStepCarousel();
    } else {
        sliderCarousel.scrollLeft -= oneStepSlider;
    }
};

btnNext.onclick = () => {
    if (sliderCarousel.scrollLeft === getLastStepCarousel()) {
        sliderCarousel.scrollLeft = 0;
    } else {
        sliderCarousel.scrollLeft += oneStepSlider;
    }
};

dotsContainer.onclick = (event) => {
    event.target.className;
};
