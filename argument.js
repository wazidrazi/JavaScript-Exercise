function addNumbers(num1, num2){

    let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        let num = arguments[i];
        sum = sum + num;
    }

    return sum;
}

console.log(addNumbers(5,6,9,32));