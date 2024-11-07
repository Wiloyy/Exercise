import { overwatchQuestions } from "./overwatch.js";
import { enter as enterMenu } from './index.js';

const gamestate = {
    overwatchQuestionCurrentIndex: 0,
    score: 0,
    buttonClicked: false,
    lastButtonClicked: null,
    penultimateButton: null
}

export function enter() {
    const backToMenuButton = document.createElement('button');
    backToMenuButton.innerHTML = 'Voltar ao Menu';
    backToMenuButton.classList.add('botaoVolta');
    document.body.appendChild(backToMenuButton);

    const questionResponsesDiv = document.createElement('div');
    questionResponsesDiv.className = 'questionResponses';
    questionResponsesDiv.style.display = 'none';

    const optionA = document.createElement('button');
    optionA.className = 'options';
    optionA.id = 'optionA';
    optionA.innerHTML = 'A';

    const optionB = document.createElement('button');
    optionB.className = 'options';
    optionB.id = 'optionB';
    optionB.innerHTML = 'B';

    const optionC = document.createElement('button');
    optionC.className = 'options';
    optionC.id = 'optionC';
    optionC.innerHTML = 'C';

    const optionD = document.createElement('button');
    optionD.className = 'options';
    optionD.id = 'optionD';
    optionD.innerHTML = 'D';

    const nextButton = document.createElement('button');
    nextButton.id = 'next';
    nextButton.innerHTML = 'Próximo';

    const backButton = document.createElement('button');
    backButton.id = 'back';
    backButton.innerHTML = 'Volte para uma pergunta anterior';

    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset';
    document.body.appendChild(resetButton);

    const startButton = document.createElement('button');
    startButton.innerHTML = 'Iniciar';
    document.body.appendChild(startButton);

    const title = document.createElement('h1');
    title.id = 'text';
    title.innerHTML = 'OVERWATCH Quiz!!';

    const introText = document.createElement('p');
    introText.id = 'lilText';
    introText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';

    const additionalText = document.createElement('p');
    additionalText.id = 'text1';

    questionResponsesDiv.appendChild(optionA);
    questionResponsesDiv.appendChild(optionB);
    questionResponsesDiv.appendChild(optionC);
    questionResponsesDiv.appendChild(optionD);
    questionResponsesDiv.appendChild(nextButton);
    questionResponsesDiv.appendChild(backButton);

    document.body.appendChild(questionResponsesDiv);
    document.body.appendChild(title);
    document.body.appendChild(introText);
    document.body.appendChild(additionalText);

    nextButton.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';

    const options = [optionA, optionB, optionC, optionD];

    backToMenuButton.addEventListener('click', function () {
        leave();
        enterMenu();
    });

    options.forEach(function (option, index) {
        option.style.color = 'black';
        option.addEventListener('click', function () {
            gamestate.penultimateButton = gamestate.lastButtonClicked;
            gamestate.lastButtonClicked = option;

            if (gamestate.penultimateButton !== null) {
                gamestate.penultimateButton.style.color = 'black';
            }

            option.style.color = 'green';
            overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].choice = index;
            cleanOption();
        });
    });

    startButton.addEventListener('click', function () {
        if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
            showText();
        }
        cleanStart();
    });

    nextButton.addEventListener('click', function () {
        nextButton.innerHTML = 'Próximo';
        introText.innerHTML = '';
        gamestate.overwatchQuestionCurrentIndex++;

        if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
            resetOptionsColor();
            showText();
            cleanNext1();
            console.log(gamestate.overwatchQuestionCurrentIndex);
        } else {
            overwatchQuestions.forEach(function (question) {
                if (question.options[question.choice]?.correct) {
                    gamestate.score++;
                }
            });

            if (gamestate.score === 15) {
                title.innerHTML = `Você acertou ${gamestate.score}, você sabe tudo, parabéns!`;
            } else if (gamestate.score === 0) {
                title.innerHTML = `Você acertou ${gamestate.score}, você não sabe nada sobre Overwatch!`;
            } else if (gamestate.score >= 1 && gamestate.score <= 5) {
                title.innerHTML = `Você acertou ${gamestate.score}, você tem uma noção do jogo, mas ainda tem muito para aprender!`;
            } else if (gamestate.score >= 6 && gamestate.score <= 10) {
                title.innerHTML = `Você acertou ${gamestate.score}, você sabe bastante, porém nem tudo. Mas mesmo assim, parabéns!`;
            } else if (gamestate.score >= 11 && gamestate.score <= 14) {
                title.innerHTML = `Você acertou ${gamestate.score}, você é um verdadeiro conhecedor de Overwatch!`;
            }

            cleanNext2();
            introText.innerHTML = 'Se quiser jogar novamente clique em reset : )';
        }
    });

    backButton.addEventListener('click', function () {
        if (gamestate.overwatchQuestionCurrentIndex > 0) {
            gamestate.overwatchQuestionCurrentIndex--;
        }
        resetOptionsColor();
        showText();
        cleanBack();
    });

    resetButton.addEventListener('click', function () {
        gamestate.overwatchQuestionCurrentIndex = 0;
        gamestate.score = 0;

        cleanReset();

        nextButton.innerHTML = 'Próximo';
        introText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';
        title.innerHTML = 'OVERWATCH Quiz!!';

        questionResponsesDiv.style.display = 'none';
        resetOptionsColor();
    });

    function showText() {
        const arrayOverwatchQuestions = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex];
        title.innerHTML = arrayOverwatchQuestions.question;

        optionA.textContent = `A: ${arrayOverwatchQuestions.options[0].description}`;
        optionB.textContent = `B: ${arrayOverwatchQuestions.options[1].description}`;
        optionC.textContent = `C: ${arrayOverwatchQuestions.options[2].description}`;
        optionD.textContent = `D: ${arrayOverwatchQuestions.options[3].description}`;
    }

    function cleanStart() {
        startButton.style.display = 'none';
        nextButton.style.display = 'none';
        resetButton.style.display = 'none';
        backButton.style.display = 'none';
        introText.innerHTML = '';
        questionResponsesDiv.style.display = 'grid';
        questionResponsesDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
        questionResponsesDiv.style.gap = '10px';
    }

    function resetOptionsColor() {
        options.forEach(function (option) {
            option.style.color = 'black';
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
        questionResponsesDiv.style.display = 'none';
    }

    function cleanBack() {
        backButton.style.display = 'none';
        nextButton.style.display = 'none';
    }

    function cleanReset() {
        startButton.style.display = 'block';
        nextButton.style.display = 'none';
        resetButton.style.display = 'none';
        backButton.style.display = 'none';
        questionResponsesDiv.style.display = 'none';
    }

    function cleanOption() {
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
    }

    function generateRandomQuestion(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]];
        }
    }

    generateRandomQuestion(overwatchQuestions);

    overwatchQuestions.forEach(function (question) {
        generateRandomQuestion(question.options);
    });

}

function leave() {
    document.body.innerHTML = '';
}
