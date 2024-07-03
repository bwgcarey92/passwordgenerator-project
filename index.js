const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')

let newPassLength = 15

function randChar() {
    let char = Math.floor(Math.random() * characters.length)
    return characters[char]
}

function generate() {
    let newPass1 = ''
    for (let i = 0; i < newPassLength; i++) {
        newPass1 += randChar()
    }
    result1.textContent = newPass1
    
    let newPass2 = ''
    for (let i = 0; i < newPassLength; i++) {
        newPass2 += randChar()
    }
    result2.textContent = newPass2
}


