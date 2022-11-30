










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


