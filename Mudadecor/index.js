let botaoVermelho = document.getElementById('botaoVermelho')
let botaoAzul = document.getElementById('botaoAzul')
let botaoVerde = document.getElementById('botaoVerde')
let fundo = document.body

botaoVermelho.addEventListener('click', function(){
    fundo.style.backgroundColor = 'red'
})
botaoAzul.addEventListener('click', function(){
    fundo.style.backgroundColor = 'blue'
})
botaoVerde.addEventListener('click', function(){
    fundo.style.backgroundColor = 'green'
})