function callback(name, age, task){
    console.log('Name:', name);
    console.log('Age:', age);
    task();
}

function business(){
    console.log('Occupation: Business Man');
}

function serviceHolder(){
    console.log('Occupation: Service Holder');
}

callback('Jashim Uddin', 26, business);
callback('Ashik Hasan', 21, serviceHolder);