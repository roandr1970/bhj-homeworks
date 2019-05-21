const menu_link = document.getElementsByClassName('menu__link');

//const menu_item = document.getElementsByClassName('menu menu_item');

const menu_sub = document.querySelectorAll('.menu_sub');
console.log(menu_sub);

menuLink = Array.from(menu_link);

menuSub = Array.from(menu_sub);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        if (i = 2) {
            menuSub[i].className = "menu menu_sub menu_active";
        }
    }
}
