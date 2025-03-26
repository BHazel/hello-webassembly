#include <string>

#ifdef __EMSCRIPTEN__
#include <emscripten/bind.h>
#endif

namespace bwhazel {
    enum class gender {
        female,
        male
    };

    class person {
    public:
        person(std::string name, int birth_year, gender gender);
        int my_age() const;
        std::string my_gender() const;
        std::string who_am_i() const;

    private:
        int const CURRENT_YEAR {2025};
        
        std::string name;
        int birth_year;
        gender gender;
    };
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_BINDINGS(bwhazel__person) {
    emscripten::enum_<bwhazel::gender>("gender")
        .value("female", bwhazel::gender::female)
        .value("male", bwhazel::gender::male);

    emscripten::class_<bwhazel::person>("person")
        .constructor<std::string, int, bwhazel::gender>()
        .function("myAge", &bwhazel::person::my_age)
        .function("myGender", &bwhazel::person::my_gender)
        .function("whoAmI", &bwhazel::person::who_am_i);
}
#endif