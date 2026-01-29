sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

for each() method

let friuts = ["appple", "orange" , "banana", "coconut"];


friuts.forEach(capitalize);
friuts.forEach(display);

function upperCase(element, index, array){
        array[index] = element.toUppercase();
}

function lowercase(element, index, array){
        array[index] = element.toLowercase();
}

function capitalize(element, index, array){
        array[index] = element.charAt(0).toUppercase() + element.slice(1);
}

function display(element){
    console.log(element);
}
