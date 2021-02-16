
const counter = document.querySelector("#counter-label")
const btnReduce = document.querySelector("#btn-reducer")
const btnAdd = document.querySelector("#btn-add")
const btnReset = document.querySelector("#btn-reset")
let initialCounter = 0;
 
 //loading initial counter state
 document.addEventListener('DOMContentLoaded',() =>  counter.innerHTML = initialCounter )  
 
 //add value
 btnAdd.onclick = () => counter.innerHTML = ++initialCounter
  //reduce value
 btnReduce.onclick = () => counter.innerHTML = --initialCounter
 // reset value
 btnReset.onclick = () => {
     initialCounter = 0
     counter.innerHTML = initialCounter
 }
 
