const menu_item = document.getElementsByClassName('menu__item');
const elements = document.querySelectorAll('li > ul');
menuItem = Array.from(menu_item);
//console.log(menuItem);
Elements = Array.from(elements);
//console.log(Elements);
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = function() {
        let element = document.querySelector('li > ul');
        //console.log (element);
        if (element == 'ul class="menu menu_sub"') {
            element.className = "menu menu_sub menu_active";
        }
    }
}
