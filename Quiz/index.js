import { overwatchQuestions } from './quizz.js';

let questionResponses = document.querySelectorAll('.questionResponses');
let text = document.getElementById('text');
let lilText = document.getElementById('lilText');
let nextButton = document.getElementById('next');
let resetButton = document.getElementById('reset');
let backButton = document.getElementById('back');
let optionA = document.getElementById('optionA');
optionA.letter = 'A';
let optionB = document.getElementById('optionB');
optionB.letter = 'B';
let optionC = document.getElementById('optionC');
optionC.letter = 'C';
let optionD = document.getElementById('optionD');
optionD.letter = 'D';

let options = [optionA, optionB, optionC, optionD]
let start = document.getElementById('start');
let backToTheSame = document.getElementById('backToTheSame');

let gamestate = {
    overwatchQuestionCurrentIndex: 0,
    score: 0,
    gamePaused: false
};

nextButton.style.display = 'none';
resetButton.style.display = 'none';
backButton.style.display = 'none';

options.forEach(function (option) {
    option.addEventListener('click', function () {
        if (gamestate.gamePaused) {
            return;
        }
        overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].choice = option.letter;
        text.innerHTML = `Sua resposta foi '${option.textContent}'. Você pode seguir para a próxima pergunta ou voltar e alterar sua resposta.`;

        gamestate.gamePaused = true;
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
        backToTheSame.style.display = 'block';
    });
});

start.addEventListener('click', function () {
    if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
        mostraTexto();
        gamestate.gamePaused = false;
    }
    start.style.display = 'none';
    nextButton.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';
    backToTheSame.style.display = 'none';
    lilText.innerHTML = '';
    questionResponses.forEach(function (response) {
        response.style.display = 'block';
        response.style.display = 'grid';
        response.style.gridTemplateColumns = 'repeat(2, 1fr)';
        response.style.gap = '10px';
    });
});

nextButton.addEventListener('click', function () {
    nextButton.innerHTML = 'Próximo';
    lilText.innerHTML = '';
    gamestate.overwatchQuestionCurrentIndex++;

    if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
        mostraTexto();
        gamestate.gamePaused = false;
        nextButton.style.display = 'none';
        backButton.style.display = 'none';
        backToTheSame.style.display = 'none';
        console.log(overwatchQuestions[gamestate.overwatchQuestionCurrentIndex])
        console.log(gamestate.overwatchQuestionCurrentIndex)
    } else {
        overwatchQuestions.forEach(function (question) {
            console.log(question)
            if (question.answer == question.choice) {
                gamestate.score++
            }
        })

        if (gamestate.score === 7) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe tudo, parabéns!`;
        } else if (gamestate.score === 0) {
            text.innerHTML = `Você acertou ${gamestate.score}, você não sabe nada sobre Overwatch!`;
        } else if (gamestate.score >= 1 && gamestate.score <= 3) {
            text.innerHTML = `Você acertou ${gamestate.score}, você tem uma noção do jogo, mas ainda tem muito para aprender!`;
        } else if (gamestate.score >= 4 && gamestate.score <= 6) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe bastante, porém nem tudo. Mas mesmo assim, parabéns!`;
        }

        // Atualização da interface
        nextButton.style.display = 'none';
        backButton.style.display = 'none';
        resetButton.style.display = 'block';
        backToTheSame.style.display = 'none';
        questionResponses.forEach(function (response) {
            response.style.display = 'none';
        });
        lilText.innerHTML = 'Se quiser jogar novamente clique em reset : )';
    }
});


backButton.addEventListener('click', function () {
    if (gamestate.overwatchQuestionCurrentIndex > 0) {
        gamestate.overwatchQuestionCurrentIndex--;
    }
    mostraTexto();
    gamestate.gamePaused = false;
    backButton.style.display = 'none';
    nextButton.style.display = 'none';
    backToTheSame.style.display = 'none';
});

resetButton.addEventListener('click', function () {
    gamestate.overwatchQuestionCurrentIndex = 0;
    gamestate.score = 0;
    gamestate.gamePaused = false;

    start.style.display = 'block';
    nextButton.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';
    backToTheSame.style.display = 'none';

    nextButton.innerHTML = 'Próximo';
    lilText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';
    text.innerHTML = 'OVERWATCH Quiz!!';

    questionResponses.forEach(function (response) {
        response.style.display = 'none';
    });
});

backToTheSame.addEventListener('click', function () {
    mostraTexto();
    gamestate.gamePaused = false;
    backButton.style.display = 'none';
    nextButton.style.display = 'none';
    backToTheSame.style.display = 'none';
});

function mostraTexto() {
    var option = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options;
    text.innerHTML = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].question;
    optionA.textContent = `A: ${option.A}`;
    optionB.textContent = `B: ${option.B}`;
    optionC.textContent = `C: ${option.C}`;
    optionD.textContent = `D: ${option.D}`;
}
