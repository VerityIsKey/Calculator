const add = function() {
    display.textContent = (parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(1);
}
  
const subtract = function() {
    display.textContent = (parseFloat(firstNumber) - parseFloat(secondNumber)).toFixed(1);
}
  
const divide = function()  {
    display.textContent = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(1);
}
const multiply = function() {
     display.textContent = (parseFloat(firstNumber) * parseFloat(secondNumber)).toFixed(1);
}



let firstNumber;
let secondNumber ;
let operator = '';


const numberKeys = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const clearKey = document.querySelector('.clearKey');
const operators = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equalsKey');
const decimal = document.querySelector('.decimal');
const backspaceKey = document.querySelector('.backspace');

console.log(clearKey)
const populate = function(){
    if(operator == "="){
        display.textContent = this.textContent
        operator = ""
    }else if(display.textContent === "0"){
        display.textContent = this.textContent;
    }else{
        display.textContent = display.textContent + this.textContent;  
    }
   
}
numberKeys.forEach(numberKey => numberKey.addEventListener('click', populate));
const clear = function(){
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
}
clearKey.addEventListener('click', clear)

const operateKey = function(){
    //also store the second value before using the equals function if this is the second operator 
    //should also account for if a second operator is hit instead of equals
    if(operator == ""){
        //if no previous operation has occured
        firstNumber = display.textContent;
        operator = this.textContent;
        display.textContent = 0;
    }else{
        //coming directly off another operation or equals
        if(operator != "="){
            secondNumber = display.textContent;
            operate();  
        }
        firstNumber = display.textContent;
        display.textContent = 0;
        operator = this.textContent;
    }
    
}

operators.forEach(operator => operator.addEventListener('click', operateKey));

const operate = function(){
    if(operator == "+"){
        add()
    }
    if(operator == "-"){
       subtract()
    }
    if(operator == "*"){
        multiply()
    }
    if(secondNumber != 0){
        if(operator == "/"){
            divide()
        }
    }else if(firstNumber == 0 || secondNumber == 0 && operator == "/"){
        display.textContent = "ERROR";
    } 
}
const equals = function(){
    secondNumber = display.textContent;
    operate();
    operator = "=";

}
equalsKey.addEventListener('click', equals);
const addDecimal = function(){
    //should check if a decimal is already inside the current number
    if(display.textContent.includes('.')){
    }else{
        display.textContent = display.textContent + this.textContent;
    }


}
decimal.addEventListener('click', addDecimal);
const backspace = function(){
    display.textContent = display.textContent.substring(0,display.textContent.length-1);
}
backspaceKey.addEventListener('click', backspace)