let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += "😊";

});

let buttons = document.querySelectorAll(".myButtons");

butttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.background = "tomato";
    });
});
