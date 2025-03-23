#ifdef __EMSCRIPTEN__
#include <emscripten.h>

EM_JS(void, log_result, (int number, int result, char* formatted_result), {
    console.log(number, result, UTF8ToString(formatted_result));
})
#else
#include <stdio.h>

void log_result(int number, int result, char* formatted_result) {
    printf("%d, %d, %s\n", number, result, formatted_result);
}
#endif