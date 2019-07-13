const dropdown_value = document.getElementsByClassName('dropdown__value');
//const dropdownValue = Array.from(dropdown_value);
const dropdown_list = document.getElementsByClassName('dropdown__list');
//const dropdownList = Array.from(dropdown_list);
const dropdown_item = document.getElementsByClassName('dropdown__item');
const dropdownItem = Array.from(dropdown_item);
let element;

//for (let i = 0; i < dropdownValue.length; i++) {
    function openList() {
        dropdown_list[0].classList.toggle("dropdown__list_active");
        for (let j = 0; j < dropdownItem.length; j++) {
            dropdownItem[j].addEventListener('click', function(event) {
                event.preventDefault();       
                element = dropdownItem[j].querySelector(".dropdown__link");
                dropdown_value[0].textContent = element.textContent; 
                dropdown_list[0].className = "dropdown__list";
            })   
            console.log(j);             
        }
    }
    dropdown_value[0].addEventListener('click', openList);
//}   