let inputElement = document.querySelector('#input');
let outputElement = document.querySelector('#output');

inputElement.addEventListener('input', ()=>{
    let password = inputElement.value;

    if (password.length <8){
        outputElement.innerText = `Password is too Short`;
        outputElement.style.color = 'red';
    }
    else{
        

        if (password.search(/[a-z]/) == -1){
            outputElement.innerText = `Please add a lowercase in your password`;
            outputElement.style.color = 'red';

        }
        else if (password.search(/[A-Z]/) == -1){
            outputElement.innerText = `Please add a uppercase in your password`;
            outputElement.style.color = 'red';

        }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\;\:\,\.\<\>\?]/) == -1){
            outputElement.innerText = `Please add a special character in your password`;
            outputElement.style.color = 'red';

        }
        else if (password.search(/[1-9]/) == -1){
            outputElement.innerText = `Please add a number in your password`;
            outputElement.style.color = 'red';

        }

        else {
            outputElement.innerText = `Password is Strong`;
            outputElement.style.color = 'green';
        }

    }
});
