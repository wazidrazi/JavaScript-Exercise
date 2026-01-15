function number(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return "Not a prime Number";
        } else{
            return "Prime number";
        }
    }
}

let result = number(5);
console.log(result);