// function saveScore() { 
//     let totalPoints = 0;
//     totalPoints += (correct/quiz.length);
//     // save score, initials to local storage
//     // submit button to save
// }

// // retrieve scores when "view high scores" is clicked.






var quizQuestions = [
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
console.log(quizQuestions);

function displayNextQuestion() {
let currentQuestion = 0;
let q = quizQuestions[currentQuestion];

question.textContent = q.question;
console.log(q.question);
choiceA.textContent = q.choiceA;
console.log(q.choiceA);
choiceB.textContent = q.choiceB;
console.log(q.choiceB);
choiceC.textContent = q.choiceC;
console.log(q.choiceC);
choiceD.textContent = q.choiceD;
console.log(q.choiceD);

answer = q.answer;
console.log(q.answer);

    if (currentQuestion < quiz.length) {
        currentQuestion++
    } else {
        // saveScore()
    }
}





var quizQuestions = {
    question: [
        "_______ is the process of finding errors and fixing them within a program.",
        "Which of the following variable types can hold a value of either true or false?",
        "A loop that never ends is referred to as a(n)_________.",
        "What is the name of the operation that joins two strings together?"
    ],
    choiceA: [
        "compiling",
        "boolean",
        "while loop",
        "function"
    ],
    choiceB: [
        "executing",
        "string",
        "infinite loop",
        "push"
    ],
    choiceC: [
        "debugging",
        "number",
        "loop",
        "join"
    ],
    choiceD: [
        "scanning",
        "array",
        "loop",
        "join",
    ],
    answer: ["C", "A", "B", "D"],
}

let q = 0;
var currentQuestion = quizQuestions.question[q];
var currentChoiceA = quizQuestions.choiceA[q];
var currentChoiceB = quizQuestions.choiceB[q];
var currentChoiceC = quizQuestions.choiceC[q];
var currentChoiceD = quizQuestions.choiceD[q];
var currentAnswer = quizQuestions.answer[q];

// render next question to page
function displayNextQuestion() {
        question.textContent = currentQuestion;
        console.log(currentQuestion);
        choiceA.textContent = currentChoiceA;
        console.log(currentChoiceA);
        choiceB.textContent = currentChoiceB;
        console.log(currentChoiceB);
        choiceC.textContent = currentChoiceC;
        console.log(currentChoiceC);
        choiceD.textContent = currentChoiceD;
        console.log(currentChoiceD);
        answer = currentAnswer;
        console.log(currentAnswer);


        // if (choice == click.target) {
        //     q++;
        //     console.log(quizQuestions.question[q]);
        //     console.log(quizQuestions.choiceA[q]);
        //     console.log(quizQuestions.choiceB[q]);
        //     console.log(quizQuestions.choiceC[q]);
        //     console.log(quizQuestions.choiceD[q]);
        //     console.log(quizQuestions.answer[q]);
        // }
    }

// startBtn.addEventListener("click", displayNextQuestion);
// quiz.addEventListener("click", displayNextQuestion);