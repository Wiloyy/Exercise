let buttons = document.querySelectorAll('.buttons');
let text = document.getElementById('text');
let reset = document.getElementById('reset');
let equals = document.getElementById('equals');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let division = document.getElementById('division');
let multiplication = document.getElementById('multiplication');

let calculadora = {
    firstPart: '',
    secondPart: '',
    operator: '',
    isAtSecondPart: false,
    firstClickExecuted: false
};

function clickNumBotao(calculadora, button) {
    if (text.innerHTML === '') {
        if (button === division || button === multiplication) {
            return;
        }
    }

    if (calculadora.isAtSecondPart == 1) {
        if(button === plus || button === minus || button === division || button === multiplication){
            return;
        }
        calculadora.secondPart = calculadora.secondPart + button.textContent
    } else if (calculadora.firstClickExecuted == true) {
        if (button === plus || button === minus || button === division || button === multiplication) {
            if(calculadora.firstPart == '+' || calculadora.firstPart == '-' ||  calculadora.firstPart == 'x' || calculadora.firstPart == ':' ){
                return;
            }
            calculadora.operator = button;
            calculadora.isAtSecondPart = 1;
            calculadora.firstClickExecuted = false
        } else {
            calculadora.firstPart = calculadora.firstPart + button.textContent
        }
    } else {
        calculadora.firstPart = calculadora.firstPart + button.textContent
        calculadora.firstClickExecuted = true
    }
    text.innerHTML += button.textContent;
    console.log(`######`)
    console.log('primeira', calculadora.firstPart)
    console.log('operador',calculadora.operator)
    console.log('segunda', calculadora.secondPart)
    console.log('isAtSecondPart', calculadora.isAtSecondPart)
    console.log('firstClickExecuted', calculadora.firstClickExecuted)

}

function clickNoIgual(calculadora) {
    let result;
    
    if (calculadora.operator === plus) {
        result = Number(calculadora.firstPart) + Number(calculadora.secondPart);
    } else if (calculadora.operator === minus) {
        result = Number(calculadora.firstPart) - Number(calculadora.secondPart);
    } else if (calculadora.operator === multiplication) {
        result = Number(calculadora.firstPart) * Number(calculadora.secondPart);
    } else if (calculadora.operator === division) {
        result = Number(calculadora.firstPart) / Number(calculadora.secondPart);
    } else {
        return; 
    }

    text.innerHTML = result; 
    calculadora.firstPart = result
    calculadora.secondPart = ''; 
    calculadora.operator = ''; 
    calculadora.isAtSecondPart = false; 
    calculadora.firstClickExecuted = true; 
}

function clickNoClear(calculadora) {
    text.innerHTML = '';
    calculadora.firstPart = '';
    calculadora.secondPart = '';
    calculadora.operator = '';
    calculadora.isAtSecondPart = false;
    calculadora.firstClickExecuted = false;
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        clickNumBotao(calculadora, button);
    });
});

reset.addEventListener('click', function () {
    clickNoClear(calculadora);
});

equals.addEventListener('click', function () {
    clickNoIgual(calculadora);
});
