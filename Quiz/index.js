import { overwatchQuestions } from './quizz.js';

let questionResponses = document.querySelectorAll('.questionResponses');
let text = document.getElementById('text');
let lilText = document.getElementById('lilText');
let nextButton = document.getElementById('next');
let resetButton = document.getElementById('reset');
let backButton = document.getElementById('back');
let optionA = document.getElementById('optionA');
let optionB = document.getElementById('optionB');
let optionC = document.getElementById('optionC');
let optionD = document.getElementById('optionD');

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

options.forEach(function (option, indice) {
    option.style.color = 'black';
    option.addEventListener('click', function () {
        gamestate.penultimateButton = gamestate.lastButtonClicked;
        gamestate.lastButtonClicked = option;

        if (gamestate.penultimateButton !== null) {
            gamestate.penultimateButton.style.color = 'black';
        }

        overwatchQuestions.forEach(function (question) {
            console.log(question.answer)
        })
        console.log(gamestate.penultimateButton)
        console.log(gamestate.lastButtonClicked)

        option.style.color = 'green';
        overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].choice = indice
        console.log(indice)
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
        console.log(gamestate.overwatchQuestionCurrentIndex)
    } else {
        overwatchQuestions.forEach(function (question) {
            if (question.options[question.choice].correct == true) {
                gamestate.score++
            }
        });

        if (gamestate.score === 15) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe tudo, parabéns!`;
        } else if (gamestate.score === 0) {
            text.innerHTML = `Você acertou ${gamestate.score}, você não sabe nada sobre Overwatch!`;
        } else if (gamestate.score >= 1 && gamestate.score <= 5) {
            text.innerHTML = `Você acertou ${gamestate.score}, você tem uma noção do jogo, mas ainda tem muito para aprender!`;
        } else if (gamestate.score >= 6 && gamestate.score <= 10) {
            text.innerHTML = `Você acertou ${gamestate.score}, você sabe bastante, porém nem tudo. Mas mesmo assim, parabéns!`;
        } else if (gamestate.score >= 11 && gamestate.score <= 14) {
            text.innerHTML = `Você acertou ${gamestate.score}, você é um verdadeiro conhecedor de Overwatch!`;
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
    const arrayOverwatchQuestions = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex];
    text.innerHTML = arrayOverwatchQuestions.question;

    optionA.textContent = `A: ${arrayOverwatchQuestions.options[0].description}`;
    optionB.textContent = `B: ${arrayOverwatchQuestions.options[1].description}`;
    optionC.textContent = `C: ${arrayOverwatchQuestions.options[2].description}`;
    optionD.textContent = `D: ${arrayOverwatchQuestions.options[3].description}`;
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

function geraPerguntaAleatoria(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]
    }
}

geraPerguntaAleatoria(overwatchQuestions)

overwatchQuestions.forEach(function (question) {
    geraPerguntaAleatoria(question.options);
});