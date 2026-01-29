const myBox  = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click",event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!  😫";
});

myButton.addEventListener("mouseover",event => {
    myBoxstyle.backgroundColor = "yellow";
    myBox.target.textContent = "dont ddo it ! 😫";
});

myButton.addEventListener("mouseout", event => {
     myBox.style.backgroundColor = "lightgreen";
   myBox.textContent = " Click me 😊";

});
