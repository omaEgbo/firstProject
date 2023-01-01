//btn region 
const upper = document.getElementById("upper")
//btn function
const leftUsd = document.getElementById("ausd")
const leftNgn = document.getElementById("angn")
const leftEur = document.getElementById("aeur")
const rightUsd = document.getElementById("busd")
const rightNgn = document.getElementById("bngn")
const rightEur = document.getElementById("beur")
const input = document.getElementById("input")
const output = document.querySelector("#output")

var formula = 0

// Get the container element
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Get all buttons with class="btn" inside the container
var btnL = leftBtn.getElementsByClassName("left");
var btnR = rightBtn.getElementsByClassName("right");

// // Loop through the buttons and add the active class to the current/clicked button

    for (var i = 0; i < btnL.length; i++) {
        btnL[i].addEventListener("click", function() {
    var currentL = document.getElementsByClassName("activeL");
if (currentL.length > 0) {
    currentL[0].className = currentL[0].className.replace(" activeL", "");
    }   
    this.className += " activeL";
});
}
    for (var i = 0; i < btnR.length; i++) {
        btnR[i].addEventListener("click", function() {
    var currentR = document.getElementsByClassName("activeR");
if (currentR.length > 0) {
    currentR[0].className = currentR[0].className.replace(" activeR", "");
    }   
    this.className += " activeR";
});
}

function invoke (upper){
    upper.preventDefault();
    const searchLeft = document.querySelector(".activeL");    
    const searchRight = document.querySelector(".activeR");
    if(searchLeft.value == 0 && searchRight.value == 4){
        console.log("USDNGN");
    formula = 730
    const curr = input.value;
    let currency = curr * formula;
    output.value = currency.toFixed(3)}
    else if(searchLeft.value == 0 && searchRight.value == 5){
        console.log("USDEUR");
        formula = 1.01    
        const curr = input.value;
        let currency = curr * formula;
        output.value = currency.toFixed(3)
    }
    else if(searchLeft.value == 1 && searchRight.value == 3){
        console.log("NGNUSD");
        formula = 0.0013    
        const curr = input.value;
        let currency = curr * formula;
        output.value = currency.toFixed(3)
    }
    else if(searchLeft.value == 1 && searchRight.value == 5){
        console.log("NGNEUR");
        formula = 706   
        const curr = input.value;
        let currency = curr * formula;
        output.value = currency.toFixed(3)
    }
    else if(searchLeft.value == 2 && searchRight.value == 3){
        console.log("EURUSD");
        formula = 0.99   
        const curr = input.value;
        let currency = curr * formula;
        output.value = currency.toFixed(3)
    }
    else if(searchLeft.value == 2 && searchRight.value == 4){
        console.log("EURNGN");
        formula = 0.001416    
        const curr = input.value;
        let currency = curr * formula;
        output.value = currency.toFixed(3)
    }
    else{
        console.log("SAME CONVERSION");
        formula = 1   
        const curr = input.value;
        let currency = curr * formula;
        output.value = currency.toFixed(3)
    }
}

leftBtn.addEventListener("click", invoke)
rightBtn.addEventListener("click", invoke)
input.addEventListener("keyup", invoke)