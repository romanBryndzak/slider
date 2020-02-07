const sliderCarousel = document.querySelector(".slider-carousel"),
    dotsContainer = document.querySelector(".dots-container"),
    previousBtn = document.querySelector(".previous"),
    nextBtn = document.querySelector(".next");

let currentPositionCarousel = 0;

function createSlider(slidesCount) {
    for (let i = 0; slidesCount > i; i++) {
        const slideItem = document.createElement("div");
        slideItem.className = `${i} slide`;
        slideItem.innerText = i + 1;
        sliderCarousel.append(slideItem);
    }

    for (let i = 0; slidesCount > i; i++) {
        const dot = document.createElement("div");
        dot.className = `${i} dot`;

        if (i === 0) {
            dot.className = `${i} dot active`;
        }
        dotsContainer.append(dot);
    }
}

createSlider(7);

function moveSlidesPrevious() {
    const slides = document.querySelectorAll(".slide"),
        lastSlideNum = slides.length - 1,
        changedCarouselList = [];

    for (let i = 0, j = -1; i < slides.length; i++, j++) {

        if (i === 0) {
            changedCarouselList[i] = slides[lastSlideNum];

        } else {
            changedCarouselList[i] = slides[j];
        }
    }

    sliderCarousel.innerHTML = '';
    sliderCarousel.append(...changedCarouselList);

    if (currentPositionCarousel === 0) {
        currentPositionCarousel = lastSlideNum
    } else {
        currentPositionCarousel -= 1;
    }

}

function moveSlidesNext() {
    const slides = document.querySelectorAll(".slide"),
        lastSlideNum = slides.length - 1,
        changedCarouselList = [];

    for (let i = 0, j = 1; i < slides.length; i++, j++) {

        if (i === lastSlideNum) {
            changedCarouselList[i] = slides[0];

        } else {
            changedCarouselList[i] = slides[j];
        }
    }

    sliderCarousel.innerHTML = '';
    sliderCarousel.append(...changedCarouselList);

    if (currentPositionCarousel === lastSlideNum) {
        currentPositionCarousel = 0
    } else {
        currentPositionCarousel += 1;
    }
}

function sortSlides(slides) {
    const sortedSlides = slides;

    sortedSlides.sort((slideA, slideB) => {
        const slideIndexA = parseInt(slideA.className);
        const slideIndexB = parseInt(slideB.className);

        return slideIndexB > slideIndexA ? -1 : 1;
    });

    return sortedSlides
}

function moveSlidesToPosition(goTo) {
    const slides = document.querySelectorAll(".slide"),
        before = [],
        after = [],
        firstElement = [];
    currentPositionCarousel = goTo;

    slides.forEach(item => {
        const slideIndex = parseInt(item.className);

        if (slideIndex === goTo) {
            firstElement.push(item)
        } else if (slideIndex < goTo) {
            before.push(item);
        } else if (slideIndex > goTo) {
            after.push(item);
        }
    });

    const changedCarouselList = [...firstElement, ...sortSlides(after), ...sortSlides(before)];

    sliderCarousel.innerHTML = '';
    sliderCarousel.append(...changedCarouselList);
}

function activeDot(whereToGo) {
    const dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
        if (whereToGo === i) {
            dots[i].className = dots[i].className + " active";
        } else {
            dots[i].className = `${i} dot`;
        }
    }
}

previousBtn.onclick = () => {
    moveSlidesPrevious();
    activeDot(currentPositionCarousel);

};

nextBtn.onclick = () => {
    moveSlidesNext();
    activeDot(currentPositionCarousel);
};

dotsContainer.onclick = (event) => {
    const whereToGo = parseInt(event.target.className);

    if (isNaN(whereToGo)) return;

    moveSlidesToPosition(whereToGo);
    activeDot(whereToGo);
};
