import { overwatchQuestions } from './quizz.js';

let options = document.querySelectorAll('.options');
let questionResponses = document.querySelectorAll('.questionResponses');
let text = document.getElementById('text');
let lilText = document.getElementById('lilText');
let nextButton = document.getElementById('next');
let resetButton = document.getElementById('reset');
let backButton = document.getElementById('back');
let start = document.getElementById('start');

let gamestate = {
    overwatchQuestionCurrentIndex: 0,
    score: 0,
    gamePaused: false
};

nextButton.style.display = 'none'
resetButton.style.display = 'none'
backButton.style.display = 'none'

options.forEach(function (option) {
    option.addEventListener('click', function () {
        if (gamestate.gamePaused) {
            return;
        }
        if (option.textContent === overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].answer) {
            text.innerHTML = 'Resposta confirmada, vá para a próxima pergunta';
            gamestate.score++;
        } else {
            text.innerHTML = 'Resposta confirmada, vá para a próxima pergunta';
        }
        gamestate.gamePaused = true;
        nextButton.style.display = 'block';
        backButton.style.display = 'block'
    });
});


start.addEventListener('click', function () {
    if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
        text.innerHTML = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].question +
            ' A: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.A +
            ' B: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.B +
            ' C: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.C +
            ' D: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.D;
        gamestate.gamePaused = false;
    }
    start.style.display = 'none';
    nextButton.style.display = 'none'
    resetButton.style.display = 'none'
    backButton.style.display = 'none'
    lilText.innerHTML = '';
    questionResponses.forEach(function (response) {
        response.style.display = 'block';
        response.style.display = 'grid';
        response.style.gridTemplateColumns = 'repeat(2, 1fr)';
        response.style.gap = '10px'
    })
});


nextButton.addEventListener('click', function () {
    nextButton.innerHTML = 'Próximo';
    lilText.innerHTML = '';
    gamestate.overwatchQuestionCurrentIndex++;
    if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
        text.innerHTML = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].question +
            ' A: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.A +
            ' B: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.B +
            ' C: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.C +
            ' D: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.D;
        gamestate.gamePaused = false;
        nextButton.style.display = 'none';
        backButton.style.display = 'none';
    } else {
        if (gamestate.score === 1) {
            text.innerHTML = `Você acertou ${gamestate.score}, tá na hora de jogar mais Overwatch!`;
        } else if (gamestate.score > 1 && gamestate.score <= 3) {
            text.innerHTML = `Você acertou ${gamestate.score}, você conhece bem o jogo, mas dá para melhorar!`;
        } else if (gamestate.score >= 4 && gamestate.score <= 5) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe bastante, porém nem tudo. Mas mesmo assim, parabéns!`;
        } else if (gamestate.score === 0) {
            text.innerHTML = `Você acertou ${gamestate.score}, você não sabe nada sobre Overwatch!`;
        } else if (gamestate.score === 7) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe tudo, parabéns!`;
        }
        nextButton.style.display = 'none'
        lilText.innerHTML = 'Se quiser jogar novamente clique em reset : )'
    }
});

backButton.addEventListener('click', function () {
    if (gamestate.overwatchQuestionCurrentIndex > 0) {
        gamestate.overwatchQuestionCurrentIndex--;
    }
    text.innerHTML = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].question +
        ' A: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.A +
        ' B: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.B +
        ' C: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.C +
        ' D: ' + overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options.D;
});

resetButton.addEventListener('click', function () {
    gamestate.overwatchQuestionCurrentIndex = 0;
    gamestate.score = 0;
    gamestate.gamePaused = false;

    start.style.display = 'block';
    nextButton.style.display = 'none'
    resetButton.style.display = 'none'
    backButton.style.display = 'none'

    nextButton.innerHTML = 'proximo';
    lilText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';
    text.innerHTML = 'OVERWATCH Quiz!!';

    questionResponses.forEach(function (response) {
        response.style.display = 'none';
    })

});
