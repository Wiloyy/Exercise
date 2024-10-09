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
let firstClickExecuted = false
let operatorCliked = false

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (text.innerHTML === '') {
            if (button === division || button === multiplication) {
                return;
            }
        }

        text.innerHTML += button.textContent;
        if (isAtSecondPart == 1) {
            secondPart = secondPart + button.textContent
        } else if (firstClickExecuted == true) {
            if (button === plus || button === minus || button === division || button === multiplication) {
                operator = button;
                isAtSecondPart = 1;
                firstClickExecuted = false
            } else {
                firstPart = firstPart + button.textContent
            }
        } else {
            firstPart = firstPart + button.textContent
            firstClickExecuted = true
        }
        console.log(`######`)
        console.log('primeira', firstPart)
        console.log('operador', operator)
        console.log('segunda', secondPart)
        console.log('isAtSecondPart', isAtSecondPart)
        console.log('firstClickExecuted', firstClickExecuted)

    });
});

reset.addEventListener('click', function () {
    text.innerHTML = ''
    firstPart = ''
    secondPart = ''
    operator = ''
    isAtSecondPart = 0
    firstClickExecuted = false
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
    firstClickExecuted = true
    /*
    console.log(`######`)
    console.log('primeira', firstPart)
    console.log('operador', operator)
    console.log('segunda', secondPart)
    console.log('isAtSecondPart', isAtSecondPart)
    console.log('firstClickExecuted', firstClickExecuted)
    */
});