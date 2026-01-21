// fibo[4] = fibo[4-1] + fibo[4-2]
// fibo[5] = fibo[5-1] + fibo[5-2]
// fibo[6] = fibo[6-1] + fibo[6-2]
// fibo[i] = fibo[i-1] + fibo[i-2]



function fibonacci(n){
    let fibo = [0, 1];

    for(let i=2; i<= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let result = fibonacci(10);
console.log(result);



/* Recursive way */


// function fibonacci(n){
//     if(n == 0){
//         return 0;
//     } if(n == 1){
//         return 1;
//     } else{
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// let result = fibonacci(10);
// console.log(result);