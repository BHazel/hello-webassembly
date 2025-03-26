all:
	emcc ../src/hello.c ../src/wmemory.c -o hello.js \
		-s EXPORTED_FUNCTIONS="['_greet', '_greet_user']"

clean:
	rm -f hello.js hello.wasm

include ../../../shared/makefiles/python-http-server.mk