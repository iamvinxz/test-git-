let counter = 0;
let value = document.getElementById('count-el');

document.getElementById('increment-btn').onclick = function increment() {
    counter += 1;
    value.textContent = counter;
}
document.getElementById('decrement-btn').onclick = function decrement(){
    if(counter > 0){
        counter -= 1;
        value.textContent = counter;
    }
}

document.getElementById('save-btn').onclick = function save(){
    let saveEl = document.getElementById('prev-text');
    console.log(saveEl);
    let countStr = value.textContent + " - ";
    saveEl.textContent += countStr;
    counter = 0;
    value.textContent = 0;
}

