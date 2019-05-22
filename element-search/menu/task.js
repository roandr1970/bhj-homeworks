//const menu_link = document.getElementsByClassName('menu__link');

const menu_item = document.getElementsByClassName('menu_item');

let menu_sub = document.querySelectorAll('menu_sub');
//console.log(menu_sub);

menuItem = Array.from(menu_item);

menuSub = Array.from(menu_sub);

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = function() {
        console.log('Сработало');
        menuSub = document.querySelector('menu_sub');
        console.log(menuSub.closest('menu_item'));
        if (menuSub.closest('menu_item') == '<li class="menu__item">...</li>') {
            menuSub.className = "menu menu_sub menu_active";
        }
    }
}
