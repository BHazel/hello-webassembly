let wasmExports;

WebAssembly.instantiateStreaming(
    fetch('arith.wasm'),
    {}
).then(wasmInstance => {
    wasmExports = wasmInstance.instance.exports;
}).catch(error => {
    console.error(error);
});

function getNumberInputs() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    return [number1, number2];
}

function calculate() {
    const [number1, number2] = getNumberInputs();
    const operation = document.getElementById('operation').value;
    const operationSynbol = document.getElementById('operation').selectedOptions[0].text;

    let result;
    switch (operation) {
        case 'add':
            result = wasmExports.add(number1, number2);
            break;
        case 'subtract':
            result = wasmExports.subtract(number1, number2);
            break;
        case 'multiply':
            result = wasmExports.multiply(number1, number2);
            break;
        case 'divide':
            result = wasmExports.divide(number1, number2);
            break;
        default:
            alert('Invalid operation selected.');
    }

    const outputText = `${number1} ${operationSynbol} ${number2} = ${result}`;
    document.getElementById('result').innerHTML = outputText;
}