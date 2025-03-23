let wasmExports;
let memory = new WebAssembly.Memory({
    initial: 256,
    maximum: 512
});

WebAssembly.instantiateStreaming(
    fetch('hello.wasm'),
    {
        env: {
            memory: memory,
            emscripten_resize_heap: delta => {
                memory.grow(delta);
            },
            _abort_js: () => {
                console.error('Abort called');
            },
            greet_user_console: console.log
        },
        wasi_snapshot_preview1: {
            fd_close: () => console.error('fd_close'),
            fd_write: () => console.error('fd_write'),
            fd_seek: () => console.error('fd_seek'),
        }
    }
).then(wasmInstance => {
    memory = wasmInstance.instance.exports.memory;
    wasmExports = wasmInstance.instance.exports;

    greetWorld();
}).catch(error => {
    console.error(error);
});

function greetWorld() {
    const worldGreetingPointer = wasmExports.greet();
    const worldGreeting = utf8ToString(worldGreetingPointer);

    document.getElementById('world-greeting').innerHTML = worldGreeting;
}

function greetUser() {
    const name = document.getElementById('name').value;
    const nameBytesLength = name.length;
    const namePointer = wasmExports.walloc(nameBytesLength);
    const nameBuffer = new Uint8Array(memory.buffer, namePointer, nameBytesLength);
    nameBuffer.set(stringToUTF8(name, namePointer));

    const greetingBytesLength = `Hello, ${name}!`.length;
    const userGreetingPointer = wasmExports.walloc(greetingBytesLength);
    wasmExports.greet_user(namePointer, userGreetingPointer);
    const userGreeting = utf8ToString(userGreetingPointer);

    document.getElementById('user-greeting').innerHTML = userGreeting;
    wasmExports.wfree(userGreetingPointer);
    wasmExports.wfree(namePointer);
}

function stringToUTF8(string) {
    const textEncoder = new TextEncoder('utf-8');
    return textEncoder.encode(string);
}

function utf8ToString(stringPointer) {
    let stringBuffer = new Uint8Array(memory.buffer, stringPointer);
    let stringLength = 0;
    while (stringBuffer[stringLength] !== 0) {
        stringLength++;
    }

    const textDecoder = new TextDecoder('utf-8');
    return textDecoder.decode(stringBuffer.slice(0, stringLength));
}