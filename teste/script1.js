const mensagemDiv = document.getElementById('mensagem');
const botaoTrocar = document.getElementById('btnTrocar');

botaoTrocar.addEventListener('click', () => {
    if (mensagemDiv.textContent === 'Olá') {
        mensagemDiv.textContent = 'Seja Bem-vindo!';
        botaoTrocar.textContent = 'Voltar para Olá';
    } else {
        // Chamando a função do script2.js para voltar
        voltarParaOla();
    }
});
