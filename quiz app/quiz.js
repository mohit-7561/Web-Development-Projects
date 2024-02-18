let questionElement = document.querySelector('#quiz-question');
let option1Element = document.querySelector('#text-option1');
let option2Element = document.querySelector('#text-option2');
let option3Element = document.querySelector('#text-option3');
let option4Element = document.querySelector('#text-option4');
let submitElement = document.querySelector('#submit');


let currentQuestion = 0;
let score = 0;

questionElement.innerText = quiz[currentQuestion].question;
option1Element.innerText = quiz[currentQuestion].option1;
option2Element.innerText = quiz[currentQuestion].option2;
option3Element.innerText = quiz[currentQuestion].option3;
option4Element.innerText = quiz[currentQuestion].option4;


submitElement.addEventListener('click', ()=>{
    let checkedAnswer = document.querySelector('input[type ="radio"]:checked');
    
    if(checkedAnswer === null){
        alert("Please select an options")
    }
    else {
        if (checkedAnswer.nextElementSibling.innerText === quiz[currentQuestion].answer){
            score ++;
        }
            currentQuestion++;

            if (currentQuestion < quiz.length){
                questionElement.innerText = quiz[currentQuestion].question;
                option1Element.innerText = quiz[currentQuestion].option1;
                option2Element.innerText = quiz[currentQuestion].option2;
                option3Element.innerText = quiz[currentQuestion].option3;
                option4Element.innerText = quiz[currentQuestion].option4;
                checkedAnswer.checked = false;
                
            }
            else{
                let scoreMessage = `Your Total Score is ${score} out of ${quiz.length}`;
                if (score === quiz.length) {
                    scoreMessage += ". Congratulations! You answered all questions correctly!";
                }
                alert(scoreMessage);
            
            }
        
    }
    

})
