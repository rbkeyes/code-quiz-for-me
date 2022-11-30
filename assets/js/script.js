

// set questions
const quizQuestions = [
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        choiceA: "compiling",
        choiceB: "executing",
        choiceC: "debugging",
        choiceD: "scanning",
        answer: "C",
    }, {
        question: "Which of the following variable types can hold a value of either true or false?",
        choiceA: "boolean",
        choiceB: "string",
        choiceC: "number",
        choiceD: "array",
        answer: "A",
    }, {
        question: "A loop that never ends is referred to as a(n)_________.",
        choiceA: "while loop",
        choiceB: "infinite loop",
        choiceC: "recursive loop",
        choiceD: "for loop",
        answer: "B",
    }, {
        question: "What is the name of the operation that joins two strings together?",
        choiceA: "function",
        choiceB: "push",
        choiceC: "join",
        choiceD: "concatenation",
        answer: "D",
    }
]

// get main section elements from HTML
const startPage = document.getElementById("start-page");
const startBtn = document.getElementById("start");
const quizComplete = document.getElementById("quiz-complete");

// get variables
var countdownTimer = document.getElementById('countdown');
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choice = document.querySelectorAll(".choice");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var finalScore = document.getElementById("my-score");
var saveBtn = document.querySelector('.save-button');
var result = document.getElementById('result');

var q = 0
var timeLeft = 59;
var score = 0;


function displayNextQuestion(q) {
    let current = quizQuestions[q];

question.textContent = current.question;
    console.log(current.question);
choiceA.textContent = current.choiceA;
    console.log(current.choiceA);
choiceB.textContent = current.choiceB;
    console.log(current.choiceB);
choiceC.textContent = current.choiceC;
    console.log(current.choiceC);
choiceD.textContent = current.choiceD;
    console.log(current.choiceD);
answer = current.answer;
    console.log(current.answer);
}

var checkAnswer = function(click) {
    var selection = (choice = click.target).id
    console.log(selection);
    if (selection === answer) {
        correctAnswer(); 
        console.log("correct!");
    } else {
        // incorrectAnswer()        
    }
}

quiz.addEventListener("click", checkAnswer)

function correctAnswer() {
    if (q < quiz.length) {
        q = q++
        displayNextQuestion(+1);
        console.log(displ)
    }
        choicesCorrect++;
        var result = document.createElement("h3");
        result.textContent = "Correct!";
        quiz.appendChild(result);
    };


function countdown() {
    // select timer
    var countdownTimer = document.getElementById('countdown');

    // set interval
    var timeInterval = setInterval(function () {
        // decrement timer
        if (timeLeft >= 1) {
            countdownTimer.textContent = timeLeft;
            timeLeft--;
            // set time's up message and clear timer when timeLeft = 0
        } else {
            countdownTimer.textContent = "Time's up!";
            clearInterval(timeInterval);
            quiz.hidden = true;
            quizComplete.hidden = false;
            // Call the `saveScore()` function
            // saveScore();
        }
    }, 1000);
}

function startQuiz() {
    if (startPage.hidden === false && quiz.hidden === true) {
        startPage.hidden = true;
        quiz.hidden = false;
    }

    countdown();
    displayNextQuestion(q=0);
}

startBtn.addEventListener("click", startQuiz);
