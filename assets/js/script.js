var startPage = document.getElementById("start-page");
var startBtn = document.getElementById("start");

var quiz = document.getElementById("quiz");
var timeLeft = 59;
var question = document.getElementById("question");
var choice = document.querySelectorAll(".choice");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choicesCorrect = 0;

var quizComplete = document.getElementById("quiz-complete");
var finalScore = document.getElementById("my-score");
var saveBtn = document.querySelector('.save-button');

var quizQuestions = [
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

function displayNextQuestion() {
let currentQuestion = 0;
let q = quizQuestions[currentQuestion];

question.textContent = question;
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

    if (currentQuestion < quiz.length) {
        currentQuestion++
    } else {
        // saveScore()
    }
}

var checkAnswer = function(click) {
    if (choice = click.target) {
    var selection = choice.id;
    console.log(selection);
    if (selection === answer) {
        correctAnswer(); 
    } else {
        // incorrectAnswer()        
    }
}
}
quiz.addEventListener("click", checkAnswer)

function correctAnswer() {
    var result = document.createElement("h3");
    result.textContent = "Correct!";
    quiz.appendChild(result);
    choicesCorrect++;
    displayNextQuestion();

}

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
    displayNextQuestion();
}

startBtn.addEventListener("click", startQuiz);
