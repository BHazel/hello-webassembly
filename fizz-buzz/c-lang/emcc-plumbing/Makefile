all:
	emcc ../src/result-logger.c ../src/fizz-buzz.c -o fizz-buzz.js \
		-s EXPORTED_FUNCTIONS="['_play_fizz_buzz_to_memory_code_managed', '_play_fizz_buzz_to_memory_self_managed', '_play_fizz_buzz_for', '_malloc', '_free']" \
		-s EXPORTED_RUNTIME_METHODS="['UTF8ToString']"

clean:
	rm -f fizz-buzz.js fizz-buzz.wasm

include ../../../shared/makefiles/python-http-server.mk