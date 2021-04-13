const SLIDER_MARGINS = ['0', '-33.3333%', '-66.6666%'];
const btnNext = document.querySelector("#slideNext");
const btnPrev = document.querySelector("#slidePrev");
const slider = document.querySelector('.current');

let index = 0;

btnNext.addEventListener('click', () => {
    index++;
    if (index === SLIDER_MARGINS.length) {
        index = 0;
    }
    slider.style.marginLeft = SLIDER_MARGINS[index];
});

btnPrev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = 2;
    }
    slider.style.marginLeft = SLIDER_MARGINS[index];
});
