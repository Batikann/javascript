let counter=localStorage.getItem("value") ? Number(localStorage.getItem("value")) : 0;
const increaseElement = document.querySelector("#increase");
const resetElement = document.querySelector("#reset");
const decreaseElement = document.querySelector("#decrease");
const counterValue = document.querySelector("#counterValue");

increaseElement.addEventListener("click", increaseFunction);
decreaseElement.addEventListener("click", decreaseFunction);
//resetElement.addEventListener("click",resetFunction);

function increaseFunction() {
 
  counter +=1
  counterValue.innerHTML = counter;
  localStorage.setItem("value", counter);
}


 
