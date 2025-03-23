function playFizzBuzz() {
    const count = document.getElementById('count').value;
    const isVerbose = document.getElementById('verbose').checked;
    const memoryMode = document.querySelector('input[name="memory-mode"]:checked').value;

    let fizzBuzzFunction;
    if (memoryMode === 'self') {
        fizzBuzzFunction = playFizzBuzzSelfManaged;
    } else if (memoryMode === 'code') {
        fizzBuzzFunction = playFizzBuzzCodeManaged;
    } else if (memoryMode === 'none') {
        fizzBuzzFunction = playFizzBuzzNoMemory;
    }

    const gameResults = fizzBuzzFunction(count, isVerbose);
    displayGameResults(gameResults);
}

function playFizzBuzzNoMemory(count, isVerbose) {
    let rawGameResults = [];
    for (let i = 1; i <= count; i++) {
        const currentResult = _play_fizz_buzz_for(i, isVerbose);
        rawGameResults.push(currentResult);
    }
    
    const gameResults = rawGameResults.map((result, index) => mapRawGameResult(index + 1, result));
    return gameResults.join(',');
}

function playFizzBuzzCodeManaged(count, isVerbose) {
    const gameResultsPointer = _play_fizz_buzz_to_memory_code_managed(count, isVerbose);
    const gameResults = UTF8ToString(gameResultsPointer);

    return gameResults;
}

function playFizzBuzzSelfManaged(count, isVerbose) {
    const gameResultsPointer = _malloc(1024 * Module.HEAPU8.BYTES_PER_ELEMENT);

    _play_fizz_buzz_to_memory_self_managed(count, gameResultsPointer, isVerbose);
    const gameResults = UTF8ToString(gameResultsPointer);
    _free(gameResultsPointer);

    return gameResults;
}

function mapRawGameResult(number, result) {
    switch (result) {
        case 0:
            return number.toString();
        case 1:
            return 'Fizz';
        case 2:
            return 'Buzz';
        case 3:
            return 'Fizz Buzz';
    }
}

function displayGameResults(gameResults) {
    const gameResultsFormatted = gameResults.replace(/,/g, "<br />");
    document.getElementById('results').innerHTML = gameResultsFormatted;
}