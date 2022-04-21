

function calculate() {
    let balances = document.getElementsByClassName('inputBalance');
    let availBal = document.getElementsByClassName('displayBalance');

    for (let i = 0; i < balances.length; i++) {
        balances[i].value = Number(balances[i].value);
        if (balances[i].value > 200000) {
            availBal[i].value = Number(balances[i].value) + Number(balances[i].value) * 0.01;
            availBal[i].value = balances[i].value - balances[i].value * 0.002;
        } else if (balances[i].value > 100000) {
            availBal[i].value = Number(balances[i].value) + Number(balances[i].value) * 0.05;
            availBal[i].value = balances[i].value - balances[i].value * 0.0005;
        } else {
            availBal[i].value = Number(balances[i].value) + Number(balances[i].value) * 0.03;
        }
    }
}


// let balance1 = document.getElementById('bal1').value;
// console.log(balance1);

///------------------------------------------------------------------>>
// function calculate(){
//     let balance1 = Number(document.getElementById('bal1').value);
//     let balance2 = Number(document.getElementById('bal2').value);
//     let balance3 = Number(document.getElementById('bal3').value);
//     let balance4 = Number(document.getElementById('bal4').value);
//     let balance5 = Number(document.getElementById('bal5').value);

//     let updBal1 = document.getElementById('bil1')
//     let updBal2 = document.getElementById('bil2')
//     let updBal3 = document.getElementById('bil3')
//     let updBal4 = document.getElementById('bil4')
//     let updBal5 = document.getElementById('bil5')

//     let balances = [balance1,balance2,balance3, balance4, balance5]

//     for(let i = 0; i < balances.length; i++){
//         balances[i] = Number(balances[i]);
//         if(balances[i] > 200000){
//             balances[i] = balances[i] + balances[i] * 0.01;
//             balances[i] = balances[i] - balances * 0.002;
//         }else if(balances[i] > 100000){
//             balances[i] = balances[i] + balances[i] * 0.05;
//             balances[i] = balances[i] - balances * 0.0005;
//         }else{
//             balances[i] = balances[i] + balances[i] * 0.03;
//         }
//     }
//     updBal1.value = balances[0];
//     updBal2.value = balances[1];
//     updBal3.value = balances[2];
//     updBal4.value = balances[3];
//     updBal5.value = balances[4];

//     console.log(balances);
// }
//------------------------------------------------------------------------>>
