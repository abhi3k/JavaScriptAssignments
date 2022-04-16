
var displayArea = document.getElementById("display");
// console.log(displayArea);

function isOperator(opt){
    if(opt == '+' || opt == '-' || opt == '*' || opt == '/' || opt == '%'){
        return true;
    }
    return false;   
}

function btnClicked(buttonText){
    if(buttonText != 'CLR' && buttonText != 'DEL' && buttonText != '='){    
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
                displayArea.innerText = displayArea.innerText.slice(0,-1) + buttonText;
            }else{
                displayArea.innerText = displayArea.innerText + buttonText;
            }
        }
    }else{
        if(buttonText === 'CLR'){
            displayArea.innerText = '0';
        }else if(buttonText === 'DEL'){
            displayArea.innerText = displayArea.innerText.slice(0,-1);
        }else if(buttonText === '='){
            try{
                displayArea.innerText = eval(displayArea.innerText);
            }catch(error){
                displayArea.innerText = 0;
            }
        }
    }
}


// error to be handled --> decimal character must not be repeating
//