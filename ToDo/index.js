const botao = document.getElementById('botao')
const inputTarefa = document.getElementById('inputTarefa')
const paragrafo = document.getElementById('paragrafo')
const teste = document.getElementById('teste')

botao.addEventListener('click', function () {
    const valor = inputTarefa.value;
    adicionaTarefa(valor, 'X', 'V');
    inputTarefa.value = '';
});

function adicionaTarefa(tarefa, botoes, botoes2) {
    const novoParagrafo = document.createElement('div');
    const botaoX = document.createElement('button');
    const botaoV = document.createElement('button');
    novoParagrafo.textContent = tarefa;
    botaoX.textContent = botoes;
    botaoV.textContent = botoes2;
    novoParagrafo.style.color = "red";
    novoParagrafo.appendChild(botaoX)
    novoParagrafo.appendChild(botaoV)
    paragrafo.appendChild(novoParagrafo);
    

    botaoX.addEventListener('click', function () {
        paragrafo.removeChild(novoParagrafo);
    })

    botaoV.addEventListener('click', function () {
        console.log(novoParagrafo.style.color)
        if(novoParagrafo.style.color  === 'red'){
           novoParagrafo.style.color = 'green'
        } else if (novoParagrafo.style.color  === 'green') {
            novoParagrafo.style.color = 'red'
        }
    })
    
}


