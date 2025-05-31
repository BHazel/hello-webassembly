FROM emscripten/emsdk
LABEL maintainer="Benedict Hazel <bwhazel@gmail.com>"

ARG WASI_SDK_RELEASE=wasi-sdk-25
ARG WASI_SDK_VERSION=25.0
ARG WASI_SDK_ARCH=x86_64
ARG WASI_SDK=wasi-sdk-${WASI_SDK_VERSION}-${WASI_SDK_ARCH}-linux
ARG WABT_VERSION=1.0.37
ARG WABT_ARCHIVE=wabt-${WABT_VERSION}-ubuntu-20.04
ARG WABT=wabt-${WABT_VERSION}

ENV HOME=/root

RUN wget -O ${WASI_SDK}.tar.gz https://github.com/WebAssembly/wasi-sdk/releases/download/${WASI_SDK_RELEASE}/${WASI_SDK}.tar.gz && \
    tar -xvf ${WASI_SDK}.tar.gz && \
    mv ${WASI_SDK} $HOME/${WASI_SDK} && \
    rm ${WASI_SDK}.tar.gz && \
    curl https://wasmtime.dev/install.sh -sSf | bash && \
    wget -O ${WABT_ARCHIVE}.tar.gz https://github.com/WebAssembly/wabt/releases/download/${WABT_VERSION}/${WABT_ARCHIVE}.tar.gz && \
    tar -xvf ${WABT_ARCHIVE}.tar.gz && \
    mv ${WABT} $HOME/${WABT} && \
    rm ${WABT_ARCHIVE}.tar.gz && \
    wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh && \
    chmod +x dotnet-install.sh && \
    ./dotnet-install.sh --channel 9.0

ENV PATH="$HOME/${WASI_SDK}/bin:$HOME/${WABT}/bin:$HOME/.dotnet:$PATH"

EXPOSE 8000