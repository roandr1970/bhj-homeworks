
const addTimer = function () {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (Number(timer.textContent) === 0) {
        alert ("Вы победили в конкурсе");
        clearInterval(id);
    } 

};

const id = setInterval(addTimer, 1000);
