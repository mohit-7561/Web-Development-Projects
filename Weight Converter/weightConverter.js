let inputElement = document.querySelector('#input');
let outputElement = document.querySelector('#outputText');
let outputTextElement = document.querySelector('#outputText');

inputElement.addEventListener('input', ()=>{
    let value = inputElement.value;
    let output = value*2.2
    outputTextElement.innerText = output

});