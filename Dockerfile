FROM emscripten/emsdk
LABEL maintainer="Benedict Hazel <bwhazel@gmail.com>"

ARG WASI_SDK_RELEASE=wasi-sdk-25
ARG WASI_SDK_VERSION=25.0
ARG WASI_SDK_ARCH=x86_64
ARG WASI_SDK=wasi-sdk-${WASI_SDK_VERSION}-${WASI_SDK_ARCH}-linux
ARG WABT_VERSION=1.0.37
ARG WABT_ARCHIVE=wabt-${WABT_VERSION}-ubuntu-20.04
ARG WABT=wabt-${WABT_VERSION}

RUN wget -O ${WASI_SDK}.tar.gz https://github.com/WebAssembly/wasi-sdk/releases/download/${WASI_SDK_RELEASE}/${WASI_SDK}.tar.gz && \
    tar -xvf ${WASI_SDK}.tar.gz && \
    mv ${WASI_SDK} ~/${WASI_SDK} && \
    rm ${WASI_SDK}.tar.gz && \
    curl https://wasmtime.dev/install.sh -sSf | bash && \
    wget -O ${WABT_ARCHIVE}.tar.gz https://github.com/WebAssembly/wabt/releases/download/${WABT_VERSION}/${WABT_ARCHIVE}.tar.gz && \
    tar -xvf ${WABT_ARCHIVE}.tar.gz && \
    mv ${WABT} ~/${WABT} && \
    rm ${WABT_ARCHIVE}.tar.gz

ENV PATH="~/${WASI_SDK}/bin:~/${WABT}/bin:$PATH"

EXPOSE 8000