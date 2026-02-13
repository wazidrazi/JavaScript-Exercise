const userInfo = {
    firstName : "Wazid",
    lastName : "Ahmed",
    salary : 15000,
    fullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary
    }

};

userInfo.chargeBill(2000);
console.log(userInfo.salary);