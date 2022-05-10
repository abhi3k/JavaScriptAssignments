let passwordDb = ''
let inpPassword = document.getElementById('create')
let loginPass = document.getElementById('check')
let passCreateValid = document.getElementById('signupValid')
let passCreateInvalid = document.getElementById('signupInvalid')
let loginValid = document.getElementById('loginValid')
let loginInvalid = document.getElementById('loginInvalid')
let e1 = document.getElementById('em1')
let e2 = document.getElementById('em2')
let e3 = document.getElementById('em3')
let e4 = document.getElementById('em4')

const signup = () => {
    let inputPassword = inpPassword.value
    passwordDb = inputPassword
    passCreateValid.style.display = 'block'
    e1.style.display = 'none'
    e2.style.display = 'none'
    e3.style.display = 'none'
    e4.style.display = 'none'
    console.log(passwordDb)
}

const login = () => {
    let inputPassword = loginPass.value
    if (inputPassword === passwordDb) {
        loginValid.style.display = 'block'
        loginInvalid.style.display = 'none'
    } else {
        loginInvalid.style.display = 'block'
        loginValid.style.display = 'none'
    }

}


const validate = () => {
    let word = inpPassword.value
    if (word.length < 1) {
        e1.style.display = 'block'
    } else if (word.length >= 1 && word.length <= 6) {
        e2.style.display = 'block'
        e1.style.display = 'none'
    } else if (word.length >= 7 && word.length <= 10) {
        e3.style.display = 'block'
        e2.style.display = 'none'
        e1.style.display = 'none'
    } else {
        e4.style.display = 'block'
        e1.style.display = 'none'
        e2.style.display = 'none'
        e3.style.display = 'none'
    }
}