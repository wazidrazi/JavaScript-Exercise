function doThis(){
    console.log("Get up! and done the work immedietly.");

}

doThis();

var number = 20;
while(number < 30){
    console.log(number);
    number++;
}

doThis();



function trippleIt(num){
    var result = num * 3;
    return result;
}

var first = trippleIt(5);
var second = trippleIt(10);
var third = trippleIt(25);

var total = first + second + third;

console.log(total);


function add(num1,num2){
    var result = num1 + num2;
    return result;
}

console.log(add(2,3));

