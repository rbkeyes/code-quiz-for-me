// view high scores variables
var viewSavedScores = document.getElementById('view-high-scores');

// start page variables
const startPage = document.getElementById("start-page");
const startBtn = document.getElementById("start");

// timer variables
var countdownTimer = document.getElementById('countdown');
var timeInterval;
var timeLeft = 5;
// remember to change back to 59 before submitting

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
const viewFinalScoreBtn = document.getElementById('view-score-btn');

// quiz complete variables
const quizComplete = document.getElementById("quiz-complete");
var score = 0;
var myScore = document.getElementById("my-score");
var finalScore;
var initials = document.getElementById('initials');
var userScores = [];
const saveBtn = document.querySelector('.save-button');

const scoreboard = document.getElementById('scoreboard');
var highScore = document.querySelector('.userHighScore');

// start quiz
function startQuiz() {
    if (startPage.hidden === false && quiz.hidden === true) {
        startPage.hidden = true;
        quiz.hidden = false;
        choices.hidden = false;
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
        timesUp()
    }
};

function timesUp() {
    allOver()
    question.textContent = "Time's up! Click the button below to view your score."
}

// end of quiz (out of time or answered final question)
function allOver() {
    clearInterval(timeInterval);
    countdownTimer.textContent = "0";
    choices.hidden = true;
    viewFinalScoreBtn.hidden = false;
    viewFinalScoreBtn.addEventListener('click', endOfQuiz);
}

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
    }
};

// add event listener to each choice
function addChoiceEventListener() {
    for (var i = 0; i<choice.length; i++)
    choice[i].addEventListener("click", checkAnswer);
    return;
    }
    addChoiceEventListener()

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
    if (q < (quizQuestions.length-1)) {
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
    if (q < (quizQuestions.length-1)) {
        displayNextQuestion();
    } else {
        finalQuestion();
    }
};

function finalQuestion() {
    allOver();
    question.textContent = "Congratulations! You have completed the quiz. Click the button below to view your score."
};

function percentCorrect() {
    finalScore = (score/(quizQuestions.length-1))*100;
    console.log(finalScore);
    myScore.textContent = finalScore;
}; 

// upon out of time or answer final question
function endOfQuiz() {
    percentCorrect()
    quiz.hidden=true;
    quizComplete.hidden=false;
};

saveBtn.addEventListener('click', saveUserScore);
function saveUserScore() { 
    getSavedScores()
    console.log(userScores);
    userScores.push(initials.value + ': ' + finalScore + '%');
    console.log('savedScores');
    console.log(userScores);
    localStorage.setItem('saved-scores', (JSON.stringify(userScores)));
    console.log('saved to local storage: ')
    console.log(localStorage);
    userScores;
    console.log("clear user scores");
    console.log(userScores);
    viewScoreboard();
};

function viewScoreboard() {
    startPage.hidden=true;
    quiz.hidden=true;
    quizComplete.hidden=true;
    scoreboard.hidden=false;
    for (var i = 0; i< highScore.length; i++) {
        highScore[i].textContent = userScores[i];
    }
}

viewSavedScores.addEventListener('click', getSavedScores);
function getSavedScores() {
    var getScores = JSON.parse(localStorage.getItem('saved-scores'));
    if (getScores !== null) {
    console.log(getScores);
    userScores = getScores;
    console.log(userScores);
} 
viewScoreboard();
}

// event listener for start button
startBtn.addEventListener("click", startQuiz);

