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

const btn_danger = document.getElementsByClassName('btn btn_danger');
const btnDanger = Array.from(btn_danger);
for (let i = 0; i < modalClose.length; i++) {
    btnDanger[i].onclick = function() {
        modal_main.className = 'modal';
        modal_success.className = 'modal modal_active';
    }
}
