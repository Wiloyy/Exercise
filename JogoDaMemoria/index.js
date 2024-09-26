const botoes = document.querySelectorAll('.botoes');
const click = document.getElementById('click');
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeiroBotao = null;
let jogada = 1;
let contador = 0;
let valoresAleatorios = []

function indiceAleatorio() {
    botoes.forEach(function (botao, indice) {
        let numeroIndexEscolhido = geraNumeroAleatorio(0, numeros.length - 1)
        valoresAleatorios[indice] = numeros[numeroIndexEscolhido]
        numeros.splice(numeroIndexEscolhido, 1)
    })
}
indiceAleatorio()

function geraNumeroAleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

botoes.forEach(function (botao, indice) {
    botao.addEventListener('click', function () {

        click.innerHTML = `O total de clicks fora ${contador++}`

        if (botao.textContent == '') {
            botao.textContent = valoresAleatorios[indice]
        }

        valor = botao.textContent

        if (jogada === 1) {
            primeiroBotao = botao;
            jogada = 0;
        } else if (jogada === 0) {
            if (primeiroBotao.textContent === valor) {
                primeiroBotao.textContent = valor;
                botao.textContent = valor;
            } else {
                primeiroBotao.textContent = '';
                botao.textContent = '';
            }
            jogada = 1;
            primeiroBotao = null;
        }

    });

});
