import { enter as enterMenu } from './index.js';

export function enterTicTacToe() {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board');
    document.body.appendChild(boardContainer);

    const backToMenuButton = document.createElement('button');
    backToMenuButton.innerHTML = 'Back to Menu';
    backToMenuButton.classList.add('backButton');
    document.body.appendChild(backToMenuButton);

    backToMenuButton.addEventListener('click', function () {
        leave();
        enterMenu();
    });

    const button0 = document.createElement('button');
    button0.id = 'button-0';
    button0.className = 'button';
    button0.innerHTML = '';
    boardContainer.appendChild(button0);

    const button1 = document.createElement('button');
    button1.id = 'button-1';
    button1.className = 'button';
    button1.innerHTML = '';
    boardContainer.appendChild(button1);

    const button2 = document.createElement('button');
    button2.id = 'button-2';
    button2.className = 'button';
    button2.innerHTML = '';
    boardContainer.appendChild(button2);

    const button3 = document.createElement('button');
    button3.id = 'button-3';
    button3.className = 'button';
    button3.innerHTML = '';
    boardContainer.appendChild(button3);

    const button4 = document.createElement('button');
    button4.id = 'button-4';
    button4.className = 'button';
    button4.innerHTML = '';
    boardContainer.appendChild(button4);

    const button5 = document.createElement('button');
    button5.id = 'button-5';
    button5.className = 'button';
    button5.innerHTML = '';
    boardContainer.appendChild(button5);

    const button6 = document.createElement('button');
    button6.id = 'button-6';
    button6.className = 'button';
    button6.innerHTML = '';
    boardContainer.appendChild(button6);

    const button7 = document.createElement('button');
    button7.id = 'button-7';
    button7.className = 'button';
    button7.innerHTML = '';
    boardContainer.appendChild(button7);

    const button8 = document.createElement('button');
    button8.id = 'button-8';
    button8.className = 'button';
    button8.innerHTML = '';
    boardContainer.appendChild(button8);

    const resetButton = document.createElement('button');
    resetButton.id = 'reset';
    resetButton.innerHTML = 'Reset';
    boardContainer.appendChild(resetButton);

    let currentPlayer = 'X';
    let player1 = null;
    const victoryMessage = document.createElement('div');
    boardContainer.appendChild(victoryMessage);

    let buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.textContent === '') {
                player1 = currentPlayer;
                if (currentPlayer === 'X') {
                    button.textContent = 'X';
                    currentPlayer = 'O';
                } else {
                    button.textContent = 'O';
                    currentPlayer = 'X';
                }
                if (checkVictory(player1)) {
                    victoryMessage.textContent = `Jogador "${player1}" ganhou!`;
                }
                if (allButtonsSelected(buttons)) {
                    victoryMessage.textContent = `Deu velha`;
                }
                console.log(allButtonsSelected());
            }
        });
    });

    resetButton.addEventListener('click', function () {
        button0.innerHTML = '';
        button1.innerHTML = '';
        button2.innerHTML = '';
        button3.innerHTML = '';
        button4.innerHTML = '';
        button5.innerHTML = '';
        button6.innerHTML = '';
        button7.innerHTML = '';
        button8.innerHTML = '';
        currentPlayer = 'X';
        victoryMessage.innerHTML = '';
        console.log('reset');
    });

    function allButtonsSelected() {
        return button0.innerHTML !== "" &&
               button1.innerHTML !== "" &&
               button2.innerHTML !== "" &&
               button3.innerHTML !== "" &&
               button4.innerHTML !== "" &&
               button5.innerHTML !== "" &&
               button6.innerHTML !== "" &&
               button7.innerHTML !== "" &&
               button8.innerHTML !== "";
    }

    function checkVictory(winner) {
        return (button0.innerHTML === winner && button1.innerHTML === winner && button2.innerHTML === winner) ||
               (button3.innerHTML === winner && button4.innerHTML === winner && button5.innerHTML === winner) ||
               (button6.innerHTML === winner && button7.innerHTML === winner && button8.innerHTML === winner) ||
               (button0.innerHTML === winner && button3.innerHTML === winner && button6.innerHTML === winner) ||
               (button1.innerHTML === winner && button4.innerHTML === winner && button7.innerHTML === winner) ||
               (button2.innerHTML === winner && button5.innerHTML === winner && button8.innerHTML === winner) ||
               (button0.innerHTML === winner && button4.innerHTML === winner && button8.innerHTML === winner) ||
               (button2.innerHTML === winner && button4.innerHTML === winner && button6.innerHTML === winner);
    }
}

function leave() {
    
    document.body.innerHTML = '';
}
