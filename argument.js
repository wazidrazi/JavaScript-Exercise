// function addNumbers(num1, num2){

//     let sum = 0;

//     for(let i = 0; i < arguments.length; i++){
//         let num = arguments[i];
//         sum = sum + num;
//     }

//     return sum;
// }

// console.log(addNumbers(5,6,9,32));



function callName(name){
    let userName = " ";
    for(let i = 0; i < arguments.length; i++){
        let borthersName = arguments[i];
        userName = userName + borthersName;
    }
    return userName;
}

console.log(callName("rahim uddin",",", "kalim uddin",",", "jaber uddin",",", "manik uddin"));