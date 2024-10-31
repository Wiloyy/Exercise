import { enter as enterMenu } from './index.js';

export function enter() {
    document.body.innerHTML = '';

    const texto = document.createElement('p')
    const botaoToDo = document.createElement('button');
    const inputToDo = document.createElement('input');
    const paragrafo = document.createElement('div');
    const voltarMenu = document.createElement('button');

    voltarMenu.innerHTML = 'Voltar ao Menu';
    texto.innerHTML = 'Escreva uma tarefa'
    botaoToDo.innerHTML = '+';

    voltarMenu.classList.add('botaoVolta');
    botaoToDo.classList.add('botaoToDo');
    inputToDo.classList.add('inputToDo');
    paragrafo.id = 'paragrafo';

    document.body.appendChild(voltarMenu);
    document.body.appendChild(inputToDo);
    document.body.appendChild(botaoToDo);
    document.body.appendChild(paragrafo);
    document.body.appendChild(texto);

    voltarMenu.addEventListener('click', function() {
        leaveToDo();
        enterMenu();
    });

    botaoToDo.addEventListener('click', function() {
        const valor = inputToDo.value;
        if (valor) {
            adicionaTarefa(valor, 'X', 'V', paragrafo);
            inputToDo.value = '';
        }
    });
}

function leaveToDo() {
    document.body.innerHTML = '';
}

function adicionaTarefa(tarefa, botoes, botoes2) {
    const paragrafo = document.getElementById('paragrafo')
    const novoParagrafo = document.createElement('div');
    const botaoX = document.createElement('button');
    const botaoV = document.createElement('button');
    novoParagrafo.textContent = tarefa;
    botaoX.textContent = botoes;
    botaoV.textContent = botoes2;
    novoParagrafo.style.color = "red";
    novoParagrafo.appendChild(botaoX)
    novoParagrafo.appendChild(botaoV)
    paragrafo.appendChild(novoParagrafo);
    

    botaoX.addEventListener('click', function () {
        paragrafo.removeChild(novoParagrafo);
    })

    botaoV.addEventListener('click', function () {
        console.log(novoParagrafo.style.color)
        if(novoParagrafo.style.color  === 'red'){
           novoParagrafo.style.color = 'green'
        } else if (novoParagrafo.style.color  === 'green') {
            novoParagrafo.style.color = 'red'
        }
    })
    
}
