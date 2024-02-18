let inputElement = document.querySelector('#input-txt');
let buttonElement = document.querySelector('#generate-btn');
let qrElement = document.querySelector('#qr');

buttonElement.addEventListener('click', () =>{

    let inputValue = inputElement.value;
    if (!inputValue){
        alert('Invalid text');
        
    }
    else{
        qrElement.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrElement.alt = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        
    }
});