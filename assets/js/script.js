// start page variables
const startPage = document.getElementById("start-page");
const startBtn = document.getElementById("start");

// timer variables
var countdownTimer = document.getElementById('countdown');
var timeInterval;
var timeLeft = 59;
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

// // quiz complete variables
// const quizComplete = document.getElementById("quiz-complete");
// var score = 0;
// var myScore = document.getElementById("my-score");
// var finalScore;
// var initials = document.getElementById('initials');
// var savedInitials = [];
// var userScores = [];
// const saveBtn = document.getElementById('save-button');

// const scoreboard = document.getElementById('scoreboard');

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
    } else {
        allOver();
        question.textContent = "Time's up! Click the button below to view your score."}
    };

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
    timeLeft -= 10;
    console.log('score: ' + score);
    result.textContent = "Sorry, that is incorrect.";
    result.className = 'select-incorrect';
    if (q < (quizQuestions.length-1)) {
        displayNextQuestion();
    } else {
        finalQuestion();
    }
};

// display after final question
function finalQuestion() {
    allOver();
    question.textContent = "Congratulations! You have completed the quiz. Click the button below to view your score."
};

// calculate score
function percentCorrect() {
    finalScore = Math.floor((score/(quizQuestions.length-1))*100);
    console.log(finalScore);
    myScore.textContent = finalScore;
}; 

// upon out of time or answer final question
function endOfQuiz() {
    percentCorrect()
    quiz.hidden=true;
    quizComplete.hidden=false;
};

// saveBtn.addEventListener('click', saveUserScore);
// function saveUserScore() { 
//     getSavedScores()
//     savedInitials.push(initials.value);
//     console.log('savedScores');
//     console.log(userScores);
//     localStorage.setItem("initials", (JSON.stringify(savedInitials)));
//     localStorage.setItem(initials.value, (JSON.stringify(finalScore)));
//     console.log('saved to local storage: ')
//     console.log(localStorage);
//     savedInitials;
//     viewScoreboard();
// };

// // "view high scores" variables
// const viewSavedScores = document.getElementById('view-high-scores');
// var backToStart = document.getElementById('to-start-page');

// // get saved scored when "view saved scores" is clicked
// viewSavedScores.addEventListener('click', getSavedScores);
// function getSavedScores() {
//     var getInitials = JSON.parse(localStorage.getItem('initials'));
//     savedInitials.push(getInitials);
//     var getScores = JSON.parse(localStorage.getItem(initials.value));
//     if (getScores !== null) {
//         console.log(savedInitials);
//         console.log(getScores);
//         // userScores.push(getScores);
//         // console.log(typeof userScores);
// } 
// viewScoreboard();
// }

// // render scores to scoreboard
// function viewScoreboard() {
//     // renderHighScores();
//     startPage.hidden=true;
//     quiz.hidden=true;
//     quizComplete.hidden=true;
//     scoreboard.hidden=false;
//     for (var s = 0; s < savedInitials.length; s++){
//         highScore = (document.getElementById(s + 1).textContent = userScores[s] + '%');
//         console.log(highScore);
//     } 
//     }

// function renderHighScores() {
//     var highScores = Object.fromEntries(
//                     Object.entries(userScores).sort( (a,b) => a[1] - b[1] )    
//                  ) 
//     console.log('Sorted object: ', highScores); 
// };

backToStart.addEventListener('click', returnToStartPage)
function returnToStartPage() {
    location.reload()
}

// event listener for start button
startBtn.addEventListener("click", startQuiz);

