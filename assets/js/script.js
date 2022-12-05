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
const quizComplete = document.getElementById("quiz-complete");
var score = 0;
var myScore = document.getElementById("my-score");
var finalScore;
var initials = document.getElementById('initials');
var savedInitials = [];
var savedScores = [];
const saveBtn = document.getElementById('save-button');

// "view high scores" variables
const viewHighScores = document.getElementById('view-high-scores');
const scoreboard = document.getElementById('scoreboard');
var backToStart = document.getElementById('to-start-page');

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
    result.className = 'alert';
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
    result.className = 'alert';
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

saveBtn.addEventListener('click', saveUserScore);
function saveUserScore() { 
    getSavedScores()
    savedInitials.push(initials.value);
    savedScores.push(finalScore);
    localStorage.setItem('initials', (JSON.stringify(savedInitials)));
    localStorage.setItem('score', (JSON.stringify(savedScores)));
    console.log('saved to local storage: ')
    console.log(localStorage);
    // empty highScores variable after saving to storage to avoid array within an array, avoid duplicate
    savedInitials;
    savedScores;
    console.log("clear savedInitials + savedScores");
    console.log(savedInitials);
    console.log(savedScores)
    viewScoreboard();
};

// get saved scores when "view saved scores" is clicked
viewHighScores.addEventListener('click', getSavedScores);
function getSavedScores() {
    var getInitials = JSON.parse(localStorage.getItem('initials'));
    var getScores = JSON.parse(localStorage.getItem('score'));
    if ((getInitials !== null) && (getScores !== null)) {
    savedInitials = getInitials;
    savedScores = getScores;
    console.log('savedInitials:' + savedInitials);
    console.log('savedScores:' + savedScores);
} else {
    var noSavedScores = document.getElementById('highScores');noSavedScores.textContent='No high scores to display at this time';
    noSavedScores.className = 'alert';   
}
viewScoreboard();
}

// render scores to scoreboard
function viewScoreboard() {
    startPage.hidden=true;
    quiz.hidden=true;
    quizComplete.hidden=true;
    scoreboard.hidden=false;
    sortHighScores();
    for (var s = 0; s < savedInitials.length; s++){
        highScore = (document.getElementById(s + 1))
        highScore.textContent = savedInitials[s] + ': ' + savedScores[s] + '%';
        console.log(highScore);
    } 
}

function sortHighScores() {
    // set array for sorted scores
    var highScores = [];
    // push retrieved initials + scores to highScores array as objects
    for (var l=0; l<savedInitials.length;l++) 
    highScores.push({'initials': savedInitials[l], 'score': savedScores[l]});
    // sort by score (returns low to high)
    highScores.sort(function(a,b) {
        return (( a.score < b.score) ? -1 : ((a.score == b.score) ? 0:1));
    });
    // reverse array (highest to lowest)
    highScores.reverse();
    // reconstruct original arrays in sorted order
    for (var h=0; h<highScores.length; h++) {
        savedInitials[h] = highScores[h].initials;
        savedScores[h] = highScores[h].score;
    }
    if (savedInitials.length > 5) {
        savedInitials.pop();
        savedScores.pop();
        console.log(savedInitials + ':' + savedScores);
    }
    console.log(highScores)
    };

backToStart.addEventListener('click', returnToStartPage)
function returnToStartPage() {
    location.reload()
}

// event listener for start button
startBtn.addEventListener("click", startQuiz);

