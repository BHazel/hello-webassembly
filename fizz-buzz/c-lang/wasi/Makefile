include ../../../shared/makefiles/wasi-sdk-variables.mk

all:
	$(WASI_SDK_BIN_PATH)/clang $(CLANG_OPTIONS) \
		../src/result-logger.c ../src/fizz-buzz.c -o fizz-buzz.wasm

run:
	@wasmtime fizz-buzz.wasm $(ARGS)

clean:
	rm -f fizz-buzz.wasm