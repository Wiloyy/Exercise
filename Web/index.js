import { enter as enterToDo } from './toDo.js';
import {init} from './score.js'
import {enterJogoDaVelha} from './jogoDaVelha.js'
import { enter as enterQuizz } from './quizz.js';

export function enter() {
    const novoTitulo = document.createElement('h1');
    const novoParagrafo = document.createElement('p');
    const botaoAdivinhacao = document.createElement('button');
    const botaoMemoria = document.createElement('button');
    const botaoToDo = document.createElement('button');

    novoTitulo.innerHTML = 'Seja Bem-Vindo';
    novoParagrafo.innerHTML = 'Escolha um jogo para jogar';

    botaoAdivinhacao.id = 'jogoQuizz';
    botaoAdivinhacao.innerHTML = 'Quizz';
    botaoAdivinhacao.classList.add('botao');

    botaoMemoria.id = 'jogoDaVelha';
    botaoMemoria.innerHTML = 'Jogo da velha';
    botaoMemoria.classList.add('botao');

    botaoToDo.id = 'jogoToDo';
    botaoToDo.innerHTML = 'ToDo';
    botaoToDo.classList.add('botao');

    novoParagrafo.style.fontSize = '30px';
    novoTitulo.style.textAlign = 'center';
    novoParagrafo.style.textAlign = 'center';

    document.body.appendChild(novoTitulo);
    document.body.appendChild(novoParagrafo);
    document.body.appendChild(botaoAdivinhacao);
    document.body.appendChild(botaoMemoria);
    document.body.appendChild(botaoToDo);

    botaoAdivinhacao.addEventListener('click', function() {
        leave()
        enterQuizz()
    });

    botaoMemoria.addEventListener('click', function() {
        leave()
        enterJogoDaVelha()
    });

    botaoToDo.addEventListener('click', function() {
        leave();
        enterToDo();
    });
}

function leave() {
    const titulo = document.querySelector('h1');
    const paragrafo = document.querySelector('p');
    const botoes = document.querySelectorAll('button');

    if (titulo) {
        titulo.style.display = 'none';
    }
    
    if (paragrafo) {
        paragrafo.style.display = 'none';
    }
    
    if (botoes) {
        botoes.forEach(function(botao) {
            botao.style.display = 'none';
        });
    }
}

enter();
init()