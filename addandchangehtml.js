const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1,box2);


const boxes = document.querySelector(".box");
document.body.insertBefore(newH1,boxes[4]);
