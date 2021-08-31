
let countEl = document.getElementById("count-el")
console.log(countEl)
//for sequence
let saveEl=document.getElementById("save-el")
let count=0
//Increment function
function increment(){
 count=count+1
 countEl.textContent=count;
}
//Decrement function
function decrement(){
    count=count-1
    countEl.textContent=count;
}
//Save function
function save(){
    let countstr=count + " - "
    
    saveEl.textContent+=countstr
    console.log(countEl.innerText)
    countEl.textContent=0
    count =0
}





