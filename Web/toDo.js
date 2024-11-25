import { enter as enterMenu } from './index.js';
import { Leave } from './quizz.js';
import { init } from './score.js';


export function enter() {

    document.body.innerHTML = '';

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

    backToMenuButton.addEventListener('click', function () {
        const leaveToDoInstance = new LeaveToDo('To Do List');
        leaveToDoInstance.reseta();
        enterMenu();
    });
    class ToDo {
        constructor(inputTarefa, paragrafo, botaoAdicionar) {
            this.inputTarefa = inputTarefa;
            this.paragrafo = paragrafo;
            this.botaoAdicionar = botaoAdicionar;

            this.init();
        }

        init() {
            this.botaoAdicionar.addEventListener('click', function(){
                const valor = this.inputTarefa.value;
                if (valor) {
                    this.addTask(valor, 'X', 'V');
                    this.inputTarefa.value = '';
                }
            });
        }

        addTask(task, button1Text, button2Text) {
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
    }

    const toDo = new ToDo(inputTask, taskContainer, addButton);

}

class LeaveToDo extends Leave {
    constructor(leave) {
        super(leave);
    }
}



