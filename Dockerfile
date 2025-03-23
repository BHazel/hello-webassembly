FROM emscripten/emsdk
LABEL maintainer="Benedict Hazel <bwhazel@gmail.com>"

ARG WASI_SDK_VERSION=25
ARG WASI_SDK_ARCH=x86_64
ARG WASI_SDK=wasi-sdk-${WASI_SDK_VERSION}.0-${WASI_SDK_ARCH}-linux

RUN wget -O ${WASI_SDK}.tar.gz https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_SDK_VERSION}/${WASI_SDK}.tar.gz && \
    tar -xvf ${WASI_SDK}.tar.gz && \
    mv ${WASI_SDK} ~/${WASI_SDK} && \
    rm ${WASI_SDK}.tar.gz && \
    curl https://wasmtime.dev/install.sh -sSf | bash

ENV PATH="~/${WASI_SDK}/bin:$PATH"

EXPOSE 8000