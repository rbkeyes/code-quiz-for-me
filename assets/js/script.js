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
// start page variables
const startPage = document.getElementById("start-page");
const startBtn = document.getElementById("start");

const quizComplete = document.getElementById("quiz-complete");

// timer variables
var countdownTimer = document.getElementById('countdown');
var timeInterval;
var timeLeft = 59;

// quiz variables
var quiz = document.getElementById("quiz");
var q = 0
var question = document.getElementById("question");
var choices = document.getElementById('choices');
var choice = document.querySelectorAll(".choice");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var result = document.getElementById('result');
const viewScoreBtn = document.getElementById('btn-save-score');

// quiz complete variables
var score = 0;
var finalScore = document.getElementById("my-score");
var saveBtn = document.querySelector('.save-button');

// start quiz
function startQuiz() {
    if (startPage.hidden === false && quiz.hidden === true) {
        startPage.hidden = true;
        quiz.hidden = false;
    }
    // start countdown
    timeInterval = setInterval(countdown, 1000);
    // display first question
    displayNextQuestion();
}

// set countdown timer
function countdown() {
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
    }
};

// display questions by index
function displayNextQuestion() {
    var current = quizQuestions[q];
    question.textContent = current.question;
    choiceA.textContent = current.choiceA;
    choiceB.textContent = current.choiceB;
    choiceC.textContent = current.choiceC;
    choiceD.textContent = current.choiceD;
    answer = current.answer;

    if (q < quizQuestions.length) {
        q++
        console.log('q = ' + q)
        // } else {
        //     finalQuestion();
    }
};

// check if selected answer is correct
function checkAnswer(click) {
    var selection = (choice = click.target).id
    console.log('you selected ' + selection);
        if (selection === answer) {
            correctAnswer();
         } else {
            incorrectAnswer();
    } 
};

// run if selected answer is correct
function correctAnswer() {
    score++;
    console.log('score: ' + score)
    result.textContent = "That is correct!";
    result.className = 'select-correct';
    if (q < quizQuestions.length) {
        displayNextQuestion();
    } else {
        finalQuestion();
    }
};

// run if selected answer is incorrect
function incorrectAnswer() {
    // decrement 10 s for incorrect answer
    console.log('score: ' + score);
    result.textContent = "Sorry, that is incorrect.";
    result.className = 'select-incorrect';
    if (q < quizQuestions.length) {
        displayNextQuestion();
    } else {
        finalQuestion();
    }
};

function finalQuestion() {
    clearInterval(timeInterval);
    countdownTimer.textContent = "Congratulations, you have completed the quiz!";
    choices.removeEventListener('click', checkAnswer);
    viewScoreBtn.hidden = false;
    viewScoreBtn.addEventListener('click', endOfQuiz);
};

// event listeners
startBtn.addEventListener("click", startQuiz);
choices.addEventListener("click", checkAnswer);