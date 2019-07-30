const task_input = document.getElementById('task__input');
const tasks_add = document.getElementById('tasks__add'); 

tasks_add.addEventListener('click', (event) =>  {
    event.preventDefault();
    const task_text = task_input.value;
    const tasks_list = document.getElementById('tasks__list');
    let inputElement = document.createElement('div');
    inputElement.classList.add ('task');
    inputElement.innerHTML +=`
        <div class="task">
            <div class="task__title">` + task_text + `</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    tasks_list.appendChild(inputElement);
    
    const task_remove = document.getElementsByClassName('task__remove');
    const taskRemove = Array.from(task_remove);
    for (let i = 0; i < taskRemove.length; i++) {
        taskRemove[i].addEventListener('click', () => {
            let deleteElement = taskRemove[i].closest('.task');
            deleteElement.remove();
        })
    } 

    task_input.value = '';
})






