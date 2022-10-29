const slider = (sliderSelector, slidesSelector, prevSelector, nextSelector) => {
    const slider = document.querySelector(sliderSelector),
        slides = document.querySelectorAll(slidesSelector),
        prevBtn = document.querySelector(prevSelector),
        nextBtn = document.querySelector(nextSelector);

    let flag = 0;

    function toNextSlide() {
        flag++;

        if (flag >= slides.length) {
            flag = 0;
            slider.style.transform = `translateX(-0%)`;
            return;
        }

        slider.style.transform = `translateX(-${100 * flag}%)`;
    }

    function toPrevSlide() {
        flag--;

        if (flag <= -1) {
            flag = slides.length - 1;
            slider.style.transform = `translateX(-${100 * flag}%)`;
            return;
        }

        slider.style.transform = `translateX(-${100 * flag}%)`;
    }

    prevBtn.addEventListener("click", toPrevSlide);
    nextBtn.addEventListener("click", toNextSlide);
};

export default slider;
