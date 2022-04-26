let firstNameValid = document.getElementById('firstNameValid');
let firstNameInvalid = document.getElementById('firstNameInvalid');
let lastNameValid = document.getElementById('lastNameValid');
let lastNameInvalid = document.getElementById('lastNameInvalid');
let emailValid = document.getElementById('emailValid');
let emailInvalid = document.getElementById('emailInvalid');
let phoneVal = document.getElementById('phoneValid');
let phoneInval = document.getElementById('phoneInvalid');
let zipVal = document.getElementById('zipValid');
let zipInval = document.getElementById('zipInvalid');
let tncCheck = document.getElementById('invalidCheck');
let stateValid = document.getElementById('stateValid');
let stateInvalid = document.getElementById('stateInvalid');

let fieldNamesTouched = {
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    state: false,
    zipCode: false
}

function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    let tnc = document.getElementById("check").checked;

    if (fieldNamesTouched['firstName']) {
        if (firstName === '') {
            firstNameInvalid.style.display = 'block';
            firstNameValid.style.display = 'none';
        } else {
            firstNameValid.style.display = 'block';
            firstNameInvalid.style.display = 'none';
        }
    }


    if (fieldNamesTouched['lastName']) {
        if (lastName === '') {
            lastNameInvalid.style.display = 'block';
            lastNameValid.style.display = 'none';
        } else {
            lastNameValid.style.display = 'block';
            lastNameInvalid.style.display = 'none';
        }
    }

    if (fieldNamesTouched['email']) {
        if (email === '' || !email.includes('a') || email.startsWith('@') || email.slice(email.lastIndexOf('.')).length < 3) {
            emailValid.style.display = 'none';
            emailInvalid.style.display = 'block';
        } else {
            emailValid.style.display = 'block';
            emailInvalid.style.display = 'none';
        }
    }

    // if(phoneNumber === '' || !phoneNumber.match(/^[6-9]\d{9}$/g)){
    //     phoneVal.style.display = 'none';
    //     phoneInval.style.display = 'block';
    // }else{
    //     phoneInval.style.display = 'none';
    //     phoneVal.style.display = 'block';
    // }

    if (fieldNamesTouched['phoneNumber']) {
        if (phoneNumber === '' || phoneNumber.length != 10 || Number(phoneNumber[0]) < 6) {
            phoneVal.style.display = 'none';
            phoneInval.style.display = 'block';
        } else {
            phoneInval.style.display = 'none';
            phoneVal.style.display = 'block';
        }
    }

    if (fieldNamesTouched['zipCode']) {
        if (zipCode === '' || zipCode.length != 6) {
            zipVal.style.display = 'none';
            zipInval.style.display = 'block';
        } else {
            zipInval.style.display = 'none';
            zipVal.style.display = 'block';
        }
    }


    if (!tnc) {
        tncCheck.style.display = 'block';
    } else {
        tncCheck.style.display = 'none';
    }

    if (fieldNamesTouched['state']) {
        if (state === '') {
            stateInvalid.style.display = 'block';
            stateValid.style.display = 'none';
        } else {
            stateValid.style.display = 'block';
            stateInvalid.style.display = 'none';
        }
    }
    // console.log(state);
}

function setTouched(fieldName) {
    fieldNamesTouched[fieldName] = true;
    // console.log(fieldNamesTouched);
    validate();
}