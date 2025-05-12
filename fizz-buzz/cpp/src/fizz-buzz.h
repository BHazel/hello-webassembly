#include <print>
#include <string>
#include <vector>

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#include <emscripten/bind.h>
#endif

namespace bwhazel {
    class fizz_buzz {
    public:
        static constexpr int DEFAULT_COUNT {30};
        static constexpr int DEFAULT_FIZZ {3};
        static constexpr int DEFAULT_BUZZ {5};
        
        fizz_buzz(int const fizz = DEFAULT_FIZZ, int const buzz = DEFAULT_BUZZ);

        bool is(int const value, int const divisor) const;
        std::string what_is(int const value, bool const is_verbose) const;
        std::vector<std::string> play(int const count, bool const is_verbose) const;

        void log_result(int number, std::string result) const;
        
        int get_fizz() const;
        int get_buzz() const;

    private:
        int fizz {DEFAULT_FIZZ};
        int buzz {DEFAULT_BUZZ};
    };
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_BINDINGS(string_vector) {
    emscripten::register_vector<std::string>("string_vector");
}

EMSCRIPTEN_BINDINGS(bwhazel_fizz_buzz) {
    emscripten::class_<bwhazel::fizz_buzz>("fizz_buzz")
        .constructor()
        .constructor<int, int>()
        .function("is", &bwhazel::fizz_buzz::is)
        .function("what_is", &bwhazel::fizz_buzz::what_is)
        .function("play", &bwhazel::fizz_buzz::play)
        .function("get_fizz", &bwhazel::fizz_buzz::get_fizz)
        .function("get_buzz", &bwhazel::fizz_buzz::get_buzz);
}
#endif