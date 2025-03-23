all:
	emcc ../src/result-logger.c ../src/fizz-buzz.c -o fizz-buzz.html

clean:
	rm -f fizz-buzz.html fizz-buzz.js fizz-buzz.wasm

include ../../shared/makefiles/python-http-server.mk