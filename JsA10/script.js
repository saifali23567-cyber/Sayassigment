const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used to style web pages?",
        answers: [
            "HTML",
            "CSS",
            "Java",
            "SQL"
        ],
        correct: 1
    },

    {
        question: "Which language is primarily used to add interactivity to webpages?",
        answers: [
            "CSS",
            "HTML",
            "JavaScript",
            "XML"
        ],
        correct: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [
            ".",
            "#",
            "@",
            "*"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restartBtn");

function showQuestion() {
    selectedAnswer = null;

    let question = questions[currentQuestion];

    questionElement.textContent = question.question;
    answersElement.innerHTML = "";

    question.answers.forEach(function(answer, index) {

        let button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer");

        button.onclick = function() {

            selectedAnswer = index;

            let allButtons = document.querySelectorAll(".answer");

            allButtons.forEach(function(btn) {
                btn.style.backgroundColor = "white";
                btn.style.color = "black";
            });

            button.style.backgroundColor = "blue";
            button.style.color = "white";
        };

        answersElement.appendChild(button);
    });
}

nextButton.onclick = function() {

    if (selectedAnswer === null) {
        alert("Please select an answer");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionElement.textContent = "Quiz Finished!";
    answersElement.innerHTML = "";

    scoreElement.textContent =
        "Your Score: " + score + " / " + questions.length;

    nextButton.style.display = "none";
    restartButton.style.display = "inline-block";
}

restartButton.onclick = function() {
    currentQuestion = 0;
    score = 0;

    scoreElement.textContent = "";
    nextButton.style.display = "inline-block";
    restartButton.style.display = "none";

    showQuestion();
};

showQuestion();