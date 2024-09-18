//const botoes = document.querySelectorAll('.botao');
const botoes = [document.getElementById('botao-0'), document.getElementById('botao-1'), document.getElementById('botao-2'), document.getElementById('botao-3'), document.getElementById('botao-4'), document.getElementById('botao-5'),
document.getElementById('botao-6'), document.getElementById('botao-7'), document.getElementById('botao-8')
]
let botao0 = document.getElementById('botao-0');
let botao1 = document.getElementById('botao-1');
let botao2 = document.getElementById('botao-2');
let botao3 = document.getElementById('botao-3');
let botao4 = document.getElementById('botao-4');
let botao5 = document.getElementById('botao-5');
let botao6 = document.getElementById('botao-6');
let botao7 = document.getElementById('botao-7');
let botao8 = document.getElementById('botao-8');
let reset = document.getElementById('reset');


let vitoria = document.getElementById('vitoria');
let jogador = "X";

botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (botao.textContent == '') {
            if (jogador == 'X') {
                botao.textContent = 'X'
                jogador = 'O'
            } else {
                botao.textContent = 'O'
                jogador = 'X'
            }
        }
        vitoriaParaXouO()
    });
});


reset.addEventListener('click', function () {
    botoes.forEach(function (botao) {
        botao.textContent = ''
        console.log('reset')
    })
})


function vitoriaParaXouO() {
    if ((botao0.textContent == 'X' && botao1.textContent == 'X' && botao2.textContent == 'X') ||
        (botao3.textContent == 'X' && botao4.textContent == 'X' && botao5.textContent == 'X') ||
        (botao6.textContent == 'X' && botao7.textContent == 'X' && botao8.textContent == 'X') ||
        (botao0.textContent == 'X' && botao3.textContent == 'X' && botao6.textContent == 'X') ||
        (botao1.textContent == 'X' && botao4.textContent == 'X' && botao7.textContent == 'X') ||
        (botao2.textContent == 'X' && botao5.textContent == 'X' && botao8.textContent == 'X') ||
        (botao0.textContent == 'X' && botao4.textContent == 'X' && botao8.textContent == 'X') ||
        (botao2.textContent == 'X' && botao4.textContent == 'X' && botao6.textContent == 'X')) {
        vitoria.textContent = 'O jogador "X" venceu!';
    } else if ((botao0.textContent == 'O' && botao1.textContent == 'O' && botao2.textContent == 'O') ||
        (botao3.textContent == 'O' && botao4.textContent == 'O' && botao5.textContent == 'O') ||
        (botao6.textContent == 'O' && botao7.textContent == 'O' && botao8.textContent == 'O') ||
        (botao0.textContent == 'O' && botao3.textContent == 'O' && botao6.textContent == 'O') ||
        (botao1.textContent == 'O' && botao4.textContent == 'O' && botao7.textContent == 'O') ||
        (botao2.textContent == 'O' && botao5.textContent == 'O' && botao8.textContent == 'O') ||
        (botao0.textContent == 'O' && botao4.textContent == 'O' && botao8.textContent == 'O') ||
        (botao2.textContent == 'O' && botao4.textContent == 'O' && botao6.textContent == 'O')) {
        vitoria.textContent = 'O jogador "O" venceu!';
    } else {
        vitoria.textContent = 'Deu velha!';
    }


}
