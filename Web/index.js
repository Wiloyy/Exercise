import { enter as enterToDo } from './toDo.js';
import { init } from './score.js';
import { enterTicTacToe } from './jogoDaVelha.js';
import { enter as enterQuizz } from './quizz.js';

export function enter() {
    const newTitle = document.createElement('h1');
    const newParagraph = document.createElement('p');
    const buttonQuiz = document.createElement('button');
    const buttonTicTacToe = document.createElement('button');
    const buttonToDo = document.createElement('button');

    newTitle.innerHTML = 'Bem Vindo';
    newParagraph.innerHTML = 'Escolha um jogo para jogar';

    buttonQuiz.id = 'quizGame';
    buttonQuiz.innerHTML = 'Quiz';
    buttonQuiz.classList.add('button');

    buttonTicTacToe.id = 'ticTacToeGame';
    buttonTicTacToe.innerHTML = 'Jogo da Velha';
    buttonTicTacToe.classList.add('button');

    buttonToDo.id = 'toDoGame';
    buttonToDo.innerHTML = 'ToDo';
    buttonToDo.classList.add('button');

    newParagraph.style.fontSize = '30px';
    newTitle.style.textAlign = 'center';
    newParagraph.style.textAlign = 'center';

    document.body.appendChild(newTitle);
    document.body.appendChild(newParagraph);
    document.body.appendChild(buttonQuiz);
    document.body.appendChild(buttonTicTacToe);
    document.body.appendChild(buttonToDo);
    
    init()

    buttonQuiz.addEventListener('click', function () {
        leave();
        enterQuizz();
    });

    buttonTicTacToe.addEventListener('click', function () {
        leave();
        enterTicTacToe();
    });

    buttonToDo.addEventListener('click', function () {
        leave();
        enterToDo();
    });
}

function leave() {
    const title = document.querySelector('h1');
    const paragraph = document.querySelector('p');
    const buttons = document.querySelectorAll('button');

    if (title) {
        title.style.display = 'none';
    }

    if (paragraph) {
        paragraph.style.display = 'none';
    }

    if (buttons) {
        buttons.forEach(function (button) {
            button.style.display = 'none';
        });
    }
}

