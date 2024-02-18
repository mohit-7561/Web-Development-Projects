let spanElement = document.querySelectorAll('span');

spanElement.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
    })
});