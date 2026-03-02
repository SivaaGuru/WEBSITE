function increment (){
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);     
}

increment();

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -=  points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}