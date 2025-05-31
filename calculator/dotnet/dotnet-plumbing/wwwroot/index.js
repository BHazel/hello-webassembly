import { dotnet } from './_framework/dotnet.js';

const { getAssemblyExports, getConfig, runMain } = await dotnet
    .withApplicationArguments("start")
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

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
                result = exports.BWHazel.HelloWebAssembly.Calculator.Calculator.Add(number1, number2);
                break;
            case 'subtract':
                result = exports.BWHazel.HelloWebAssembly.Calculator.Calculator.Subtract(number1, number2);
                break;
            case 'multiply':
                result = exports.BWHazel.HelloWebAssembly.Calculator.Calculator.Multiply(number1, number2);
                break;
            case 'divide':
                result = exports.BWHazel.HelloWebAssembly.Calculator.Calculator.Divide(number1, number2);
                break;
            default:
                alert('Invalid operation selected.');
        }

        const outputText = `${number1} ${operationSynbol} ${number2} = ${result}`;

        document.getElementById('result').innerHTML = outputText;
}

await runMain();