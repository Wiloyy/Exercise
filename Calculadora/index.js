let botoes = document.querySelectorAll('.botoes')
let texto = document.getElementById('texto')
let reset = document.getElementById('reset')
let igual = document.getElementById('igual')
let mais = document.getElementById('mais')
let menos = document.getElementById('menos')
let divisao = document.getElementById('divisao')
let multiplicacao = document.getElementById('multiplicacao')
let primeiroBotao = null;
let valor = null;
let clique = 1;
let primeiraParte = ''
let operador = ''
let segundaParte = ''
let estouNaSugundaParte = null


botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {

        texto.innerHTML += botao.textContent;

        console.log('primeiraParte', primeiraParte)

        if (estouNaSugundaParte == 1) {
            segundaParte = segundaParte + botao.textContent
            console.log('segundaParte', segundaParte)
        } else if (botao === mais || botao === menos || botao === divisao || botao === multiplicacao) {
            if (botao.textContent == '+') {
                operador = mais
                estouNaSugundaParte = 1
            } else if (botao.textContent == '-') {
                operador = menos
                estouNaSugundaParte = 1
            } else if (botao.textContent == 'x') {
                operador = multiplicacao
                estouNaSugundaParte = 1
            } else if (botao.textContent == ':') {
                operador = divisao
                estouNaSugundaParte = 1
            }
        } else {
            primeiraParte = primeiraParte + botao.textContent
        }

    });
});

reset.addEventListener('click', function () {
    texto.innerHTML = ''
    primeiraParte = ''
    segundaParte = ''
    operador = ''
    estouNaSugundaParte = 0
});

igual.addEventListener('click', function () {
    if (operador == mais) {
        let soma = Number(primeiraParte) + Number(segundaParte)
        texto.innerHTML = soma
    } else if (operador == menos) {
        let diminui = Number(primeiraParte) - Number(segundaParte)
        texto.innerHTML = diminui
    } else if (operador == multiplicacao) {
        let multiplica = Number(primeiraParte) * Number(segundaParte)
        texto.innerHTML = multiplica
    } else if (operador == divisao) {
        let divide = Number(primeiraParte) / Number(segundaParte)
        texto.innerHTML = divide
    }
    estouNaSugundaParte = 0
});
