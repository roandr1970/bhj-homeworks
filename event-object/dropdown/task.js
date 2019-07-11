const dropdown_value = document.getElementsByClassName('dropdown__value');
const dropdownValue = Array.from(dropdown_value);
const dropdown_list = document.getElementsByClassName('dropdown__list');
const dropdownList = Array.from(dropdown_list);
const dropdown_item = document.getElementsByClassName('dropdown__item');
const dropdownItem = Array.from(dropdown_item);


for (let i = 0; i < dropdownValue.length; i++) {
    function openList() {
        dropdownList[i].className = "dropdown__list dropdown__list_active";
        for (let j = 0; j < dropdownItem.length; j++) {
            dropdownItem[j].addEventListener('click', function() {       
                let element = dropdownItem[j].querySelector("ul > li > a");
                alert(dropdownValue[i].textContent = element.textContent); 
                dropdownList[i].className = "dropdown__list";
                return false;
            })                
        }
    }
    dropdownValue[i].addEventListener('click', openList);
}   