let phonenumber = "123-456-7890";

phonenumber = phonenumber.padStart();

console.log(phonemnumber);





const fullName = "Sivaa Guru";

let firstName = fullName.slice(0, 3);
let lastname = fullName.slice(3, 8);


console.log(firstName);
console.log(lastname);



let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password")
    
    if (username === "myusername" && password === "mypassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{

    }
 }