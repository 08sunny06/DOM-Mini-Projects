let count = document.querySelector('.contents h1')
let number = document.querySelector('.number')


let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let reset = document.getElementById('reset')

add.addEventListener('click', increment)
function increment() {    
    count.textContent = parseInt(count.textContent) + parseInt(number.value);
}

subtract.addEventListener('click', decrement)
function decrement() {    
    if(parseInt(count.textContent) - parseInt(number.value)<0)
        count.textContent = 0
    else
        count.textContent = parseInt(count.textContent) - parseInt(number.value);
}

reset.addEventListener('click', ()=>count.textContent=0)