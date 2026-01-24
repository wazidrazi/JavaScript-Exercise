

function evenify(nums){
    for(let i = 0; i < nums.length; i++){
    let num = nums[i];
   
    if(num % 2 == 0){
        console.log(num, 'is even');
    } else{
        console.log(num, 'is odd');
    }
}
}

let nums = [23, 3, 45, 55, 44, 34, 9];
evenify(nums);


let friendsAge = [23, 22, 25, 19, 23, 18];

evenify(friendsAge);
