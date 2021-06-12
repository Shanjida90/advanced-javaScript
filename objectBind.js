const normalPerson={
firstName:"rohim",
lastName:'uddin',
salary:40000,
getFullName:function  () {
    console.log(this.firstName, this.lastName)
},
chargeBill:function (amount) {
console.log(this)
    this.salary=this.salary-amount
return this.salary;
}

}
normalPerson.chargeBill(1200);
console.log(normalPerson.salary)

const friendlyPerson={
firstName: 'kalam',
lastName:'uddin',
salary:20000,
}
const friendlyOne=normalPerson.chargeBill.bind(friendlyPerson);
friendlyOne(3000);
console.log(friendlyPerson.salary)
const talkativePerson={
    firstName: 'salam',
    lastName:'sha',
    salary:30000,
    }

const forTalkative=normalPerson.chargeBill.bind(talkativePerson);
forTalkative(3000);
forTalkative(3000);

// console.log(talkativePerson.salary)
