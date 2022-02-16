let btn = document.getElementById("btn")


const keys = {
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    number : "0123456789",
    symbol : "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}

const getKey = [
    function upperCase() {
        return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
        return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
]

function password1() {
    let passwordValue1 = document.getElementById("password1")
    let password = ""
    for (let i = 0; i < 12; i++) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        password += keyToAdd()
        passwordValue1.value = password
    }
   
}
function password2() {
    let passwordValue2 = document.getElementById("password2")
    let password = ""
    for (let i = 0; i < 12; i++) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        password += keyToAdd()
        passwordValue2.value = password
    }
    
}
function password3() {
    let passwordValue3 = document.getElementById("password3")
    let password = ""
    for (let i = 0; i < 12; i++) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        password += keyToAdd()
        passwordValue3.value = password
    }
   
}
function password4() {
    let passwordValue4 = document.getElementById("password4")
    let password = ""
    for (let i = 0; i < 12; i++) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        password += keyToAdd()
        passwordValue4.value = password
    }
    
}
function generatePassword() {
    let input = document.getElementById("input-el")
    input.style.display = "block"
    
    password1()
    password2()
    password3()
    password4() 
}
btn.addEventListener("click", generatePassword)
btn.addEventListener("click", password2)
btn.addEventListener("click", password3)
btn.addEventListener("click", password4)