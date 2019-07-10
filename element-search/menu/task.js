const menu_item = document.getElementsByClassName('menu__item');

menuItem = Array.from(menu_item);

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = function() {
        let element = menuItem[i].querySelector('li > ul');

        if (element.className == "menu menu_sub") {
            element.className = "menu menu_sub menu_active";
        } else if (element.className == "menu menu_sub menu_active") {
            element.className = "menu menu_sub";
        }

        return false;
    }
}
