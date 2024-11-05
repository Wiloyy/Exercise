import { enter as enterMenu } from './index.js';
import { init } from './score.js';

export function enter() {
    document.body.innerHTML = '';

    init();

    const text = document.createElement('p');
    const addButton = document.createElement('button');
    const inputTask = document.createElement('input');
    const taskContainer = document.createElement('div');
    const backToMenuButton = document.createElement('button');

    backToMenuButton.innerHTML = 'Voltar ao Menu';
    text.innerHTML = 'Escreva uma tarefa';
    addButton.innerHTML = '+';

    backToMenuButton.classList.add('botaoVolta');

    addButton.classList.add('botaoToDo');
    inputTask.classList.add('inputToDo');
    taskContainer.id = 'taskContainer';

    document.body.appendChild(backToMenuButton);
    document.body.appendChild(inputTask);
    document.body.appendChild(addButton);
    document.body.appendChild(taskContainer);
    document.body.appendChild(text);

    backToMenuButton.addEventListener('click', function() {
        leaveToDo();
        enterMenu();
    });

    addButton.addEventListener('click', function() {
        const value = inputTask.value;
        if (value) {
            addTask(value, 'X', 'V', taskContainer);
            inputTask.value = '';
        }
    });
}

function leaveToDo() {
    document.body.innerHTML = '';
}

function addTask(task, button1Text, button2Text, taskContainer) {
    const taskParagraph = document.getElementById('taskContainer');
    const newTask = document.createElement('div');
    const buttonX = document.createElement('button');
    const buttonV = document.createElement('button');

    newTask.textContent = task;
    buttonX.textContent = button1Text;
    buttonV.textContent = button2Text;

    newTask.style.color = "red";
    newTask.appendChild(buttonX);
    newTask.appendChild(buttonV);
    taskParagraph.appendChild(newTask);

    buttonX.addEventListener('click', function () {
        taskParagraph.removeChild(newTask);
    });

    buttonV.addEventListener('click', function () {
        console.log(newTask.style.color);
        if (newTask.style.color === 'red') {
            newTask.style.color = 'green';
        } else if (newTask.style.color === 'green') {
            newTask.style.color = 'red';
        }
    });
}
