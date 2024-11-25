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

    questionResponsesDiv.style.display = 'none';
    nextButton.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';

    backToMenuButton.addEventListener('click', function () {
        const leaveInstance = new Leave();
        leaveInstance.reseta();
        enterMenu();
    });

    startButton.addEventListener('click', function () {
        questionResponsesDiv.style.display = 'grid';
        questionResponsesDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
        startButton.style.display = 'none';
        introText.innerHTML = '';
        overwatchQuizz.showText();
    });

    resetButton.addEventListener('click', function () {
        gamestate.overwatchQuestionCurrentIndex = 0;
        questionResponsesDiv.style.display = 'none';
        startButton.style.display = 'block';
        introText.innerHTML = 'Clique em iniciar para começar o quiz. Espero que você goste! :)';
    });

    class OverwatchQuizz {
        constructor(text, lilText, text1, title) {
            this.text = text;
            this.lilText = lilText;
            this.text1 = text1;
            this.title = title;
            this.geraPerguntaAleatoria(overwatchQuestions);
        }

        option(option, indice) {
            gamestate.penultimateButton = gamestate.lastButtonClicked;
            gamestate.lastButtonClicked = option;

            if (gamestate.penultimateButton !== null) {
                gamestate.penultimateButton.style.color = 'black';
            }

            option.style.color = 'green';
            overwatchQuestions[gamestate.overwatchQuestionCurrentIndex].choice = indice;
            console.log(`Botão clicado: ${option.id}, Índice: ${indice}`);
            console.log(`Botão anterior: ${gamestate.penultimateButton?.id}`);
            this.cleanOption();
        }

        start() {
            if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
                this.showText();
            }
            this.cleanStart();
            this.cleanOption()
        }

        next() {
            nextButton.innerHTML = 'Próximo';
            lilText.innerHTML = '';
            gamestate.overwatchQuestionCurrentIndex++;
            console.log(`Índice atual: ${gamestate.overwatchQuestionCurrentIndex}`);

            if (gamestate.overwatchQuestionCurrentIndex < overwatchQuestions.length) {
                this.resetOptionsColor();
                this.showText();
                this.cleanNext1();
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
                this.showFinalResult();
                this.cleanNext2();
                lilText.innerHTML = 'Se quiser jogar novamente clique em reset : )';
            }
        }

        backButton() {
            if (gamestate.overwatchQuestionCurrentIndex > 0) {
                gamestate.overwatchQuestionCurrentIndex--;
            }
            this.resetOptionsColor();
            this.showText();
            this.cleanBack();
        }

        showText() {
            const arrayOverwatchQuestions = overwatchQuestions[gamestate.overwatchQuestionCurrentIndex];
            this.text.innerHTML = arrayOverwatchQuestions.question;

            optionA.textContent = `A: ${arrayOverwatchQuestions.options[0].description}`;
            optionB.textContent = `B: ${arrayOverwatchQuestions.options[1].description}`;
            optionC.textContent = `C: ${arrayOverwatchQuestions.options[2].description}`;
            optionD.textContent = `D: ${arrayOverwatchQuestions.options[3].description}`;
        }

        resetOptionsColor() {
            document.querySelectorAll('.options').forEach(option => {
                option.style.color = 'black';
            });
        }

        cleanStart() {
            startButton.style.display = 'none';
            nextButton.style.display = 'none';
            resetButton.style.display = 'none';
            backButton.style.display = 'none';
            this.lilText.innerHTML = '';
            document.querySelectorAll('.options').forEach(option => {
                option.style.display = 'block';
                option.style.gridTemplateColumns = 'repeat(2, 1fr)';
                option.style.gap = '10px';
            });
        }

        cleanNext1() {
            nextButton.style.display = 'none';
            backButton.style.display = 'none';
        }

        cleanNext2() {
            nextButton.style.display = 'none';
            backButton.style.display = 'none';
            resetButton.style.display = 'block';
            document.querySelectorAll('.options').forEach(option => {
                option.style.display = 'none';
            });
        }

        cleanBack() {
            backButton.style.display = 'none';
            nextButton.style.display = 'none';
        }

        cleanReset() {
            startButton.style.display = 'block';
            nextButton.style.display = 'none';
            resetButton.style.display = 'none';
            backButton.style.display = 'none';
            document.querySelectorAll('.options').forEach(option => {
                option.style.display = 'none';
            });
        }

        cleanOption() {
            nextButton.style.display = 'block';
            backButton.style.display = 'block';
        }

        geraPerguntaAleatoria(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let random = Math.floor(Math.random() * (i + 1));
                [array[i], array[random]] = [array[random], array[i]];
            }
        }
    }

    const overwatchQuizz = new OverwatchQuizz(text, lilText, text1, title);

    document.querySelectorAll('.options').forEach(function(option, index) {
        option.addEventListener('click', function() {
            overwatchQuizz.option(option, index);
        });
    });

    resetButton.onclick = function () {
        overwatchQuizz.reset()
    }

    nextButton.onclick = function () {
        overwatchQuizz.next()
    }

    backButton.onclick = function () {
        overwatchQuizz.backButton()
    }

}

export class Leave {
    constructor(leave) {
        this.leave = leave
    }

    reseta() {
        document.body.innerHTML = ''
    }
}