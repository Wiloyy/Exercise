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

const titulo = document.getElementById('titulo');
const palpite = document.getElementById('palpite');

var jogoAdivinhacao = new JogoAdivinhacao(titulo, palpite);

