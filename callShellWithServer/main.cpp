#include <stdio.h>

int main(int argc, char *argv[]) {

    if ( argc != 2 ) {
    	printf("Default value \n");
    }else {
        printf("Your Parameter: %s.\n", argv[1]);

    }
    return 0;
}