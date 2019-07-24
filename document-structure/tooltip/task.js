const has_tooltip = document.getElementsByClassName('has-tooltip');
var showingTooltip;
for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', event => {
        event.preventDefault();
        let tooltip = has_tooltip[i].getAttribute('title');
        let tooltipElem = document.createElement('div');
        tooltipElem.className = "tooltip tooltip_active";
        tooltipElem.innerHTML += '<div class="tooltip tooltip_active">' + tooltip + '</div>';
        has_tooltip[i].appendChild(tooltipElem); 
    })
}