const botoes = document.querySelectorAll('.botoes');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const botao6 = document.getElementById('botao6');
const botao7 = document.getElementById('botao7');
const botao8 = document.getElementById('botao8');
const botao9 = document.getElementById('botao9');
const botao10 = document.getElementById('botao10');
const botao11 = document.getElementById('botao11');
const botao12 = document.getElementById('botao12');
const botao13 = document.getElementById('botao13');
const botao14 = document.getElementById('botao14');
const botao15 = document.getElementById('botao15');
const botao16 = document.getElementById('botao16');
const botao17 = document.getElementById('botao17');
const botao18 = document.getElementById('botao18');
const botao19 = document.getElementById('botao19');
const botao20 = document.getElementById('botao20');
let jogada = 1

function verificaNumeros() {
    if (botao1.textContent === botao11.textContent) {
        botao1.textContent = 1;
        botao11.textContent = 1;
    } else {
        botao1.textContent = '';
        botao11.textContent = '';
    }
}

botoes.forEach(function (botao, indice) {
    botao.addEventListener('click', function () {
        if (indice >= 10) {
            botao.textContent = (indice % 10) + 1;
        } else if (botao.textContent === '') {
            botao.textContent = indice + 1;
        }
        
        if (jogada === 1) {
            jogada = 0;
        } else if (jogada === 0) {
            if (botao1.textContent === botao11.textContent) {
                botao1.textContent = 1;
                botao11.textContent = 1;
            } else if(botao11.textContent === botao1.textContent)  {
                botao1.textContent = 1;
                botao11.textContent = 1;
            } else {
                botao1.textContent = ''
                botao11.textContent = ''
                botao.textContent = ''
            }
            jogada = 1; 
        }
    });
});


