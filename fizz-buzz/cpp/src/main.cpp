#include <print>
#include <string>
#include <getopt.h>

#include "fizz-buzz.h"

void play_to_stdout(bwhazel::fizz_buzz& const fizz_buzz, int const count, bool const is_verbose) {
    for (int i {1}; i <= count; i++) {
        std::string result = fizz_buzz.what_is(i, is_verbose);
        std::println("{}", result);
        if (is_verbose) {
            fizz_buzz.log_result(i, result);
        }
    }
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
                count = std::stoi(optarg) > 0 ? std::stoi(optarg) : bwhazel::fizz_buzz::DEFAULT_COUNT;
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

    count = count > 0 ? count : bwhazel::fizz_buzz::DEFAULT_COUNT;

    bwhazel::fizz_buzz fizz_buzz {};
    play_to_stdout(fizz_buzz, count, is_verbose);
}