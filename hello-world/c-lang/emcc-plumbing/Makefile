all:
	emcc ../src/hello.c -o hello.js \
		-s EXPORTED_FUNCTIONS="['_greet', '_greet_user', '_malloc', '_free']" \
		-s EXPORTED_RUNTIME_METHODS="['lengthBytesUTF8', 'stringToUTF8', 'UTF8ToString']"

clean:
	rm -f hello.js hello.wasm

include ../../../shared/makefiles/python-http-server.mk