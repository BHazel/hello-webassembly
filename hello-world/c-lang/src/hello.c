#include <stdio.h>

char* greet() {
    return "Hello, World!";
}

void greet_user(char* user, char* greeting_buffer) {
    sprintf(greeting_buffer, "Hello, %s!", user);
}

int main() {
    printf("Hello, World!\n");
    return 0;
}