const add = function() {
    display.textContent = Math.round(parseFloat(firstNumber) + parseFloat(secondNumber))/10;
}
  
const subtract = function() {
    display.textContent = Math.round(parseFloat(firstNumber) - parseFloat(secondNumber))/10;
}
  
const divide = function()  {
    display.textContent = Math.round(parseFloat(firstNumber) / parseFloat(secondNumber))/10;
}
const multiply = function() {
     display.textContent = Math.round(parseFloat(firstNumber) * parseFloat(secondNumber))/10;
}



let firstNumber;
let secondNumber ;
let operator = '';
//decides what above function to use based on operator
// const operate = function(operator, a, b){
//     if(operator == "+"){
//         add(a, b);
//     }
//     if(operator == "-"){
//         subtract(a,b);
//     }
//     if(operator == "*"){
//         multiply(a,b);
//     }
//     if(operator == "/"){
//         divide(a,b);
//     }

// }

const numberKeys = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const clearKey = document.querySelector('.clearKey');
const operators = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equalsKey');
const decimal = document.querySelector('.decimal')

console.log(clearKey)
const populate = function(){
    if(display.textContent == 0){
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
    }else if(secondNumber == 0 && operator == "/"){
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