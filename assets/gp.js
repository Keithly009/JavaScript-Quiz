const question = document.getElementById("question"); 
const choices = Array.from(document.getElementByClassName*('choice-text')); 
var timerElement = document.querySelector(".timer-count"); 
var startButton = document.querySelector("start-button");
var currentQuestion = {};
var acceptingAnswer = false;
var availableQuestions = [];
var timeleft = 60; 
var score = 0; 

// Add Questions 
var questions = [ 
    {
        question: "Javascript is what kind of language? Choose the answer that best fits!",
        a: "very interesting", 
        b: "Easily learned", 
        c: "Dynamically typed",
        d: "statically typed", 
        correct: "c",  
        
        question: "A series of characters that is written within quotations is a what?", 
        a: "Boolean", 
        b: "Number", 
        c: "Swallow", 
        d: "String", 
        correct: "d",

        question: "As a non-primitive data type, I can do what?", 
        a: "Write only a single value in the data type", 
        b: "Can only store two values in the data type", 
        c: "Can store as many values as needed, but they cannot be complex values", 
        d: "Can store multiple and complex value types in this data type", 
        correct: "d", 

        question: "The act of moving all declared funtion and variables to the top is known as what?", 
        a: "Boolean", 
        b: "Hoisting", 
        c: "Elevate", 
        d: "Shifting",
        correct: "b", 
        
        question: "Which of the following operators will return the value as true? Assume that both variables are the same number and are not strings.", 
        a: "x == y", 
        b: "x===y", 
        c: "x ~ y",
        d: "y + x",  
        correct: "a", 
        
        question: "When combining a number to a string or two strings together it is known as a what?", 
        a: "String", 
        b: "string coercion", 
        c: "Number string", 
        d: "double string", 
        correct: "b", 

        question: "A true or false value is known as a what?", 
        a: "Boolean", 
        b: "Number", 
        c: "String", 
        d: "Hoisting", 
        correct: "a",
    },

];

// Lists the number of point you get and how many questions there are
const Correct_points = 20; 
const Max_questions = 7; 


// Timer Function / if/when ends will run the end function
function startTimer() { 
    timerElement.textContent = timeLeft; 
    timer = setInterval(() => { 
        timeLeft --; 
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
    const questionOrder = math.floor(math.random() * availableQuestions.length); 
    currentQuestion = availableQuestions[question]; 
    question.innerText = currentQuestion.question; 

    choices.forEach(choice => {
        const number = choice.dataset["number"]; 
        choice.innerText = currentQuestion["choice" + number]; 
    });
}

// Removes repeated questions 

availableQuestions.splice(questionOrder, 1); 

acceptingAnswer = true; 
