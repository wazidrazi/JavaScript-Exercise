/* Assignment 1 */


function feetToMile(feet){
    let mile = feet / 5280;
    
    return mile.toFixed(4);
}

console.log(feetToMile(100));


/* Assignment 2 */

function woodCalculator(chair, table, bed){
    let chairsWood = chair * 1;
    let tablesWood = table * 3;
    let BedsWood = bed * 5;

    let total = chairsWood + tablesWood + BedsWood;
    return total;
}

console.log(woodCalculator(6, 1, 3));


/* Assignment 3 */


function brickCalculator(floor){
    let totalFeet = 0;

    if( floor <= 10 ){
        totalFeet = floor * 15;
    } else if ( floor <= 20 ){
        let firstPart = 10 * 15;
        let secondPart = (floor - 10) * 12;
        totalFeet = firstPart + secondPart;
    } else{
        firstPart = 10 * 15;
        secondPart = 10 * 12;
        let thirdPart = (floor - 20) * 10;

        totalFeet = firstPart + secondPart + thirdPart;
    }

    let totalBrick = totalFeet * 1000;
    return totalBrick;
}

console.log(brickCalculator(33));


/* Assignment 4 */



let friends = ["Rahim", "Karim", "Mushfiq", "John", "Doe", "Tuhin", "Razi"];

function tinyfriend(friends){
    let tiny = friends[0];
    for(let i = 1; i < friends.length; i++){
        if(friends[i].length < tiny.length){
            tiny = friends[i];
        }
        
    };
    return tiny;
}

console.log(tinyfriend(friends));



/* Assignment 5 */

function countAnimal(depth){
    let animal = 0;

    if(depth <= 10){
        animal = depth * 50;
    } else if(depth <= 20){
        let first10 = 10 * 50;
        let remaining = depth - 10;
        let second = remaining * 100;
        animal = first10 + second;
        
    } else {
        first10 = 10 * 50;
        second = 10 * 100;
        remaining = depth - 20;
        third = remaining * 300;
        animal = first10 + second + third;
    }
    return animal;
}

console.log(countAnimal(21));
