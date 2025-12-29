// const myButton = document.getElementById("myButton");
// const Label1 = document.getElementById("Label1");
// const Label2 = document.getElementById("Label2");
// const Label3 = document.getElementById("Label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;


// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     myLabel1.textContent = randomNum1;
//     myLabel2.textContent = randomNum2;
//     myLabel3.textContent = randomNum3;

// }




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


const minNum = 50;
const maxNum = 100;
const answer =Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true; 

while(running){

    guess = window.prompt('Guess a number between ${miNum} - ${maxNum}');
    guess = Number(guess);
   

    if(isNan(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum ||guess > maxNum){
        window.alert("Please enetr a valid number"); 
    }else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{

        }
    }
    running = false;

}
    
    



    running = false;      
}































