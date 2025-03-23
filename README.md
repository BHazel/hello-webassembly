# Hello, WebAssembly!

This repository contains some examples of working with WebAssembly, written as I develop my skills and knowledge in the field.  It is not intended as a navigable tutorial, however, if you stumbled across this I hope you find the content useful!

## Technologies

* C, C++
* WebAssembly
* HTML/CSS/JavaScript (vanilla)

## Requirements

* Emscripten
* WASI SDK
* GNU Make
* Wasmtime (or any other WebAssembly runtime)
* Python (included to run a basic web server)

## Getting Started

The easiest way to get started is to create a Docker image using the included `Dockerfile` or create a GitHub Codespace.  However, the dependencies are easy to get and install.  If you are running the code locally ensure the WASI SDK variables are configured correctly in the `shared/makefiles/wasi-sdk-variables.mk` file.

Each sample is self-contained in its own directory.  Each of these contian sub-directories for the WebAssembly development case:

|Case|Compiler|Description|
|-|-|-|
|First Principles|Emscripten|Generated plumbing JavaScript file is not used; the WebAssembly JavaScript API is used directly.|
|EMCC Plumbing|Emscripten|generated plumbing JavaScript file is used.|
|EMCC HTML|Emscripten|Generates a sample HTML page.|
|WASI|WASI SDK|Can be run using a WebAssembly runtime such as Wasmtime.|

Each sub-directory contains a `Makefile` to build, serve and run the sample.  Common targets include:

|Target|Description|
|-|-|
|`all`|Builds the sample.|
|`serve`|Serves the sample via HTTP.|
|`run`|Runs the sample in Wasmtime.|
|`clean`|Cleans the sample.|

Some variables and common targets are included in individual `Makefile`s which are kept in the `shared/makefiles` directory.