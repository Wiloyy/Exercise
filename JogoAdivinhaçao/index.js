const botao = document.getElementById('botao')
const reset = document.getElementById('reset')
const titulo = document.getElementById('titulo')
const palpite = document.getElementById('palpite')
let numero = geraNumeroAleatorio(1, 100);

botao.addEventListener('click', function(){
    const valor = palpite.value;
    if(numero < valor){
        editaTextoTitulo(`O numero é menor, seu ultimo palpite foi:  ${valor}` )
    } else if (numero > valor) {
        editaTextoTitulo(`O numero é maior, seu ultimo palpite foi:  ${valor}` )
    } else if (numero == valor){
        editaTextoTitulo(`ACERTOUUU!!!!!`)
    } else if (valor > 100 || valor < 1) {
        editaTextoTitulo(`É de 1 a 100 bobinho`)
    }
    })
    


    
reset.addEventListener('click', function(){
     numero = geraNumeroAleatorio(1, 100);
     editaTextoTitulo(`Novo número gerado!`);
})

function  editaTextoTitulo(texto){
     titulo.innerHTML = texto
}

function geraNumeroAleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }