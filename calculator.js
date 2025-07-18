let num1 = document.getElementById('num1-el').textContent = 3;
let num2 = document.getElementById('num2-el').textContent = 4;

document.getElementById('add-btn').onclick = function addition(){
    let sum = num1 + num2;
    console.log(sum);
    document.getElementById('sum-el').textContent = "Sum: " + sum;
}

document.getElementById('subtract-btn').onclick = function subtraction(){
    let subtract = num1 - num2;
    console.log(subtract);
    document.getElementById('sum-el').textContent = "Difference: " + subtract;
}

document.getElementById('multiply-btn').onclick = function multiply(){
    let multiply = num1 * num2;
    document.getElementById('sum-el').textContent = "Product: " + multiply;
}

document.getElementById('divide-btn').onclick = function divide(){
    let divide = num1 / num2;
    document.getElementById('sum-el').textContent = "Quotient: " + divide;
}