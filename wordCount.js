let speech = "My name is wazid. I am a CSE graduate. Currently not working anywhere , ready to dive into job"

let count = 0;

for(let i = 0; i < speech.length; i++){
    let words = speech[i];
    if(words == " "){
        count ++
    }
}

console.log(count);