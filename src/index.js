import "./assets/CSS/style.css" 

function todecimal(decimalnumber) {
    let answer = 0
    let n = 0
    for(let i  = decimalnumber.length-1; i >= 0; i--){
        if(decimalnumber.charAt(i) === "1") {
            answer += Math.pow(2, n)   
        }
        n++
    }
    return answer
}



let answer = document.getElementById("answer")
let number = document.getElementById("decimalInput")
let form = document.getElementById("form")
let error = document.getElementById("error")

form.onsubmit =  e => {
    e.preventDefault()
    let isnot0or1 = false
    error.textContent = "";
    for(let i = 0; i < number.value.length; i++){
        if (number.value.charAt(i) != 0 && number.value.charAt(i) != 1){
            isnot0or1 = true
        }
    }
    if(isnot0or1 == false){
        answer.innerHTML = todecimal(number.value);
        console.log(todecimal(number.value));
    } else {
        error.textContent = "Enter either 0 or 1"
    }
}