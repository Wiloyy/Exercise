const botoes = document.querySelectorAll('.botoes');
const click = document.getElementById('click');
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeiroBotao = null;
let jogada = 1;
let contador = 0;
let valoresAleatorios = []
let doisBotoesClicadosEnaoPodeClicar = false
let contadorTotal = 0


function indiceAleatorio() {
    for (let indice = 0; indiceFinal = numeros.length; indice < indiceFinal, indice++) {
        let numeroIndexEscolhido = geraNumeroAleatorio(0, numeros.length - 1)
        valoresAleatorios[indice] = numeros[numeroIndexEscolhido]
        numeros.splice(numeroIndexEscolhido, 1)
    }
}
indiceAleatorio()

function geraNumeroAleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

botoes.forEach(function (botao, indice) {
    botao.addEventListener('click', function () {
        if(doisBotoesClicadosEnaoPodeClicar == true){
            return 
        }
        click.innerHTML = `O total de clicks fora ${++contadorTotal}`


        if (botao.textContent == '') {
            botao.textContent = valoresAleatorios[indice]
        }

        valor = botao.textContent
        
        if (jogada === 1) {
            primeiroBotao = botao
            doisBotoesClicadosEnaoPodeClicar = false
            jogada = 0
        } else if (jogada === 0) {
            if (primeiroBotao == botao) {
                primeiroBotao.textContent = ''
            } else {
                if (primeiroBotao.textContent === valor) {
                    primeiroBotao.textContent = valor;
                    botao.textContent = valor;
                } else {
                    setTimeout(function () {
                        primeiroBotao.textContent = '';
                        botao.textContent = '';
                        primeiroBotao = null;
                        doisBotoesClicadosEnaoPodeClicar = false
                    }, 800)
                    doisBotoesClicadosEnaoPodeClicar = true 
                    
                }
            } 


            jogada = 1;
            console.log(jogada)
            console.log(doisBotoesClicadosEnaoPodeClicar)
        }

    });

});
