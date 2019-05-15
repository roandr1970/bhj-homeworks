
const addTimer = function () {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (Number(timer.textContent) === 0) {
        alert ("Вы победили в конкурсе");
    } 
};


const id = setInterval(addTimer, 1000);

setTimeout(function() {
	clearInterval(id);
}, 60000);

