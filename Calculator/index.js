
var displayArea = document.getElementById("display");
console.log(displayArea);

function isOperator(opt){
    if(opt == '+' || opt == '-' || opt == '*' || opt == '/' || opt == '%'){
        return true;
    }
    return false;   
}

function btnClicked(buttonText){
    if(displayArea.innerText === '0'){
        if(buttonText != '00'){
           if(buttonText == '.' || isOperator(buttonText)){
                displayArea.innerText = displayArea.innerText + buttonText;
            }else{
            displayArea.innerText = buttonText;
            }
        }
    }else{
        if(isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText)){

        }else{
            displayArea.innerText = displayArea.innerText + buttonText;
        }
    }
}