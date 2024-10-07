let buttons = document.querySelectorAll('.buttons')
let text = document.getElementById('text')
let reset = document.getElementById('reset')
let equals = document.getElementById('equals')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let division = document.getElementById('division')
let multiplication = document.getElementById('multiplication')
let firstButton = null;
let value = null;
let click = 1;
let firstPart = ''
let operator = ''
let secondPart = ''
let isAtSecondPart = null

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        text.innerHTML += button.textContent;

        if (isAtSecondPart == 1) {
            secondPart = secondPart + button.textContent
        } else if (button === plus || button === minus || button === division || button === multiplication) {
            operator = button;
            isAtSecondPart = 1;
        } else {
            firstPart = firstPart + button.textContent
        }

    });
});

reset.addEventListener('click', function () {
    text.innerHTML = ''
    firstPart = ''
    secondPart = ''
    operator = ''
    isAtSecondPart = 0
});

equals.addEventListener('click', function () {
    let result;

    if (operator == plus) {
        result = Number(firstPart) + Number(secondPart)
        text.innerHTML = result;
    } else if (operator == minus) {
        result = Number(firstPart) - Number(secondPart)
        text.innerHTML = result;
    } else if (operator == multiplication) {
        result = Number(firstPart) * Number(secondPart)
        text.innerHTML = result;
    } else if (operator == division) {
        result = Number(firstPart) / Number(secondPart)
        text.innerHTML = result;
    }

    firstPart = result;
    secondPart = '';
    operator = '';
    isAtSecondPart = 0;
});