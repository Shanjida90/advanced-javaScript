const student1=[
{names:"koli",roll:23},
{names:"salman",roll:28},
{names:"anika",roll:26},
{names:"palol",roll:56},
]
const result=student1.map( s=>s.names);
const rolls=student1.map(s => s.roll);
const bigger =  student1.find(s => s.roll>20);
console.log(bigger);