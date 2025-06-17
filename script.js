function sum(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}



function operate(num1, num2, operator){
    if (operator === '+'){
        return sum(num1, num2)
    }
    else if (operator === '-'){
        return subtract(num1, num2)
    }
    else if (operator === '*'){
        return multiply(num1, num2)
    }
    else if (operator === '/'){
        return divide(num1, num2)
    }
}

let num1 = null
let num2 = null
let current_input = ""
let operator = null

let display = document.querySelector(".display")
let num_buttons = document.querySelectorAll(".num_buttons")
let op_buttons = document.querySelectorAll(".op_buttons")

num_buttons.forEach((button)=>{
    button.addEventListener("click", ()=> {
        if (button.textContent === "."){
            button.addEventListener("click", ()=>{
                if(!current_input.includes(".")){
                    if (current_input === ""){
                        current_input += "0."
                        display.textContent += "0."
                    }
                    else{
                        current_input += "."
                        display.textContent += "."
                    }
                }
            })
        }
        else{
            current_input += button.textContent
            display.textContent += button.textContent
            
        }
    })
})

op_buttons.forEach((button)=>{
    if (button.textContent === '='){
        button.addEventListener("click", ()=>{
            if(current_input != "" && operator != null){
                if(num1 != null && operator === '/' &&  parseFloat(current_input)=== 0){
                    alert("You cannot divide a number with zero, please choose another number")
                    display.textContent = num1 + operator
                    current_input = ""
                }
                else{
                    num2 = parseFloat(current_input)
                    display.textContent = Math.round(operate(num1, num2, operator)*100)/100
                    current_input = display.textContent
                    operator = null
                }
            }
        })
    }

    else if (button.textContent === "C"){
        button.addEventListener("click", ()=>{
            num1 = null
            num2 = null
            operator = null
            current_input = ""
            display.textContent = ""
        })
    }

    else if (button.textContent === "Del"){
        button.addEventListener("click", () =>{
            if (isNaN(display.textContent.at(-1))){
                operator = null
                current_input = display.textContent
            } 
            else{
                current_input = current_input.slice(0, -1)
            }
            display.textContent = display.textContent.slice(0, -1)
        })
        console.log(operator)
    }

    else{
        button.addEventListener("click", ()=>{
            if (operator === null && current_input != ""){
                num1 = parseFloat(current_input)
                current_input = ""
                operator = button.textContent
                display.textContent += operator    
        }
        })
    }
})