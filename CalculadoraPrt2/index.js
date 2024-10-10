let buttons = document.querySelectorAll('.buttons')
let text = document.getElementById('text')
let reset = document.getElementById('reset')
let equals = document.getElementById('equals')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let division = document.getElementById('division')
let multiplication = document.getElementById('multiplication')
let calculadora = {
    firstButton: null,
    value: null,
    click: 1,
    operator: '',
    secondPart: '',
    isAtSecondPart: null,
    firstClickExecuted: false,
    operatorCliked: false
}


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (text.innerHTML === '') {
            if (button === division || button === multiplication) {
                return;
            }
        }

        if (isAtSecondPart == 1) {
            if (button === plus || button === minus || button === division || button === multiplication) {
                return;
            }
            secondPart = secondPart + button.textContent
        } else if (firstClickExecuted == true) {
            if (button === plus || button === minus || button === division || button === multiplication) {
                if (firstPart == '+' || firstPart == '-' || firstPart == 'x' || firstPart == ':') {
                    return;
                }
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
        text.innerHTML += button.textContent;
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