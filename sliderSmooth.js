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

const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

const oneStepSlider = 360;
const lastStepCarousel = sliderCarousel.scrollWidth - oneStepSlider * 3;

btnPrevious.onclick = () => {
    if (sliderCarousel.scrollLeft === 0) {
        sliderCarousel.scrollLeft = lastStepCarousel ;
    } else {
        sliderCarousel.scrollLeft -= oneStepSlider;
    }
};

btnNext.onclick = () => {
    if (sliderCarousel.scrollLeft === lastStepCarousel) {
        sliderCarousel.scrollLeft = 0;
    } else {
        sliderCarousel.scrollLeft += oneStepSlider;
    }
};






