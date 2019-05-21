const modal_main = document.getElementById("modal_main");
modal_main.className = "modal modal_active";

const modal_close = document.getElementsByClassName('modal__close');
const modalClose = Array.from(modal_close);

const modal_success = document.getElementById("modal_success");

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        modal_main.className = 'modal';
        modal_success.className = 'modal';  
    }
}
modal_main.onclick = function() {
    modal_main.className = 'modal';
    modal_success.className = 'modal modal_active';
}

