/* for loop */


function factorial(n){
    let factorial = 1
    for(i = 1; i <= 5; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let result = factorial(5);
console.log(result);

/* While */

function factorial(n){
    let fact = 1;
    let i = 1
    while(i <= 5){
        fact = fact * i;
        i++;
    }
    return fact;
}

console.log(factorial(5));


/* Recursive method */

function factorial(n){
    if(n == 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

let result = factorial(4);
console.log(result);