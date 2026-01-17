let id = [2, 3, 5, 87, 4, 3, 5, 65, 23, 87];
let uniqueId = [];

for(let i = 0; i < id.length; i++){
    let element = id[i];
    let index = uniqueId.indexOf(element);
    if(index == -1){
        uniqueId.push(element);
    };
}

console.log(uniqueId);