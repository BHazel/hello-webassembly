Module['onRuntimeInitialized'] = function() {
    greetWorld();
};

function greetWorld() {
    const worldGreetingPointer = _greet();
    const worldGreeting = UTF8ToString(worldGreetingPointer);

    document.getElementById('world-greeting').innerHTML = worldGreeting;
}

function greetUser() {
    const name = document.getElementById('name').value;
    const nameBytesLength = lengthBytesUTF8(name) + 1;
    const namePointer = _malloc(nameBytesLength);
    stringToUTF8(name, namePointer, nameBytesLength);

    const greetingBytesLength = lengthBytesUTF8(`Hello, ${name}!`) + 1;
    const userGreetingPointer = _malloc(greetingBytesLength);
    _greet_user(namePointer, userGreetingPointer);
    const userGreeting = UTF8ToString(userGreetingPointer);

    document.getElementById('user-greeting').innerHTML = userGreeting;
    _free(userGreetingPointer);
    _free(namePointer);
}