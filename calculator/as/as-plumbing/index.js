import { add, subtract, multiply, divide } from './arith.js';

function getNumerInputs() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    return [number1, number2];
}

export function calculate() {
    const [number1, number2] = getNumerInputs();
    const operation = document.getElementById('operation').value;
    const operationSynbol = document.getElementById('operation').selectedOptions[0].text;

    let result;
    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            alert('Invalid operation selected.');
    }

    const outputText = `${number1} ${operationSynbol} ${number2} = ${result}`;

    document.getElementById('result').innerHTML = outputText;
}