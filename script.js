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
    let questionElement = document.getElementById("Question" + currentQuestion);

    if (currentQuestion === 10) {
        questionElement.classList.add("hidden");
        let endElement = document.getElementById("EndQuiz");
        endElement.classList.remove("hidden");
    }

    questionElement.classList.add("hidden");
    currentQuestion++;
    let nextElement = document.getElementById("Question" + currentQuestion);
    nextElement.classList.remove("hidden");
}

function Reset() {
    currentQuestion = 0;
    let endElement = document.getElementById("EndQuiz");
    endElement.classList.add("hidden");
    let startElement = document.getElementById("StarQuiz");
    startElement.classList.remove("hidden");
}