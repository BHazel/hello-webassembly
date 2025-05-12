function playFizzBuzz() {
    const count = parseInt(document.getElementById('count').value);
    const isVerbose = document.getElementById('verbose').checked;
    const wasmFunc = document.querySelector('input[name="wasm-func"]:checked').value;

    let fizzBuzzFunction;
    if (wasmFunc === 'number') {
        fizzBuzzFunction = playFizzBuzzPerNumber;
    } else if (wasmFunc === 'count') {
        fizzBuzzFunction = playFizrrzBuzzForCount;
    }

    const gameResults = fizzBuzzFunction(count, isVerbose);
    displayGameResults(gameResults);
}

function playFizzBuzzPerNumber(count, isVerbose) {
    let gameResults = [];
    let fizzBuzz = new Module.fizz_buzz();
    for (let i = 1; i <= count; i++) {
        const currentResult = fizzBuzz.what_is(i, isVerbose);
        gameResults.push(currentResult);
    }

    fizzBuzz.delete();
    return gameResults;
}

function playFizrrzBuzzForCount(count, isVerbose) {
    let fizzBuzz = new Module.fizz_buzz();
    let gameResultsVector = fizzBuzz.play(count, isVerbose);

    let gameResults = [];
    for (let i = 0; i < gameResultsVector.size(); i++) {
        gameResults.push(gameResultsVector.get(i));
    }
    
    gameResultsVector.delete();
    fizzBuzz.delete();
    return gameResults;
}

function displayGameResults(gameResults) {
    const gameResultsFormatted = gameResults.join('<br />');
    document.getElementById('results').innerHTML = gameResultsFormatted;
}