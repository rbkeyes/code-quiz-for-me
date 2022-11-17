var startPage = document.getElementById("start-page");
var quiz = document.getElementById("quiz");
var quizComplete = document.getElementById("quiz-complete");

// vars for question, answer choices, correct answer
// var choices = document.getElementById("choices");
var choice = document.querySelectorAll("choice");

// save score to leaderboard
function saveScore() {
    var finalScore = document.getElementById("my-score")
    var saveScore = document.querySelector("save-my-score")

    
}



    



    var quiz = document.getElementById("quiz");
    var question = document.getElementById("question");
    var choiceA = document.getElementById("A");
    var choiceB = document.getElementById("B");
    var choiceC = document.getElementById("C");
    var choiceD = document.getElementById("D");
    var answer = document.querySelector("answer");

    var quiz = [
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

    var lastQuestion = question.length - 1;
    let currentQuestion = 0;

        let q = quiz[currentQuestion];
        question.textContent = q.question;
        choiceA.textContent= q.choiceA;
        choiceB.textContent= q.choiceB;
        choiceC.textContent = q.choiceC;
        choiceD.textContent = q.choiceD;
        answer = q.answer;

        if (currentQuestion < quiz.length) {
            currentQuestion++
            displayNextQuestion
        } else {
            saveScore()
        }

        var checkAnswer = document.querySelector("checkAnswer('')");
        choice.addEventListener("click", checkAnswer() {
            if (choice === q.answer)
        });

        
        var nextBtn = document.querySelector("btn-next"); 

        nextBtn.addEventListener("click", displayNextQuestion)

    }

function countdown() {
    // select timer
    var countdownTimer = document.getElementById('countdown');
    var timeLeft = 59;

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
