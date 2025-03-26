all:
	emcc ../src/person.cpp -o person.js \
		-lembind \
		-std=c++23

clean:
	rm -f person.js person.wasm

include ../../../shared/makefiles/python-http-server.mk