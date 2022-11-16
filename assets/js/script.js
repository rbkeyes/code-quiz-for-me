

function saveScore() {
}

function quizQuestions() {
    // vars for questions + answer choices
    var quiz = document.getElementById("quiz");
    var display = quiz.getAttribute("display:none");
    var question = document.getElementById("question");
    var choices = document.getElementById("choices");
    var choice = document.querySelectorAll(".choice");
    var nextBtn = document.querySelector(".btn-next").disabled = true;

    if (display === "none") {
        quiz.textContent = question + choices + nextBtn;
        quiz.display.state = "block";

        var startPage = getElementById("start-page");

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
