let marks = [49, 59, 37, 84, 89, 44, 78];

let max = marks[0];

for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    
    if(element > max){
        max = element;
    }
}

console.log("Highest value is: ", max);