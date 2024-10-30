import { enter as enterQuizz } from './quizz.js';

export function enter() {
    const novoTitulo = document.createElement('h1');
    const novoParagrafo = document.createElement('p');
    const botaoAdivinhacao = document.createElement('button');
    const botaoMemoria = document.createElement('button');
    const botaoQuizz = document.createElement('button');

    novoTitulo.innerHTML = 'Seja Bem-Vindo';
    novoParagrafo.innerHTML = 'Escolha um jogo para jogar';

    botaoAdivinhacao.id = 'jogoAdivinhacao';
    botaoAdivinhacao.innerHTML = 'Jogo da Adivinhação';
    botaoAdivinhacao.classList.add('botao');

    botaoMemoria.id = 'jogoMemoria';
    botaoMemoria.innerHTML = 'Jogo da Memória';
    botaoMemoria.classList.add('botao');

    botaoQuizz.id = 'jogoQuizz';
    botaoQuizz.innerHTML = 'Quizz';
    botaoQuizz.classList.add('botao');

    novoParagrafo.style.fontSize = '30px';
    novoTitulo.style.textAlign = 'center';
    novoParagrafo.style.textAlign = 'center';

    document.body.appendChild(novoTitulo);
    document.body.appendChild(novoParagrafo);
    document.body.appendChild(botaoAdivinhacao);
    document.body.appendChild(botaoMemoria);
    document.body.appendChild(botaoQuizz);

    botaoAdivinhacao.addEventListener('click', function() {

    });

    botaoMemoria.addEventListener('click', function() {

    });

    botaoQuizz.addEventListener('click', function() {
        leave();
        enterQuizz();
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
