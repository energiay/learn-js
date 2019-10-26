
// задаю параметры
const SPASE_ELEM = 130;
const elemsSlider = document.querySelector('.js_elems_slider');
const countElems = document.querySelectorAll('.js_elems_slider > li').length;
const maxPosition = -1 * countElems * SPASE_ELEM
let position = 0;

// анимация движения
elemsSlider.style.transition = 'all 400ms';

document.querySelector('.js_left').addEventListener('click', function () {
    position += SPASE_ELEM; 
    if (position > 0) {
        position = 0;
    }
    elemsSlider.style.transform = 'translateX(' + position + 'px)';
});

document.querySelector('.js_right').addEventListener('click', function () {
    position -= SPASE_ELEM;
    if (maxPosition > position) {
        position = maxPosition;
    }
    elemsSlider.style.transform = 'translateX(' + position + 'px)';
});