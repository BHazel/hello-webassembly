#include <format>
#include <numeric>
#include <vector>

#include "fizz-buzz.h"

bwhazel::fizz_buzz::fizz_buzz(int const fizz, int const buzz)
    : fizz {fizz}, buzz {buzz}
{}

bool bwhazel::fizz_buzz::is(int const value, int const divisor) const {
    return value % divisor == 0;
}

std::string bwhazel::fizz_buzz::what_is(int const value, bool const is_verbose) const {
    bool is_fizz = this->is(value, fizz);
    bool is_buzz = this->is(value, buzz);
    
    std::string result;
    if (is_fizz && is_buzz) {
        result = "Fizz Buzz";
    } else if (is_fizz) {
        result = "Fizz";
    } else if (is_buzz) {
        result = "Buzz";
    } else {
        result = std::to_string(value);
    }

    if (is_verbose) {
        this->log_result(value, result);
    }

    return result;
}

std::vector<std::string> bwhazel::fizz_buzz::play(int const count, bool const is_verbose) const {
    std::vector<std::string> results {static_cast<size_t>(count)};
    for (int i {1}; i <= count; i++) {
        std::string result = this->what_is(i, is_verbose);
        results[i - 1] = result;
    }

    return results;
}

void bwhazel::fizz_buzz::log_result(int const number, std::string const result) const {
#ifdef __EMSCRIPTEN__
    EM_ASM({
        console.log($0, UTF8ToString($1));
    }, number, result.c_str());
#else
    std::println("{}, {}", number, result);
#endif
}

int bwhazel::fizz_buzz::get_fizz() const {
    return this->fizz;
}

int bwhazel::fizz_buzz::get_buzz() const {
    return this->buzz;
}