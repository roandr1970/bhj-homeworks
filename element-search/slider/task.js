const menu_item = document.getElementsByClassName('slider__item');
sliderItem = Array.from(menu_item);
const slider_arrow_prev = document.getElementsByClassName('slider__arrow slider__arrow_prev');
const slider_arrow_next = document.getElementsByClassName('slider__arrow slider__arrow_next');
let per;
slider_arrow_prev[0].onclick = function() {
    per = 0;
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].className.includes('slider__item slider__item_active')) {
            sliderItem[i].className = "slider__item";
            if (i == 0) {
                per = sliderItem.length - 1;
            } else per = i - 1;
            sliderItem[per].className = "slider__item slider__item_active"; 
            break;
        }    
    }
}

slider_arrow_next[0].onclick = function() {
    per = 0;
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].className.includes('slider__item slider__item_active')) {
            sliderItem[i].className = "slider__item";
            if (i == sliderItem.length - 1) {
                per = 0;
            } else per = i + 1;
            sliderItem[per].className = "slider__item slider__item_active"; 
            break;
        }
    }
}
