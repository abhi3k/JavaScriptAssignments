let state = {
    currentNavLinkSelected:'home',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    city:'',
    state:'',
    zip:'',
    agreedToTnc:false
}

// DOM node selection

let homeNav = document.getElementById('home-nav-link')
let contactNav = document.getElementById('contact-nav-link')
let aboutNav = document.getElementById('about-nav-link')
let signupNav = document.getElementById('signup-nav-link')
let loginNav = document.getElementById('login-nav-link')

let homePage = document.getElementById('home-page')
let contactPage = document.getElementById('contact-page')
let aboutPage = document.getElementById('about-page')
let signupPage = document.getElementById('signup-page')
let loginPage = document.getElementById('login-page')

const changeNavLink = (navLinkClicked) => {
    homeNav.classList.remove('active')
    contactNav.classList.remove('active')
    aboutNav.classList.remove('active')
    signupNav.classList.remove('active')
    loginNav.classList.remove('active')
    homePage.style.display = 'none'
    contactPage.style.display = 'none'
    aboutPage.style.display = 'none'
    signupPage.style.display = 'none'
    loginPage.style.display = 'none'

    switch(navLinkClicked){
        case 'HOME':
            homeNav.classList.add('active')
            homePage.style.display = 'block'
            break
        case 'CONTACT-US':
            contactNav.classList.add('active')
            contactPage.style.display = 'block'
            break
        case 'ABOUT-US':
            aboutNav.classList.add('active')
            aboutPage.style.display = 'block'
            break
        case 'SIGN-UP':
            signupNav.classList.add('active')
            signupPage.style.display = 'block'
            break
        case 'LOGIN':
            loginNav.classList.add('active')
            loginPage.style.display = 'block'
            break
    }
}

let signupEmail = document.getElementById('signup-email')
let signupPassword = document.getElementById('signup-password')
let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')

let validAlert = document.getElementById('valid-alert')
let invalidAlert = document.getElementById('invaild-alert')

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    a:'x',b:'y',c:'z',d:'a',e:'b',f:'c',g:'d',
    h:'e',i:'f',j:'g',k:'h',l:'i',m:'j',n:'k',
    o:'l',p:'m',q:'n',r:'o',s:'p',t:'q',u:'r',
    v:'s',w:'t',x:'u',y:'v',z:'w',
    '0':'7','1':'8','2':'9','3':'0','4':'1',
    '5':'2','6':'3','7':'4','8':'5','9':'6',
    '-':'*', '_':'#', '@':'$', '#':'$', '$':'+',
    '.':'<',',':'<','!':'@','*':'^','^':'%','/':'+',
    '+':'&','&':'.'
  };

const encode = (input) => {
    return input.split('').map((chars) => lookup[chars]).join('')
}

const decode = (coded) => {
    const upKeys = Object.keys(lookup)
    const upValues = Object.values(lookup)
    let encoded = coded.split('').map(chars => {
        let index = upValues.findIndex(element => element === chars)
        return upKeys[index]
    })
    return encoded.join('')
}


const signup = () => {
    let pass = signupPassword.value
    state.password = encode(pass)
    validAlert.innerText = 'Password has been successfully saved'
    validAlert.style.display = 'block'
    setTimeout(() =>{
        validAlert.style.display = 'none'
    }, 2500)
    console.log(state)
}

const login = () => {
    let pass = loginPassword.value
    if(pass === decode(state.password)){
        loginValid.style.display = 'block'
        loginInvalid.style.display = 'none'
    }else{
        loginValid.style.display = 'none'
        loginInvalid.style.display = 'block'
    }
}

let firstNameValid = document.getElementById('firstNameValid');
let firstNameInvalid = document.getElementById('firstNameInvalid');
let lastNameValid = document.getElementById('lastNameValid');
let lastNameInvalid = document.getElementById('lastNameInvalid');
let emailValid = document.getElementById('emailValid');
let emailInvalid = document.getElementById('emailInvalid');
let phoneVal = document.getElementById('phoneValid');
let phoneInval = document.getElementById('phoneInvalid');
let zipVal = document.getElementById('zipcodeValid');
let zipInval = document.getElementById('zipcodeInvalid');
let tncCheck = document.getElementById('invalidCheck');
let stateValid = document.getElementById('stateValid');
let stateInvalid = document.getElementById('stateInvalid');

let fieldNamesTouched = {
    firstName: false,
    lastName: false,
    email: false,
    state: false,
    zipCode: false
}

function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("signup-email").value;
    let state = document.getElementById("state").value;
    let zipcode = document.getElementById("zipcode").value;
    let tnc = document.getElementById("signUpInvalidCheck").checked;

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

    if (fieldNamesTouched['zipcode']) {
        if (zipcode === '' || zipcode.length != 6) {
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