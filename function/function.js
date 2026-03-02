const numbers= [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function cube(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(cubes)


const hello = (name) => {console.log(`Hello ${name}`)
                         console.log(`You are old`)};
hello("Bro");                        
                   