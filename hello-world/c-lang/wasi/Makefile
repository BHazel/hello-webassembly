include ../../../shared/makefiles/wasi-sdk-variables.mk

all:
	$(WASI_SDK_BIN_PATH)/clang $(CLANG_OPTIONS) \
		../src/hello.c -o hello.wasm

run:
	@wasmtime hello.wasm

clean:
	rm -f hello.wasm