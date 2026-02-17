const userInfo = {
    firstName : "Wazid",
    lastName : "Ahmed",
    salary : 15000,
    fullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount, tax){
        console.log(this);
        this.salary = this.salary - amount - tax;
        return this.salary
    }

};

const userInfo2 = {
    firstName : "Rahim",
    lastName : "Uddin",
    salary : 20000
};

const userInfo3 = {
    firstName : "Karim",
    lastName : "Uddin",
    salary : 25000
};

// userInfo.chargeBill(2000);
// console.log(userInfo.salary);

/* if we want to apply same method in different object, we will use call and apply */

// userInfo.chargeBill.call(userInfo2, 2000);
// console.log(userInfo2.salary);

userInfo.chargeBill.apply(userInfo3, [5000, 200]);
console.log(userInfo3.salary);



