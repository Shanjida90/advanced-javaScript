const array=[12,45,67,65,90,87,53,24];
const output=[];
for (let i = 0; i < array.length; i++) {

    const element = array[i];
// console.log(element)
    const result=element*element;
output.push(result);

}
const result1=array.map(function square(element) {
    return element*element;
})
console.log(result1);

