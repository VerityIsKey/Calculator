const add = function() {
    display.textContent = firstNumber + secondNumber;
}
  
const subtract = function() {
    display.textContent = firstNumber - secondNumber;
}
  
const divide = function()  {
    display.textContent = firstNumber / secondNumber;
}
  
const multiply = function() {
     display.textContent = firstNumber * secondNumber;
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
}
clearKey.addEventListener('click', clear)

const operateKey = function(){
    //also store the second value before using the equals function if this is the second operator 
    //should also account for if a second operator is hit instead of equals

    
    //stores the firstNumber in display and the operator key
    firstNumber = display.textContent;
    operator = this.textContent;
    display.textContent = 0;
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
    if(operator == "/"){
        divide()
    }
}
const equals = function(){
    secondNumber = display.textContent;

    operate();

}
equalsKey.addEventListener('click', equals);