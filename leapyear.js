// var leapYear = 2000;
// var remainder = leapYear % 4;

// if (remainder == 0){
//     console.log("The year is Leap Year");
// }else{
//     console.log("The year is not Leap Year");
// }


function leapYear(year){
    var remainder = year % 4;

    if(remainder == 0){
        return true;
    }else{
        return false;
    }

}

console.log(leapYear(2000));