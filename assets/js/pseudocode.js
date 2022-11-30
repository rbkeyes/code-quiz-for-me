// function saveScore() { 
//     let totalPoints = 0;
//     totalPoints += (correct/quiz.length);
//     // save score, initials to local storage
//     // submit button to save
// }

// // retrieve scores when "view high scores" is clicked.






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
        q++;
        console.log('q = ' + q)
    }
}

// check if selected answer is correct
var checkAnswer = function (click) {
    var selection = (choice = click.target).id
    console.log('you selected ' + selection);
    if (selection === answer) {
        correctAnswer()
    } else if (selection !== answer) {
        incorrectAnswer()
    }
};
quiz.addEventListener("click", checkAnswer)

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
    result.textContent = "Sorry, that is incorrect.";
    result.className = 'select-incorrect';
    if (q < quizQuestions.length) {
        displayNextQuestion();
    } else {
        finalQuestion();
    }
};

function finalQuestion() {
    clearInterval(countdownInterval);
    countdownTimer.textContent = "Congratulations, you have completed the quiz!";
    // quiz.removeEventListener('click', displayNextQuestion);
    var viewScoreBtn = document.getElementById('view-score-button');
    viewScoreBtn.textContent = "View Final Score";
    viewScoreBtn.addEventListener('click', endOfQuiz);
};

// set countdown timer
const countdownInterval = setInterval(countdown, 1000)
function countdown() {
    if (timeLeft >= 1) {
        countdownTimer.textContent = timeLeft;
        timeLeft--;
        // set 'time's up' message and clear timer when timeLeft = 0
    } else {
        countdownTimer.textContent = "Time's up!";
        endOfQuiz()
        return;
        // Call the `saveScore()` function
        // saveScore();
    }
    // }, 1000);
}

// end of quiz (out of time or answered final question)
function endOfQuiz() {
    quiz.hidden = true;
    quizComplete.hidden = false;
    finalScore.textContent = score / choice.length
}

// start quiz
function startQuiz() {
    if (startPage.hidden === false && quiz.hidden === true) {
        startPage.hidden = true;
        quiz.hidden = false;
    }
    // start countdown
    countdown();
    // display first question
    displayNextQuestion();
}

// event listener for start button, call startQuiz()
startBtn.addEventListener("click", startQuiz);
