include ../../../shared/makefiles/wasi-sdk-variables.mk

all:
	$(WASI_SDK_BIN_PATH)/clang++ $(CLANGXX_OPTIONS) \
		../src/fizz-buzz.cpp ../src/main.cpp -o fizz-buzz.wasm

run:
	@wasmtime fizz-buzz.wasm $(ARGS)

clean:
	rm -f fizz-buzz.wasm