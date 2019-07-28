const has_tooltip = document.getElementsByClassName('has-tooltip');

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', (event) => {
        event.preventDefault();
        let tooltip = has_tooltip[i].getAttribute('title');
        let tooltipElem = document.createElement('div');
        tooltipElem.classList.toggle = "tooltip_active";
        tooltipElem.innerHTML += '<div class="tooltip" style=" left: 0; top: 0">' + tooltip + '</div>';
        has_tooltip[i].appendChild(tooltipElem); 
        tooltipElem.classList.toggle = "tooltip_active";
        //console.log(tooltipElem.className);
    })

    
}