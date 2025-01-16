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
const emptyArray=[];
display.textContent=emptyArray;
//function solution(emptyArray){
 // for(let i=0;i<emptyArray.length+1,i++){
   // if(i=)
  //}
  
//}

clear.addEventListener("click",()=>{emptyArray=[]});
one.addEventListener("click",()=>{emptyArray+=["1"]});
two.addEventListener("click",()=>{emptyArray+=["2"]});
three.addEventListener("click",()=>{emptyArray+=["3"]});
four.addEventListener("click",()=>{emptyArray+=["4"]});
five.addEventListener("click",()=>{emptyArray+=["5"]});
six.addEventListener("click",()=>{emptyArray+=["6"]});
seven.addEventListener("click",()=>{emptyArray+=["7"]});
eight.addEventListener("click",()=>{emptyArray+=["8"]});
nine.addEventListener("click",()=>{emptyArray+=["9"]});
zero.addEventListener("click",()=>{emptyArray+=["0"]});
division.addEventListener("click",()=>{emptyArray+=["/"]});
multiple.addEventListener("click",()=>{emptyArray+=["*"]});
minus.addEventListener("click",()=>{emptyArray+=["-"]});
plus.addEventListener("click",()=>{emptyArray+=["+"]});
dot.addEventListener("click",()=>{emptyArray+=["."]});
equals.addEventListener("click",console.log("HELLO"));
console.log(display)



