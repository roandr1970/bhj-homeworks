const has_tooltip = document.getElementsByClassName('has-tooltip');
//const inputElement = document.getElementsByClassName('tooltip')[0];
const inputElement = document.createElement('div');

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', (event) => {
        event.preventDefault();
        //const tooltip = document.getElementsByClassName('tooltip')[0];
        const tooltip_text = has_tooltip[i].getAttribute('title');
        //const inputElement = document.createElement('div');
        inputElement.classList.add("tooltip");
        inputElement.classList.toggle("tooltip_active");
        inputElement.style.left = has_tooltip[i].getBoundingClientRect().left + "px";
        inputElement.style.top = (has_tooltip[i].getBoundingClientRect().top + 15) + "px";
        inputElement.innerHTML = '<div class="tooltip tooltip_active">' + tooltip_text + '</div>';
        console.log(inputElement);
        has_tooltip[i].appendChild(inputElement);
    })    
}