const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymnetResult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `you are not subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `you are pauing with mastercard`;
    }
    else if(paypalBtnBtn.checked){
        paymentResult.textContent = `you are paying with paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}   
