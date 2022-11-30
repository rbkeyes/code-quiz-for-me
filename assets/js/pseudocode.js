


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
    // clearInterval(timeInterval);
    countdownTimer.textContent = "Congratulations, you have completed the quiz!";
    quiz.removeEventListener('click', displayNextQuestion);
    viewScoreBtn.textContent = "View Final Score";
    quiz.appendChild(viewScoreBtn);
    viewScoreBtn.addEventListener('click', endOfQuiz);
};




// end of quiz (out of time or answered final question)
function endOfQuiz() {
    quiz.hidden = true;
    quizComplete.hidden = false;
    finalScore.textContent = score / choice.length
}

function saveScore() { 
    let totalPoints = 0;
    totalPoints += (correct/quiz.length);
    // save score, initials to local storage
    // submit button to save
}


