const has_tooltip = document.getElementsByClassName('has-tooltip');
const tooltip = document.getElementsByClassName('tooltip')[0];

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', (event) => {
        event.preventDefault();
        const tooltip_text = has_tooltip[i].getAttribute('title');
        tooltip.classList.toggle("tooltip_active");
        tooltip.style.left = has_tooltip[i].getBoundingClientRect().left + "px";
        tooltip.style.top = (has_tooltip[i].getBoundingClientRect().top + 15) + "px";
        tooltip.innerHTML = '<div class="tooltip tooltip_active">' + tooltip_text + '</div>';
    })    
}