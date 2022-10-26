const question = document.getElementById("question"); 
const choices = Array.from(document.getElementsByClassName('choice-text')); 
var timerElement = document.querySelector(".timer-count"); 
var startButton = document.querySelector("start-button"); 
var currentQuestion = {}; 
var acceptingAnswer = false; 
var availableQuestions = []; 
var timeleft = 60; 
var score = 0; 
var questionCounter = 0; 

// Add Questions 
var questions = [ 
    { 
        question: "Javascript is what kind of language? Choose the answer that best fits!",
        choice1: "very interesting", 
        choice2: "Easily learned", 
        choice3: "Dynamically typed",
        choice4: "statically typed", 
        answer: "3"  
    },
    {
        question: "A series of characters that is written within quotations is a what?", 
        choice1: "Boolean", 
        choice2: "Number", 
        choice3: "Swallow", 
        choice4: "String", 
        answer: "4"
    },
    {
        question: "As a non-primitive data type, I can do what?", 
        choice1: "Write only a single value in the data type", 
        choice2: "Can only store two values in the data type", 
        choice3: "Can store as many values as needed, but they cannot be complex values", 
        choice4: "Can store multiple and complex value types in this data type", 
        answer: "4" 
    }, 
    {
        question: "The act of moving all declared funtion and variables to the top is known as what?", 
        choice1: "Boolean", 
        choice2: "Hoisting", 
        choice3: "Elevate", 
        choice4: "Shifting",
        answer: "2" 
    },
    {   
        question: "Which of the following operators will return the value as true? Assume that both variables are the same number and are not strings.", 
        choice1: "x == y", 
        choice2: "x===y", 
        choice3: "x ~ y",
        choice4: "y + x",  
        answer: "1" 
    },
    {
        question: "When combining a number to a string or two strings together it is known as a what?", 
        choice1: "String", 
        choice2: "string coercion", 
        choice3: "Number string", 
        choice4: "double string", 
        answer: "2"
    },
    {
        question: "A true or false value is known as a what?", 
        choice1: "Boolean", 
        choice2: "Number", 
        choice3: "String", 
        choice4: "Hoisting", 
        answer: "1"
    }

];

// Lists the number of point you get and how many questions there are
const Correct_points = 20; 
const Max_Questions = 7; 


// Timer Function / if/when ends will run the end function
function startTimer() { 
    timerElement.textContent = timeleft; 
    timer = setInterval(() => { 
        timeleft --; 
        timerElement.textContent = timeleft; 
        if(timeleft == 0)
        clearInterval(timer); 
        endgame(); 
        }, 1000); 
}; 

function endgame() { 
    if (timeleft <=0) { 
        localStorage.setItem('recentScore', score); 
        return window.location.assign("./gameover.html")
    }
}

// putting the timer with the start button 

function startGame() { 
    questionCounter = 0; 
    score = 0;
    availableQuestions = [...questions]; 
    
    getNewQuestions(); 
}

getNewQuestions = () => { 
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) { 
        localStorage.setItem('recentScore', score); 
        return window.location.assign("./results.html")
    }
// Continues to use questions until all seven questions have been asked
    questionCounter++; 
    const questionOrder = Math.floor(Math.random() * availableQuestions.length); 
    currentQuestion = availableQuestions[questionOrder]; 
    question.innerText = currentQuestion.question; 

    choices.forEach(choice => {
        const number = choice.dataset["number"]; 
        choice.innerText = currentQuestion["choice" + number]; 
    });


// Removes repeated questions 

availableQuestions.splice(questionOrder, 1); 

acceptingAnswer = true; 

};

choices.forEach(choice => { 
choice.addEventListener("click", e => { 
    if (!acceptingAnswer) return; 
    acceptingAnswer = false; 
    const selectedChoice = e.target; 
    const selectedAnswer = selectedChoice.dataset["number"]; 

    var valueToApply = "incorrect"; 
       if ( selectedAnswer == currentQuestion.answer) { 
        valueToApply = "correct"; 
       } else { 
        valueToApply = "incorrect"; 
        timeleft -= 10; 
       };
    
    if (valueToApply === "correct"){ 
        incrementScore(Correct_points)
    }

    setTimeout( () => {
        getNewQuestions(); 
    }, 1000);
});
});

incrementScore = num => { 
    score +=num; 
}; 

startGame(); 
startTimer(); 
endgame();