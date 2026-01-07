let currentQuestion = 0;

function startQuiz() {
    const startSection = document.getElementById("StarQuiz");
    startSection.classList.add("hidden");

    currentQuestion = 1;

    let questionElement = document.getElementById("Question" + currentQuestion);

    questionElement.classList.remove("hidden");
    console.log("Quiz started");
}

function NextQuestion() {
    currentQuestion++;
    let nextElement = document.getElementById("Question" + currentQuestion);
}