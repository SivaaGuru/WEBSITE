const people = [{name:"Spongebob",age: 30,gpa: 3.0},
                {name:"Patrick",age: 37,gpa: 1.5},
                {name:"Squidward",age: 51,gpa: 2.5},
                {name:"sandy",age:27,gpa:4.00}]

people.sort((a,b) => a.age - b.age);

console.log(people);

