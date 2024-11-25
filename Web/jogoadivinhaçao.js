import { enter as enterQuizz } from './quizz.js';

export function enter() {
    enterQuizz()
    document.body.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'ADIVINHE O NÚMERO DE 1 A 100';

    const titulo = document.createElement('h1');
    titulo.id = 'titulo';
    titulo.textContent = 'Adivinhe o número!';

    const palpite = document.createElement('input');
    palpite.id = 'palpite';
    palpite.placeholder = 'Seu palpite...';

    const botaoEnviar = document.createElement('button');
    botaoEnviar.textContent = 'Enviar';
    botaoEnviar.type = 'button';
    botaoEnviar.onclick = () => jogoAdivinhacao.botao();

    const botaoReset = document.createElement('button');
    botaoReset.textContent = 'Reset';
    botaoReset.type = 'button';
    botaoReset.onclick = () => jogoAdivinhacao.reset();


    container.append(mainTitle, titulo, palpite, botaoEnviar, botaoReset);

    document.body.appendChild(container);

    class JogoAdivinhacao {
        constructor(titulo, palpite) {
            this.titulo = titulo;
            this.palpite = palpite;
            this.numero = this.geraNumeroAleatorio(1, 100);
        }

        botao() {
            const valor = this.palpite.value

            if (valor < 1 || valor > 100) {
                this.editaTexto(`É de 1 a 100, bobinho!`);
                return;
            }

            if (this.numero < valor) {
                this.editaTexto(`O número é menor, seu último palpite foi: ${valor}`);
            } else if (this.numero > valor) {
                this.editaTexto(`O número é maior, seu último palpite foi: ${valor}`);
            } else {
                this.editaTexto(`ACERTOUUU!!!!!`);
            }
        }

        reset() {
            this.numero = this.geraNumeroAleatorio(1, 100);
            this.editaTexto(`Novo número gerado!`);
            this.palpite.value = '';
        }

        editaTexto(texto) {
            this.titulo.innerHTML = texto;
        }

        geraNumeroAleatorio(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
        }
    }

    const jogoAdivinhacao = new JogoAdivinhacao(titulo, palpite);
}
