const modal_main = document.getElementById("modal_main");
modal_main.className = "modal_active";

const modal_close = document.getElementsByClassName('modal__close');
console.log(modal_close);
modal_close.onclick = function() {
    
}


modal_main.onclick = function() {
    const modal_success = document.getElementById("modal_success");
    modal_success.className = 'modal_active';
}
