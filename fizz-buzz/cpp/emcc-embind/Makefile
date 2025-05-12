all:
	emcc ../src/fizz-buzz.cpp -o fizz-buzz.js \
		-lembind \
		-std=c++23 \

clean:
	rm -f fizz-buzz.js fizz-buzz.wasm

include ../../../shared/makefiles/python-http-server.mk