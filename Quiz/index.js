let options = document.querySelectorAll('.options');
let text = document.getElementById('text');
let lilText = document.getElementById('lilText');
let next = document.getElementById('next');
let texto1 = document.getElementById('texto1');
let reset = document.getElementById('reset');
let volta = document.getElementById('volta');
let overwatchQuestionCurrentIndex = 0;
let pontuacao = 0;
let gamePaused = false;

const overwatchQuestions = [
    {
        question: "Qual é o papel da Tracer no jogo?",
        options: {
            A: "Dano",
            B: "Suporte",
            C: "Tanque",
            D: "Defesa"
        },
        answer: "A"
    },
    {
        question: "Quantos heróis estão disponíveis no jogo?",
        options: {
            A: "Mais de 20",
            B: "Mais de 30",
            C: "Mais de 40",
            D: "Menos de 20"
        },
        answer: "B"
    },
    {
        question: "Qual é a função principal de um tanque?",
        options: {
            A: "Causar dano",
            B: "Proteger aliados",
            C: "Curar aliados",
            D: "Capturar objetivos"
        },
        answer: "B"
    },
    {
        question: "Qual é o objetivo principal em Overwatch?",
        options: {
            A: "Capturar pontos",
            B: "Destruir o inimigo",
            C: "Coletar recursos",
            D: "Sobreviver"
        },
        answer: "A"
    },
    {
        question: "Quem é o personagem conhecido como 'Reaper'?",
        options: {
            A: "Um suporte",
            B: "Um dano",
            C: "Um tanque",
            D: "Um defensor"
        },
        answer: "B"
    },
    {
        question: "Qual é a habilidade especial da D.Va?",
        options: {
            A: "Translocador",
            B: "Ressuscitar",
            C: "Cura em área",
            D: "Self-Destruct"
        },
        answer: "D"
    },
    {
        question: "Quem é o personagem que usa a habilidade 'Graviton Surge'?",
        options: {
            A: "Winston",
            B: "Genji",
            C: "Zarya",
            D: "Pharah"
        },
        answer: "C"
    }
];
next.innerHTML = 'Iniciar';


options.forEach(function (option) {
    option.addEventListener('click', function () {
        if (gamePaused === true) {
            return;
        }
        if (option.textContent === overwatchQuestions[index - 1].answer) {
            text.innerHTML = 'Resposta confirmada, vá para a próxima pergunta';
            pontuacao++;
        } else {
            text.innerHTML = 'Resposta confirmada, vá para a próxima pergunta';
        }
        gamePaused = true;
    });
});

next.addEventListener('click', function () {
    next.innerHTML = 'Próximo';
    lilText.innerHTML = '';
    if (index < overwatchQuestions.length) {
        text.innerHTML = overwatchQuestions[overwatchQuestionCurrentIndex].question +
        ' A: ' + overwatchQuestions[overwatchQuestionCurrentIndex].options.A +
        ' B: ' + overwatchQuestions[overwatchQuestionCurrentIndex].options.B +
        ' C: ' + overwatchQuestions[overwatchQuestionCurrentIndex].options.C +
        ' D: ' + overwatchQuestions[overwatchQuestionCurrentIndex].options.D;
        overwatchQuestionCurrentIndex++;
        gamePaused = false;
    } else {
        if (pontuacao === 1) {
            text.innerHTML = `Você acertou ${pontuacao}, tá na hora de jogar mais Overwatch!`;
        } else if (pontuacao > 1 && pontuacao <= 3) {
            text.innerHTML = `Você acertou ${pontuacao}, você conhece bem o jogo, mas dá para melhorar!`;
        } else if (pontuacao >= 4 && pontuacao <= 5) {
            text.innerHTML = `Você acertou ${pontuacao}, você sabe bastante, porém nem tudo. Mas mesmo assim, parabéns!`;
        } else if (pontuacao === 0) {
            text.innerHTML = `Você acertou ${pontuacao}, você não sabe nada sobre Overwatch!`;
        } else if (pontuacao === 7) {
            text.innerHTML = `Você acertou ${pontuacao}, você sabe tudo, parabéns!`;
        }
    }
});

volta.addEventListener('click', function () {
    if (index > 0) {
        index--;
    }
    text.innerHTML = overwatchQuestions[index].question +
        ' A: ' + overwatchQuestions[index].options.A +
        ' B: ' + overwatchQuestions[index].options.B +
        ' C: ' + overwatchQuestions[index].options.C +
        ' D: ' + overwatchQuestions[index].options.D;
});

reset.addEventListener('click', function () {
    index = 0;
    pontuacao = 0;
    gamePaused = false;

    next.innerHTML = 'Iniciar';
    lilText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';
    text.innerHTML ='OVERWATCH Quiz!!'
});