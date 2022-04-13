
var displayArea = document.getElementById("display");
console.log(displayArea);

function btnClicked(digit){
    displayArea.innerText = displayArea.innerText + digit;
}