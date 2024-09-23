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
    const novoParagrafo = document.createElement('p');
    const botaoX = document.createElement('button');
    const botaoV = document.createElement('button');
    novoParagrafo.textContent = tarefa;
    botaoX.textContent = botoes;
    botaoV.textContent = botoes2;
    paragrafo.style.color = "red";
    paragrafo.appendChild(novoParagrafo);
    paragrafo.appendChild(botaoX);
    paragrafo.appendChild(botaoV);

    botaoX.addEventListener('click',function (){
        paragrafo.removeChild(novoParagrafo);
        paragrafo.removeChild(botaoX)
        paragrafo.removeChild(botaoV)
    })

    botaoV.addEventListener('click',function (){
        novoParagrafo.style.color = "green";
    })

}


