const add = function(a, b) {
    return a + b;
}
  
const subtract = function(a, b) {
    return a - b;
}
  
const divide = function(a, b)  {
    return a/b;
}
  
const multiply = function(a, b) {
    return a * b;  
}



let firstNumber = 0;
let secondNumber = 0;
let operator = '';
//decides what above function to use based on operator
const operate = function(operator, a, b){
    if(operator == "+"){
        add(a, b);
    }
    if(operator == "-"){
        subtract(a,b);
    }
    if(operator == "*"){
        multiply(a,b);
    }
    if(operator == "/"){
        divide(a,b);
    }

}

const numberKeys = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const clearKey = document.querySelector('.clearKey')

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
}
clearKey.addEventListener('click', clear)