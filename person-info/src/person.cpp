#include <format>
#include "person.h"

bwhazel::person::person(std::string name, int birth_year, bwhazel::gender gender) :
    name(name),
    birth_year(birth_year),
    gender(gender)
{}

int bwhazel::person::my_age() const {
    return CURRENT_YEAR - birth_year;
}

std::string bwhazel::person::my_gender() const {
    return static_cast<int>(gender) ? "male" : "female";
}

std::string bwhazel::person::who_am_i() const {
    return std::format("I am {}, {}, and I am {} years old!", name, my_gender(), my_age());
}