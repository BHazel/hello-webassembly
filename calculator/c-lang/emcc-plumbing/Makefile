all:
	emcc ../src/arith.c -o arith.js \
		-s EXPORTED_FUNCTIONS="['_add', '_subtract', '_multiply', '_divide']" \
		-s EXPORTED_RUNTIME_METHODS="['cwrap']" \
		-O1

clean:
	rm -f arith.js arith.wasm

include ../../../shared/makefiles/python-http-server.mk