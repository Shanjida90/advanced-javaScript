const student1={
name:"sohag",
roll:01,
totalMoney:10000,
fullYearFee:function (perMonth) {
    this.totalMoney=this.totalMoney-perMonth;
return this.totalMoney;
},


}
student1.fullYearFee(1000);
console.log(student1.totalMoney);



const student2={
name:"sohan",
roll:02,
totalMoney:20000,
}
student1.fullYearFee.apply(student2,[3000])
console.log(student2.totalMoney)