// quiz complete variables
const quizComplete = document.getElementById("quiz-complete");
var score = 0;
var myScore = document.getElementById("my-score");
var finalScore;
var initials = document.getElementById('initials');
var savedInitials = [];
var userScores = [];
const saveBtn = document.getElementById('save-button');

const scoreboard = document.getElementById('scoreboard');

saveBtn.addEventListener('click', saveUserScore);
function saveUserScore() { 
    getSavedScores()
    savedInitials.push(initials.value);
    console.log('savedScores');
    console.log(userScores);
    localStorage.setItem("initials", (JSON.stringify(savedInitials)));
    localStorage.setItem(initials.value, (JSON.stringify(finalScore)));
    console.log('saved to local storage: ')
    console.log(localStorage);
    savedInitials;
    viewScoreboard();
};

// "view high scores" variables
const viewSavedScores = document.getElementById('view-high-scores');
var backToStart = document.getElementById('to-start-page');

// get saved scored when "view saved scores" is clicked
viewSavedScores.addEventListener('click', getSavedScores);
function getSavedScores() {
    var getInitials = JSON.parse(localStorage.getItem('initials'));
    savedInitials.push(getInitials);
    var getScores = JSON.parse(localStorage.getItem(initials.value));
    if (getScores !== null) {
        console.log(savedInitials);
        console.log(getScores);
        // userScores.push(getScores);
        // console.log(typeof userScores);
} 
viewScoreboard();
}

// render scores to scoreboard
function viewScoreboard() {
    // renderHighScores();
    startPage.hidden=true;
    quiz.hidden=true;
    quizComplete.hidden=true;
    scoreboard.hidden=false;
    for (var s = 0; s < savedInitials.length; s++){
        highScore = (document.getElementById(s + 1).textContent = userScores[s] + '%');
        console.log(highScore);
    } 
    }

// function renderHighScores() {
//     var highScores = Object.fromEntries(
//                     Object.entries(userScores).sort( (a,b) => a[1] - b[1] )    
//                  ) 
//     console.log('Sorted object: ', highScores); 
// };