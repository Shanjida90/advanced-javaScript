// const numbers = [2,4,5,6,7];
// const output=[];
// for (let i = 0; i <numbers.length; i++) {
//     const numAdd = numbers[i];
//     const result =numAdd*numAdd;
//     output.push(result);
    
// }
// console.log(output)
// const result=numbers.map(x=>x*x);
// console.log(result);


const arr=[2,3,5,6,7,8];
const result=arr.map(function getSquare(elemant) {
    return elemant*elemant;
})
console.log(result)