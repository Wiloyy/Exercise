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

let options = [optionA, optionB, optionC, optionD];
let start = document.getElementById('start');

let gamestate = {
    overwatchQuestionCurrentIndex: 0,
    score: 0,
    buttonClicked: false,
    lastButtonClicked: null,
    penultimateButton: null
};

nextButton.style.display = 'none';
resetButton.style.display = 'none';
backButton.style.display = 'none';

options.forEach(function (option) {
    option.style.color = 'black';
    option.addEventListener('click', function () {
        gamestate.penultimateButton = gamestate.lastButtonClicked;
        gamestate.lastButtonClicked = option;

        if (gamestate.penultimateButton !== null) {
            gamestate.penultimateButton.style.color = 'black';
        }

        console.log(gamestate.penultimateButton)
        console.log(gamestate.lastButtonClicked)
        
        option.style.color = 'green';
        overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].choice = option.letter;
        cleanOption();
    });
});

start.addEventListener('click', function () {
    if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
        mostraTexto();
    }
    cleanStart();
});

nextButton.addEventListener('click', function () {
    nextButton.innerHTML = 'Próximo';
    lilText.innerHTML = '';
    gamestate.overwatchQuestionCurrentIndex++;

    if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
        resetOptionsColor();
        mostraTexto();
        cleanNext1();
    } else {
        overwatchQuestions.forEach(function (question) {
            if (question.answer == question.choice) {
                gamestate.score++;
            }
        });

        if (gamestate.score === 7) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe tudo, parabéns!`;
        } else if (gamestate.score === 0) {
            text.innerHTML = `Você acertou ${gamestate.score}, você não sabe nada sobre Overwatch!`;
        } else if (gamestate.score >= 1 && gamestate.score <= 3) {
            text.innerHTML = `Você acertou ${gamestate.score}, você tem uma noção do jogo, mas ainda tem muito para aprender!`;
        } else if (gamestate.score >= 4 && gamestate.score <= 6) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe bastante, porém nem tudo. Mas mesmo assim, parabéns!`;
        }

        cleanNext2();
        lilText.innerHTML = 'Se quiser jogar novamente clique em reset : )';
    }
});

backButton.addEventListener('click', function () {
    if (gamestate.overwatchQuestionCurrentIndex > 0) {
        gamestate.overwatchQuestionCurrentIndex--;
    }
    resetOptionsColor();
    mostraTexto();
    cleanBack();
});

resetButton.addEventListener('click', function () {
    gamestate.overwatchQuestionCurrentIndex = 0;
    gamestate.score = 0;

    cleanReset();

    nextButton.innerHTML = 'Próximo';
    lilText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';
    text.innerHTML = 'OVERWATCH Quiz!!';

    questionResponses.forEach(function (response) {
        response.style.display = 'none';
    });

    resetOptionsColor();
});

function mostraTexto() {
    var option = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].options;
    text.innerHTML = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].question;
    optionA.textContent = `A: ${option.A}`;
    optionB.textContent = `B: ${option.B}`;
    optionC.textContent = `C: ${option.C}`;
    optionD.textContent = `D: ${option.D}`;
}

function resetOptionsColor() {
    options.forEach(function (option) {
        option.style.color = 'black';
    });
}

function cleanStart() {
    start.style.display = 'none';
    nextButton.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';
    lilText.innerHTML = '';
    questionResponses.forEach(function (response) {
        response.style.display = 'block';
        response.style.display = 'grid';
        response.style.gridTemplateColumns = 'repeat(2, 1fr)';
        response.style.gap = '10px';
    });
}

function cleanNext1() {
    nextButton.style.display = 'none';
    backButton.style.display = 'none';
}

function cleanNext2() {
    nextButton.style.display = 'none';
    backButton.style.display = 'none';
    resetButton.style.display = 'block';
    questionResponses.forEach(function (response) {
        response.style.display = 'none';
    });
}

function cleanBack() {
    backButton.style.display = 'none';
    nextButton.style.display = 'none';
}

function cleanReset() {
    start.style.display = 'block';
    nextButton.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';
    questionResponses.forEach(function (response) {
        response.style.display = 'none';
    });
}

function cleanOption() {
    nextButton.style.display = 'block';
    backButton.style.display = 'block';
}
