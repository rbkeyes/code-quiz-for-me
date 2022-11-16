// select timer
var countdown = document.querySelector(".countdown-timer");
var start = document.getElementById("start");

// starting point of timer
var secondsRemaining = 60;
countdown.textContent = 60;

// set timer
function startTimer() {
    // set time interval for coundown
    countdown = setInterval(function()
    {
        // subtract 1 every second
        secondsRemaining--;

        // display countdown
        countdown.textContent = secondsRemaining;

        // // clear interval when timer is done
        if(secondsRemaining === 0) {
            clearInterval(countdown);

            quizComplete();
        }
        // function runs every 1000ms (once every second)
        1000
    });
}


// save your score
function quizComplete() {

}


start.addEventListener("click", startTimer)
