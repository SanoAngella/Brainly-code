#include <stdio.h>

int main() {
    int i, n, count; 
    printf("The prime numbers from 1-100 are:\n");

    for (n = 1; n <= 100; n++) {
        count = 0;
        for (i = 1; i <= 100; i++) {
            if (n % i == 0) {
                count++;
            }
        }

        if (count == 2) {
            
            printf("%d\n ", n); 
        }
    }

    return 0;
}
