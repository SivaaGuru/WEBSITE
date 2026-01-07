//3-Digit Randomizer







// Nested If-Statement Logic

// let age = 18;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license")
//     }
//     else{
//         console.log("You do not have your license yet")
//     }
// }
// else{
//     console.log("You must be 16+ to have a license");
// }


//User Age Verification 



// const myText = document.getElementById("myText");
// const mysubmit = document.getElementById("mySubmit");
// const resitelement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);
//     if (age >= 100){
//         resultElement.textContent =`You are TOO OLD to enter this site`;
//     }
//     else if(age == 0){
//         resultElement.textContent =`You cant enter you were just born`;
//     }
//      else if(age >= 18 ){
//         resultElement.textContent =`You are old enough to enter the site`;
//      }
//      else if(age < 0 ){
//         resultElement.textContent =`Youre age cannot be below 0`; 
//      }
//         else{
//             resultElement.textContent =`you must be 18+ to enetr the site`;
//         }    
//     }

// Subscription and Payment Handler


// const mycheckbox = document.getElementById("mycheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mysubmit = document.getElementById("mysubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymnetResult");

// mysubmit.onclick = function(){

//     if(mycheckbox.checked){
//         subResult.textContent = `You are subscribed`;
//     }
//     else{
//         subResult.textContent = `you are not subscribed`;
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if(mastercardBtn.checked){
//         paymentResult.textContent = `you are pauing with mastercard`;
//     }
//     else if(paypalBtnBtn.checked){
//         paymentResult.textContent = `you are paying with paypal`;
//     }
//     else{
//         paymentResult.textContent = `You must select a payment type`;
//     }
// }   


//Advanced Conditional Logic: Ternary Operators & Switch Statements

// let age = 12;
// let message = age >=18 ? "youre an adult" : "youre a minor";
// console.log(message)


// let day = 8;

// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("it is tuesday");
//         break;
//     case 3:
//         console.log("it is wednesday");
//         break;
//      case 4:
//         console.log("it is thursday");
//         break;
//      case 5:
//         console.log("it is friday");
//         break;
//      case 6:
//         console.log("it is saturday");
//         break;
//      case 7:
//         console.log("it is sunday");
//         break;
//      default:
//         console.log(`${day} is not a day`);       
//     }    



//String Manipulation and Formatting

// const fullname ="Sivaa Guru";
// let firstname = fullname.slice(0, 3);
// let lastname = fullname.slice(4, 8);

// let firstchar = fullname.slice(0,1);
// let lastchar = fullname.slice(-1);

// console.log(firstname);
// console.log(lastname);


// let username = window.prompt("Enter your username: ");


// username=username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice();
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// username = username.trim().charAt(0).toUpperCase() + username.trim(




    
// ).slice(1).toLowerCase;
// console.log(username);

// function callMe(name){

// }

// ()=>{

// }


//String Formatting and User Authentication Loops

// let phonenumber = "123-456-7890";

// phonenumber = phonenumber.padStart();

// console.log(phonemnumber);





// const fullName = "Sivaa Guru";

// let firstName = fullName.slice(0, 3);
// let lastname = fullName.slice(3, 8);


// console.log(firstName);
// console.log(lastname);



// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password")
    
//     if (username === "myusername" && password === "mypassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{

//     }
//  }

//Logic for a Number Guessing Game

// const minNum = 50;
// const maxNum = 100;
// const answer =Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// console.log(answer);

// let attempts = 0;
// let guess;
// let running = true; 

// while(running){

//     guess = window.prompt('Guess a number between ${miNum} - ${maxNum}');
//     guess = Number(guess);
   

//     if(isNan(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum ||guess > maxNum){
//         window.alert("Please enetr a valid number"); 
//     }else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN!");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN!");
//         }
//         else{

//         }
//     }
//     running = false;

// }
    
    



//     running = false;      
// }





//JavaScript Functions: Validation and Local Scope

// function isValidEmail(email){

//     return email.includes("@") ? true:false
// }

// console.log(isValidEmail("Bro@fake.com"));
// console.log(isValidEmail("Elonmush.com"));








// let x = 3;

// function2();

// function function1(){
//     let x = 1;
//     console.log(x);
// }

// function function2(){
//     let x = 2;
//     console.log(x);
// }


//Temperature Conversion Logic

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const tocelsius = document.getElementById("tocelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){

//     if(toFahrenheit.checked){
//         temp = Number(textBox.value)
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed + "°F";

       
//     }   
//     else if(tocelsius.checked){
//          temp = Number(textBox.value)
//         temp = temp - 32 * (5/9);
//         result.textContent = temp.toFixed + "°C";
        
//     }
//     else{
//         result.textContent = "Select a unit";
//     }
// }


//Arrays and the Rest Parameter

// let fruits = ("apple","banana","coconut","orange");

// console.log(fruits);



// function openFridge(...foods){
//     console.log(foods);
// }

// const food1 = "pizza";
// const food2 = "hambrger";
// const food3 = "hotdog";
// const food4 = "sushi";

// openFridge(food1, food2, food3, food4, food5);



//Dynamic Dice Roller with Image Rendering

// function rollDice(){

//     const numofDice =document.getElementById("numOfDice").value;
//     const diceResult =document.getElementById("diceResult");
//     const diceImages =document.getElementById("diceImages");
//     const values = [];
//     const images = [];



//     for(let i = 0; i < numofDice; i++){
//         const value = Math.floor(Math.random() *  6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images"${value}.png" alt="Dice ${value}">`); 
//     }

//     diceResult.textContent=`dice: ${values.join(', ')}`;
//     diceImages.innerHTML = images.join(` `);       



 
// }




// Random Password Generation Logic

// function generatePassword(length,includeLowercase, includeUppercase ,includeNumbers,includesymbols ){

// }

//     const LowerCaseChars = "abcdefghijklmnoprstuvwxyz";
//     const uppperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+";

//     let allowedchars="";
//     let password="";


//     allowedchars += includeLowercase ? LowerCaseChars : "";
//     allowedchars += includeUppercase ? uppperCaseChars : "";
//     allowedchars += includeNumbers? numberChars : "";
//     allowedchars += includesymbols? symbolChars : "";

//    if(length <=0){
//     return`(password length must be atleast 1)`;
//    }
//    if(allowedchars.length === 0){
//     return `(Atleast 1 set of characters needs to be selected)`;
//    }
//    for(let i = 0; i < length; i++){
//        const randomIndex = Math.floor(Math.random() * allowedChars.length);
//        password += allowedchars[randomIndex];
//     }
    
//     return password;



// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers  = true;
// const includesymbols = true;

// const password = generatePassword(passwordLength,
//                                   includeLowercase,
//                                   includeUppercase,
//                                   includeNumbers,
//                                   includesymbols ); 

// console.log(`Generated paassword: ${password}`);    


//call back function

// sum(displayPage, 1, 2);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// for each() method

// let friuts = ["appple", "orange" , "banana", "coconut"];


// friuts.forEach(capitalize);
// friuts.forEach(display);

// function upperCase(element, index, array){
//         array[index] = element.toUppercase();
// }

// function lowercase(element, index, array){
//         array[index] = element.toLowercase();
// }

// function capitalize(element, index, array){
//         array[index] = element.charAt(0).toUppercase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }



//map ()

// const students = ["Spongebob","Patrick","Sqiudward"]
// const studentsUpper = students.map(uppercase);

// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUppercase();
// }



//filter()

// let numbers = [ 1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(); 


// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0; 
// }  


//.reduce()

// const prices  = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator,element){
//     return accumulator + element ;
// }


// function search(arr, x) {
    
//     for (let i = 0; i < arr.length; i++) {
       
//         if (arr[i] === x) {
//             return i;
//         }
//     }

   
//     return -1;
// }


// const arr1 = [1, 2, 3, 4];
// const x1 = 3;
// console.log(search(arr1, x1)); // Output: 2

// const arr2 = [10, 8, 30];
// const x2 = 6;
// console.log(search(arr2, x2)); // Output: -1


// function countZeroes(arr) {
//     let count = 0;
//     // Iterate from the end of the array backwards
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0) {
//             count++;
//         } else {
//             // As soon as we hit a 1, we can stop because it's sorted
//             break;
//         }
//     }
//     return count;
// }


//sample palindrome 

// function isPalindrome(s) {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
       
//         if (s[left] !== s[right]) {
//             return false; 
//         }
        
      
//         left++;
//         right--;
//     }

   
//     return true;
// }

// console.log(isPalindrome("abba")); 
// console.log(isPalindrome("abc")); 



//function expressions

// const numbers= [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// const cubes = numbers.map(function cube(element){
//     return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });
// console.log(cubes)


// const hello = (name) => {console.log(`Hello ${name}`)
//                          console.log(`You are old`)};
// hello("Bro");                        
                         
                        

    



//Javascript objects
// const person1 ={
//     firstName: "Spongebob",
//     lastName: "Squarepant", 
//     age: 30,
//     isEmployed :true,
//     sayHello:function(){console.log("Hi! I am Spongebob!")},
//     eat:function(){console.log("i am eating krabby patty.")},
// }

// const person2 ={
//     firstName: "Patrick",
//     lastName: "Star", 
//     age: 30,
//     isEmployed :false,
//     sayHello:function(){console.log("Hi! I am patrick!")},
//     eat:function(){console.log("i am eating beef .")},
// }

// person1.sayHello();
// person2.sayHello();



//class


// class product{
//     constuctor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayproduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }

// }

// const salesTax = 0.05;


// const product1 = new Product("shirt ",19.99);
// const product2 = new Product("pant",20.00);
// const product3 = new Product("undies",100.00);

// product1.displayproduct();

// const total = product1.calculateTotal(salesTax);  
// console.log(`Total price (with tax):$${total.toFixed(2)}`); 




//check even or odd


// function isEven(n){

//     let rem =n % 2;
//     if(rem == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// let n = 15;
// if(isEven(n)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// function isEven(n)
// {
//      if((n & 1) === 0){
//         return true;
//      }
//      else{
//         return false;
//      }
//     }

// let n = 15;
// if(isEven(n)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// multiplication table

// function printTable(n) {
// for (let i = 1; i <= 10; ++i)
//         console.log(n + " * " +i + " = " + n * i );
// }

// let n = 5;
// printTable(n);


function printTable(n, i = 1){
    if (i == 11)
        return;
     console.log(n + " * " +i + " = " + n * i );
     i++;
     printTable(n,i);
}

let n = 5;
printTable(n);





















