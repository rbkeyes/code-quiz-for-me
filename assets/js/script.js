

function saveScore() {
}

function quizQuestions() {
    // vars for start page & quiz section
    var startPage = document.getElementById("start-page");
    var quiz = document.getElementById("quiz");

    // vars for question, answer choices, correct answer
    var question = document.getElementById("question");
    var choices = document.getElementById("choices");
    var choice = document.querySelectorAll("choice");
    var choiceA = document.getElementById("A");
    var choiceB = document.getElementById("B");
    var choiceC = document.getElementById("C");
    var choiceD = document.getElementById("D");
    var answer = document.getElementById("correct");

    if (startPage.hidden === false && quiz.hidden === true); {
    startPage.hidden = true;
    quiz.hidden = false ;
    }
  
    }
    



function countdown() {
    // select timer
    var countdownTimer = document.getElementById('countdown');
    var timeLeft = 59;

    // call function to display quiz questions
    quizQuestions()

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

startBtn.addEventListener("click", countdown)
