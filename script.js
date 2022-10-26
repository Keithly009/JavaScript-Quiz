const quizdata = [ 
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

const quiz = document.getElementById('quiz') 
const answerEls = document.querySelectorAll('.answer') 
const questioEls = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0 
let score = 0 

loadquiz()

function loadquiz() {
    
    deselectanswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innertext = currentQuizData.a 
    b_text.innertext = currentQuizData.b 
    c_text.innertext = currentQuizData.c 
    d_text.innertext = currentQuizData.d 
}

function deselectanswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
} 

function getSelected() { 
    let answerEls 
    answerEls.forEach(answerEl => { 
        if(answerEl.checked) { 
            answer = answerEl.id 
        }
    })
    return answer
}