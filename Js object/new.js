class users {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

const firstUser = new users("Rahim", 25, 12000);
console.log(firstUser);

const secondUser = new users("Wazid", 26, 20000);
console.log(secondUser);