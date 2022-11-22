var timeLeft = 59;

var startPage = document.getElementById("start-page");
var quiz = document.getElementById("quiz");
var quizComplete = document.getElementById("quiz-complete");

var question = document.getElementById("question");
var choice = document.querySelectorAll(".choice");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correct;
var finalScore = document.getElementById("my-score");

function saveScore() { 
    let totalPoints = 0;
    totalPoints += (correct/quiz.length);
    // save score, initials to local storage
    // submit button to save
}

// retrieve scores when "view high scores" is clicked.

var quizQuestions = [
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        choiceA: "compiling",
        choiceB: "executing",
        choiceC: "debugging",
        choiceD: "scanning",
        answer: "choiceC",
    }, {
        question: "Which of the following variable types can hold a value of either true or false?",
        choiceA: "boolean",
        choiceB: "string",
        choiceC: "number",
        choiceD: "array",
        answer: "choiceA",
    }, {
        question: "A loop that never ends is referred to as a(n)_________.",
        choiceA: "while loop",
        choiceB: "infinite loop",
        choiceC: "recursive loop",
        choiceD: "for loop",
        answer: "choiceB",
    }, {
        question: "What is the name of the operation that joins two strings together?",
        choiceA: "function",
        choiceB: "push",
        choiceC: "join",
        choiceD: "concatenation",
        answer: "choiceD",
    }
]

let currentQuestion = 0;
let q = quizQuestions[currentQuestion];

question.textContent = q.question;
console.log(q.question);
choiceA.textContent = q.choiceA;
console.log(q.choiceA);
choiceB.textContent = q.choiceB;
console.log(q.choiceB);
choiceC.textContent = q.choiceC;
console.log(q.choiceC);
choiceD.textContent = q.choiceD;
console.log(q.choiceD);

answer = q.answer;
console.log(q.answer);

function displayNextQuestion() {
    if (currentQuestion < quiz.length) {
        currentQuestion++
        displayNextQuestion()
    } else {
        saveScore()
    }
}

function correctAnswer() {
        var result = document.createElement("h3");
        result.textContent = "Correct!";
        quiz.appendChild(result);
        correct++;

        console.log(result);   
    }


function incorrectAnswer() {
    timeLeft -+ 10;
    
}

function checkAnswer(event) {
    var selection = event.target;
    console.log(selection);

    if (selection === q.answer) {
        correctAnswer()  
        displayNextQuestion();
      
        console.log(result);
    } else {
        incorrectAnswer()        
    }
}

quiz.addEventListener("click", checkAnswer)


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
            countdownTimer.textContent = "time's up!";
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
    displayNextQuestion();
}

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);
