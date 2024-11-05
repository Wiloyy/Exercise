import { enter as enterMenu } from './index.js';

export function enterJogoDaVelha() {
    const container = document.createElement('div');
    container.classList.add('tabuleiro'); 
    document.body.appendChild(container);

    const voltarMenu = document.createElement('button');
    voltarMenu.innerHTML = 'Voltar ao Menu';
    voltarMenu.classList.add('botaoVolta');
    document.body.appendChild(voltarMenu);

    voltarMenu.addEventListener('click', function () {
        leave();
        enterMenu();
    });
    
    const button0 = document.createElement('button');
    button0.id = 'botao-0';
    button0.className = 'botao';
    button0.innerHTML = '';
    container.appendChild(button0);
    
    const button1 = document.createElement('button');
    button1.id = 'botao-1';
    button1.className = 'botao';
    button1.innerHTML = '';
    container.appendChild(button1);
    
    const button2 = document.createElement('button');
    button2.id = 'botao-2';
    button2.className = 'botao';
    button2.innerHTML = '';
    container.appendChild(button2);
    
    const button3 = document.createElement('button');
    button3.id = 'botao-3';
    button3.className = 'botao';
    button3.innerHTML = '';
    container.appendChild(button3);
    
    const button4 = document.createElement('button');
    button4.id = 'botao-4';
    button4.className = 'botao';
    button4.innerHTML = '';
    container.appendChild(button4);
    
    const button5 = document.createElement('button');
    button5.id = 'botao-5';
    button5.className = 'botao';
    button5.innerHTML = '';
    container.appendChild(button5);
    
    const button6 = document.createElement('button');
    button6.id = 'botao-6';
    button6.className = 'botao';
    button6.innerHTML = '';
    container.appendChild(button6);
    
    const button7 = document.createElement('button');
    button7.id = 'botao-7';
    button7.className = 'botao';
    button7.innerHTML = '';
    container.appendChild(button7);
    
    const button8 = document.createElement('button');
    button8.id = 'botao-8';
    button8.className = 'botao';
    button8.innerHTML = '';
    container.appendChild(button8);
    
    const reset = document.createElement('button');
    reset.id = 'reset';
    reset.innerHTML = 'Reset';
    container.appendChild(reset);
    let jogador = 'X'; 
    let jogador1 = null
    const vitoria = document.createElement('div'); 
    container.appendChild(vitoria);


    let botao = document.querySelectorAll('.botao')
    
    botao.forEach(function (botoes) {
        botoes.addEventListener('click', function () {
            if (botoes.textContent == '') {
                jogador1 = jogador
                if (jogador == 'X') {
                    botoes.textContent = 'X'
                    jogador = 'O'
                } else {
                    botoes.textContent = 'O'
                    jogador = 'X'
                }
                if (vitoriaParaXouO(jogador1)) {
                    vitoria.textContent = `O jogador "${jogador1}" venceu!`;
                }
                if (todosBotoesSelecionados(botao)) {
                    vitoria.textContent = `Deu velha`;
                }
                console.log(todosBotoesSelecionados())
            }
        });
    });

    reset.addEventListener('click', function () {
        button0.innerHTML = '';
        button1.innerHTML = '';
        button2.innerHTML = '';
        button3.innerHTML = '';
        button4.innerHTML = '';
        button5.innerHTML = '';
        button6.innerHTML = '';
        button7.innerHTML = '';
        button8.innerHTML = '';
        jogador = 'X'; 
        vitoria.innerHTML = '';
        console.log('reset');
    });

    function todosBotoesSelecionados() {
        return button0.innerHTML !== "" &&
               button1.innerHTML !== "" &&
               button2.innerHTML !== "" &&
               button3.innerHTML !== "" &&
               button4.innerHTML !== "" &&
               button5.innerHTML !== "" &&
               button6.innerHTML !== "" &&
               button7.innerHTML !== "" &&
               button8.innerHTML !== "";
    }

    function vitoriaParaXouO(vencedor) {
        return (button0.innerHTML === vencedor && button1.innerHTML === vencedor && button2.innerHTML === vencedor) ||
               (button3.innerHTML === vencedor && button4.innerHTML === vencedor && button5.innerHTML === vencedor) ||
               (button6.innerHTML === vencedor && button7.innerHTML === vencedor && button8.innerHTML === vencedor) ||
               (button0.innerHTML === vencedor && button3.innerHTML === vencedor && button6.innerHTML === vencedor) ||
               (button1.innerHTML === vencedor && button4.innerHTML === vencedor && button7.innerHTML === vencedor) ||
               (button2.innerHTML === vencedor && button5.innerHTML === vencedor && button8.innerHTML === vencedor) ||
               (button0.innerHTML === vencedor && button4.innerHTML === vencedor && button8.innerHTML === vencedor) ||
               (button2.innerHTML === vencedor && button4.innerHTML === vencedor && button6.innerHTML === vencedor);
    }
}

function leave (){
    document.body.innerHTML = ''
}