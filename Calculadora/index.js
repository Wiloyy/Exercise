let botoes = document.querySelectorAll('.botoes')
let texto = document.getElementById('texto')
let reset = document.getElementById('reset')
let igual = document.getElementById('igual')
let mais = document.getElementById('mais')
let menos = document.getElementById('menos')
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

        if(estouNaSugundaParte == 1) {
          segundaParte = segundaParte + botao.textContent
          console.log('segundaParte', segundaParte)
        } else if (botao === mais || botao === menos) {
            if (botao.textContent == '+') {
                operador = mais
                estouNaSugundaParte = 1

            } else {
                operador = menos
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
    if(operador == mais) {
        let soma = Number(primeiraParte) + Number(segundaParte)
        texto.innerHTML = soma
        
    } else {
        let diminui = Number(primeiraParte) - Number(segundaParte)
        texto.innerHTML = diminui
    }
    estouNaSugundaParte = 0
});
