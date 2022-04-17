
var displayArea = document.getElementById("display");
// console.log(displayArea);

function isOperator(opt){
    if(opt == '+' || opt == '-' || opt == '*' || opt == '/' || opt == '%'){
        return true;
    }
    return false;   
}

function btnClicked(buttonText){
    if(displayArea.innerText.length >= 24){ return; }
    
    if(buttonText === 'CLR'){
        document.getElementById('display1').innerText = '';

        displayArea.innerText = '0';
        return;
    }

    if(buttonText === 'DEL'){
        if(displayArea.innerText !== '0'){
            displayArea.innerText = displayArea.innerText.slice(0,-1);
        }
        return;
    }

    if(buttonText === '='){
        try{
            document.getElementById('display1').innerText = displayArea.innerText;
            displayArea.innerText = eval(displayArea.innerText);
        }catch(error){
            displayArea.innerText = 0;
        }
        return;
    }


    if(displayArea.innerText === '0'){
        if(buttonText == '0' || buttonText == '00'){
            return;
        }
        
        if(buttonText == '.' || isOperator(buttonText)){
            let eq = displayArea.innerText;
            if(eq.indexOf())
            displayArea.innerText = '0' + buttonText;
            return;
        }
        displayArea.innerText = buttonText;
    }else{
        if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(buttonText)){
            displayArea.innerText = displayArea.innerText.slice(0,-1) + buttonText;
            return;
        }
        displayArea.innerText = displayArea.innerText + buttonText;
    }

}