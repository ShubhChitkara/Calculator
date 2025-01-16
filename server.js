const clear=document.querySelector(".clear");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const six=document.querySelector(".six");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const nine=document.querySelector(".nine");
const zero=document.querySelector(".zero");
const division=document.querySelector(".divide");
const multiple=document.querySelector(".multiply");
const minus=document.querySelector(".minus");
const plus=document.querySelector(".plus");
const dot=document.querySelector(".dot");
const equals=document.querySelector(".equalsto");
function add(a, b) {
  let ans = a + b;
  return ans;
  
};

function subtract(c, d) {
  let ans = c - d;
  return ans;
};

function multiply(e, f) {
  const ans = e * f;
  return ans;
};

function divide(g, h) {
  const ans = g / h;
  return ans;
};
const num1="";
const operator="";
const num2="";
function operate(num1,operator,num2){
  if(operator="+"){
    add(num1,num2);
  }else if(operator="-"){
    subtract(num1,num2);
  }else if(operator="*"){
    multiply(num1,num2);
  }else{
    divide(num1,num2);
  }
}
const display=document.querySelector(".text");
display.textContent=[];
clear.addEventListener("click",display=[]);
one.addEventListener("click",display.textContent+=[1]);
two.addEventListener("click",display.textContent+=[2]);
three.addEventListener("click",display.textContent+=[3]);
four.addEventListener("click",display.textContent+=[4]);
five.addEventListener("click",display.textContent+=[5]);
six.addEventListener("click",display.textContent+=[6]);
seven.addEventListener("click",display.textContent+=[7]);
eight.addEventListener("click",display.textContent+=[8]);
nine.addEventListener("click",display.textContent+=[9]);
zero.addEventListener("click",display.textContent+=[0]);
division.addEventListener("click",display.textContent+=["/"]);
multiple.addEventListener("click",display.textContent+=["*"]);
minus.addEventListener("click",display.textContent+=["-"]);
plus.addEventListener("click",display.textContent+=["+"]);
dot.addEventListener("click",display.textContent+=["."]);
equals.addEventListener("click",solution());
console.log(display)


function solution(display){
  
}
