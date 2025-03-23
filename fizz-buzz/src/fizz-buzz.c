#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <getopt.h>

void log_result(int number, int result, char* formatted_result);

int const COUNT_DEFAULT = 30;
int const FIZZ = 3;
int const BUZZ = 5;

char const * FIZZ_STR = "Fizz";
char const * BUZZ_STR = "Buzz";
char const * FIZZ_BUZZ_STR = "Fizz Buzz";

int is(int value, int divisor) {
    return value % divisor == 0;
}

int what_is(int value) {
    int is_fizz = is(value, FIZZ);
    int is_buzz = is(value, BUZZ) << 1;
    return is_fizz | is_buzz;
}

void format_result(int value, int result, char* formatted_result) {
    switch (result) {
        case 0b00:
            sprintf(formatted_result, "%d", value);
            break;
        case 0b01:
            sprintf(formatted_result, "%s", FIZZ_STR);
            break;
        case 0b10:
            sprintf(formatted_result, "%s", BUZZ_STR);
            break;
        case 0b11:
            sprintf(formatted_result, "%s", FIZZ_BUZZ_STR);
            break;
    }
}

int play_fizz_buzz_for(int number, int is_verbose) {
    char formatted_result[9] = "";
    int result = what_is(number);
    if (is_verbose) {
        format_result(number, result, formatted_result);
        log_result(number, result, formatted_result);
    }

    return result;
}

void play_fizz_buzz_to_stdout(int count, int is_verbose) {
    char formatted_result[9] = "";
    for (int i = 1; i <= count; i++) {
        int result = what_is(i);
        format_result(i, result, formatted_result);
        printf("%s\n", formatted_result);
        if (is_verbose) {
            log_result(i, result, formatted_result);
        }
    }
}

void play_fizz_buzz_to_memory_self_managed(int count, char* results, int is_verbose) {
    char formatted_result[9] = "";
    for (int i = 1; i <= count; i++) {
        int result = what_is(i);
        format_result(i, result, formatted_result);
        strcat(results, formatted_result);
        strcat(results, i != count ? "," : "\0");
        if (is_verbose) {
            log_result(i, result, formatted_result);
        }
    }
}

char* play_fizz_buzz_to_memory_code_managed(int count, int is_verbose) {
    char results[1024] = "";
    char* results_ptr = results;
    play_fizz_buzz_to_memory_self_managed(count, results_ptr, is_verbose);
    return results_ptr;
}

int main(int argc, char* argv[]) {
    struct option options[] = {
        { "count", required_argument, 0, 'c' },
        { "verbose", no_argument, 0, 'v' },
        { 0, 0, 0, 0 }
    };

    int option = 0;
    int count = 0;
    int is_verbose = 0;
    while ((option = getopt_long(argc, argv, ":c:v", options, 0)) != -1) {
        switch (option) {
            case 'c':
                count = atoi(optarg) > 0 ? atoi(optarg) : COUNT_DEFAULT;
                break;
            case 'v':
                is_verbose = 1;
                break;
            case '?':
                printf("Unknown option: %c\n", optopt);
                break;
            case ':':
                printf("Missing argument for option: %c", optopt);
                break;
        }
    }

    count = count > 0 ? count : COUNT_DEFAULT;
    play_fizz_buzz_to_stdout(count, is_verbose);

    return 0;
}