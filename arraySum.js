function getTotalSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    };
    return sum;
}

let numbers = [49, 59, 37, 84, 89, 44, 78];


let result = getTotalSum(numbers);
console.log("The total is: ",result);

let total = getTotalSum([29, 49, 33, 3]);
console.log("The total is: ",total);

