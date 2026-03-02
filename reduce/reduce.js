const prices  = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator,element){
    return accumulator + element ;
}


function search(arr, x) {
    
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === x) {
            return i;
        }
    }

   
    return -1;
}


const arr1 = [1, 2, 3, 4];
const x1 = 3;
console.log(search(arr1, x1)); // Output: 2

const arr2 = [10, 8, 30];
const x2 = 6;
console.log(search(arr2, x2)); // Output: -1


function countZeroes(arr) {
    let count = 0;
    // Iterate from the end of the array backwards
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            count++;
        } else {
            // As soon as we hit a 1, we can stop because it's sorted
            break;
        }
    }
    return count;
}

