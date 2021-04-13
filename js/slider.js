const SLIDER_MARGINS = ['0', '-33.3333%', '-66.6666%'];
const btnNext = document.querySelector("#slideNext");
const btnPrev = document.querySelector("#slidePrev");
const slider = document.querySelector('.current');
const sliderRadios = document.querySelectorAll('.d_page_radio');

let index = 0;

btnNext.addEventListener('click', () => {
    index++;
    if (index === SLIDER_MARGINS.length) {
        index = 0;
    }
    sliderRadios.forEach((radio) => {
        radio.classList.remove('d_page_active');
    });
    sliderRadios[index].classList.add('d_page_active');
    slider.style.marginLeft = SLIDER_MARGINS[index];
});

btnPrev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = 2;
    }
    sliderRadios.forEach((radio) => {
        radio.classList.remove('d_page_active');
    });
    sliderRadios[index].classList.add('d_page_active');
    slider.style.marginLeft = SLIDER_MARGINS[index];
});

sliderRadios.forEach((radio, i) => {
    activatePagination(radio, i);
});

function activatePagination(radio, i) {
    radio.addEventListener('click', () => {
        
        for (let j = 0; j < 3; j++) {
            if (i !== j) {
                sliderRadios[j].classList.remove('d_page_active')
            }
        }
        radio.classList.add('d_page_active');

        index = i;
        slider.style.marginLeft = SLIDER_MARGINS[index];
    });
}

