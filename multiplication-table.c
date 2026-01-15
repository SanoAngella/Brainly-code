#include <stdio.h>
int main(){
int i, j;

for (i=1; i<=12; i++){
    printf("Multiplication table of %d\n", i);

    for (j=1; j<=12; j++){
        printf("%d x %d= %d\n", i, j, i*j);
    }
}
return 0;
}
