function getHole( index ) {
    let id = "hole" + (index + 1);
    return id;
}

function zero () {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 0; i < 9; i++) {
    const hole = document.getElementById(getHole(i));
    hole.onclick = function() {  
        if (hole.className.includes( 'hole_has-mole' )) {
            const dead = document.getElementById("dead");
            dead.textContent = Number(dead.textContent) + 1;
            if (dead.textContent == 10) {
                alert('Вы победили');
                zero();
            }
        }  else {
            const lost = document.getElementById("lost");
            lost.textContent = Number(lost.textContent) + 1;
            if (lost.textContent == 5) {
                alert('Вы проиграли');
                zero();
            }
        }
    }        
}
