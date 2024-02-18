let display = document.querySelector('#input');
let copyElement = document.querySelector('#copy');
let lengthElement = document.querySelector('#numberLength');
let uppercaseElement = document.querySelector('#uppercase');
let lowercaseElement = document.querySelector('#lowercase');
let numberElement = document.querySelector('#number');
let symbolElement = document.querySelector('#symbol');
let generateBtnElement = document.querySelector('#button');




generateBtnElement.addEventListener('click', () => {
    let upperstr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerstr = 'abcdefghijklmnopqrstuvwxyz';
    let numberstr = '0123456789';
    let symbolstr = '!@#$%^&*()_+{}<>:"';


    let str = '';

    if (uppercaseElement.checked) {
        str += upperstr;
    }

    if (lowercaseElement.checked) {
        str += lowerstr;
    }

    if (numberElement.checked) {
        str += numberstr;
    }

    if (symbolElement.checked) {
        str += symbolstr;
    }
    let password = '';

    for (i = 0; i<lengthElement.value; i++){
        let index = Math.floor(Math.random()*str.length);
        password += (str[index]);

    }
    display.value = password;

});


copyElement.addEventListener('click', ()=>{
    if (display.value === ''){
        alert('Please generate password first')
    }
    else {
        let newElement = document.createElement('textarea');
        newElement.value = display.value;
        document.body.appendChild(newElement);
        newElement.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newElement.remove();
    }
})