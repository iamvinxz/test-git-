let counter = 0;

document.getElementById('increment-btn').onclick = function increment() {
    counter += 1;
    document.getElementById('count-el').textContent = counter;
}
document.getElementById('decrement-btn').onclick = function decrement(){
    counter -= 1;
    document.getElementById('count-el').textContent = counter;

    if(counter < 0){
        alert('No more passenger');
        document.getElementById('count-el').textContent
    }
}