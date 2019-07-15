
function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    // верхняя граница elem видна ИЛИ нижняя граница видима
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}

function showVisible() {
    const reveal = document.getElementsByClassName('reveal');
    const revealItem = Array.from(reveal);

    for (let i = 0; i < revealItem.length; i++) {
        let rever = revealItem[i];
        if (isVisible(rever)) {
            rever.classList.add('reveal_active');
        }
    }
}
window.addEventListener('scroll', showVisible);