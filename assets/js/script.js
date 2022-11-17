// vars for question, answer choices, correct answer
var displayQuestion = document.getElementById("question");
// var choices = document.getElementById("choices");
// var choice = document.querySelectorAll("choice");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var answer = document.getElementById("correct");

var quizQuestions = {
    questions: ["_______ is the process of finding errors and fixing them within a program.",
    "Which of the following variable types can hold a value of either true or false?",
    "A loop that never ends is referred to as a(n)_________.",
    "What is the name of the operation that joins two strings together?"],
    a: ["compiling",
    "boolean",
    "while loop",
    "function"],
    b: ["executing",
    "string",
    "infinite loop",
    "push"],
    c: ["debugging",
    "number",
    "recursive loop",
    "join"],
    d: ["scanning",
    "array",
    "for loop",
    "concatenation"],
    answerKey: [c[0], a[1], b[2], d[3]],
}

// save score to leaderboard
function saveScore() {
    var finalScore = document.getElementById("my-score")
    var saveScore = document.querySelector("save-my-score")

}

// display next question
function displayNextQuestion(i) {

    for (let i = 0; i < questions.length; i++) {
        console.log(question[i]);
        displayQuestion.textContent = question[i];
     
        }

        for (let i = 0; i < a.length; i++) {
            console.log(a[i]);
            choiceA.textContent = a[i];
        }

        for (let i = 0; i < b.length; i++) {
            console.log(b[i]);
            choiceB.textContent = b[i];
        }

        for (let i = 0; i < c.length; i++) {
            console.log(c[i]);
            choiceC.textContent = c[i];
        }

        for (let i = 0; i < d.length; i++) {
            console.log(d[i]);
            choiceD.textContent = d[i];
        }

        for (let i = 0; i < answerKey.length; i++) {
            console.log(answerKey[i]);
            // displayQuestion.textContent = answerKey[i];
        }
    
    startBtn.addEventListener("click", displayNextQuestion);

    }


function displayQuiz() {

    // vars for start page & quiz section
    var startPage = document.getElementById("start-page");
    var quiz = document.getElementById("quiz");
    var nextBtn = document.querySelector("btn-next");

    if (question && choiceA && choiceB && choiceC && choiceD && correct === null) {
        var i = 0;
        displayQuestion.textContent = question[i]
        choiceA.textContent = a[i]
        choiceB.textContent = b[i]
        choiceC.textContent = c[i]
        choiceD.textContent = d[i]
    }

    if (startPage.hidden === false && quiz.hidden === true); {
        startPage.hidden = true;
        quiz.hidden = false;
    }

    displayNextQuestion()
}

function countdown() {
    // select timer
    var countdownTimer = document.getElementById('countdown');
    var timeLeft = 59;

    // call function to display quiz questions
    displayQuiz()

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft >= 1) {
            // Set the `textContent` of `countdownTimer` to show the remaining seconds
            countdownTimer.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, display "time's up" message
            countdownTimer.textContent = "time's up!";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);

            // Call the `saveScore()` function
            saveScore();
        }
    }, 1000);
}

// save your score
function quizComplete() {
}


var startBtn = document.getElementById("start");

startBtn.addEventListener("click", countdown);
