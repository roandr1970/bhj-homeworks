function selectorString() {
    const rotator_item = document.getElementsByClassName('rotator');
    const rotatorItem = Array.from(rotator_item);

    for (let i = 0; i < rotatorItem.length; i++) {
        const rotator = rotatorItem[i].querySelector('.rotator__case_active');

        if (rotator == rotatorItem[i].lastElementChild) {
            rotatorItem[i].firstElementChild.classList.toggle('rotator__case_active');
            rotatorItem[i].lastElementChild.classList.toggle('rotator__case_active');
        } else {
            rotator.nextElementSibling.classList.toggle("rotator__case_active");
            rotator.classList.toggle("rotator__case_active");
        }
    }
}

setInterval(selectorString,1000);
/*
setTimeout(function() {
    clearInterval(selectorString);
    alert( 'стоп' );
  }, 8000);*/