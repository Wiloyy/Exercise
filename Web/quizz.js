import { enter as enterMenu } from './index.js';

export function enter() {
    document.body.innerHTML = '';

    const quizzTitulo = document.createElement('h2');
    quizzTitulo.innerHTML = 'Bem-vindo ao Quizz!';

    const voltarMenu = document.createElement('button');
    voltarMenu.innerHTML = 'Voltar ao Menu';
    voltarMenu.classList.add('botao');

    document.body.appendChild(quizzTitulo);
    document.body.appendChild(voltarMenu);

    voltarMenu.addEventListener('click', function() {
        leaveQuizz();
        enterMenu();
    });
}

function leaveQuizz() {
    const quizzTitulo = document.querySelector('h2');
    const voltarMenu = document.querySelector('button');

    if (quizzTitulo){
        quizzTitulo.style.display = 'none';
    }
    if (voltarMenu) {
        voltarMenu.style.display = 'none';
    }
}
