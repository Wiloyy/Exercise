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
            jogador1 = jogador 
            if (jogador == 'X') {
                botao.textContent = 'X'
                jogador = 'O'
            } else {
                botao.textContent = 'O'
                jogador = 'X'
            }
            if (vitoriaParaXouO(jogador1)) {
                vitoria.textContent = `O jogador "${jogador1}" venceu!`;
            }
            console.log(jogador1)
        }
    });
});

function vitoriaParaXouO(vencedor) {
    if ((botao0.textContent == vencedor && botao1.textContent == vencedor && botao2.textContent == vencedor) ||
        (botao3.textContent == vencedor && botao4.textContent == vencedor && botao5.textContent == vencedor) ||
        (botao6.textContent == vencedor && botao7.textContent == vencedor && botao8.textContent == vencedor) ||
        (botao0.textContent == vencedor && botao3.textContent == vencedor && botao6.textContent == vencedor) ||
        (botao1.textContent == vencedor && botao4.textContent == vencedor && botao7.textContent == vencedor) ||
        (botao2.textContent == vencedor && botao5.textContent == vencedor && botao8.textContent == vencedor) ||
        (botao0.textContent == vencedor && botao4.textContent == vencedor && botao8.textContent == vencedor) ||
        (botao2.textContent == vencedor && botao4.textContent == vencedor && botao6.textContent == vencedor)) {
        return true;
    } else {
        return false;
    }
}
reset.addEventListener('click', function () {
    botoes.forEach(function (botao) {
        botao.textContent = ''
        jogador = 'X'
        vitoria.textContent = ''
        console.log('reset')
    })
})

