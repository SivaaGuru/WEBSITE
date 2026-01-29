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
    
    




