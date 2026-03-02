
const myText = document.getElementById("myText");
const mysubmit = document.getElementById("mySubmit");
const resitelement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    if (age >= 100){
        resultElement.textContent =`You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent =`You cant enter you were just born`;
    }
     else if(age >= 18 ){
        resultElement.textContent =`You are old enough to enter the site`;
     }
     else if(age < 0 ){
        resultElement.textContent =`Youre age cannot be below 0`; 
     }
        else{
            resultElement.textContent =`you must be 18+ to enetr the site`;
        }    
    }
